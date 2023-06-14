import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Checkbox, Col, ConfigProvider, Form, Input, Row} from "antd";
import {FieldNumberOutlined, LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import Globals from "../../Globals";

const ValidateCodeLogin = () => {
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
                        message: '请输入你的学号!',
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
                        />
                    </Col>
                    <Col span={10}>
                        <Button type='primary' style={{marginTop:'0.3vh'}}>发送验证码</Button>
                    </Col>
                </Row>
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
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: Globals.npu_color,
                        },
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{width: '100%'}}
                    >
                        登录
                    </Button>
                </ConfigProvider>
            </Form.Item>
        </Form>
    );
};

export default ValidateCodeLogin;
