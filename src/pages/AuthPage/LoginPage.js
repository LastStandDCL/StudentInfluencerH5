import React, {useState} from 'react';
import {Button, Col, ConfigProvider, Menu, Row, Space} from "antd";
import UsernamePasswordLogin from "../../components/AuthPage/UsernamePasswordLogin";
import ValidateCodeLogin from "../../components/AuthPage/ValidateCodeLogin";
import {useNavigate} from "react-router-dom";
import {GithubOutlined, LockOutlined, MailOutlined, QqOutlined, WechatOutlined} from "@ant-design/icons";
import Globals from "../../Globals";

const LoginPage = () => {

    const navigate = useNavigate();

    const [isOne, setIsOne] = useState(true);

    const items = [
        {
            label: '账号密码登录',
            key: 'password',
            icon: <LockOutlined />,
        },
        {
            label: '邮箱验证登录',
            key: 'mail',
            icon: <MailOutlined />,
        },
    ]

    return (
        <div>
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
                        学生大使 | 登录
                    </p>
                </Col>
                <Col span={1}/>
                <Col span={23}>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: Globals.npu_color,
                            },
                        }}
                    >
                        <Menu
                            onClick={()=>setIsOne(!isOne)}
                            selectedKeys={isOne ? 'password' : 'mail'}
                            mode="horizontal"
                            items={items}
                        />
                    </ConfigProvider>
                </Col>
                <Col span={4}/>
                <Col span={16}>
                    <br/>
                    {isOne ? <UsernamePasswordLogin/> : <ValidateCodeLogin/>}
                </Col>
                <Col span={4}/>
                <Col span={24}>
                    没有账号？
                    <Button
                        type="link"
                        onClick={()=>navigate('/auth/register')}
                    >
                        现在注册
                    </Button>
                </Col>
                <Col span={24} style={{marginTop: '1vh'}}>
                    <Space>
                        <Button shape="circle" variant="outline" icon={<QqOutlined />} />
                        <Button shape="circle" variant="outline" icon={<WechatOutlined />} />
                        <Button shape="circle" variant="outline" icon={<GithubOutlined />} />
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
