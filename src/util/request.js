import axios from "axios";
import {getToken} from "./auth";
import store from '../store'
import MessageBox from "mint-ui/packages/message-box/src/message-box";

const service = axios.create({
    // baseURL: 'http://47.103.6.243:8080',
    // baseURL: 'http://172.26.177.59:8080',
    baseURL: 'http://172.19.138.203:8080',
    timeout: 5000
});


service.interceptors.request.use(
    config => {
        console.log('发请求'+getToken());
        if(store.state.token){
            config.headers.Authorization = getToken();
        }
        console.log('付彤加油');
        return config
    },
    error => {
        console.log('Request:' + error );
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {

        console.log('Resp=>');
        if(response==null){
            MessageBox.alert(0);
        }
        const res = response.data;
        console.log(response.data);
        if(res.status==0 && res.data=="设置人脸成功"){
            MessageBox.alert(res.data);
        }
        if(res.status==200){
            MessageBox.alert("开启成功！");
        }
        if(res.status !== 0 && res.status!==7002){
            // Message({
            //     message: res.message,
            //     type: 'error',
            //     duration: 5 * 1000
            // });
            MessageBox.alert(res.message);
            if(res.status ===50008 || res.status === 50012 || res.status === 50014) {
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() =>{
                    store.dispatch('FedLogOut').then(()=> {
                        location.reload();
                    })
                })
            }
            return Promise.reject('error');
        }else{
            console.log('Resp return');
            console.log(response.data);
            return response.data;
        }
    },
    error => {
        console.log('ResponseError:' + error);
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // });
        MessageBox.alert(error.message);
        return Promise.reject(error)
    }
);

export default service
