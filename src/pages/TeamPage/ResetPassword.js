import { Button, Form, Input, Row, Col } from 'antd';
import {useState} from 'react';
const ResetPassword = () => {

    const [password, setPassword] = useState('');

    const [passwordAgain, setPasswordAgain] = useState('');

    return (
        <Row>
            <Col span={6}/>
            <Col span={9}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="确认密码"
                        name="passwordAgain"
                        rules={[
                            {
                                required: true,
                                message: '请再次输入密码!',
                            },
                        ]}
                    >
                        <Input.Password onChange={(e)=>setPasswordAgain(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        style={{textAlign:'center'}}
                    >
                        <Button type="primary" htmlType="submit">
                            重置密码
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default ResetPassword;
