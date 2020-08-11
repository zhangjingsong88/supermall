import { request } from "./request";

export function getHmoeMultiData() {
    return request({
        url: "/home/multidata"
    });
}
