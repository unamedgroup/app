// @ts-ignore
import request from '../util/request'
// @ts-ignore
import { stringify } from 'qs'
// @ts-ignore
export function login(phoneNumber,password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: stringify({
            phoneNumber,
            password,
        }),
    })
}

// @ts-ignore
export function getInfo(token) {
    return request({
        url: '/user/role',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post',
    });
}

export function test() {
    return request({
        url: '/user/test',
        method: 'get',
    });
}

// @ts-ignore
export function register(password,realName,department,email,phoneNumber,userGroup){
    return request({
        url: '/user/signup',
        method: 'post',
        data: stringify({
            password,
            realName,
            department,
            email,
            phoneNumber,
            userGroup,
        }),
    });
}
