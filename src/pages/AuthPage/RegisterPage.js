import React, {useState} from 'react';
import {Button, Col, Form, Input, message, Row} from "antd";

import {useNavigate} from "react-router-dom";
import {FieldNumberOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";
import {postWithoutToken} from "../../utils/Rq";
import {setDsEmail, setDsRoles, setDsToken} from "../../utils/DsLocalStorage";

const RegisterPage = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [validateCode, setValidateCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const onClickSend = () => {
        if(email === ''){
            messageApi.open({
                type: 'error',
                content: '注册邮箱不能为空',
            });
            return;
        }
        postWithoutToken("/mails/sendRegisterCode",{
            email: email,
        }).then((response) => {
            if(response.status === 200){
                messageApi.open({
                    type: 'success',
                    content: '验证码发送成功',
                });
            }else {
                messageApi.open({
                    type: 'error',
                    content: '验证码发送失败，请检查邮箱的有效性',
                });
            }
        }).catch(e => {
            messageApi.open({
                type: 'error',
                content: '连接服务器失败，Error：502',
            });
        })
    }

    const onClickRegister = () => {
        if(email === '' || validateCode === ''){
            messageApi.open({
                type: 'error',
                content: '帐号或验证码不能为空',
            });
            return;
        }
        if(password !== passwordAgain){
            messageApi.open({
                type: 'error',
                content: '两次密码输入不一致，请确认！',
            });
            return;
        }
        postWithoutToken("/user/register",{
            email: email,
            password: password,
            validateCode: validateCode,
        }).then((response) => {
            if(response.data.code === 200){
                messageApi.open({
                    type: 'success',
                    content: '注册成功',
                });
                postWithoutToken("/user/login",{
                    email: email,
                    password: password,
                    validateCode: '',
                    useCode: false,
                    'remember-me': 'false',
                }).then((response) => {
                    if(response.status === 200){
                        setDsEmail(response.data.userInfo.user.email);
                        setDsToken(response.data.token);
                        setDsRoles(response.data.userInfo.roles);
                        navigate('/team/my-profile');
                    }
                }).catch(e => {
                    messageApi.open({
                        type: 'error',
                        content: '连接服务器失败，Error：502',
                    });
                })
            }
        }).catch(e => {
            messageApi.open({
                type: 'error',
                content: '连接服务器失败，Error：502',
            });
        })
    }

    return (
        <div>
            {contextHolder}
            <Row>
                <Col span={24}>
                    <p
                        style={{
                            fontSize: "3.2vh",
                            fontFamily: 'font1',
                            fontWeight:'bold',
                            //color: Globals.npu_color,
                        }}
                    >
                        学生大使 | 注册
                    </p>
                </Col>
                <Col span={4}/>
                <Col span={16}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        {contextHolder}
                        <Form.Item
                            name="mail"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的学号!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined className="site-form-item-icon" />}
                                placeholder="注册邮箱"
                                size="large"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="code"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入验证码!',
                                },
                            ]}
                        >
                            <Row>
                                <Col span={14}>
                                    <Input
                                        prefix={<FieldNumberOutlined />}
                                        type="text"
                                        placeholder="验证码"
                                        size="large"
                                        onChange={e => setValidateCode(e.target.value)}
                                    />
                                </Col>
                                <Col span={10}>
                                    <Button
                                        type='primary'
                                        style={{marginTop:'0.3vh'}}
                                        onClick={()=>onClickSend()}
                                    >
                                        发送验证码
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的密码!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请创建密码"
                                size="large"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="passwordAgain"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的密码!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请再次输入密码"
                                size="large"
                                onChange={e => setPasswordAgain(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>

                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{width: '100%'}}
                                onClick={onClickRegister}
                            >
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={4}/>
                <Col span={24}>
                    已有帐号？
                    <Button
                        type="link"
                        onClick={()=>navigate('/auth/login')}
                    >
                        现在登录
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterPage;
