import React, {useState} from 'react';
import {getFileType} from "./FileTypeChecker";
import {Image, Spin} from 'antd';
const FileViewer = (props) => {

    const {uri} = props;
    const type = getFileType(uri);
    const msUri = 'https://view.officeapps.live.com/op/embed.aspx?src=' + uri;
    const [loaded, setLoaded] = useState(false);

    const blockStyle = {
        width: '99%',
        height: '90%',
        marginTop:'1%',
        zIndex: loaded ? 50 : -50,
    }

    const genericViewer = (load) => {
        switch (type) {
            case 'pdf':
                return (
                    <iframe
                        style={blockStyle}
                        src={uri}
                        width="100%"
                        height="100%"
                    />
                );
            case 'word':
            case 'ppt':
            case 'excel':
                return(
                    <iframe
                        onLoad={() =>{
                            setLoaded(true);
                        }}
                        style={blockStyle}
                        src={msUri}
                        width='100%'
                        height='100%'
                        frameBorder='0'
                    />
                );
            case 'image':
                return (
                    <Image
                        style={blockStyle}
                        src={uri}
                    />
                )
        }
    }

    return (
        <div style={{height: '100%'}}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Spin tip="Loading..." size="large">
                    <div className="content" />
                </Spin>
            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
            }}>
                {genericViewer(loaded)}
            </div>
        </div>
    );
};

export default FileViewer;