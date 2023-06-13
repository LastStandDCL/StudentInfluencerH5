import React from 'react';
import FooterBar from "../components/FooterBar";
import {Outlet, useNavigate} from "react-router-dom";
import {Col, Row} from "antd";

const AuthPage = () => {

    const navigate = useNavigate();

    return (
        <div style={authStyle}>
            <div style={frameStyle}>
                <Row>
                    <Col
                        span={12}
                        onClick={() => navigate('/home/news')}
                    >
                        <img
                            src="https://www.nwpu.edu.cn/images/logo2.png" alt="logo"
                            style={{width: "100%", marginTop: "10%", marginLeft: "10%"}}
                        />
                    </Col>
                    <Col span={12}/>
                </Row>
                <Outlet class="outlet" style={{margin: "2ex"}}/>
                <br/>
            </div>
            <div style={{position: "absolute", bottom: "-19.8vh",width: "100%"}}>
                <FooterBar/>
            </div>
        </div>
    );
};

const authStyle = {
    position: "absolute",
    justifyContent: 'center',
    textAlign: 'center',
    zIndex:"-1",
    display: "flex",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundImage:"url(https://tomcat-oss.oss-cn-beijing.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20230608194254.png)",
}

const frameStyle = {
    backgroundColor:'white',
    opacity: 0.8,
    borderRadius: '2%',
    marginLeft: '40%',
    width: '24%',
}

export default AuthPage;
