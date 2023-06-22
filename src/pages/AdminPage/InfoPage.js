import PageTitle from "../../components/PageTitle";
import ChinaMap from "../../components/AdminPage/ChinaMap";
import {Col, Row, Select} from "antd";
import React from "react";
import StatisticBoard from "../../components/AdminPage/StatisticBoard";

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

const InfoPage = () => {

    const date = new Date();
    const onYearChange = () => {

    }

    return (
        <div style={{margin: '2%', zIndex:20}}>
            <PageTitle text='活动概览'/>
            <Row>
                <Col span={2}>
                    <p>活动年份：</p>
                </Col>
                <Col span={4} style={{marginTop:'1vh'}}>
                    <Select
                        style={{width: "20ex"}}
                        options={options}
                        onChange={onYearChange}
                        placeholder="活动年份"
                        defaultValue={[date.getFullYear() + "-" + (date.getFullYear() + 1) + '学年']}
                    />
                </Col>
                <Col span={18}/>
                <Col span={11}>
                    <p
                        style={{
                            fontSize:'2.4vh',
                            textAlign:'center',
                            fontFamily:'font1',
                        }}
                    >
                        活动热力图
                    </p>
                    <div
                        style={{
                            borderStyle: 'solid',
                            borderWidth: '1px',
                        }}
                    >
                        <ChinaMap/>
                    </div>
                </Col>
                <Col span={13}>
                    <StatisticBoard/>
                </Col>
            </Row>
        </div>
    );
};

export default InfoPage;
