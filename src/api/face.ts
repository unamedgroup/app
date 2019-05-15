// @ts-ignore
import request from '../util/request';
// @ts-ignore
import { stringify } from 'qs';
// @ts-ignore


export function setface(userID, imgStr) {
    return request({
        url: '/bioFeature/set',
        method: 'post',
        data: stringify({
            userID,
            imgStr,
        }),
    });
}
