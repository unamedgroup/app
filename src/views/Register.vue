<template>
    <div id="Register">
        <div class="tu">
            <img src="../assets/logo1.png" height="130">
        </div>
        <div class="bank" style="height: 10px; width: 100%;"></div>
        <div class="wenzi">用户注册</div>
        <div class="form">
            <div class="left1"></div>
            <div class="between" style="background-color: #ffffff; ! important">
                <input type="text" placeholder="姓名" v-model="loginform.realName" @focus="showNone">
            </div>
            <div class="left1"></div>
        </div>

        <div class="form">
            <div class="left1"></div>
            <div class="between" style="background-color: #ffffff; ! important">
                <input type="text" placeholder="手机号" v-model="loginform.phoneNumber" @focus="showNone">
            </div>
            <div class="left1"></div>
        </div>

        <div class="form">
            <div class="left1"></div>
            <div class="between" style="background-color: #ffffff; ! important">
                <input type="text" placeholder="邮箱地址" v-model="loginform.email" @focus="showNone">
            </div>
            <div class="left1"></div>
        </div>

        <div class="form">
            <div class="left1"></div>
            <div class="between" style="background-color: #ffffff; ! important">
                <input type="password" placeholder="密码" v-model="loginform.password" @focus="showNone">
            </div>
            <div class="left1"></div>
        </div>

        <div class="form">
            <div class="left1"></div>
            <div class="between" style="background-color: #ffffff; ! important">
                <input type="text" placeholder="部门" v-model="loginform.department" @focus="showNone">
            </div>
            <div class="left1"></div>
        </div>

        <div class="anniu">
            <mu-button style="background-color: #99CC66; color: #E4F1F5;font-size: 20px;height: 47px; width: 93%;! important" @click="handleLogin">
                注册</mu-button>
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
        name: "Register",
        data(){
            return{
                loginform: {
                    realName: '',
                    phoneNumber: '',
                    email: '',
                    password: '',
                    department: '',
                    userGroup: -1,
                },
                show: false,
            }
        },
        methods:{
            handleLogin() {
                if (this.loginform.email === '') {
                    return this.$message.alert('邮箱不能为空');
                } else {
                    if (this.loginform.email !== '') {
                        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                        if (!reg.test(this.loginform.email)) {
                            return this.$message.alert('请输入有效的邮箱');
                        }
                    }
                }
                console.log(this.loginform.password);
                this.loginform.password = this.$md5(this.loginform.password);
                this.$store.dispatch('Register',this.loginform).then(res => {
                    if (this.$store.state.status==0) {
                        this.$message.alert('注册成功,请登录');
                        this.$router.push({
                            name: 'login3',
                            params: {
                                username: this.loginform.phoneNumber,
                                password: this.loginform.password,
                            }
                        })
                    }
                    else{
                        this.$router.go(0);
                        this.loginform.password="";
                    }
                })
            },
            showNone() {
                this.show = false;
            },
        }
    }
</script>

<style scoped>
    #Register{
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
        height: 40px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 16px;
        color: #909DB7;
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

    a{
        text-decoration: none;
        border-bottom: 1px solid #909db7;
        color: #909db7;
    }
</style>
