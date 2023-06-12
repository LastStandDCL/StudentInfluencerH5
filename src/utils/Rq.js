import GlobalParams from "../Globals";
import axios from "axios";

axios.defaults.timeout = 10000;
axios.defaults.baseURL = GlobalParams.backendUrl;

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        if (response.data.errCode === 2) {
            console.log("过期");
        }
        console.log(response);
        return response;
    },
    (error) => {
        console.log(error)
    }
);

/**
 * 封装get方法，不带token
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function getWithoutToken(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            resolve(response);
        })
            .catch((error) => {
                reject(error);
            });
    });
}


/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('v5_token'),
                "Content-Type": "application/json",
            }
        }).then((response) => {
            resolve(response);
        })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('v5_token'),
                "Content-Type": "application/json",
            }
        }).then(
            (response) => {
                //关闭进度条
                resolve(response);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * 封装post请求，不带token
 * @param url
 * @param data
 * @returns {Promise}
 */
export function postWithoutToken(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(
            (response) => {
                //关闭进度条
                resolve(response);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

//文件上传统一接口处理，返回数据
export function postForm(path, formBody) {
    fetch(GlobalParams.backendUrl + path, {
        method: 'post',
        body: formBody,
    }).then(response => response.json())
        .then(data => {
            console.log(data);
        });
}