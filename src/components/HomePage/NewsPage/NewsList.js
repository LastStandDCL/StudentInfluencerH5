import React from 'react';
import {Card, Col, Pagination, Row} from "antd";
import Globals from "../../../Globals";
import Meta from "antd/es/card/Meta";

const NewsList = () => {

    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    return (
        <div>
            <Row>
                <Col span={5}>

                </Col>
                <Col span={10} style={{height: '80vh', marginRight:'1vh'}}>
                    <p style={styles.text}>更多新闻</p>
                    <Card>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                        <Card.Grid style={styles.gridStyle}>Content</Card.Grid>
                    </Card>
                    <Pagination
                        style={{position:"absolute",width:"100%",bottom:"4vh",textAlign:'center'}}
                        showSizeChanger={false}
                        showQuickJumper
                        defaultCurrent={1}
                        total={500}
                        onChange={onChange}
                    />
                </Col>
                <Col span={4}>
                    <p style={styles.text}>通知公告</p>
                    <Card
                        hoverable
                        style={{textAlign:'center',fontSize:'2vh', fontFamily:'font1', color:'black'}}
                        cover={
                            <Row>
                                <Col span={6}/>
                                <Col span={12}>
                                    <div style={{width:'100%',height:0,paddingBottom: '100%',position:'relative',textAlign:'center'}}>
                                        <img
                                            style={{width:'100%',height:'100%',position:'absolute'}}
                                            alt="example"
                                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                        />
                                    </div>
                                </Col>
                                <Col span={6}/>
                            </Row>
                        }
                    >
                        <Meta description="Europe Street beat"/>
                    </Card>

                    <Pagination style={{position:"absolute",width:"100%",bottom:"4vh",textAlign:'center'}} simple defaultCurrent={1} total={50} />
                </Col>
                <Col span={5}>

                </Col>
            </Row>
        </div>
    );
};

const styles = {
    gridStyle:{
        width: '100%',
        textAlign: 'left',
        fontFamily: 'font1',
        fontSize: '1.6' +
            'vh',
        lineHeight: '1vh',
        color: '#000000'
    },
    text:{
        color: Globals.npu_color,
        fontSize: '3vh',
        textAlign: 'center',
        fontFamily: 'font1',
        fontWeight: 'bold',
    },
}

export default NewsList;