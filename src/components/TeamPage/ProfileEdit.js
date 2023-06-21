import React, {useState} from 'react';
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

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const [options, setOptions] = useState(
        Provinces.map(option => {
                return option.provinceName;
            }
        ));
    const onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };

    const loadData = (selectedOptions) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];

        // load options lazily
        setTimeout(() => {
            targetOption.children = [
                {
                    label: `${targetOption.label} Dynamic 1`,
                    value: 'dynamic1',
                },
                {
                    label: `${targetOption.label} Dynamic 2`,
                    value: 'dynamic2',
                },
            ];
            setOptions([...options]);
        }, 1000);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
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
                <Col span={6}/>
                <Col span={8}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }}
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
                                    message: 'Please input your nickname!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="性别"
                            rules={[
                                {
                                    required: true,
                                    message: '请选择你的性别！',
                                },
                            ]}
                        >
                            <Select style={{width:'40%'}}>
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
                                    message: 'Please input donation amount!',
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
                            name="residence"
                            label="省份/高中"
                            rules={[
                                {
                                    type: 'array',
                                    required: true,
                                    message: 'Please select your habitual residence!',
                                },
                            ]}
                        >
                            <Cascader
                                options={options}
                                loadData={loadData}
                                onChange={onChange}
                                changeOnSelect
                            />
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
                    </Form>
                </Col>
                <Col
                    span={4}
                    style={{textAlign:'center'}}
                >

                </Col>
                <Col span={6}/>
                <Col span={24} style={{textAlign:'center'}}>
                    <Button type='primary'>
                        确认修改
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default ProfileEdit;
