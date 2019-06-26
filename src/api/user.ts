
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

export function getAll()
{
    return request({
        url: '/user/currentUserInfo',
        method: 'get',
    });
}


// @ts-ignore
export function updateMsg(email, phoneNumber)
{
    return request({
        url: '/user/currentUserInfo',
        method: 'post',
        data: stringify({
            email,
            phoneNumber,
        }),
    });
}

// @ts-ignore
export function updateEmail(userID,email)
{
    return request({
        url: '/userManage/modifyEmail',
        method: 'post',
        data: stringify({
            userID,
            email,
        }),
    });
}

// @ts-ignore
export function updatePhone(userID,phoneNumber)
{
    return request({
        url: '/userManage/modifyMobile',
        method: 'post',
        data: stringify({
            userID,
            phoneNumber,
        }),
    });
}
