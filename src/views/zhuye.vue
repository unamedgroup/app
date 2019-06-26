<template>
    <div class="zhuye">
        <div class="photo">
            <img src="../assets/title.jpg" width="360">
        </div>

        <div class="title">
            <div class="left">
                <img src="../assets/system.png">
            </div>
            <div class="right">
                智能会议室管理系统
            </div>
        </div>

        <div class="bank" style="height: 20px;width: 100%;background-color: #ffffff"></div>
        <div class="select">
            <div class="border"></div>
            <div class="first" @click="search">
                <div class="shang">
                    <img src="../assets/find1.png" height="40">
                </div>
                <div class="xia">
                    会议室查询
                </div>
            </div>
            <div class="second" style="background-color: aqua" @click="put">
                <div class="shang">
                    <img src="../assets/remote.png" height="40">
                </div>
                <div class="xia">
                    设备遥控器
                </div>
            </div>

            <div class="three">
                <div class="shang" v-on:click="huoqu">
                    <img src="../assets/personalmsg1.png" height="40">
                </div>
                <div class="xia">
                    个人信息
                </div>
            </div>
            <div class="border"></div>
        </div>

        <div class="bank" style="height: 10px;width: 100%;background-color: #e7e7e7"></div>
        <div class="myserve">
            <div class="top">
                <div class="bian"></div>
                <div class="shuxian"></div>
                <div class="wenzi" >我的预约</div>
                <div class="bank" style="height: 70px; width: 22%; background-color: #ffffff"></div>
                <div class="reserve" style="width: 40%;">
                        <button type="button" class="yongyin" v-on:click="reserve" style="width:100px; height:30px;">快速预订</button>
                </div>
            </div>
        </div>

        <div v-for="(meet,index) in meets" v-if="meet.status==1" @click="tiao(index)">
            <div class="meetings">
                <div class="left1"> {{ index+1 }}</div>
                <div class="right1">
                    <div class="top1">{{ meet.subject }}</div>
                    <div class="middle1">
                        <div class="left2">
                            <img src="../assets/locate.png" height="35">
                        </div>
                        <div class="left3" style="width: 30%;">{{ meet.room.name }} </div>
                        <div class="middle" style="width: 12%;background-color: #ffffff;float: left;height: 60px;"></div>
                        <div class="right2" style="width: 48%;background-color: #ffffff">
                            <div class="shang1"><img src="../assets/date.png" height="20" style="margin-right: 10px">{{ meet.startTime.substring(0,10) }}</div>
                            <div class="xia1"><img src="../assets/starttime.png" height="20" style="margin-right: 10px">{{ meet.startTime.substring(11,19) }} </div>
                        </div>
                    </div>
                    <div class="bottom1" ></div>
                </div>
            </div>
        </div>
        <div class="topt" style="height: 5px;width: 100%;background-color: #e7e7e7"></div>
    </div>


</template>

<script>
    export default {
        name: "zhuye",
        data(){
            return{
                meets: this.$store.state.meetings,
            }
        },
        methods:{
            open(){
                this.$messagebox.alert("亲，门已开启！");
            },
            reserve(){
                this.$router.push({path: '/table'});
            },
            huoqu(){
                this.$store.dispatch('getAll').then(()=>{
                    this.$router.push({path: '/person'});
                })
            },
            search(){
                this.$router.push('/rili2');
            },
            put()
            {
                this.$router.push({path: '/shebei'});
            },
            tiao(index){
                this.$router.push({
                    name: 'detail',
                    params:{
                        subject: this.meets[index].subject,
                        starttime: this.meets[index].startTime,
                        endtime: this.meets[index].endTime,
                        number: this.meets[index].number,
                        address: this.meets[index].room.building.address,
                        name: this.meets[index].room.building.name,
                        meeting: this.meets[index].room.name,
                        index1: index,
                    }
                });
            },
        }
    }
</script>

<style scoped>
.photo{
    width: 100%;
    height: 200px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    background-color: #ffffff;
}

