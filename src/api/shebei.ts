
// @ts-ignore
import request from '../util/request';

// @ts-ignore
import { stringify } from 'qs'

export function aircondition(){
    return request({
        url: '/devices/airCondition',
        method: 'post',
    });
}

export function projector(){
    return request({
        url: '/devices/projector',
        method: 'post',
    });
}

// @ts-ignore
export function door(userID) {
    return request({
        url: '/devices/door',
        method: 'post',
        data: stringify({
            userID,
        }),
    });
}
