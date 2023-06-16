import React, {useState} from 'react';
import {Button, Checkbox, Form, Input, message} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {postWithoutToken} from "../../utils/Rq";
import DsLocalStorage from "../../utils/DsLocalStorage";

const UsernamePasswordLogin = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const onClickLogin = () => {
        if(email === '' || password === ''){
            messageApi.open({
                type: 'error',
                content: '帐号或密码不能为空',
            });
            return;
        }
        postWithoutToken("/user/login",{
            email: email,
            password: password,
            validateCode: '',
            useCode: false,
            'remember-me': rememberMe ? 'on': 'off',
        }).then((response) => {
            let code = response.data.code;
            console.log(code);
            if(code === '200'){
                messageApi.open({
                    type: 'success',
                    content: '登录成功',
                });
                navigate('/team/my-team');
            }
        }).catch(e => {
            messageApi.open({
                type: 'error',
                content: '连接服务器失败，Error：502',
            });
        })
    }

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            {contextHolder}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                        placeholder="密码"
                        size="large"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember-me" noStyle>
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
        </div>
    );
};

export default UsernamePasswordLogin;
