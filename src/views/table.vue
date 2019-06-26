<template>
    <div class="table">
        <!--<div class="header">-->
            <!--<div class="left1">-->
                <!--<img src="../assets/back.png">-->
            <!--</div>-->
            <!--<div class="middle1">预约会议</div>-->
            <!--<div class="right1"></div>-->
        <!--</div>-->
        <!--<div class="middle">-->
            <!--<mu-carousel>-->
                <!--<mu-carousel-item>-->
                    <!--<img :src="first" height="240">-->
                <!--</mu-carousel-item>-->
                <!--<mu-carousel-item>-->
                    <!--<img :src="second" height="240">-->
                <!--</mu-carousel-item>-->
                <!--<mu-carousel-item>-->
                    <!--<img :src="third" height="240">-->
                <!--</mu-carousel-item>-->
                <!--<mu-carousel-item>-->
                    <!--<img :src="forth" height="240">-->
                <!--</mu-carousel-item>-->
            <!--</mu-carousel>-->
        <!--</div>-->
        <!--<div class="footer">-->
            <!--<div class="black"></div>-->
            <!--<mu-form :model="form">-->
                <!--<div class="biao">-->
                    <!--<mu-text-field v-model="form.subject" label="会议主题" type="input" label-float></mu-text-field>-->
                <!--</div>-->
                <!--<div class="black" style="height: 20px; width: 100%;"></div>-->
                <!--<div class="biao">-->
                    <!--<mu-date-input v-model="form.startTime" label="开始时间" type="dateTime" label-float></mu-date-input>-->
                <!--</div>-->
                <!--<div class="black" style="height: 20px; width: 100%;"></div>-->
                <!--<div class="biao">-->
                    <!--<mu-date-input v-model="form.endTime" label="结束时间" type="dateTime" label-float></mu-date-input>-->
                <!--</div>-->
                <!--<div class="black" style="height: 20px; width: 100%;"></div>-->
                <!--<div class="biao">-->
                    <!--<mu-text-field v-model="form.user" label="申请人" type="input" label-float ></mu-text-field>-->
                <!--</div>-->
                <!--<div class="black" style="height: 20px; width: 100%;"></div>-->
                <!--<div class="biao">-->
                    <!--<mu-text-field v-model="form.room" label="会议室" type="input" label-float ></mu-text-field>-->
                <!--</div>-->
                <!--<div class="black" style="height: 20px; width: 100%;"></div>-->
                <!--<div class="biao">-->
                    <!--<mu-text-field v-model="form.number" label="与会人数" type="input" label-float ></mu-text-field>-->
                <!--</div>-->
            <!--</mu-form>-->
            <!--<div class="black" style="height: 20px; width: 100%;"></div>-->
            <!--<div class="biao">-->
                <!--<mu-button color="success" v-on:click.prevent="post">提交</mu-button>-->
            <!--</div>-->

        <!--</div>-->
        <div class="header">
            <div class="left" @click="back">
                <img src="../assets/back.png">
            </div>
            <div class="middle">预订会议</div>
            <div class="right"></div>
        </div>
        <div class="bank" style="height: 15px; width: 100%; background-color: #f3f5f7"></div>
        <div class="form1">
            <div class="subject1">
                <div class="bian" style="height: 80px; width: 5%; background-color: #ffffff; float: left;"></div>
                <div class="body1" style="height: 80px; width: 28%; background-color: #ffffff; float: left; font-family: 黑体; font-size: 20px">
                    会议主题：
                </div>
                <div class="kuang" style="height: 80px; width: 67%; float: left; background-color: #ffffff">
                    <input v-model="form.subject" placeholder="请输入会议主题">
                </div>
            </div>

            <div class="jiange" style="height: 1px; width: 100%;">
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1px; width: 90%; background-color: #efefef; float: left"></div>
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
            </div>

            <div class="subject1">
                <div class="bian" style="height: 80px; width: 5%; background-color: #ffffff; float: left;"></div>
                <div class="body1" style="height: 80px; width: 28%; background-color: #ffffff; float: left; font-family: 黑体; font-size: 20px">
                    开始时间：
                </div>
                <div class="kuang" style="height: 80px; width: 67%; float: left; background-color: #ffffff; font-family: 黑体; font-size: 18px" @click="open('datePicker1')">
                    {{ start }}

                </div>
            </div>

            <div class="jiange" style="height: 1px; width: 100%;">
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1px; width: 90%; background-color: #efefef; float: left"></div>
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
            </div>

            <div class="subject1">
                <div class="bian" style="height: 80px; width: 5%; background-color: #ffffff; float: left;"></div>
                <div class="body1" style="height: 80px; width: 28%; background-color: #ffffff; float: left; font-family: 黑体; font-size: 20px">
                    结束时间：
                </div>
                <div class="kuang" style="height: 80px; width: 67%; float: left; background-color: #ffffff; font-family: 黑体; font-size: 18px" @click="open('datePicker2')">
                    {{ end }}

                </div>
            </div>

            <div class="jiange" style="height: 1px; width: 100%;">
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1px; width: 90%; background-color: #efefef; float: left"></div>
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
            </div>

            <div class="subject1">
                <div class="bian" style="height: 80px; width: 5%; background-color: #ffffff; float: left;"></div>
                <div class="body1" style="height: 80px; width: 28%; background-color: #ffffff; float: left; font-family: 黑体; font-size: 20px">
                    与会人数：
                </div>
                <div class="kuang" style="height: 80px; width: 67%; float: left; background-color: #ffffff">
                    <input v-model="form.number" placeholder="请输入与会人数">
                </div>
            </div>

            <div class="jiange" style="height: 1px; width: 100%;">
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1px; width: 90%; background-color: #efefef; float: left"></div>
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
            </div>

            <div class="subject1">
                <div class="bian" style="height: 80px; width: 5%; background-color: #ffffff; float: left;"></div>
                <div class="body1" style="height: 80px; width: 28%; background-color: #ffffff; float: left; font-family: 黑体; font-size: 20px">
                    申请人：
                </div>
                <div class="kuang" style="height: 80px; width: 67%; float: left; background-color: #ffffff">
                    <input v-model="form.user">
                </div>
            </div>
            <div class="jiange" style="height: 1px; width: 100%;">
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1px; width: 90%; background-color: #efefef; float: left"></div>
                <div class="zuo" style="height: 1px; width: 5%; background-color: #fefefe; float: left"></div>
            </div>

            <div class="subject1">
                <div class="bian" style="height: 80px; width: 5%; background-color: #ffffff; float: left;"></div>
                <div class="body1" style="height: 80px; width: 28%; background-color: #ffffff; float: left; font-family: 黑体; font-size: 20px">
                    会议室：
                </div>
                <div class="kuang" style="height: 80px; width: 67%; float: left; background-color: #ffffff">
                    <input v-model="form.room">
                </div>
            </div>
        </div>
        <mt-datetime-picker
                ref="datePicker2"
                type="datetime"
                v-model="end"
                year-format="{value}"
                month-format="{value}"
                date-format="{value}"
                hour-format="{value}"
                minute-format="{value}"
                @confirm="handleConfirm2">
        </mt-datetime-picker>
        <mt-datetime-picker
                            ref="datePicker1"
                            type="datetime"
                            v-model="start"
                            year-format="{value}"
                            month-format="{value}"
                            date-format="{value}"
                            hour-format="{value}"
                            minute-format="{value}"
                            @confirm="handleConfirm1">
        </mt-datetime-picker>
        <div class="footer">
            <mu-flex justify-content="center" align-items="center">
                <mu-button round color="success" @click="post">提交</mu-button>
            </mu-flex>
        </div>

        <div class="bank" style="height: 300px; width: 100%; background-color: #ffffff"></div>
    </div>
