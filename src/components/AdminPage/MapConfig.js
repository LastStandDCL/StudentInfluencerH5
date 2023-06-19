export const chinaMapConfig = (configData) => {
    const { data, max, min } = configData;

    return {
        title: {
            // 标题组件
            // subtext: '数据来源于 xx平台',
            // sublink: 'http://www.census.gov/popest/data/datasets.html',
            left: "right",
            textStyle: {
                color: "#000"
            }
        },
        tooltip: {
            // 提示框
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2
        },
        visualMap: {
            // 视觉映射组件
            type: "continuous",
            left: "right",
            min: 0,
            max: max,
            inRange: {
                color: [
                    "#e5f7ff",
                    "#096dd9"
                ]
            },
            text: [`最大值：${max}`, 0],
            textStyle: {
                color: "#000"
            }
            // calculable: true
        },
        toolbox: {
            // 工具导航
            show: true,
            left: "left",
            top: "top",
            feature: {
                // dataView: { readOnly: false },
                // restore: {},
                // saveAsImage: {}
            }
        },
        dataset: {
            source: data
        },
        series: {
            // 地图,可以是数组，多个
            label: {
                show: true, //显示省市名称
                position: [1, 100], // 相对的百分比
                fontSize: 12,
                offset: [2, 0],
                align: "left"
            },
            itemStyle: {
                areaColor: "#fff" // 地图图形颜色
            },
            type: "map",
            roam: true,
            map: "china",
            zoom: 1.2, // 当前视角的缩放比例
            scaleLimit: {
                max: 2,
                min: 1 // 设置默认缩放效果
            },
            top: "10%" // 距离顶部距离
        }
    };
};
