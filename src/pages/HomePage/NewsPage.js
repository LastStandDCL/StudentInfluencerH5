import React, {useEffect, useState} from 'react';
import NewsSwiper from "../../components/HomePage/NewsPage/NewsSwiper";
import HeaderBar from "../../components/HeaderBar";
import NewsCard from "../../components/HomePage/NewsPage/NewsCard";
import NewsList from "../../components/HomePage/NewsPage/NewsList";

const NewsPage = () => {

    const [lightMode, setLightMode] = useState(true);

    const [y, setY] = useState(0);

    const [busy, setBusy] = useState(false);

    const handleScroll = (e) => {
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        if(scrollTop >= clientHeight * 0.90 && y < scrollTop && busy){
            setBusy(false);
            window.scrollTo(0, clientHeight);
        }
        if(scrollTop <= 30 && y > scrollTop && busy){
            setBusy(false);
            window.scrollTo(0, 0);
        }
        if(scrollTop > 0 && scrollTop < clientHeight * 0.50 && y < scrollTop && !busy){
            setBusy(true);
            window.scrollTo({
                left: 0,
                top: clientHeight + 1,
                behavior:'smooth',
            });
        }
        if(scrollTop >= clientHeight * 0.90 && scrollTop < clientHeight * 0.99 && y > scrollTop && !busy){
            setBusy(true);
            window.scrollTo({
                left: 0,
                top: '0',
                behavior:'smooth',
            });
        }
        setY(scrollTop);
        if(scrollTop > clientHeight * 0.90){
            setLightMode(false);
        }else{
            setLightMode(true);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <div style={{backgroundColor:'rgb(240,240,240)'}}>
            <div style={styles.header}>
                <HeaderBar lightMode={lightMode}/>
            </div>
            <div style={styles.swiper}>
                <NewsSwiper/>
            </div>
            <div >
                <div style={styles.news}>
                    <NewsCard/>
                </div>
                <div>
                    <NewsList/>
                </div>
            </div>
        </div>
    );
};
const styles = {
    header: {
        position: 'fixed',
        top: 0,
        zIndex: 11,
        width: '100%',
    },
    swiper: {
        height: '100%',
        position: 'relative',
        top: '-2.05vh',
        zIndex: 8,
    },
    news: {
        zIndex: 10,
        marginTop: '7vh',
    }
}

export default NewsPage;
