import React, {useEffect, useState} from 'react';
import NewsSwiper from "../../components/HomePage/NewsPage/NewsSwiper";
import HeaderBar from "../../components/HeaderBar";
import NewsList from "../../components/HomePage/NewsPage/NewsList";

const NewsPage = () => {

    const [y, setY] = useState(0);

    const handleScroll = (e) => {
        const window = e.currentTarget;
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;

    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, handleScroll)

    return (
        <div>
            <div style={styles.header}>
                <HeaderBar/>
            </div>
            <div style={styles.swiper}>
                <NewsSwiper/>
            </div>
            <div>
                <NewsList/>
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
        top: '-2.05vh',
    },
    button: {

    },
    news: {

    }
}

export default NewsPage;
