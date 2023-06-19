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

const UploadFinalReportPage = () => {

    const navigate = useNavigate();

    const onClickDownload = () => {

    }

    return (
        <div>
            <PageTitle text='团队结题报告提交'/>
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
                            style={{marginLeft:'2%'}}
                            onClick={onClickDownload}
                        />
                    </p>
                    <iframe
                        style={{width: '99%', height: '90%', marginTop:'1%'}}
                        src='https://view.officeapps.live.com/op/embed.aspx?src=
                        https://tomcat-oss.oss-cn-beijing.aliyuncs.com/ruan_zong/e.docx'
                        width='100%' height='100%' frameBorder='0'>This is an embedded
                        <a target='_blank' href='http://office.com'>Microsoft Office</a>
                        document, powered by
                        <a target='_blank' href='http://office.com/webapps'>Office Online</a>.
                    </iframe>
                </Col>
                <Col span={7} style={{height: 0.78 * window.innerHeight}}>
                    <Space direction='vertical' style={{marginLeft: '20%'}}>
                        <Button
                            style={{marginTop:'20%',width:'100%'}}
                            icon={<CloudDownloadOutlined />}
                        >
                            下载总结报告模板
                        </Button>
                        <Button
                            style={{marginTop:'20%',width:'100%'}}
                            type='primary'
                            icon={<CloudUploadOutlined />}
                        >
                            上传总结报告
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

export default UploadFinalReportPage;
