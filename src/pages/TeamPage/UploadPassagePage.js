import React from 'react';
import {Button, Space, Table, Tag} from "antd";
import Globals from "../../Globals";

const data = [
    {
        key: '1',
        title: 'John Brown',
        uploader: 32,
        date: 'New York No. 1 Lake Park',
        state: 'success',
    },
    {
        key: '2',
        title: 'Jim Green',
        uploader: 42,
        date: 'London No. 1 Lake Park',
        state: 'pending',
    },
    {
        key: '3',
        title: 'Joe Black',
        uploader: 32,
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
        title: '文章标题',
        dataIndex: 'title',
        key: 'title',
    },
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
        title: 'Action',
        key: 'action',
        render: (_, {state}) => (
            <Space size="middle">
                <Button>预览文件</Button>
                <Button>查看审核意见</Button>
                <Button disabled={state === 'pending'}>
                    {state === 'fail'? '重新':''}
                    提交
                </Button>
            </Space>
        ),
    },
];

const UploadPassagePage = () => {
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
                活动新闻稿
            </p>
            <Button type='primary'>上传新闻稿</Button>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: window.innerHeight * 0.5 }}
                style={{margin: '3%'}}
            />
        </div>
    );
};

export default UploadPassagePage;
