<template>
    <div class="shebei">
        <div class="tutu">
            <div class="wenzi">
                <div class="left" style="height: 60px; width: 20%; display: flex;align-items: center; float: left;" v-on:click="back">
                <img src="../assets/back.png" height="28">
                </div>
                <div class="middle" style="width: 60%; font-weight: bold; font-size: 24px;">
                设备遥控器
                </div>
            </div>
        </div>
        <div class="jiange" style="height: 25px; width: 100%; background-color: #f8fef0;"></div>
        <div class="remote">
            <div class="zuo">
                <div class="card">
                    <div class="shang">
                        投影仪
                    </div>
                    <div class="xia">
                        <div class="xialeft">
                            <img src="../assets/touying.png" width="40">
                        </div>
                        <div class="xiaright" @click="Openprojector">
                            <img src="../assets/control.png" width="40">
                        </div>
                    </div>
                </div>
            </div>
            <div class="you">
                <div class="card">
                    <div class="shang">
                        显示屏
                    </div>
                    <div class="xia">
                        <div class="xialeft">
                            <img src="../assets/reflect.png" width="48">
                        </div>
                        <div class="xiaright" >
                            <img src="../assets/control.png" width="40">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="jiange" style="height: 25px; width: 100%; background-color: #f8fef0;"></div>

        <div class="remote">
            <div class="zuo">
                <div class="card">
                    <div class="shang">
                        转换器
                    </div>
                    <div class="xia">
                        <div class="xialeft">
                            <img src="../assets/change.png" width="40">
                        </div>
                        <div class="xiaright" >
                            <img src="../assets/control.png" width="40">
                        </div>
                    </div>
                </div>
            </div>
            <div class="you">
                <div class="card">
                    <div class="shang">
                        追光灯
                    </div>
                    <div class="xia">
                        <div class="xialeft">
                            <img src="../assets/deng.png" width="48">
                        </div>
                        <div class="xiaright" >
                            <img src="../assets/control.png" width="40">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="jiange" style="height: 25px; width: 100%; background-color: #f8fef0;"></div>
        <div class="remote" style="display: -webkit-flex;display: flex;-webkit-align-items: center;align-items: center;-webkit-justify-content: center;justify-content: center;">
            <div class="kongtiao">
                <div class="shang">
                    空调
                </div>
                <div class="xia" style="background-color: aquamarine">
                    <div class="left1">
                        <img src="../assets/kongtiao.png">
                    </div>
                    <div class="middle1">
                        27℃
                    </div>
                    <div class="right1" @click="Openair">
                        <img src="../assets/control.png" width="40">
                    </div>
                </div>
            </div>
        </div>

        <div class="jiange" style="height: 55px; width: 100%; background-color: #f8fef0;"></div>
        <!--<div class="bank" style="height: 15px; width: 100%; background-color: #f3f5f7"></div>-->
        <!--<div class="form">-->
            <!--<div class="bank"></div>-->
            <!--<div class="black">-->
                <!--<img src="../assets/touying.png">-->
            <!--</div>-->
            <!--<div class="wenzi">投影仪</div>-->
            <!--<div class="kongbai"></div>-->
            <!--<div class="photo" v-if="this.state1==0" @click="add1"><img src="../assets/kai.png" height="40"></div>-->
            <!--<div class="photo" v-if="this.state1==1" @click="decline1"><img src="../assets/guan.png" height="40"></div>-->
        <!--</div>-->
        <!--<div class="bank" style="height: 1.2px; width: 100%; background-color: #efefef"></div>-->
        <!--<div class="form">-->
            <!--<div class="bank"></div>-->
            <!--<div class="black">-->
                <!--<img src="../assets/reflect.png">-->
            <!--</div>-->
            <!--<div class="wenzi">显示屏</div>-->
            <!--<div class="kongbai"></div>-->
            <!--<div class="photo" v-if="this.state2==0" @click="add2"><img src="../assets/kai.png" height="40"></div>-->
            <!--<div class="photo" v-if="this.state2==1" @click="decline2"><img src="../assets/guan.png" height="40"></div>-->
        <!--</div>-->
        <!--<div class="bank" style="height: 1.2px; width: 100%; background-color: #efefef"></div>-->
        <!--<div class="form">-->
            <!--<div class="bank"></div>-->
            <!--<div class="black">-->
                <!--<img src="../assets/change.png">-->
            <!--</div>-->
            <!--<div class="wenzi">转换器</div>-->
            <!--<div class="kongbai"></div>-->
            <!--<div class="photo" v-if="this.state3==0" @click="add3"><img src="../assets/kai.png" height="40"></div>-->
            <!--<div class="photo" v-if="this.state3==1" @click="decline3"><img src="../assets/guan.png" height="40"></div>-->
        <!--</div>-->
        <!--<div class="bank" style="height: 1.2px; width: 100%; background-color: #efefef"></div>-->
        <!--<div class="form">-->
            <!--<div class="bank"></div>-->
            <!--<div class="black">-->
                <!--<img src="../assets/deng.png">-->
            <!--</div>-->
            <!--<div class="wenzi">追光灯</div>-->
            <!--<div class="kongbai"></div>-->
            <!--<div class="photo" v-if="this.state4==0" @click="add4"><img src="../assets/kai.png" height="40"></div>-->
            <!--<div class="photo" v-if="this.state4==1" @click="decline4"><img src="../assets/guan.png" height="40"></div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "shebei",
        data () {
            return {
                // state1: 0,
                // state2: 0,
                // state3: 0,
                // state4: 0,
            }
        },
        methods: {
            back(){
                this.$router.push({path: '/zhuye'});
            },
            Openprojector(){
                this.$store.dispatch('openprojector');
            },
            Openair(){
                this.$store.dispatch('openair');
            }
        }
    }
