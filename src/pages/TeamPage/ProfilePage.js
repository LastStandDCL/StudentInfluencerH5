import React from 'react';
import Globals from "../../Globals";

const ProfilePage = () => {
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
                我的个人信息
            </p>
        </div>
    );
};

export default ProfilePage;
