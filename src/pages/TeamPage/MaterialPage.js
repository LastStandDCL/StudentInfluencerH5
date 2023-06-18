import React from 'react';
import Globals from "../../Globals";
import {Button, Col, Row} from "antd";
import MaterialBlock from "../../components/TeamPage/MaterialBlock";
import {FileAddOutlined} from "@ant-design/icons";

const item1 = [
    {
        fileName:'1.mp4',
    },
    {
        fileName:'2.doc',
    },
    {
        fileName:'3.txt',
    },
    {
        fileName:'4.xlsx',
    },
    {
        fileName:'5.md',
    },
    {
        fileName:'5.md',
    },
    {
        fileName:'6.zip',
    },
    {
        fileName:'7.pdf',
    },
    {
        fileName:'8.png',
    },
    {
        fileName:'9.bat',
    },
]

const item2 = [
    {
        fileName:'1.mp4',
    },
    {
        fileName:'2.doc',
    },
]

const MaterialPage = () => {
    return (
        <div>
            <p style={styles.title}>学校宣讲材料</p>
            <Row style={{margin: '4%'}}>
                {item1.map((option)=>{
                    return (
                        <MaterialBlock description={option.fileName}/>
                    );
                })}
            </Row>
            <p style={styles.title}>团队特色材料</p>
            <Row style={{margin: '4%'}}>
                {item2.map((option)=>{
                    return (
                        <MaterialBlock description={option.fileName}/>
                    );
                })}
                <Col
                    span={4}
                    style={{
                        width: "inherit",
                        height: "20ex",
                    }}
                >
                    <Button
                        size='large'
                        type='dashed'
                        style={{
                            height: '90%',
                            width: '90%',
                            color: Globals.npu_color,
                        }}
                    >
                        <FileAddOutlined />
                        <br/>
                        添加材料
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

const styles = {
    title: {
        color: Globals.npu_color,
        fontSize: '3vh',
        fontFamily: 'font1',
        fontWeight: 'bold',
        margin: '2%',
    }
}

export default MaterialPage;