</script>

<style scoped>
    .middle{
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 60px;
    }

    .tutu{
        height:180px;
        width: 100%;
        background-image: url("../assets/background.jpg");
        background-repeat: no-repeat;
        background-position: center;
    }

    .wenzi{
        height: 60px;
        width: 100%;
    }

    .remote{
        height: 150px;
        width: 100%;
        background-color: #f8fef0;
    }

    .zuo{
        height: 150px;
        width: 50%;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .shang{
        height: 60px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        color: #555555;
        font-family: 黑体;
        font-size: 22px;
        font-weight: bolder;
        border-top-left-radius:30px;
    }

    .xia{
        height: 60px;
        width: 100%;
    }

    .xialeft{
        height: 60px;
        width: 50%;
        float: left;
        background-color: #ffffff;
        border-bottom-left-radius:30px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .xiaright{
        height: 60px;
        width: 50%;
        float: left;
        background-color: #ffffff;
        border-bottom-right-radius:30px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .card{
        height: 130px;
        width: 90%;
        background-color: #ffffff;
        border-top-right-radius:30px;
        border-bottom-left-radius:30px;
        border-bottom-right-radius:30px;
        border-top-left-radius:30px;
    }
    .you{
        height: 150px;
        width: 50%;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .kongtiao{
        height: 130px;
        width: 95%;
        background-color: #ffffff;
        border-top-right-radius:30px;
        border-bottom-left-radius:30px;
        border-bottom-right-radius:30px;
        border-top-left-radius:30px;
    }

    .left1,.right1{
        height: 60px;
        width: 25%;
        float: left;
        background-color: #ffffff;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .middle1{
        height: 60px;
        width: 50%;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-family: 黑体;
        font-size: 28px;
        color: #999999;
        background-color: #ffffff;
        font-weight: bolder;
    }
    /*.form{*/
        /*height: 70px;*/
        /*width: 100%;*/
        /*background-color: rebeccapurple;*/
        /*float: left;*/
    /*}*/

    /*.bank{*/
        /*height: 70px;*/
        /*width: 4%;*/
        /*float: left;*/
        /*background-color: #fefefe;*/
    /*}*/

    /*.black{*/
        /*height: 70px;*/
        /*width: 15%;*/
        /*background-color: #fefefe;*/
        /*float: left;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-webkit-align-items: center;*/
        /*align-items: center;*/
        /*-webkit-justify-content: center;*/
        /*justify-content: center;*/
    /*}*/

    /*.wenzi{*/
        /*height: 70px;*/
        /*width: 20%;*/
        /*background-color: #fefefe;*/
        /*font-weight: bold;*/
        /*font-family: 黑体;*/
        /*font-size: 24px;*/
        /*float: left;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-webkit-align-items: center;*/
        /*align-items: center;*/
        /*-webkit-justify-content: center;*/
        /*justify-content: center;*/
    /*}*/

    /*.kongbai{*/
        /*height: 70px;*/
        /*width: 40%;*/
        /*background-color: #fefefe;*/
        /*float: left;*/
    /*}*/

    /*.photo{*/
        /*height: 70px;*/
        /*width: 21%;*/
        /*background-color: #fefefe;*/
        /*float: left;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-webkit-align-items: center;*/
        /*align-items: center;*/
        /*-webkit-justify-content: center;*/
        /*justify-content: center;*/
    /*}*/

</style>
