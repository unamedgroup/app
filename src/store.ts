import Vue from 'vue';
import Vuex from 'vuex';
import {getToken, removeToken, setToken} from '@/util/auth';
import {getInfo, login, logout} from '@/api/login';
import {ordermeeting} from '@/api/order';
import {getroom, getroomObj, getuserID} from '@/api/getfreeroom';
import {deleteconference, getconference} from '@/api/getMymeeting';
import {addconPeople, getUser, SeePeople} from '@/api/user';
import {setface} from '@/api/face';
import {reject} from 'q';
import 'muse-ui-message/dist/muse-ui-message.css';
// @ts-ignore
import {MessageBox} from "mint-ui/packages/message-box/src/message-box";

Vue.use(Vuex);

// @ts-ignore
// @ts-ignore
export default new Vuex.Store({
  state: {
      token: getToken(),
      name: '',
      avatar: '',
      roles: 0,
      meetingrooms:[],
      userID: '',
      meetings: [],
      startTime: '',
      endTime: '',
      userlist: [],
      conPeople: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      console.log('Vuex Set Token');
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_MEETINGROOMS: (state, meetingrooms) => {
      state.meetingrooms = meetingrooms;
    },
    SET_USERID: (state, userid) => {
      state.userID = userid;
    },
    SET_MEETINGS: (state, meetings) => {
      state.meetings = meetings;
    },
    SET_STARTIME: (state, starttime) => {
      state.startTime = starttime;
      console.log('保存', state.startTime);
    },
    SET_ENDTIME: (state, endtime) => {
      state.endTime = endtime;
      console.log('获取', state.endTime);
    },
    SET_USERLIST: (state, userlist) => {
      state.userlist = userlist;
    },
    SET_CONPEOPLE: (state, conpeople) => {
      state.conPeople = conpeople;
    },
    },
  // @ts-ignore
  actions: {
      Login({ commit }, userInfo) {
        const username = userInfo.username.trim();
        return new Promise(((resolve, reject) => {
          // @ts-ignore
          login(username, userInfo.password).then(response => {
            const data = response.data;
            console.log(response);
            setToken(data);
            commit('SET_TOKEN', data);
            resolve()
            // @ts-ignore
          }).catch(error => {
            reject(error);
          });
        }));
      },

    GetInfo({ commit, state}) {
        return new Promise((resolve, reject) => {
          // @ts-ignore
          getInfo(state.token).then(response => {
            const data = response.data;
            console.log('Vuex GetInfo=>');
            console.log(response);
            if(data.role >= 0) {
              commit('SET_ROLES', data.role.name);
              console.log(data.role);
            } else {
              reject('getInfo: roles must be a non-null array!')
            }
            resolve(response);
            // @ts-ignore
          }).catch(error => {
            reject(error);
          });
        });
    },

    Logout({ commit, state}) {
        return new Promise((resolve, reject) => {
          // @ts-ignore
          logout(state.token).then(() => {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', 0);
            removeToken();
            resolve()
            // @ts-ignore
          }).catch(error => {
            reject(error);
          });
        });
    },

    FedLogOut({ commit }) {
        return new Promise((resolve) => {
          commit('SET_TOKEN', '');
          removeToken();
          resolve();
        });
    },


    orderMeeting({ commit }, form) {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        ordermeeting(form.subject, form.room, form.startTime, form.endTime, form.user, form.number, form.status).then(response => {
          const data = response.data;
          console.log(response);
          resolve()
          // @ts-ignore
        }).catch(error => {
          reject(error);
        });
      });
    },


    getFreeRoom({ commit }, form){
      return new Promise((resolve, reject) => {
        // @ts-ignore
        getroom(form.start, form.end).then(response => {
          const data = response.data;
          console.log(response);
          commit('SET_MEETINGROOMS',data);
          // @ts-ignore
          // getroomObj(2).then(response => {
          //   console.log(response);
          // });
          resolve()
          // @ts-ignore
        }).catch(error => {
          reject(error);
        });
      });
    },


    getUserID({ commit }) {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        getuserID().then(response => {
          const data = response.data;
          console.log(response);
          commit('SET_USERID',data);
          resolve()
          // @ts-ignore
        }).catch(error => {
          reject(error);
        });
      });
    },

    getmeetings({ commit }, userid){
      return new Promise((resolve, reject) => {
        // @ts-ignore
        getconference(userid).then(response => {
          const data = response.data;
          console.log(response);
          commit('SET_MEETINGS',data);
          resolve()
          // @ts-ignore
        }).catch(error => {
          reject(error);
        });
      });
    },


    deletemeeting({ commit }, conferenceID){
        return new Promise((resolve, reject) => {
          // @ts-ignore

          deleteconference(conferenceID).then((response) => {
            const data = response.data;
            console.log(response);
            resolve();
            // @ts-ignore
          }).catch((error) => {
            reject(error);
          });
        });
    },

    // // @ts-ignore
    // setFace({ commit }, code, userid ) {
    //   return new Promise((resolve, reject) => {
    //     // @ts-ignore
    //     setface(code,userid).then((response)=> {
    //       const data = response.data;
    //       console.log(response);
    //       resolve();
    //       // @ts-ignore
    //     }).catch((error)=>{
    //       reject(error);
    //     });
    //   });
    // },

    getuser({ commit }, realName){
      return new Promise((resolve, reject) => {
        // @ts-ignore

        getUser(realName).then((response) => {
          const data = response.data;
          console.log("lalalal");
          commit('SET_USERLIST', data);
          resolve();
          // @ts-ignore
        }).catch((error) => {
          reject(error);
        });
      });
    },


    // @ts-ignore
    setFace({ commit }, form ) {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        setface(form.userID, form.imgStr).then((response) => {
          const data = response.data;
          console.log(response);
          // @ts-ignore
          resolve();
          // @ts-ignore
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // @ts-ignore
    addPeople({ commit }, form)
    {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        addconPeople(form.userIdList, form.conferenceID).then((response) => {
          const data = response.data;
          console.log(response);
          resolve();
          // @ts-ignore
        }).catch((error) => {
          reject(error);
        });
      });
    },

    SeePeople({ commit },conferenceID)
    {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        SeePeople(conferenceID).then((response) => {
          const data = response.data;
          console.log(response);
          commit('SET_CONPEOPLE', response);
          resolve();
          // @ts-ignore
        }).catch((error) => {
          reject(error);
        });
      });
    },
  },
});
