import React from 'react';
import Globals from "../../Globals";
import {Button, Col, Row, Space, Spin, Steps} from "antd";
import {
    CloudDownloadOutlined,
    CloudUploadOutlined,
    DownloadOutlined,
    ReloadOutlined,
    SendOutlined
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import FileViewer from "../../utils/FileViewer";

const UploadMidReportPage = () => {

    const navigate = useNavigate();

    const onClickDownload = () => {

    }

    return (
        <div>
            <PageTitle text='团队中期报告提交'/>
            <Row>
                <Col span={1}/>
                <Col span={16}
                     style={{
                         height: 0.75 * window.innerHeight,
                         borderStyle:'solid',
                         borderRadius:'2%',
                         borderWidth:'1px',
                     }}
                >
                    <p
                        style={{
                            fontSize: '2.2vh',
                            textAlign: 'center',
                            fontFamily: 'font1',
                            fontWeight: 'bold',
                            height: '1vh',
                        }}
                    >
                        文件预览
                        <Button
                            type='text'
                            style={{marginLeft:'2%'}}
                            icon={<ReloadOutlined />}
                            onClick={navigate(0)}
                        />
                        <Button
                            type='text' icon={<DownloadOutlined />}
                            style={{marginLeft:'3%'}}
                            onClick={onClickDownload}
                        />
                    </p>
                    <FileViewer uri='https://tomcat-oss.oss-cn-beijing.aliyuncs.com/ruan_zong/c.pdf'/>
                </Col>
                <Col span={7} style={{height: 0.78 * window.innerHeight}}>
                    <Space direction='vertical' style={{marginLeft: '20%'}}>
                        <Button
                            style={{marginTop:'20%',width:'100%'}}
                            icon={<CloudDownloadOutlined />}
                        >
                            下载中期报告模板
                        </Button>
                        <Button
                            style={{marginTop:'20%',width:'100%'}}
                            type='primary'
                            icon={<CloudUploadOutlined />}
                        >
                            上传中期报告
                        </Button>
                        <Button
                            style={{marginTop:'20%',width:'100%'}}
                            type='primary'
                            icon={<SendOutlined />}
                        >
                            提交审核
                        </Button>
                        <Steps
                            style={{marginTop:'22%',width:'100%', textAlign:'center'}}
                            direction="vertical"
                            current={1}
                            items={[
                                {
                                    title: '上传文档',
                                    description:'',
                                },
                                {
                                    title: '提交审核',
                                    description:'',
                                },
                                {
                                    title: '审核通过',
                                    description:'',
                                },
                            ]}
                        />
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default UploadMidReportPage;
