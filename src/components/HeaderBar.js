import React from 'react';
import {Button, Col, Row} from 'antd';
import {AppstoreOutlined, HomeOutlined, TeamOutlined} from "@ant-design/icons";
import Globals from "../Globals";

const HeaderBar = (props) => {
    const {lightMode} = props;

    const styles = {
        logo: {
            marginTop: '1vh',
            marginLeft: '2vh',
            height:"6vh",
        },
        menu:{
            color: lightMode ? "rgb(255,255,255)" : Globals.npu_color,
            marginLeft: '5%',
            marginTop: '2vh',
            fontSize: '2.5vh',
            fontFamily:'font1',
            fontWeight:"bold",
        },
        background:{
            backgroundImage: lightMode
                ? "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0))"
                : "",
            backgroundColor: lightMode
                ?  "rgba(255,255,255,0)"
                :  "rgba(255,255,255,1)",
            boxShadow: lightMode
                ? ""
                : "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        },
    }

    return (
        <div style={styles.background}>
            <Row>
                <Col span={16}>
                    <img
                        style={styles.logo}
                        src={lightMode ?
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
            </Row>

        </div>
    );
};

export default HeaderBar;
