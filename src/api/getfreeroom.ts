
// @ts-ignore
import { stringify } from 'qs'
// @ts-ignore
import request from '../util/request';

// @ts-ignore
export function getroom(start,end) {
    return request({
        url: '/room/free',
        method: 'get',
        params: {
            start,
            end,
        },
    });
}


// @ts-ignore
export function getroomObj(ID)
{
    return request({
        url: '/room/roomObject',
        method: 'get',
        params: {
            ID,
        },
    });
}


export function getuserID()
{
    return request({
        url: '/user/userID',
        method: 'get',
    });
}
