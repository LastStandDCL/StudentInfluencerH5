import React from 'react';
import PageTitle from "../../components/PageTitle";
import {Button, Cascader, Col, Row, Table} from "antd";
import {CheckOutlined, CloseOutlined, DownloadOutlined, EyeOutlined} from "@ant-design/icons";

const data = [
    {
        key: '1',
        title: 'John Brown',
        uploader: 32,
        date: '1970-1-1',
        state: 'success',
    },
    {
        key: '2',
        title: 'Jim Green',
        uploader: 42,
        date: '1970-1-1',
        state: 'pending',
    },
    {
        key: '3',
        title: 'Joe Black',
        uploader: 32,
        date: '1970-1-1',
        state: 'fail',
    },
];

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
        title: '查看文件',
        key: 'preview',
        dataIndex: 'preview',
        render: (_, {state}) => (
            <div>
                <Button
                    style={{
                        marginRight:'3%',
                    }}
                    icon={<DownloadOutlined />}
                >
                </Button>
                <Button
                    icon={<EyeOutlined />}
                >
                    在线预览
                </Button>
            </div>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (_, {state}) => (
            <div>
                <Button
                    style={{
                        marginRight:'3%',
                        color: '#00a120',
                    }}
                    icon={<CheckOutlined />}
                >
                    通过
                </Button>
                <Button
                    icon={<CloseOutlined />}
                    style={{
                        color: '#be1400',
                    }}
                >
                    驳回
                </Button>
            </div>
        ),
    },
];

const options = [
    {
        value: '2023',
        label: '2023-2024学年',
    },
    {
        value: '2022',
        label: '2022-2023学年',
    },
];

const options2 = [
    {
        value: 'pending',
        label: '待审核',
    },
    {
        value: 'success',
        label: '已通过',
    },
    {
        value: 'fail',
        label: '已驳回',
    },
];

const CheckPassagePage = () => {

    const date = new Date();

    const onYearChange = (value) => {
        console.log(value);
    };

    return (
        <div style={{margin: '2%', zIndex:20}}>
            <PageTitle text='新闻稿审核'/>
            <Row>
                <Col span={2}>
                    <p>活动年份：</p>
                </Col>
                <Col span={4} style={{marginTop:'1vh'}}>
                    <Cascader
                        style={{width: "20ex"}}
                        options={options}
                        onChange={onYearChange}
                        placeholder="活动年份"
                        defaultValue={[date.getFullYear() + "-" + (date.getFullYear() + 1) + '学年']}
                    />
                </Col>
                <Col span={1}>
                    <p>状态：</p>
                </Col>
                <Col span={7} style={{marginTop:'1vh'}}>
                    <Cascader
                        style={{width: "20ex"}}
                        options={options2}
                        onChange={onYearChange}
                        placeholder="选择当前状态"
                        defaultValue={'pending'}
                    />
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ y: window.innerHeight * 0.55}}
                style={{margin: '3%'}}
            />
        </div>
    );
};

export default CheckPassagePage;
