import React, {useEffect, useState} from 'react';
import {Button, Col} from "antd";
import {
    FileExcelOutlined,
    FileImageOutlined,
    FileMarkdownOutlined,
    FileOutlined,
    FilePdfOutlined,
    FilePptOutlined,
    FileWordOutlined,
    FileZipOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {getFileType} from "../../utils/FileTypeChecker";

const MaterialBlock = (props) => {

    const {description, state} = props;
    const [color, setColor] = useState('#000000');
    const [note, setNote] = useState('');
    const [disable, setDisable] = useState(false);

    useEffect(()=>{
        switch (state) {
            case 'success':
                setColor('#00a120');
                setNote('材料审批通过');
                break;
            case 'pending':
                setColor('#dc9c24');
                setNote('材料审批中');
                setDisable(true);
                break;
            case 'fail':
                setColor('#be1400');
                setNote('材料审批失败');
                setDisable(true);
                break;
            default:
                setColor('#000000');
        }
    },[])

    const getIcon = () => {
        const type = getFileType(description);
        switch (type){
            case 'ppt':
            case 'PPT':
                return (<FilePptOutlined />);
            case 'WORD':
            case 'word':
                return (<FileWordOutlined />);
            case 'excel':
            case 'EXCEL':
                return (<FileExcelOutlined />);
            case 'pdf':
            case 'PDF':
                return (<FilePdfOutlined />);
            case 'markdown':
            case 'MARKDOWN':
                return (<FileMarkdownOutlined />);
            case 'video':
            case 'VIDEO':
                return (<VideoCameraOutlined />);
            case 'image':
            case 'IMAGE':
                return (<FileImageOutlined />);
            case 'zip':
            case 'ZIP':
                return (<FileZipOutlined />);
            default:
                return (<FileOutlined />);
        }
    }

    return (
        <Col
            span={4}
            style={{
                width: "inherit",
                height: "20ex",
            }}
        >
            <Button
                size='large'
                style={{
                    height: '90%',
                    width: '90%',
                    color: color,
                }}
                disabled={disable}
            >
                {getIcon()}
                <br/>
                {description}
                <br/>
                {note}
            </Button>
        </Col>
    );
};

export default MaterialBlock;
