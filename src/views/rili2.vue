<template>
    <div class="rili2">
        <div class="header">
            <div class="bian">
                <img src="../assets/back.png" @click="back">
            </div>
            <div class="wenzi">会议室查询</div>
        </div>
        <div class="jiange" style="height: 15px; width: 100%; background-color: #f3f5f7"></div>


       <div class="form">
           <div class="subject1">
               <div class="bian" style="height: 80px; width: 5%; background-color: #ffffff; float: left;"></div>
               <div class="body1" style="height: 80px; width: 28%; background-color: #ffffff; float: left; font-family: 黑体; font-size: 20px">
                   开始时间：
               </div>
               <div class="kuang" style="height: 80px; width: 67%; float: left; background-color: #ffffff; font-family: 黑体; font-size: 18px" @click="open('datePicker1')">
                   {{ startTime }}

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
                   {{ endTime }}

               </div>
           </div>
       </div>
        <mt-datetime-picker
                ref="datePicker2"
                type="datetime"
                v-model="endTime"
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
                v-model="startTime"
                year-format="{value}"
                month-format="{value}"
                date-format="{value}"
                hour-format="{value}"
                minute-format="{value}"
                @confirm="handleConfirm1">
        </mt-datetime-picker>
        <div class="anniu">
            <mu-flex justify-content="center" align-items="center" @click="getFree">
                <mu-button round color="success" style="width: 100px; font-size: 18px">查&nbsp;&nbsp;询</mu-button>
            </mu-flex>
        </div>
        <!--<div class="zhaopian">-->
            <!--<img src="../assets/room.png" width="410">-->
        <!--</div>-->
        <!--<div class="jiange" style="height: 40px; width: 100%; background-color: #e7f3f3"></div>-->
        <!--<div class="kuang">-->
            <!--<div class="kaishi">-->
                <!--<mu-date-input  icon="today" v-model="selectform.start" label="开始时间" type="dateTime" label-float full-width landscape></mu-date-input>-->
            <!--</div>-->
            <!--<div class="jieshu">-->
                <!--<mu-date-input  icon="today" v-model="selectform.end" label="结束时间" type="dateTime" label-float full-width landscape></mu-date-input>-->
            <!--</div>-->
            <!--<div class="select">-->
                <!--<mu-select icon="reorder" label="楼号" v-model="normal.value1" style="width: 100%; ! important">-->
                    <!--<mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>-->
                <!--</mu-select>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="anniu">-->
            <!--<mu-button color="#008181" style="width: 55%; height: 50px; font-size: 20px" @click="getFree">查询房间</mu-button>-->
        <!--</div>-->

        <!--<div class="jiange" style="height: 40px; width: 100%; background-color: #e7f3f3"></div>-->
        <!--<mu-container style="background-color: #008181; ! important">-->
            <!--<mu-bottom-nav style="background-color: #008181; ! important">-->
                <!--<mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>-->
                <!--<mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>-->
                <!--<mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>-->
            <!--</mu-bottom-nav>-->
        <!--</mu-container>-->
    </div>
</template>

<script>
    import { formatDateMin } from "../util/formatdate";

    export default {
        name: "rili2",
        data(){
            return {
                selectform: {
                    start: '',
                    end: '',
                },
                startTime: '',
                endTime: '',
            }
        },
        created(){
            let now = new Date();
            let that = this;
            that.startTime = formatDateMin(now);
            that.endTime = formatDateMin(now);
        },
        methods:{
            back(){
                this.$router.push('/zhuye');
            },
            open(picker) {
                this.$refs[picker].open();
            },
            handleConfirm1(value){
                this.startTime = formatDateMin(value);
                this.selectform.start = this.startTime;
                console.log("开始时间是："+this.selectform.start);
            },
            handleConfirm2(value){
                this.endTime = formatDateMin(value);
                this.selectform.end = this.endTime;
                console.log("结束时间是："+this.selectform.end);
            },
            getFree(){
                if(!this.selectform.start){
                    this.$messagebox.alert("请输入开始时间");
                }
                if(!this.selectform.end){
                    this.$messagebox.alert("请输入结束时间");
                }
                this.$store.commit('SET_STARTIME',this.selectform.start);
                this.$store.commit('SET_ENDTIME',this.selectform.end);
                // this.selectform.start = getDateTime(this.selectform.start);
                // this.selectform.end  = getDateTime(this.selectform.end);
                // let nowdate = new Date().getTime();
                // if(this.selectform.start>=getDateTime(nowdate) || this.selectform.end>=getDateTime(nowdate)){
                //     this.$messagebox.alert("输入的时间咋还在当前时间之前嘞");
                // }
                if(this.selectform.start>=this.selectform.end)
                {
                    this.$messagebox.alert("结束时间咋还早于开始时间嘞");
                    this.selectform.start='';
                    this.selectform.end='';
                }
                else{
                    this.$store.dispatch('getFreeRoom', this.selectform).then(() => {
                        console.log('Jump');
                        console.log(this.$store.state.meetingrooms);
                        const loading = this.$loading();
                        setTimeout(() => {
                            loading.close();
                            this.$router.push('/search');
                        }, 2000)
                        //this.$router.push({path: '/search',});
                        //this.$router.push({path: this.redirect || '/zhuye'});
                    }).catch(() => {
                        console.log('Error');
                    })
                }
            }
        }
    }
</script>

<style scoped>
    /*@import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';*/
   /*.rili2{*/
       /*height: 550px;*/
       /*width: 100%;*/
   /*}*/

    .header{
        height: 60px;
        width: 100%;
        background-color: #ffffff;
    }

    .bian{
        height: 60px;
        width: 25%;
        background-color: #ffffff;
        float: left;
        display: flex;
        align-items: center;
    }

    .wenzi{
        height: 60px;
        width: 50%;
        background-color: #ffffff;
        float: left;
        font-weight: bold;
        font-size: 24px;
        font-family: 黑体;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
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

    .anniu{
        height: 100px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
</style>
