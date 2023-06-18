import React from 'react';
import {Button, Col} from "antd";
import {
    FileExcelOutlined,
    FileImageOutlined,
    FileMarkdownOutlined,
    FileOutlined,
    FilePdfOutlined,
    FilePptOutlined,
    FileWordOutlined, FileZipOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {getFileType} from "../../utils/FileTypeChecker";

const MaterialBlock = (props) => {
    const {description} = props;

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
                }}
            >
                {getIcon()}
                <br/>
                {description}
            </Button>
        </Col>
    );
};

export default MaterialBlock;
