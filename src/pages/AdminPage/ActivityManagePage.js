import React, { useState } from 'react';
import Globals from "../../Globals";
import PageTitle from "../../components/PageTitle";
import { Col, Row, Select, Statistic, Steps, theme } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const steps = [
    {
        title: '活动报名阶段',
        content: 'First-content',
    },
    {
        title: '材料确认阶段',
        content: 'Second-content',
    },
    {
        title: '返校宣讲阶段',
        content: 'Last-content',
    },
    {
        title: '总结材料递交阶段',
        content: 'Last-content',
    },
    {
        title: '评优揭晓 | 活动结束',
        content: 'Last-content',
    },
];

const ActivityManagePage = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const date = new Date;
    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    const items = steps.map((item, index) => ({
        key: item.title,
        title: item.title,
        description: item.content,
        onClick: () => setCurrent(index),
    }));

    return (
        <div style={{ margin: '2%', zIndex: 20 }}>
            <PageTitle text='活动进程管理' />
            <Steps current={current} items={items} />
            <Row gutter={16} style={{ textAlign: 'center', marginTop: '4vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col span={8}>
                    <span style={{ margin: '12px 0', display: 'block' }}>设定开始日期</span>
                    <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
                        <DatePicker onChange={onChange} style={{ width: '80%' }} />
                    </Space>
                </Col>
            </Row>
            <Row gutter={16} style={{ textAlign: 'center', marginTop: '2vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col span={8}>
                    <span style={{ margin: '12px 0', display: 'block' }}>设定结束日期</span>
                    <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
                        <DatePicker onChange={onChange} style={{ width: '80%' }} />
                    </Space>
                </Col>
            </Row>
            <div style={contentStyle}>{steps[current].content}</div>
        </div>
    );
};

export default ActivityManagePage;