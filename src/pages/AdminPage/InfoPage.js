import PageTitle from "../../components/PageTitle";
import EChartMapBars from "../../components/AdminPage/ChinaMap";

const InfoPage = () => {
    return (
        <div>
            <PageTitle text='活动概览'/>
            <EChartMapBars/>
        </div>
    );
};

export default InfoPage;
