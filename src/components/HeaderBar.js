import React from 'react';
import {Button, Col, Row} from 'antd';
import {AppstoreOutlined, EditOutlined, HomeOutlined, TeamOutlined} from "@ant-design/icons";
import Globals from "../Globals";
import {useNavigate} from "react-router-dom";

const HeaderBar = (props) => {
    const {lightMode} = props;

    const navigate = useNavigate();

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
                ? "linear-gradient(rgba(12,29,65,1), rgba(12,29,65,0.03))"
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
            {lightMode
                ?
                <Button
                    icon={<EditOutlined />}
                    type="primary"
                    shape="square"
                    size={"large"}
                    style={{
                        position: 'absolute',
                        right: '40%',
                        top: '-2vh',
                        height: "9vh",
                        width: "20%",
                        fontSize: "4vh",
                        fontFamily: "font1",
                        backgroundColor: "rgba(12,29,65,0.5)",
                        boxShadow:'0 0 10px 10px rgba(12,29,65,0.6)',
                        zIndex: 100,
                        marginTop: '2vh',
                    }}
                    onClick={()=>{
                        // 获取绝对路径
                        const hrefStr = window.location.href;
                        // 获取相对路径
                        const urlParams = new URL(hrefStr);
                        const pathname = urlParams?.pathname;
                        // 获取根路径
                        const rootPath=hrefStr.replace(pathname,'');
                        // 在新标签页面打开绝对路径
                        window.open(`${rootPath}/auth/register`, '_blank');
                    }}
                >
                    报名学生大使
                </Button>
                :
                <div/>
            }
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
                    <Button
                        type="text"
                        icon={<HomeOutlined />}
                        style={styles.menu}
                        onClick={()=>navigate('/home/news')}
                    >
                        平台主页
                    </Button>
                    <Button
                        type="text"
                        icon={<AppstoreOutlined />}
                        style={styles.menu}
                        onClick={()=>navigate('/home/images')}
                    >
                        大使风采
                    </Button>
                    <Button
                        type="text"
                        icon={<TeamOutlined />}
                        style={styles.menu}
                        onClick={()=>{
                            // 获取绝对路径
                            const hrefStr = window.location.href;
                            // 获取相对路径
                            const urlParams = new URL(hrefStr);
                            const pathname = urlParams?.pathname;
                            // 获取根路径
                            const rootPath=hrefStr.replace(pathname,'');
                            // 在新标签页面打开绝对路径
                            window.open(`${rootPath}/team/my-team`, '_blank');
                        }}
                    >
                        团队主页
                    </Button>
                </Col>
            </Row>

        </div>
    );
};

export default HeaderBar;
