import {Button, Form, Input, Row, Col, message} from 'antd';
import {useState} from 'react';
import {postWithoutToken} from "../../utils/Rq";
const ResetPassword = () => {

    const [password, setPassword] = useState('');

    const [passwordAgain, setPasswordAgain] = useState('');

    const [messageApi, contextHolder] = message.useMessage();

    const onsubmit = () => {
        if(password === '' || passwordAgain === ''){
            messageApi.open({
                type: 'error',
                content: '密码或确认密码不能为空',
            });
            return;
        }
        if(password !== passwordAgain){
            messageApi.open({
                type: 'error',
                content: '两次输入的密码不一致',
            });
            return;
        }
        postWithoutToken("",{
            password: password,
        }).then((response) => {
            if(response.status === 200){
            }
        }).catch(e => {
            messageApi.open({
                type: 'error',
                content: '连接服务器失败，Error：502',
            });
        })
    }

    return (
        <Row>
            {contextHolder}
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={onsubmit}
                        >
                            重置密码
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default ResetPassword;
