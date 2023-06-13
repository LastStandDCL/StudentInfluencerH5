import React, {useRef} from 'react';
import {Button, Carousel} from "antd";
import Icon from "antd/es/icon";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const NewsSwiper = () => {

    const carouselEL = useRef(null);

    return (
        <div>
            <Carousel
                autoplay
                dotPosition="bottom"
                effect="fade"
                dots="true"
                ref={carouselEL}
            >
                <div>
                    <h3 style={styles.swiperStyle}>1</h3>
                </div>
                <div>
                    <h3 style={styles.swiperStyle}>2</h3>
                </div>
                <div>
                    <h3 style={styles.swiperStyle}>3</h3>
                </div>
                <div>
                    <h3 style={styles.swiperStyle}>4</h3>
                </div>
            </Carousel>
            <Button
                style={styles.leftButton}
                onClick={() => {
                    carouselEL.current.prev();
                }}
                icon={<LeftOutlined />}
            ></Button>
            <Button
                style={styles.rightButton}
                onClick={() => {
                    carouselEL.current.next();
                }}
                icon={<RightOutlined />}
            ></Button>
        </div>
    );
};

const styles = {
    swiperStyle:{
        height: '100vh',
        color: '#fff',
        lineHeight: '180vh',
        textAlign: 'left',
        background: '#364d79',
    },
    leftButton:{
        border: 'none',
        height: '36px',
        width: '36px',
        transition: '1s',
        borderRadius: '50%',
        backgroundColor: '#001529',
        color: '#ffffff',
        position: 'absolute',
        top: '50%',
        zIndex: 9,
        transform: 'translateY(-50%)',
        opacity: 0.3,
        left: '2%'
    },
    rightButton:{
        border: 'none',
        height: '36px',
        width: '36px',
        transition: '1s',
        borderRadius: '50%',
        backgroundColor: '#001529',
        color: '#ffffff',
        position: 'absolute',
        top: '50%',
        zIndex: 9,
        transform: 'translateY(-50%)',
        opacity: 0.3,
        right: '2%'
    }
};

export default NewsSwiper;
