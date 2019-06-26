
// @ts-ignore
import request from '../util/request';
// @ts-ignore
import { stringify } from 'qs';
// @ts-ignore
export function getconference(userID) {
    return request({
        url: '/user/myConferences',
        method: 'get',
        params: {
            userID,
        },
    });

}


// @ts-ignore
export function deleteconference(conferenceID) {
    return request({
        url: '/conference/cancel',
        method: 'post',
        data: stringify({
            conferenceID,
        }),
    });
}
