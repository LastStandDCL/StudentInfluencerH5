import React from 'react';
import {Card, Col, Row} from "antd";
import Meta from "antd/es/card/Meta";
import Globals from "../../../Globals";

const NewsCard = () => {
    return (
        <div>
            <p style={styles.text}>大使 Live 动态</p>
            <Row>
                <Col span={5}>
                    <p style={styles.sideTitle}>News</p>
                </Col>
                <Col span={7}>
                    <Card
                        hoverable
                        style={styles.largeCard}
                        cover={<img alt="example" src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/2.jpg" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    <Row justify="space-evenly">
                        <Col span={12}>
                            <Card
                                hoverable
                                style={styles.smallCard}
                                cover={<img alt="example" src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/2.jpg" />}
                            >
                                <Meta title="Europe Street beat"  />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={styles.smallCard}
                                cover={<img alt="example" src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/2.jpg" />}
                            >
                                <Meta title="Europe Street beat"  />
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={7}>
                    <Row>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={styles.smallCard}
                                cover={<img alt="example" src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/2.jpg" />}
                            >
                                <Meta title="Europe Street beat"  />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={styles.smallCard}
                                cover={<img alt="example" src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/2.jpg" />}
                            >
                                <Meta title="一二三四五六七八九十一二三"/>
                            </Card>
                        </Col>
                    </Row>
                    <Card
                        hoverable
                        style={styles.largeCard}
                        cover={<img alt="example" src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/2.jpg" />}
                    >
                        <Meta title="Europe Street beat"/>
                    </Card>
                </Col>
                <Col span={5}>

                </Col>
            </Row>
        </div>
    );
};

const styles = {
    text:{
        color: Globals.npu_color,
        fontSize: '4vh',
        textAlign: 'center',
        fontFamily: 'font1',
        fontWeight: 'bold',
    },
    largeCard:{
        margin: '1vh',
        fontSize: '2vh',
    },
    smallCard:{
        margin: '1vh',
    },
    sideTitle:{
        transform: 'rotate(-90deg)',
        fontSize: '6vh',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        color: Globals.npu_color,
        fontWeight: 'bold',
        fontFamily: 'font1',
    }
}

export default NewsCard;
