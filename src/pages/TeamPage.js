import {BlockOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
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
        getItem('活动材料申领', '/team/material'),
        getItem('活动照片记录','/team/team-images'),
        getItem('活动通讯稿上传', '/team/passage'),
        getItem('个人总结报告提交', '/team/upload-my-report'),
        getItem('团队中期报告提交', '/team/upload-mid-report'),
        getItem('团队总结报告提交', '/team/upload-final-report'),
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
                                zIndex: 0
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
