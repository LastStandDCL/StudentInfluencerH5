import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    message,
    Row} from "antd";
import {FieldNumberOutlined, MailOutlined} from "@ant-design/icons";
import {postWithoutToken} from "../../utils/Rq";
import DsLocalStorage, {setDsEmail, setDsRoles, setDsToken} from "../../utils/DsLocalStorage";

const ValidateCodeLogin = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [email, setEmail] = useState('');
    const [validateCode, setValidateCode] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
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
        postWithoutToken("/mails/sendLoginCode",{
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

    const onClickLogin = () => {
        if(email === '' || validateCode === ''){
            messageApi.open({
                type: 'error',
                content: '注册邮箱或验证码不能为空',
            });
            return;
        }
        postWithoutToken("/user/login",{
            email: email,
            password: '',
            validateCode: validateCode,
            useCode: true,
            'remember-me': rememberMe ? 'on': 'off',
        }).then((response) => {
            let code = response.data.code;
            console.log(code);
            if(code === '200'){
                messageApi.open({
                    type: 'success',
                    content: '登录成功',
                });
                setDsEmail(response.data.userInfo.user.email);
                setDsToken(response.data.token);
                setDsRoles(response.data.userInfo.roles);
                navigate('/team/my-team');
            }else {
                messageApi.open({
                    type: 'error',
                    content: '帐号或密码有误',
                });
            }
        }).catch(e => {
            messageApi.open({
                type: 'error',
                content: '连接服务器失败，Error：502',
            });
        })
    }

    return (
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
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入你的注册邮箱!',
                    },
                ]}
            >
                <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="注册邮箱"
                    size="large"
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name="password"
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
                            onChange={(e)=>setValidateCode(e.target.value)}
                        />
                    </Col>
                    <Col span={10}>
                        <Button 
                            type='primary' 
                            style={{marginTop:'0.3vh'}}
                            onClick={onClickSend}
                        >
                            发送验证码
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" noStyle>
                    <Checkbox
                        checked={rememberMe}
                        onChange={(e)=> {
                            setRememberMe(e.target.checked)
                        }}
                    >
                        记住我
                    </Checkbox>
                </Form.Item>
                <Button
                    type="link"
                    onClick={()=>navigate('/auth/found-password')}
                >
                    忘记密码？
                </Button>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{width: '100%'}}
                    onClick={onClickLogin}
                >
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ValidateCodeLogin;
