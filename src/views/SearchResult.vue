<template>
    <div class="SearchResult">
        <div class="header">
            <div class="bian">
                <img src="../assets/back.png" @click="back">
            </div>
            <div class="wenzi">空闲会议室</div>
        </div>
        <div class="bank" style="height: 15px; width: 100%; background-color: #f3f5f7"></div>
        <div v-for="(array,index) in arrays">
            <div class="ge">
                <div class="zuo" style="height: 80px; width: 5%; background-color: #ffffff;float: left;"></div>
                <div class="middle">{{ array.name }}</div>
                <div class="you">
                    <mt-button type="default" size="normal" @click="tiaozhuan(index)">预订</mt-button>
                </div>
                <div class="you">
                    <mt-button type="default" size="normal" @click="open">详情</mt-button>
                    <mu-dialog title="详情" width="360" :open.sync="see">
                        层次：{{ array.catalogue }}<br>
                        地址：{{ array.building.name}}-{{ array.location}}({{ array.building.address }})<br>
                        容量：{{ array.capacity }}人
                        <mu-button slot="actions" flat color="primary" @click="close">关闭</mu-button>
                    </mu-dialog>
                </div>
            </div>
            <div class="bank" style="height: 1.2px; width: 100%; background-color: #f3f5f7"></div>
        </div>
        <!--<div v-for="(array,index) in arrays">-->
            <!--<div class="jieguo">-->
                <!--<div class="left">-->
                    <!--<div class="shang">-->
                        <!--{{ array.name }}-->
                    <!--</div>-->
                    <!--<div class="xia">-->
                        <!--<mt-button size="small" v-on:click="tiaozhuan(index)">预订</mt-button>-->
                    <!--</div>-->
                <!--</div>-->

                <!--<div class="right">-->
                    <!--层次：{{ array.catalogue }}<br>-->
                    <!--地址：{{ array.building.name}}-{{ array.location}}({{ array.building.address }})<br>-->
                    <!--容量：{{ array.capacity }}人-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="jange" style="height: 10px; width: 100%; background-color: #ffffff"></div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "SearchResult",
        data() {
            return{
                arrays: this.$store.state.meetingrooms,
                see: false,
            }
        },
        methods:{
            tiaozhuan(index){
                this.$router.push({
                    name: 'table2',
                    params: {
                        roomID: this.arrays[index].roomID,
                        capacity: this.arrays[index].capacity,
                    }
                })
            },
            back(){
                this.$router.push('/rili2');
                // this.$router.back(-1);
            },
            close(){
                this.see=false;
            },
            open(){
                this.see=true;
            }
        }

    }
</script>

<style scoped>
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

    .ge{
        height: 80px;
        width: 100%;
        background-color: #ffffff;
    }


    .middle{
        height: 80px;
        width: 45%;
        float: left;
        font-size: 22px;
        font-family: 黑体;
        display: flex;
        align-items: center;
        background-color: #ffffff;
    }

    .you{
        height: 80px;
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
</style>
