// @ts-ignore
import request from '../util/request'
// @ts-ignore
import { stringify } from 'qs'



// @ts-ignore
export function ordermeeting(subject, room, startTime, endTime, user, number, status) {
    return request({
        url: '/conference/order',
        method: 'post',
        data: stringify({
            subject,
            room,
            startTime,
            endTime,
            user,
            number,
            status,
        }),
    });
}
