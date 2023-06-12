import React from 'react';
import FooterBar from "../components/FooterBar";
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Outlet/>
            <FooterBar/>
        </div>
    );
};

export default HomePage;
