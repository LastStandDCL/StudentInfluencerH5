import React, {useState} from 'react';
import {Button, Col, Menu, Row} from 'antd';
import {AppstoreOutlined, HomeOutlined, TeamOutlined} from "@ant-design/icons";

const HeaderBar = (isOnTop) => {

    const styles = {
        logo: {
            marginTop: '1vh',
            marginLeft: '2vh',
            height:"6vh",
        },
        menu:{
            color: isOnTop ? "rgb(255,255,255)" : "rgb(0,84,164)",
            marginLeft: '5%',
            marginTop: '2vh',
            fontSize: '2.5vh',
            fontFamily:'font1',
            fontWeight:"bold",
        },
        userInfo:{

        }
    }

    return (
        <div>
            <Row>
                <Col span={8}>
                    <img
                        style={styles.logo}
                        src={isOnTop ?
                            "https://tomcat-oss.oss-cn-beijing.aliyuncs.com/ruan_zong/ds_logo_white.png"
                            :
                            "https://tomcat-oss.oss-cn-beijing.aliyuncs.com/ruan_zong/ds_logo.png"}
                        alt="ds_logo"
                    />
                </Col>
                <Col span={8}>
                    <Button type="text" icon={<HomeOutlined />} style={styles.menu}>平台主页</Button>
                    <Button type="text" icon={<AppstoreOutlined />} style={styles.menu}>大使风采</Button>
                    <Button type="text" icon={<TeamOutlined />} style={styles.menu}>团队主页</Button>
                </Col>
                <Col span={8}>
                </Col>
            </Row>

        </div>
    );
};

export default HeaderBar;
