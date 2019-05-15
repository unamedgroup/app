<template>
    <div class="Login">
        <div class="zong">
            <div class="header"></div>
            <div class="middle">
                <div class="left"></div>
                <div class="zhong">
                    <div class="photo">
                        <img src="../assets/meeting.png" width="130" height="130">
                    </div>
                    <div class="wenzi">
                        智能会议室管理系统
                    </div>
                </div>
                <div class="right"></div>
            </div>
        </div>


        <div class="footer">
            <div class="user">
                <img src="../assets/phone.png" width="35" height="35">
                &nbsp;&nbsp;
                <input type="text" v-model="loginform.username">
            </div>

            <div class="password" style="padding-top: 30px;">
                <img src="../assets/password.png" width="35" height="35">
                &nbsp;&nbsp;
                <input type="password" v-model="loginform.password">
            </div>
        </div>

        <div class="zhengwen" style="height: 300px; width: 100%; background-color: #e7f3f3">
                <div class="login">
                    <mu-button style="background-color: #008181; color: #E4F1F5;font-size: 20px;height: 50px; width: 250px;! important" @click="login">
                        登&nbsp;&nbsp;&nbsp;&nbsp;录</mu-button>
                </div>



            <div class="qita">
                ------  其他方式登录  ------
            </div>
            <div class="fangshi">
                <div class="zuo"></div>
                <div class="zhong1">
                    <img src="../assets/face.png">
                </div>
                <div class="zhong2">
                    <img src="../assets/bangong.png" height="70" width="70">
                </div>
                <div class="zhong3">
                    <img src="../assets/Wechat.png">
                </div>
                <div class="you"></div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "Login",
        data(){
            return{
                loginform: {
                    username: '17685590508',
                    password: 'mengxiao',
                },

            }
        },
        methods: {
            login(){
                this.loginform.password=this.$md5(this.loginform.password);
                if (!this.loginform.username || !this.loginform.password) {
                    return this.$messagebox.alert('用户名和密码不能为空');
                }
                else{
                    this.$store.dispatch('Login', this.loginform).then(() => {
                        console.log('Jump');
                        this.$router.push({path: this.redirect || '/zhuye'});
                        console.log('End Jump')
                    }).catch(() => {
                        console.log('Error');
                    })
                }

            }
        }

    }
</script>

<style scoped>

    .header{
        height: 50px;
        width: 100%;
        background-color: #008181;
    }

    .zong{
        height: 280px;
        width: 100%;
        background-color: #008181;
    }
    .middle{
        height: 230px;
        width: 100%;
    }

    .left,.right{
        height: 230px;
        width: 10%;
        background-color: #008181;
        float: left;
    }

    .zhong{
        height: 230px;
        width: 80%;
        background-color: #e7f3f3;
        float: left;
    }

    .photo{
        height: 170px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .wenzi{
        height: 60px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 30px;
        color: #008181;
        font-family: 华文宋体;
        font-weight:bold;
    }

    .footer{
        height: 150px;
        width: 100%;
        background-color: #e7f3f3;
        padding-top: 40px;
    }

    input{
        width: 70%;
        height: 40px;
        border-bottom: 1px solid #dbdbdb;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        background-color: #e7f3f3;
        font-size: 25px;

    }

    .user,.password {
        height: 40px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .login{
        height: 60px;
        width: 100%;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }


    button{
        background-color: #008181; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 28px;
        margin: 4px 2px;
        cursor: pointer;
        width: 63%;
        height: 60px;
    }

    .qita{
        height: 80px;
        width: 100%;
        background-color: #e7f3f3;
        color: #008181;
        font-size: 20px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-weight:bold;
    }

    .fangshi{
        height: 100px;
        width: 100%;
        background-color: #e7f3f3;
    }

    .zuo{
        width: 9.5%;
        height: 100px;
        background-color: #e7f3f3;
        float: left;
    }

    .zhong1,.zhong2,.zhong3{
        float: left;
        width: 27%;
        height: 100px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .you{
        float: left;
        height: 100px;
        width: 9.5%;
    }
</style>
