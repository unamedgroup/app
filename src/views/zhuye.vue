<template>
    <div class="zhuye">
        <div class="kuang">
            <div class="header">
                智能会议室管理系统
            </div>
            <div class="tupian">
                <img src="../assets/meetingroom.jpg">
            </div>
            <div class="first">
                <router-link to="/rili2">
                    <div class="left">
                        <img src="../assets/reserve.png">
                        快速预订
                    </div>
                </router-link>
                <div class="middle"></div>
                <router-link to="/table">
                    <div class="right">
                        <img src="../assets/leader.png">
                        向导预订
                    </div>
                </router-link>
            </div>
            <div class="kong"></div>
            <div class="second">

                    <div class="left" @click="getmeeting">
                        <img src="../assets/myreser.png" width="65" height="65">
                        我的预约
                    </div>
                <div class="middle"></div>

                    <div class="right" @click="getid">
                        <img src="../assets/mymessage.png" width="65" height="65">
                        个人信息
                    </div>

            </div>
            <div class="kong"></div>
            <div class="third">
                <div class="left" v-on:click="open">
                    <img src="../assets/door.png" >
                    远程开门
                </div>
                <div class="middle"></div>
                <router-link to="/shebei">
                    <div class="right">
                        <img src="../assets/instrument.png">
                        开启设备
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zhuye",
        methods:{
            open(){
                this.$messagebox.alert("亲，门已开启！");
            },
            getmeeting(){
                this.$store.dispatch('getUserID').then(()=>{
                    this.$store.dispatch('getmeetings',this.$store.state.userID).then(()=>{
                        this.$router.push('/mymessage');
                    })
                })

            },
            getid() {
                this.$store.dispatch('getUserID').then(() => {

                    this.$router.push('/person');
                })

            }
        }
    }
</script>

<style scoped>
   .kuang{
       height: 600px;
       width: 100%;
       background-color: #e7f3f3;
   }

    .header{
        height: 50px;
        width: 100%;
        background-color: #008181;
        font-size: 25px;
        font-family: 仿宋;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        color: #ffffff;
    }

    .first{
        height: 125px;
        width: 100%;
        background-color: aquamarine;
    }

    .left,.right{
        height: 124px;
        float: left;
        width: 49.7%;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 25px;
        font-family: 仿宋;
        color: #008181;
    }
    .middle{
        height: 125px;
        float: left;
        width: 0.6%;
        background-color: #ffffff;
    }

    .kong{
        height: 2.5px;
        width: 100%;
        background-color: #ffffff;
    }
    .second{
        height: 124px;
        width: 100%;
        background-color: #e7f3f3;
    }
    .third{
        height: 124px;
        width: 100%;
        background-color: bisque;
    }
</style>
