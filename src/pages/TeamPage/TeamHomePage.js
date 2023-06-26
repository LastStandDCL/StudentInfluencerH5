import React from 'react';
import PageTitle from "../../components/PageTitle";
import {Cascader, Col, Row} from "antd";

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

const TeamHomePage = () => {

    const date = new Date();
    const onYearChange = (value) => {
        console.log(value);
    };

    return (
        <div style={{margin: '2%', zIndex:20}}>
            <PageTitle text='团队主页'/>
            <Row>
                <Col span={2}>
                    <p>活动年份：</p>
                </Col>
                <Col span={7} style={{marginTop:'1vh'}}>
                    <Cascader
                        style={{width: "20ex"}}
                        options={options}
                        onChange={onYearChange}
                        placeholder="活动年份"
                        defaultValue={[date.getFullYear() + "-" + (date.getFullYear() + 1) + '学年']}
                    />
                </Col>
            </Row>
            <div>
                044
            </div>
        </div>
    );
};

export default TeamHomePage;