</template>

<script>
    import { formatDateMin } from "../util/formatdate"
    import first from '../assets/first.jpg'
    import second from '../assets/second.jpg'
    import third from '../assets/third.jpg'
    import forth from '../assets/forth.jpg'
    export default {
        name: "table",
        data() {
            return {
                options: [
                    '1', '2', '3', '4',
                    '5', '6', '7', '8',
                    '9', '10'
                ],
                labelPosition: 'top',
                form: {
                    subject: '',
                    room: this.$route.params.roomID,
                    startTime: this.$store.state.startTime,
                    endTime: this.$store.state.endTime,
                    user: this.$store.state.userID,
                    number: this.$route.params.capacity,
                    status: 1,
                },
                start: '',
                end: '',
                first,
                second,
                third,
                forth,
            }
        },
        created(){
            let now = new Date();
            let that = this;
            that.start = formatDateMin(now);
            that.end = formatDateMin(now);
        },
        methods: {
                post: function () {
                    // this.form.startTime = getDateTime(this.form.startTime);
                    // this.form.endTime = getDateTime(this.form.endTime);
                this.$store.dispatch('orderMeeting', this.form).then(() => {
                    console.log('Jump');
                    this.$messagebox.alert("预订成功！").then(()=>{
                        this.$router.push({path: this.redirect || '/zhuye'});
                    });

                    console.log('End Jump')
                }).catch(() => {
                    console.log('Error');
                })
            },
            back(){
                this.$router.push({path: '/zhuye'});
            },
            open(picker) {
                this.$refs[picker].open();
            },
            handleConfirm1(value){
                this.start = formatDateMin(value);
                this.form.startTime = this.start;
                console.log("开始时间是："+this.form.startTime);
            },
            handleConfirm2(value){
                this.end = formatDateMin(value);
                this.form.endTime = this.end;
                console.log("结束时间是："+this.form.endTime);
            }
        },
    }

</script>

<style scoped>
    .header{
        height: 60px;
        width: 100%;
    }

    .left,.right{
        height: 60px;
        width: 25%;
        background-color: #ffffff;
        float: left;
        display: flex;
        align-items: center;
    }

    .middle {
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
        font-size: 25px;
        font-weight: bolder;
        background-color: #ffffff;
    }

    .subject1{
          height: 80px;
          width: 100%;
      }

    .body1{
        display: flex;
        align-items: center;

    }

    .kuang{
        display: flex;
        align-items: center;
    }

    input{
        height: 40px;
        width: 100%;
        font-size: 18px;
        font-family: 黑体;
        border: 0;
        outline: none;
    }

    .footer{
        height: 80px;
        width: 100%;
        background-color: #ffffff;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

</style>
