<template>
    <div class="myreserve">
        <div class="header">
            预约信息
        </div>
        <div class="jiange"></div>
        <div class="first">
            <div class="first1">
                 <div class="left">
                     每周例会<br>
                     C602
                 </div>
                 <div class="right">
                     时间：2019年4月5日<br>
                     时段：10：30-12：00
                 </div>
            </div>
            <div class="first2">
                <mt-button size="small" @click="cancel1" v-show="submit1==true">取消预订</mt-button>
                <div class="wenzi" v-show="submit1==false">已取消</div>
            </div>
        </div>
        <div class="jiange"></div>
        <div class="first">
            <div class="first1">
                <div class="left">
                    产品发布会<br>
                    E1011
                </div>
                <div class="right">
                    时间：2019年4月6日<br>
                    时段：10：30-12：00
                </div>
            </div>
            <div class="first2">
                <mt-button size="small" @click="cancel2" v-show="submit2==true">取消预订</mt-button>
                <div class="wenzi" v-show="submit2==false">已取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myreserve",
        data(){
            return{
                submit1: true,
                submit2: true,
            }
        },
        methods:{
            cancel1(){
                let _this=this;
                this.$confirm('确定要取消吗?')
                    .then(function () {
                        _this.submit1=false
                        ;
                    })
            },
            cancel2(){
                let _this=this;
                this.$confirm('确定要取消吗?')
                    .then(function () {
                        _this.submit2=false;
                    })
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 65px;
        width: 100%;
        background-color: #008181;
        color: #ffffff;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 30px;
    }

    .first{
        height: 140px;
        width: 100%;
        background-color: #e7f3f3;
    }

    .jiange{
        height: 15px;
        width: 100%;
        background-color: #ffffff;
    }

    .first1{
        height: 85px;
        width: 100%;
        background-color: #008181;
    }
    .left{
        height: 85px;
        width: 38%;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 23px;
        float: left;
    }
    .right{
        height: 85px;
        width: 62%;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 23px;
        float: left;
    }

    .first2{
        height: 55px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
</style>
