import {BlockOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import {Badge, Layout, Menu, theme} from 'antd';
import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import FooterBar from "../components/FooterBar";
import AccountHeaderBar from "../components/AccountHeaderBar";

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
    getItem('所有团队', '1', <BlockOutlined />, [
        getItem('活动时间线', '/team/timeline'),
        getItem('团队列表', '/team/teams'),
        //getItem('团队提交物排名', '/team/rank'),
    ]),
    getItem('我的团队', '2', <TeamOutlined />, [
        getItem('团队主页', '/team/my-team'),
        getItem(
            <Badge count={1} offset={[20, 20]}>
                <p>活动材料申领</p>
            </Badge>
            , '/team/material'),
        getItem(
            <Badge count={0} offset={[20, 20]}>
                <p>活动照片记录</p>
            </Badge>
            ,'/team/team-images'),
        getItem(
            <Badge count={0} offset={[20, 20]}>
                <p>活动新闻稿提交</p>
            </Badge>
            , '/team/passage'),
        getItem(
            <Badge count={0} offset={[20, 20]}>
                <p>团队中期报告提交</p>
            </Badge>
            , '/team/upload-mid-report'),
        getItem(
            <Badge count={1} offset={[20, 20]}>
                <p>个人总结报告提交</p>
            </Badge>
            , '/team/upload-my-report'),
        getItem(
            <Badge count={1} offset={[20, 20]}>
                <p>团队总结报告提交</p>
            </Badge>
            , '/team/upload-final-report'),
    ]),
    getItem('我的事务', '3', <UserOutlined />, [
        getItem('活动证书下载', '/team/certificate'),
        getItem('修改个人信息', '/team/my-profile'),
    ]),
];

const TeamPage = () => {

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

export default TeamPage;
