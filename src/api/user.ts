
// @ts-ignore
import request from '../util/request';
// @ts-ignore
import { stringify } from 'qs';
// @ts-ignore

export function getUser(realName) {
    return request({
        url: '/user/userList',
        method: 'get',
        params: {
            realName,
        },
    });
}

// @ts-ignore
export function addconPeople(userIdList, conferenceID)
{
    // @ts-ignore
    return request({
        url: '/conference/participants',
        method: 'post',
        data: stringify({
            userIdList,
            conferenceID,
        }),
    });
}


// @ts-ignore
export function SeePeople(conferenceID)
{
    // @ts-ignore
    return request({
        url: '/conference/participants',
        method: 'get',
        params:{
            conferenceID,
        },
    });
}

