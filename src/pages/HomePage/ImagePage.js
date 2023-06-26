import {useEffect, useState} from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import HomeHeaderBar from "../../components/HomePage/HomeHeaderBar";
import photos from "./photos";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const ImagePage = () => {
    const [index, setIndex] = useState(-1);

    const antIcon = <LoadingOutlined style={{ fontSize: 50, marginBottom: '2vh', height: window.innerHeight * 0.05}} spin />;

    const handleScroll = (e) => {
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        if((scrollTop + clientHeight) >= scrollHeight * 0.95){
            window.scrollTo(0, scrollHeight);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <div  style={{backgroundColor:'#ececec'}}>
            <div style={{position:'fixed', width: '100%'}}>
                <HomeHeaderBar lightMode={false}/>
            </div>
            <div style={{height: '7vh'}}/>
            <div style={{margin:'1%'}}>
                <PhotoAlbum photos={photos} layout="rows" targetRowHeight={300} onClick={({ index }) => setIndex(index)} />
            </div>

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            <div style={{textAlign:"center"}}>
                <Spin indicator={antIcon} />
            </div>
        </div>
    );
};

export default ImagePage;
