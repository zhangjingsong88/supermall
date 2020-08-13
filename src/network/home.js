import { request } from "./request";

export function getHmoeMultiData() {
    return request({
        url: "/home/multidata"
    });
}

export function getHmoeGoods(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    });
}
