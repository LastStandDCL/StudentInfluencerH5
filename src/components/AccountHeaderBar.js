import React from 'react';
import {Avatar, Col, Dropdown, Row, Space, Button} from 'antd';
import Globals from "../Globals";
import {useNavigate} from "react-router-dom";
import {DownOutlined, LockOutlined, RollbackOutlined, UserOutlined} from "@ant-design/icons";

const items = [
    {
        label: '退出登录',
        key: '/home/news',
        icon: <RollbackOutlined />,
        danger: true,
    },
];

const HomeHeaderBar = () => {

    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        navigate(e.key);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const styles = {
        logo: {
            marginTop: '1vh',
            marginLeft: '2vh',
            height:"6vh",
        },
        menu:{
            color: Globals.npu_color,
            marginLeft: '5%',
            marginTop: '2vh',
            fontSize: '2.5vh',
            fontFamily:'font1',
            fontWeight:"bold",
        },
        background:{
            backgroundColor: "rgba(255,255,255,1)",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        },
    }

    return (
        <div style={styles.background}>
            <Row>
                <Col span={16}>
                    <img
                        style={styles.logo}
                        src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/ruan_zong/ds_logo.png"
                        alt="ds_logo"
                    />
                </Col>
                <div
                    style={{
                        position: 'absolute',
                        right: '2%',
                        marginTop: '1vh',
                    }}
                >
                    <Dropdown menu={menuProps}>
                        <Button
                            style={{height: '5vh', borderWidth:'0'}}
                        >
                            <Space>
                                早上好！2020300849
                                <Avatar
                                    style={{
                                        backgroundColor: '#fde3cf',
                                        color: '#f56a00',
                                    }}
                                >
                                    王
                                </Avatar>
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </Row>

        </div>
    );
};

export default HomeHeaderBar;
