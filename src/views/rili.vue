<template>
    <div id="rili">
        <div class="header">
            会议室日历
        </div>
        <div class="meetingrl">
            <div>
                <mu-date-picker :date.sync="date"></mu-date-picker>
            </div>
        </div>
        <div class="time">
            <mu-date-input label="开始时间"  v-model="starttime" type="time" container="dialog" label-float full-width style="width: 40%; font-size: 20px! important"></mu-date-input>
            &nbsp;&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;&nbsp;
            <mu-date-input label="结束时间"  v-model="endtime" type="time" container="dialog" label-float full-width style="width: 40%; font-size: 20px ! important"></mu-date-input>
        </div>
        <div class="chaxun">
            <mu-button color="success" style="font-size: 20px" @click="fullscreen">查询</mu-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "rili",
        data(){
            return{
                date: undefined,
                starttime: undefined,
                endtime: undefined,
            }
        },
        methods:{
            fullscreen () {
                const loading = this.$loading();
                setTimeout(() => {
                    loading.close();
                    this.$router.push('/result');
                }, 2000)
            }
        }
    }
</script>

<style scoped>

    .header{
        height: 80px;
        width: 100%;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 30px;
        color: #ffffff;

    }

    .meetingrl{
        height: 420px;
        width: 100%;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .time{
        height: 80px;
        width: 100%;
        background-color: #e7f3f3;
        text-align: center;
    }

    .chaxun{
        height: 90px;
        width: 100%;
        background-color: #e7f3f3;
        text-align: center;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
</style>
