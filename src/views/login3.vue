<template>
    <div class="login3">
        <div class="head"></div>
        <div class="tu">
            <img src="../assets/logo1.png" height="130">
        </div>
        <div class="wenzi" style="height: 50px; width: 100%; background-color: #f4f5f5; font-size: 16px;color: #909DB7;font-family: Arial;">
            你好，欢迎登录
        </div>
        <div class="form">
            <div class="left1"></div>
            <div class="between" style="background-color: #ffffff; ! important">
                <input type="text" v-model="loginform.username" placeholder="手机号">
            </div>
            <div class="left1"></div>
        </div>
        <div class="form">
            <div class="left1"></div>
            <div class="between" style="background-color: #ffffff; ! important">
                <input type="password" v-model="loginform.password" placeholder="密码">
            </div>
            <div class="left1"></div>
        </div>
        <div class="anniu">
            <mu-button style="background-color: #99CC66; color: #E4F1F5;font-size: 20px;height: 47px; width: 93%;! important" @click="login">
                登录</mu-button>
        </div>
        <div class="register">
            <a href="" @click="$router.push({name: 'Register'})">注册</a>
        </div>

        <div class="bank" style="height: 50px; width: 100%;"></div>
        <div class="shang">会议室预订管理系统</div>
        <div class="shang">
            ©make by <a
                href="https://github.com/unamedgroup" target="_blank">https://github.com/unamedgroup</a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "login3",
        data(){
            return{
                loginform: {
                    username: this.$route.params.username,
                    password: '123456',
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
                    this.$store.dispatch('Login',this.loginform).then(()=> {
                        this.$store.dispatch('getUserID').then(() => {
                            console.log("我的ID："+this.$store.state.userID);
                            this.$store.dispatch('getmeetings', this.$store.state.userID).then(()=>{
                                console.log("我的会议：");
                                console.log(this.$store.state.meetings);
                            }).then(()=>{
                                this.$router.push({path: this.redirect || '/zhuye'});
                            })
                        }).catch(()=>{
                            console.log('Error');
                        });

                    })

                }
            }

        }
    }
</script>

<style scoped>
    .Login{
        background-color: #f4f5f5;
    }
    .head{
        height: 80px;
        width: 100%;
        background-color: #f4f5f5;
    }

    .tu{
        height: 200px;
        width: 100%;
        background-color: #f4f5f5;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;

    }


    .wenzi{
        height: 50px;
        width: 100%;
        background-color: #f4f5f5;
        font-size: 16px;
        color: #909DB7;
        font-family: 宋体;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .form{
        height: 55px;
        width: 100%;
        background-color: #f4f5f5;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .left1{
        height: 55px;
        width: 3%;
        background-color: #f4f5f5;
        float: left;

    }

    .between{
        height: 50px;
        width: 94%;
        background-color: #ffffff;
        float: left;
        border:0.5px solid #e7ecee;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        border-radius:4px;
    }

    input{
        height: 35px;
        width: 90%;
        border:none;
        outline:medium;
    }

    .anniu{
        height: 80px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .register{
        height: 30px;
        width: 100%;
        color: #909db7;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 16px;
    }

    a{
        text-decoration: none;
        border-bottom: 1px solid #909db7;
        color: #909db7;
    }

    .shang{
        height: 22px;
        width: 100%;
        color: #909db7;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 16px;
    }
</style>
