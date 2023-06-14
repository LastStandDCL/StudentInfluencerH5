import React from 'react';
import {Button, Checkbox, ConfigProvider, Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import Globals from "../../Globals";

const UsernamePasswordLogin = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
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
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
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
                >
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UsernamePasswordLogin;
