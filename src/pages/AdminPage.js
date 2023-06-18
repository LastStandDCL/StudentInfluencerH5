import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Layout, Menu, theme} from "antd";
import AccountHeaderBar from "../components/AccountHeaderBar";
import FooterBar from "../components/FooterBar";
import {BlockOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";


const {
    Content,
    Sider,
} = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('活动管理', '1', <BlockOutlined />, [
        getItem('活动进程', '/admin/activity-manage'),
        getItem('活动概览', '/admin/info'),
        getItem('团队管理', '/admin/teams-manage'),
    ]),
    getItem('材料审批', '2', <TeamOutlined />, [
        getItem('审核宣讲材料', '/admin/check-material'),
        getItem('审核团队中期报告', '/admin/check-mid'),
        getItem('审核个人结题报告', '/admin/check-person'),
        getItem('审核团队结题报告', '/admin/check-final'),
        getItem('审核新闻投稿', '/admin/check-passage'),
    ]),
    getItem('人事管理', '3', <UserOutlined />, [
        getItem('管理员任命', '/admin/admin-settings'),

    ]),
];

const AdminPage = () => {

    const navigate = useNavigate();

    const onClick = (e) => {
        navigate(e.key);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    width: '100vw',
                    height: '7.5vh',
                    zIndex: 100,
                }}
            >
                <AccountHeaderBar/>
            </div>
            <div style={{height: '7.5vh'}}/>
            <Layout style={{height: "100vh", marginTop:'2px'}}>
                <Layout>
                    <Sider
                        width='16vw'
                        style={{
                            background: colorBgContainer,
                            position: "fixed",
                        }}
                    >
                        <Menu
                            style={{zIndex: 100,}}
                            onClick={onClick}
                            defaultSelectedKeys={()=>{
                                const hrefStr = window.location.href;
                                const urlParams = new URL(hrefStr);
                                return urlParams?.pathname;
                            }}
                            defaultOpenKeys={['1','2','3']}
                            mode="inline"
                            items={items}
                        />
                    </Sider>
                    <div
                        style={{
                            width: '17%',
                        }}
                    />
                    <Layout
                        style={{
                            padding: '0 24px 24px',
                        }}
                    >
                        <Content
                            style={{
                                marginLeft: '5%',
                                marginRight: '5%',
                                marginTop: '1%',
                                background: colorBgContainer,
                                zIndex: 0,
                            }}
                        >
                            <Outlet/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <FooterBar/>
        </div>
    );
};

export default AdminPage;
