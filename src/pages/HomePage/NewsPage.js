import React from 'react';
import NewsSwiper from "../../components/HomePage/NewsPage/NewsSwiper";
import HeaderBar from "../../components/HeaderBar";

const NewsPage = () => {
    return (
        <div>
            <div style={styles.header}>
                <HeaderBar/>
            </div>
            <div style={styles.swiper}>
                <NewsSwiper/>
            </div>
        </div>
    );
};
const styles = {
    header: {
        position: 'fixed',
        top: 0,
        zIndex: 10,
        width: '100%',
    },
    swiper: {
        height: '100vh',
        position: 'relative',
        top: '-2vh',
    },
    button: {

    },
    news: {

    }
}

export default NewsPage;
