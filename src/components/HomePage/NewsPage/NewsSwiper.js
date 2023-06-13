import React, {useRef} from 'react';
import {Button, Carousel} from "antd";
import backgroundVideo from "../../../assets/news1.mp4";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const NewsSwiper = () => {

    const carouselEL = useRef(null);

    return (
        <div>
            <Carousel
                dotPosition="bottom"
                effect="fade"
                dots="true"
                ref={carouselEL}
            >
                <div>
                    <video className="fullscreenvideo"  id="bgvid" style={styles.videoStyle}
                           playsInline autoPlay muted loop>
                        <source src={backgroundVideo} type="video/mp4"/>
                    </video>
                    <p style={styles.newsText}>西北工业大学2023招生宣传片震撼发布</p>
                </div>
                <div>
                    <img
                        style={styles.imageStyle}
                        src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/10.jpg"
                        alt=""
                    />
                    <p style={styles.newsText}>咸阳彩虹中学优秀毕业生夏天返校宣讲活动</p>
                </div>
                <div>
                    <img
                        style={styles.imageStyle}
                        src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/2.jpg"
                        alt=""
                    />
                    <p style={styles.newsText}>韩城实验中学申浩然返校宣讲</p>
                </div>
                <div>
                    <img
                        style={styles.imageStyle}
                        src="https://tomcat-oss.oss-cn-beijing.aliyuncs.com/5.jpg"
                        alt=""
                    />
                    <p style={styles.newsText}>马鞍山崇真中学返乡实践队的宣讲之旅v</p>
                </div>
            </Carousel>
            <Button
                style={styles.leftButton}
                onClick={() => {
                    carouselEL.current.prev();
                }}
                icon={<LeftOutlined />}
            />
            <Button
                style={styles.rightButton}
                onClick={() => {
                    carouselEL.current.next();
                }}
                icon={<RightOutlined />}
            />
        </div>
    );
};

const styles = {
    videoStyle:{
        width: '100%',
        position: 'absolute',
        top: '-5vh',
        left: 0,
        zIndex: 7,
    },
    imageStyle:{
        zIndex: 7,
        width: '100%',
        height: '102vh',
    },
    swiperStyle:{
        maxHeight: '100vh',
        color: '#fff',
        lineHeight: '100vh',
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
        opacity: 0.6,
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
        opacity: 0.6,
        right: '2%'
    },
    newsText:{
        fontSize: '5vh',
        fontWeight: 'bold',
        fontFamily: 'font1',
        color: '#ffffff',
        bottom: '10vh',
        left: '0.5%',
        position: 'fixed',
        zIndex:12,
        backgroundColor: 'rgba(12,29,65,0.4)',
        boxShadow:'0 0 10px 10px rgba(12,29,65,0.3)',
        borderRadius: '1vh',
    }
};

export default NewsSwiper;
