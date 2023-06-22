import React from 'react';
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import {Card, Col, Row, Statistic} from "antd";
import ReactEcharts from 'echarts-for-react'
const StatisticBoard = () => {

    const getOption = ()=>{
        return {
            title: {
                text: '学院参与度',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                //提示框浮层内容格式器，支持字符串模板和回调函数形式。
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // legend: {
            //
            //     bottom: 0,
            //     right: 5,
            //     data: [
            //         '教育实验学院',
            //         '计算机学院',
            //         '软件学院',
            //         '网络空间安全学院',
            //         '微电子学院',
            //         '航天学院',
            //         '航空学院',
            //         '民航学院',
            //         '航海学院',
            //         '自动化学院',
            //         '电子信息学院',
            //         '材料学院',
            //     ]
            // },
            series: [
                {
                    name: '参与人数',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    label: {
                        position: 'inner',
                        show: true,
                    },

                    data: [
                        {value: 1000, name: '教育实验学院'},
                        {value: 1500, name: '计算机学院'},
                        {value: 2000, name: '软件学院'},
                        {value: 2500, name: '网络空间安全学院'},
                        {value: 3000, name: '微电子学院'},
                        {value: 2300, name: '航天学院'},
                        {value: 1600, name: '航空学院'},
                        {value: 1000, name: '民航学院'},
                        {value: 1500, name: '航海学院'},
                        {value: 2000, name: '自动化学院'},
                        {value: 2500, name: '电子信息学院'},
                        {value: 3000, name: '材料学院'},
                        {value: 2300, name: '机电学院'},
                        {value: 1600, name: '动力与能源学院'},
                        {value: 1000, name: '力学与土木建筑学院'},
                        {value: 1500, name: '数学与统计学院'},
                        {value: 2000, name: '物理科学与技术学院'},
                        {value: 2500, name: '化学与化工学院'},
                        {value: 3000, name: '管理学院'},
                        {value: 2300, name: '外国语学院'},
                        {value: 1600, name: '伦敦玛丽女王学院'},
                        {value: 1000, name: '生命学院'},
                        {value: 1500, name: '国际教育学院'},
                        {value: 2000, name: '马克思主义学院'},
                    ],
                }
            ]
        };
    }

    const getOption2 = ()=>{
        return {
            title: {
                text: '省区参与度',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                //提示框浮层内容格式器，支持字符串模板和回调函数形式。
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // legend: {
            //     bottom: 0,
            //     right: -60,
            //     left: 60,
            //     data: [
            //         '北京市',
            //         '天津市',
            //         '上海市',
            //         '重庆市',
            //         '河北省',
            //         '山西省',
            //         '内蒙古自治区',
            //         '辽宁省',
            //         '吉林省',
            //         '吉林省',
            //         '黑龙江省',
            //         '江苏省',
            //         '浙江省',
            //         '安徽省',
            //         '福建省',
            //     ]
            // },
            series: [
                {
                    name: '参与人数',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    label: {
                        position: 'inner',
                        show: true,
                    },

                    data: [
                        {value: 1000, name: '北京市'},
                        {value: 1500, name: '天津市'},
                        {value: 2000, name: '上海市'},
                        {value: 2500, name: '重庆市'},
                        {value: 3000, name: '河北省'},
                        {value: 2300, name: '山西省'},
                        {value: 1600, name: '内蒙古自治区'},
                        {value: 1000, name: '辽宁省'},
                        {value: 1500, name: '吉林省'},
                        {value: 2000, name: '黑龙江省'},
                        {value: 3000, name: '江苏省'},
                        {value: 2300, name: '浙江省'},
                        {value: 1600, name: '安徽省'},
                        {value: 1000, name: '福建省'},
                        {value: 1500, name: '江西省'},
                        {value: 2000, name: '山东省'},
                        {value: 2500, name: '河南省'},
                        {value: 3000, name: '湖北省'},
                        {value: 2300, name: '湖南省'},
                        {value: 1600, name: '广东省'},
                        {value: 1000, name: '广西壮族自治区'},
                        {value: 1500, name: '海南省'},
                        {value: 2000, name: '四川省'},
                        {value: 2000, name: '贵州省'},
                        {value: 2000, name: '云南省'},
                        {value: 2000, name: '西藏自治区'},
                        {value: 2000, name: '陕西省'},
                        {value: 2000, name: '甘肃省'},
                        {value: 2000, name: '青海省'},
                        {value: 2000, name: '宁夏回族自治区'},
                        {value: 2000, name: '新疆维吾尔自治区'},
                        {value: 2000, name: '台湾'},
                        {value: 2000, name: '香港特别行政区'},
                        {value: 2000, name: '澳门特别行政区'},
                    ],
                }
            ]
        };
    }

    return (
        <Row gutter={16}
             style={{
                 marginTop: '1%',
                 marginLeft:'5%',
                 marginRight: '5%',
                 textAlign: 'center',
             }}
        >
            <Col span={12}>
                <ReactEcharts
                    option={getOption()}
                />
            </Col>
            <Col span={12}>
                <ReactEcharts
                    option={getOption2()}
                />
            </Col>
            <Col span={12}>
                <Card bordered={true} style={cardStyle}>
                    <Statistic
                        title="平台活跃人数（仍在校）"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={cardStyle}>
                    <Statistic
                        title="参加活动人数"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={cardStyle}>
                    <Statistic
                        title="参与队伍数量"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={cardStyle}>
                    <Statistic
                        title="完成队伍数量"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    );
};

const cardStyle= {
    margin:'2%',
}

export default StatisticBoard;
