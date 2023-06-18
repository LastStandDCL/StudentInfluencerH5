import React, {useState} from 'react';
import {Avatar, Button, Cascader, Col, Row, Select, Space, Table, Tag, Tooltip} from "antd";
import Globals from "../../Globals";
import Search from "antd/es/input/Search";
import {UserAddOutlined} from "@ant-design/icons";

const columns = [
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
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
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
        address: 'New York No. 1 Lake Park',
        tags: ['2023', '陕西省'],
    },
    {
        teamName: '啊对对队9',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队8',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队7',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队6',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队5',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队4',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队3',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队2',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '啊对对队1',
        highSchool: '郑州市外国语中学',
        members: ['2023', '河南省'],
        address: 'London No. 1 Lake Park',
        tags: ['2023', '河南省'],
    },
    {
        teamName: '附属大学返乡队',
        highSchool: '西北工业大学附属中学',
        members: ['2023', '河南省'],
        address: 'Sydney No. 1 Lake Park',
        tags: ['2023', '陕西省'],
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

const onProvinceChange = (value) => {
    console.log(value);
};

const TeamsListPage = () => {

    const date = new Date;

    const onSearch = (value) => {
        console.log(value);
    };

    return (
        <div style={{margin: '2%', zIndex:20}}>
            <p
                style={{
                    color: Globals.npu_color,
                    fontSize: '3vh',
                    textAlign: 'center',
                    fontFamily: 'font1',
                    fontWeight: 'bold',
                }}
            >
                队伍列表
            </p>
            <Row>
                <Col span={2}>
                    <p>活动年份：</p>
                </Col>
                <Col span={6} style={{marginTop:'1vh'}}>
                    <Cascader
                        style={{width: "20ex"}}
                        options={options}
                        onChange={onProvinceChange}
                        placeholder="活动年份"
                        defaultValue={[date.getFullYear() + "-" + (date.getFullYear() + 1) + '学年']}
                    />
                </Col>
                <Col span={10}/>
                <Col span={5} style={{marginTop:'1vh'}}>
                    <Search
                        placeholder="输入高中名称进行搜索"
                        allowClear
                        onSearch={onSearch}
                    />
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
