import React from 'react';
import Globals from "../../Globals";
import {Button, Col, Pagination, Row} from "antd";
import ImageBlock from "../../components/TeamPage/ImageBlock";
import {FileAddOutlined, ReloadOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const item = [
    {
        link: "https://tomcat-oss.oss-cn-beijing.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20230608193824.png",
        description: "活动记录1",
        date: "2023-6-11",
    },
    {
        link: "https://tomcat-oss.oss-cn-beijing.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20230608193824.png",
        description: "活动记录2",
        date: "2023-6-12",
    },
    {
        link: "https://tomcat-oss.oss-cn-beijing.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20230608193824.png",
        description: "活动记录3",
        date: "2023-6-13",
    },
    {
        link: "https://tomcat-oss.oss-cn-beijing.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20230608193824.png",
        description: "活动记录4",
        date: "2023-6-14",
    },
    {
        link: "https://tomcat-oss.oss-cn-beijing.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20230608193824.png",
        description: "活动记录5",
        date: "2023-6-15",
    },

]

const TeamImagesPage = () => {


    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    return (
        <div>
            <p
                style={{
                    color: Globals.npu_color,
                    fontSize: '3vh',
                    textAlign: 'center',
                    fontFamily: 'font1',
                    fontWeight: 'bold',
                }}
            >
                活动照片记录
            </p>
            <Row>
                <Col
                    span={6}
                    style={{
                        width: "inherit",
                        height: "20ex",
                    }}
                >
                    <Button
                        size='large'
                        type='dashed'
                        style={{
                            marginLeft: '3%',
                            marginTop: '3%',
                            height: '29vh',
                            width: '95%',
                            color: Globals.npu_color,
                        }}
                    >
                        <FileAddOutlined/>
                        <br/>
                        上传新照片
                    </Button>
                </Col>
                {item.map((option)=>{
                    return(
                        <ImageBlock
                            link={option.link}
                            description={option.description}
                            date={option.date}
                        />
                    );
                })}
            </Row>
            <Pagination
                style={{
                    width:"100%",
                    margin:'2vh',
                    textAlign:'center',
                }}
                showSizeChanger={false}
                showQuickJumper
                defaultCurrent={1}
                total={500}
                onChange={onChange}
            />
        </div>
    );
};

export default TeamImagesPage;
