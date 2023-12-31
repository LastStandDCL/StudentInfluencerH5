import "./map_style.css";
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { chinaMapConfig } from "./MapConfig";
import { geoJson } from "../../utils/geojson";
import { resData } from "../../utils/data";

const ChinaMap = () => {
    const ref = useRef(null);
    let mapInstance = null;

    const renderMap = () => {
        const renderedMapInstance = echarts.getInstanceByDom(ref.current);
        if (renderedMapInstance) {
            mapInstance = renderedMapInstance;
        } else {
            mapInstance = echarts.init(ref.current);
        }
        mapInstance.setOption(
            chinaMapConfig({ data: resData.data, max: resData.max, min: 0 })
        );
    };

    useEffect(() => {
        echarts.registerMap("china", { geoJSON: geoJson });
        renderMap();
    }, []);

    useEffect(() => {
        window.onresize = function () {
            mapInstance.resize();
        };
        return () => {
            mapInstance && mapInstance.dispose();
        };
    }, []);

    return (
        <div>
            <div
                style={{
                    width: "82%",
                    height: "60vh",
                }}
                 ref={ref}>
            </div>
        </div>
    );
};

export default ChinaMap;
