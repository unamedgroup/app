<template>
    <div class="table2">
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
                {{ form.startTime }}

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
                {{ form.endTime }}

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
            v-model="form.endTime"
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
            v-model="form.startTime"
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
    export default {
        name: "table2",
        data(){
            return{
                form: {
                    subject: '',
                    room: this.$route.params.roomID,
                    startTime: this.$store.state.startTime,
                    endTime: this.$store.state.endTime,
                    user: this.$store.state.userID,
                    number: this.$route.params.capacity,
                    status: 1,
                },
            }
        },
        methods: {
            post: function () {
                this.form.startTime = formatDateMin(this.form.startTime);
                 this.form.endTime = formatDateMin(this.form.endTime);
                this.$store.dispatch('orderMeeting', this.form).then(() => {
                    console.log('Jump');
                    this.$messagebox.alert("预订成功！").then(()=>{
                        this.$store.dispatch('getmeetings', this.$store.state.userID).then(()=>{
                            console.log("我的会议：");
                            console.log(this.$store.state.meetings);
                        }).then(()=>{
                            this.$router.push({path: this.redirect || '/zhuye'});
                        }).catch(()=>{
                            console.log(error);
                        })
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

                this.form.startTime = formatDateMin(value);
                console.log("开始时间是："+this.form.startTime);
            },
            handleConfirm2(value){

                this.form.endTime = formatDateMin(value);
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
