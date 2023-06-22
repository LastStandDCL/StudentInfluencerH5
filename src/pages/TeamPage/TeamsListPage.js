import React from 'react';
import {Avatar, Button, Select, Col, Row, Space, Table, Tooltip} from "antd";
import Globals from "../../Globals";
import Search from "antd/es/input/Search";
import {UserAddOutlined} from "@ant-design/icons";
import PageTitle from "../../components/PageTitle";

const columns = [
    {
        title: '活动年份',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: '所属省份',
        dataIndex: 'province',
        key: 'province',
    },
    {
        title: '队伍名称',
        dataIndex: 'teamName',
        key: 'teamName',
    },
    {
        title: '所属高中',
        dataIndex: 'highSchool',
        key: 'highSchool',
    },
    {
        title: '成员',
        dataIndex: 'members',
        key: 'members',
        render: (_, { members }) => (
            <>
            <Avatar.Group
                maxCount={5}
                size="large"
                maxStyle={{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                }}
            >
                {members.map((member) => {
                    let color = member.length > 5 ? 'geekblue' : 'green';
                    if (member === 'loser') {
                        color = 'volcano';
                    }
                    return (
                            <Tooltip title={member.name} placement="top">
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                            </Tooltip>
                    );
                })}
            </Avatar.Group>
            </>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type='dashed'>查看详情</Button>
                <Tooltip title='只能加入与自己生源学校相同的队伍'>
                    <Button
                        icon={<UserAddOutlined />}
                        disabled={true}
                        type='primary'
                    >
                        加入
                    </Button>
                </Tooltip>
            </Space>
        ),
    },
];
const data = [
    {
        teamName: '附中隔壁队',
        highSchool: '高新一中',
        province: '陕西省',
        year: '2024',
        members: [
            {
                name: '邓博文',
                avatar: 'null',
                tooltip: '软件学院 2020级',
            },
            {
                name: '陈宏',
                avatar: 'null',
                tooltip: '软件学院 2020级',
            },
            {
                name: '刘俊腾',
                avatar: 'null',
                tooltip: '软件学院 2020级',
            },
            {
                name: '邓博文',
                avatar: 'null',
                tooltip: '软件学院 2020级',
            },
            {
                name: '陈宏',
                avatar: 'null',
                tooltip: '软件学院 2020级',
            },
            {
                name: '刘俊腾',
                avatar: 'null',
                tooltip: '软件学院 2020级',
            },
        ],
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

const onYearChange = (value) => {
    console.log(value);
};

const TeamsListPage = () => {

    const date = new Date;

    const onSearch = (value) => {
        console.log(value);
    };

    return (
        <div style={{margin: '2%', zIndex:20}}>
            <PageTitle text='队伍列表'/>
            <Row>
                <Col span={2}>
                    <p>活动年份：</p>
                </Col>
                <Col span={7} style={{marginTop:'1vh'}}>
                    <Select
                        style={{width: "20ex"}}
                        options={options}
                        onChange={onYearChange}
                        placeholder="活动年份"
                        defaultValue={[date.getFullYear() + "-" + (date.getFullYear() + 1) + '学年']}
                    />
                </Col>
                <Col span={7}/>
                <Col span={5} style={{marginTop:'1vh'}}>
                    <Search
                        placeholder="输入高中名称进行搜索"
                        allowClear
                        onSearch={onSearch}
                    />
                </Col>
                <Col span={2} style={{marginTop:'1vh',marginLeft:'2%'}}>
                    <Button type='primary'>
                        创建队伍
                    </Button>
                </Col>
                <Col span={1}/>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        scroll={{
                            y: window.innerHeight * 0.55,
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default TeamsListPage;
