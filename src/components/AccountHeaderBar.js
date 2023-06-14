import React from 'react';
import {Avatar, Col, Dropdown, Row, Tooltip, message} from 'antd';
import Globals from "../Globals";
import {useNavigate} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";

const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick,
};

const HomeHeaderBar = () => {

    const navigate = useNavigate();

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
                        marginTop: '2vh',
                    }}
                >
                    <Dropdown.Button
                        menu={menuProps}
                        buttonsRender={([leftButton, rightButton]) => [
                            <Tooltip title="tooltip" key="leftButton">
                                {leftButton}
                            </Tooltip>,
                            React.cloneElement(rightButton, {
                                loading: true,
                            }),
                        ]}
                    >
                        With Tooltip
                    </Dropdown.Button>
                    <Avatar
                        style={{
                            backgroundColor: '#fde3cf',
                            color: '#f56a00',
                        }}
                    >
                        王
                    </Avatar>
                </div>
            </Row>

        </div>
    );
};

export default HomeHeaderBar;
