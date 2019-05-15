<template>
    <div class="kongtiao">
       <div class="header">
           空调遥控器
       </div>
       <div class="body">
          <img src="../assets/open.png" width="35" height="35" v-on:click="open">
       </div>
        <div class="wendu">
            {{ age }}℃
        </div>
        <div class="addjian">
            <div class="add">
                <img src="../assets/add.png" width="50" height="50" v-on:click="add(1)">
            </div>
            <div class="disadd">
                <img src="../assets/disadd.png" width="50" height="50" v-on:click="jian(1)">
            </div>
        </div>
        <div class="coldhot">
            <div class="left">
                <img src="../assets/cold.png">制冷
            </div>
            <div class="middle"></div>
            <div class="right">
                <img src="../assets/hot.png">制热
            </div>
        </div>
        <div class="jiange" style="height: 2px; width: 100%; background-color: azure"></div>
        <div class="chushi">
            <div class="left">
                <img src="../assets/chushi.png">除湿
            </div>
            <div class="middle"></div>
            <div class="right">
                <img src="../assets/quto.png">自动
            </div>
        </div>
        <div class="jiange" style="height: 2px; width: 100%; background-color: azure"></div>
        <div class="auto">
            <div class="left">
                <img src="../assets/fengxiang.png">风向
            </div>
            <div class="middle"></div>
            <div class="right">
                <img src="../assets/fengsu.png">风速
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "kongtiao",
        data(){
            return{
                age: 27
            }
        },
        methods:{
            open(){
                this.$messagebox.alert("亲，空调开启成功！");
            },
            add: function(inc){
                this.age+=inc;
            },
            jian: function (inc) {
                this.age-=inc;
            },
        }
    }
</script>

<style scoped>
   .header{
       height: 60px;
       width: 100%;
       background-color: #008181;
       display: -webkit-flex;
       display: flex;
       -webkit-align-items: center;
       align-items: center;
       -webkit-justify-content: center;
       justify-content: center;
       font-size: 25px;
       color: #ffffff;
   }

    .body{
        height: 50px;
        width: 100%;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .wendu{
        height: 200px;
        width: 100%;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 45px;
        color: #ffffff;
    }

    .addjian{
        height: 60px;
        width: 100%;
        background-color: #e7f3f3;
    }

    .add,.disadd{
        height: 60px;
        width: 50%;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        float: left;
    }

    .coldhot,.chushi,.auto{
        height: 120px;
        width: 100%;
        background-color: #e7f3f3;

    }

    .left,.right{
        height: 120px;
        width: 49%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 30px;
        color: #008181;
        float: left;
    }
    .middle{
        height: 120px;
        width: 2px;
        background-color: azure;
        float: left;
    }
</style>
