import React, {useEffect, useState} from 'react';
import Provinces from "../../utils/Provinces";
import phonePrefix from "../../utils/phonePrefix";
import {
    Cascader,
    Form,
    Input,
    InputNumber,
    Select,
    Col,
    Row,
    Button,
} from 'antd';
import Colleges from "../../utils/Colleges";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const ProfileEdit = () => {

    useEffect(()=>{
        let formProvince = [];
        Provinces.map(option => {
                formProvince.push({
                    label: option.provinceName,
                    value: option.provinceName,
                    isLeaf: false,
                })
            }
        )
        setOptions(formProvince);
    },[])

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const [options, setOptions] = useState([]);

    const onProvinceAndHighSchoolChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };

    const onSubmit = () => {
        let a = Provinces.map(option => {
                return option.provinceName;
            }
        )
        console.log(a);
    }

    const loadData = (selectedOptions) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];

        // load options lazily
        setTimeout(() => {
            targetOption.children = [
                {
                    label: `西安市高新区第一中学`,
                    value: 'dynamic1',
                },
                {
                    label: `西北工业大学附属中学`,
                    value: 'dynamic2',
                },
                {
                    label: `西安市高新区第一中学河滨校区`,
                    value: 'dynamic3',
                },
                {
                    label: `西北工业大学附属中学晗光中学`,
                    value: 'dynamic4',
                },
                {
                    label: `西安市铁一中学`,
                    value: 'dynamic5',
                },
                {
                    label: `西安交通大学附属中学阳光中学`,
                    value: 'dynamic6',
                },
                {
                    label: `西安交通大学附属中学`,
                    value: 'dynamic7',
                },
            ];
            setOptions([...options]);
        }, 1000);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 80,
                }}
                defaultValue='+86'
                disabled={true}
            >
                {
                    phonePrefix.map((option)=>{
                        return (
                            <Option
                                value={option.code}
                            >
                                {option.code}
                            </Option>
                        );
                    })
                }
            </Select>
        </Form.Item>
    );

    return (
        <div>
            <Row style={{marginTop: '2%'}}>
                <Col span={4}/>
                <Col span={10}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        style={{
                            maxWidth: 600,
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="email"
                            label="注册邮箱"
                        >
                            <Input  disabled={true}/>
                        </Form.Item>

                        <Form.Item
                            name="name"
                            label="姓名"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的真实姓名与性别!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input style={{width:'70%'}}/>
                            <Select
                                style={{width:'30%'}}
                                placeholder='性别'
                            >
                                <Option value="male">男</Option>
                                <Option value="female">女</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="id"
                            label="学号"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的学号!',
                                },
                            ]}
                        >
                            <InputNumber
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="college"
                            label="所在学院"
                            rules={[
                                {
                                    required: true,
                                    message: '请选择你的所在学院！',
                                },
                            ]}
                        >
                            <Select style={{width:'100%'}}>
                                {
                                    Colleges.map((option)=>{
                                        return (
                                            <Option
                                                value={option}
                                            >
                                                {option}
                                            </Option>
                                        );
                                    })
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="电话"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入你的电话号码!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="residence"
                            label="省份/高中"
                            rules={[
                                {
                                    type: 'array',
                                    required: true,
                                    message: '请选择你的母校与所在省份!',
                                },
                            ]}
                        >
                            <Cascader
                                options={options}
                                loadData={loadData}
                                onChange={onProvinceAndHighSchoolChange}
                                changeOnSelect
                            />
                        </Form.Item>
                        <p style={{textAlign:'center'}}>
                            没找到母校？
                            <Button type='link'>申请添加生源高中</Button>
                            |
                            <Button type='link'>查看申请记录</Button>
                        </p>
                        <Form.Item style={{float:'right'}}>
                            <Button
                                type='primary'
                                htmlType='submit'
                                onClick={onSubmit}
                            >
                                确认修改
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ProfileEdit;
