import React from 'react';
import Globals from "../Globals";

const PageTitle = (props) => {

    const {text} = props;

    return (
        <p
            style={{
                color: Globals.npu_color,
                fontSize: '3vh',
                textAlign: 'center',
                fontFamily: 'font1',
                fontWeight: 'bold',
            }}
        >
            {text}
        </p>
    );
};

export default PageTitle;
