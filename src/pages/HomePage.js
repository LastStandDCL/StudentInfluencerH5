import React from 'react';
import FooterBar from "../components/FooterBar";
import {Outlet} from "react-router-dom";
import {theme} from "antd";

const HomePage = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div style={{backgroundColor: colorBgContainer}}>
            <Outlet/>
        </div>
    );
};

export default HomePage;
