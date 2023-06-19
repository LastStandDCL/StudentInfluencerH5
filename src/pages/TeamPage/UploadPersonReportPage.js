import React from 'react';
import {Button, Row, Space, Table, Tag} from "antd";
import Globals from "../../Globals";
import {CloudDownloadOutlined, CloudUploadOutlined} from "@ant-design/icons";
import PageTitle from "../../components/PageTitle";

const data = [
    {
        key: '1',
        uploader: 'John Brown',
        date: 'New York No. 1 Lake Park',
        state: 'success',
    },
    {
        key: '2',
        uploader: 'Jim Green',
        date: 'London No. 1 Lake Park',
        state: 'pending',
    },
    {
        key: '3',
        uploader: 'Joe Black',
        date: 'Sydney No. 1 Lake Park',
        state: 'fail',
    },
    {
        key: '2',
        uploader: 'Jim Green',
        date: 'London No. 1 Lake Park',
        state: 'pending',
    },
    {
        key: '3',
        uploader: 'Joe Black',
        date: 'Sydney No. 1 Lake Park',
        state: 'fail',
    },
    {
        key: '2',
        uploader: 'Jim Green',
        date: 'London No. 1 Lake Park',
        state: 'pending',
    },
    {
        key: '3',
        uploader: 'Joe Black',
        date: 'Sydney No. 1 Lake Park',
        state: 'fail',
    },
    {
        key: '2',
        uploader: 'Jim Green',
        date: 'London No. 1 Lake Park',
        state: 'pending',
    },
    {
        key: '3',
        uploader: 'Joe Black',
        date: 'Sydney No. 1 Lake Park',
        state: 'fail',
    },
    {
        key: '2',
        uploader: 'Jim Green',
        date: 'London No. 1 Lake Park',
        state: 'pending',
    },
    {
        key: '3',
        uploader: 'Joe Black',
        date: 'Sydney No. 1 Lake Park',
        state: 'fail',
    },
];

const getColor = (state) => {
    if(state === 'success') {
        return '#00a120';
    }else if(state === 'fail') {
        return '#be1400';
    }else if(state === 'abandon') {
        return 'rgba(124,124,124,0)';
    }else {
        return '#dc9c24';
    }
}

const getNote = (state) => {
    if(state === 'success') {
        return '审核通过';
    }else if(state === 'fail') {
        return '审核不通过';
    }else if(state === 'abandon') {
        return '放弃提交';
    }else {
        return '审核中';
    }
}

const columns = [
    {
        title: '上传者',
        dataIndex: 'uploader',
        key: 'uploader',
    },
    {
        title: '上传时间',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render: (_, {state}) => (
            <div>
                <Tag color={getColor(state)}>
                    {getNote(state)}
                </Tag>
            </div>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (_, {state}) => (
            <Space size="middle" direction='vertical'>
                <Row>
                    <Button size='small' style={{marginRight: '12px'}}>预览文件</Button>
                    <Button size='small' disabled={state === 'success'}>
                        重新提交
                    </Button>
                </Row>
                <Button size='small'>查看审核意见</Button>
            </Space>
        ),
    },
];

const UploadPersonPage = () => {
    return (
        <div>
            <PageTitle text='个人总结报告提交'/>
            <Button
                type='primary'
                style={{float: 'right', marginRight: '5%'}}
                icon={<CloudUploadOutlined />}
            >
                上传个人总结
            </Button>
            <Button
                type='default'
                style={{float: 'right',  marginRight: '1%'}}
                icon={<CloudDownloadOutlined />}
            >
                下载个人总结模板
            </Button>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{
                    y: window.innerHeight * 0.55,
                }}
                style={{margin: '3%'}}
            />
        </div>
    );
};

export default UploadPersonPage;
