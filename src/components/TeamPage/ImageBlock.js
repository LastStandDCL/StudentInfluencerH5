import React from 'react';
import {Button, Card, Col, Image, Pagination, Row, Space} from "antd";
import Meta from "antd/es/card/Meta";

const ImageBlock = (props) => {

    const {link, description, date} = props;

    return (
        <Col span={6}>
            <Card
                hoverable
                style={{
                    margin: '2%',
                    height: '30vh',
                }}
                cover={
                    <Image
                        src={link}
                        fallback=""
                        preview=""
                    />
                }
            >
                <Meta
                    title={description}
                    description={
                        <Row>
                                <Col span={7}>
                                    <p
                                        style={{
                                            lineHeight: '2%',
                                            fontSize: '4%',
                                        }}
                                    >
                                        {date}
                                    </p>
                                </Col>
                                <Col span={9}>
                                    <Button danger size='small'>
                                        删除照片
                                    </Button>
                                </Col>
                                <Col span={8}>
                                    <Button size='small'>
                                        申请优选
                                    </Button>
                                </Col>
                        </Row>
                    }
                />
            </Card>
        </Col>
    );
};

const buttonStyle={

}

export default ImageBlock;
