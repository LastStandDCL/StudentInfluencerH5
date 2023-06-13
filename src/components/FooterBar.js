import React from 'react';
import {Col, Row} from "antd";
import Globals from "../Globals";

const FooterBar = () => {
    return (
        <Row style={styles.all}>
            <Col span={3}>
                <img
                    src="https://portal-minio.nwpu.edu.cn/cms/%E8%A5%BF%E5%8C%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6120-1654656603988.png"
                    alt="logo"
                    style={styles.images}
                />
            </Col>
            <Col span={10}>
                <div style={styles.description}>
                    <p>西北工业大学本科招生办公室</p>
                    <p>电话： （029）88460206 邮箱： ao@nwpu.edu.cn</p>
                    <p>地址： 西安市友谊西路127号西北工业大学招生办公室</p>
                    <p>
                        版权所有 © 西北工业大学 ICP备案号：
                        <a
                            href="https://beian.miit.gov.cn/"
                            style={styles.text}
                        >
                            陕ICP备05010979
                        </a>
                    </p>
                </div>
            </Col>
            <Col span={2}>
                <img
                    style={styles.images}
                    src="https://zsb.nwpu.edu.cn/static/front/nwpu/basic/images/change_doc/hb/code_1.png"
                    alt="wechat"
                />
                <p style={styles.text}>本科生招办</p>
            </Col>
            <Col span={9}>
                <img
                    style={styles.images}
                    src="https://portal-minio.nwpu.edu.cn/cms/nwpu-motto.png"
                    alt="wechat"
                />
            </Col>
        </Row>
    );
};

const styles = {
    all:{
        textAlign: 'center',
        backgroundColor: Globals.npu_color,
    },
    images:{
        marginTop: '2vh',
    },
    text:{
        color:'rgb(255,255,255)',
        fontFamily:'font1',
        fontSize: '16px',
    },
    description:{
        color:'rgb(255,255,255)',
        fontFamily:'font1',
        fontSize: '16px',
        textAlign: 'left',
        marginLeft: '6ex',
    }
}

export default FooterBar;