.title{
    height: 50px;
    width: 100%;
    background-color: #ffffff;
}
.left{
    height: 50px;
    width: 18%;
    float: left;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
}

.right{
    height: 50px;
    width: 82%;
    background-color: #ffffff;
    font-weight: bold;
    float: left;
    font-family: 黑体;
    font-size: 25px;
    display: flex;
    align-items: center;
}

    .select{
        height: 100px;
        width: 100%;
        background-color: chocolate;
    }

    .first,.second,.three{
        height: 100px;
        width: 30%;
        float: left;
    }

    .border{
        height: 100px;
        width: 5%;
        float: left;
        background-color: #ffffff;
    }

    .shang{
        height: 55px;
        width: 100%;
        background-color: #ffffff;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .xia{
        height: 45px;
        width: 100%;
        background-color: #ffffff;
        font-family: 黑体;
        font-size: 18px;
        text-align: center;
    }

    .top{
        height: 80px;
        width: 100%;
        background-color: #ffffff;
        display: flex;
        align-items: center;
    }

    .bian{
        height: 70px;
        width: 5%;
        background-color: #ffffff;
        float: left;
    }

    .shuxian{
        height: 40px;
        width: 3%;
        background-color: #008181;
        float: left;
    }

    .wenzi{
        height: 70px;
        width: 30%;
        float: left;
        background-color: #ffffff;
        font-family: 黑体;
        font-size: 23px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;

    }

    .reserve{
        height: 70px;
        width: 62%;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }



   .meetings{
       height: 120px;
       width: 100%;
       background-color: #ffffff;
   }

    .left1{
        height: 120px;
        width: 22%;
        background-color: #ffffff;
        font-family: 黑体;
        color: #666666;
        font-size: 35px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-weight: bold;
        float: left;
    }

    .right1{
        height: 120px;
        width: 76%;
        background-color: #ffffff;
        float: left;
    }

    .top1{
        height: 58px;
        width: 100%;
        background-color: #ffffff;
        font-family: 黑体;
        font-size: 20px;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: #666666;
    }

    .middle1{
        height: 60px;
        width: 100%;
    }

    .left2{
        height: 60px;
        width: 10%;
        background-color: #ffffff;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        color: #6f6f6f;
        font-size: 17px;
        float: left;
    }

    .left3{
        height: 60px;
        background-color: #ffffff;
        color: #6f6f6f;
        font-size: 17px;
        float: left;
        display: flex;
        align-items: center;
    }

    .bottom1{
        width: 100%;
        height: 1px;
        background-color: #e7e7e7;
    }

   .right2{
        height: 60px;
        /*background-color: #ffffff;*/
        color: #6f6f6f;
        font-size: 17px;
        float: left;
    }

    .shang1,.xia1{
        height: 30px;
        width: 100%;
        color: #6f6f6f;
        font-size: 16.5px;
        /*background-color: #ffffff;*/
        display: flex;
        align-items: center;
    }

    .yongyin {
        width:100px;
        text-align:center;
        line-height:100%;
        padding:0.3em;
        font:16px Arial,sans-serif bold;
        font-style:normal;
        text-decoration:none;
        margin:2px;
        vertical-align:text-bottom;
        zoom:1;
        outline:none;
        /*font-size-adjust:none;*/
        font-size: 15px;
        font-stretch:normal;
        border-radius:50px;
        box-shadow:    0px -2px 0px 0px #e0e0e0,
                      -2px 0px 0px 0px #e0e0e0,
                       2px 0px 0px 0px #e0e0e0,
                       0px 2px 0px 0px #e0e0e0;
        /*text-shadow:0px 1px 1px rgba(0,0,0,0.3);*/
        color:#393939;
        border:0.2px solid #e5e5e5;
        background-repeat:repeat;
        background-size:auto;
        background-origin:padding-box;
        background-clip:padding-box;
        background-color:#ffffff;
        /*background: linear-gradient(to bottom, #eeeff9 0%,#3399ff 100%);*/
    }

    .yongyin:hover {
        background: #ffffff;
    }
</style>
