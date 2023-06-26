import React, {useState} from 'react';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lightbox from "yet-another-react-lightbox";
import {Zoom} from "yet-another-react-lightbox/plugins";
import HomeHeaderBar from "../../components/HomePage/HomeHeaderBar";
import PhotoAlbum from "react-photo-album";

import photos from "./photos";


const ImagePage = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <HomeHeaderBar lightMode={false}/>
            <PhotoAlbum
                photos={photos}
                layout="rows"
                targetRowHeight={150}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
};

export default ImagePage;
