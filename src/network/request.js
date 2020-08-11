import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000/api/z8",
        timeout: 5000
    });

    // 请求拦截器
    instance.interceptors.request.use(
        config => {
            console.log(config);
            return config
        },
        err => {
            console.log(err);
        }
    );
    // 响应拦截器
    instance.interceptors.response.use(
        res => {
            return res.data;
        },
        err => {}
    );
    return instance(config);

}
