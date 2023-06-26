import { Space, Table, Tag, Input, Collapse } from "antd";
import PageTitle from "../../components/PageTitle";
import React from "react";
import Search from "antd/es/input/Search";

const { Panel } = Collapse;

const columns = [
    {
        title: "团队名称",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "团队编号",
        dataIndex: "index",
        key: "index",
    },
    {
        title: "队长",
        dataIndex: "captain",
        key: "captain",
        render: (_, record) => (
            <Space size="middle">
                {record.members.length > 1 && ( // 如果有多个团队成员，则展示可折叠表格
                    <Collapse>
                        <Panel header={record.captain} key="1">
                            <Table
                                columns={[{ title: "", dataIndex: "member", key: "member" }]}
                                dataSource={record.members.slice(0).map((member, index) => ({
                                    key: index,
                                    member,
                                }))}
                                pagination={false}
                            />
                        </Panel>
                    </Collapse>
                )}
            </Space>
        ),
    },
    {
        title: "团队成员",
        key: "members",
        render: (_, record) => (
            <Space size="middle">
                {record.members.length > 1 && ( // 如果有多个团队成员，则展示可折叠表格
                    <Collapse>
                        <Panel header={record.members[0]} key="1">
                            <Table
                                columns={[{ title: "", dataIndex: "member", key: "member" }]}
                                dataSource={record.members.slice(1).map((member, index) => ({
                                    key: index,
                                    member,
                                }))}
                                pagination={false}
                            />
                        </Panel>
                    </Collapse>
                )}
            </Space>
        ),
    },
    {
        title: "操作",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>删除队伍</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "A",
        index: 1,
        captain: "zhang",
        members: ["成员1", "成员2", "成员3", "成员4"],
    },
    {
        key: "2",
        name: "B",
        index: 2,
        captain: "wang",
        members: ["成员1", "成员2"],
    },
    {
        key: "3",
        name: "C",
        index: 3,
        captain: "li",
        members: ["成员1", "成员2", "成员3", "成员4", "成员5"],
    },
];

const TeamsManagePage = () => {
    const [searchName, setSearchName] = React.useState("");
    const [filteredData, setFilteredData] = React.useState(data);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchName(value);

        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <>
            <div style={{ textAlign: "left" }}>
                <PageTitle text="团队管理" />
                <Search
                    placeholder="请输入团队名称"
                    value={searchName}
                    onChange={handleSearch}
                    style={{ width: 200, marginTop: 16 }}
                />
            </div>
            <Table columns={columns} dataSource={filteredData} />
        </>
    );
};

export default TeamsManagePage;
