<template>
    <div class="SearchResult">
        <div v-for="(array,index) in arrays">
            <div class="jieguo">
                <div class="left">
                    <div class="shang">
                        {{ array.name }}
                    </div>
                    <div class="xia">
                        <mt-button size="small" v-on:click="tiaozhuan(index)">预订</mt-button>
                    </div>
                </div>

                <div class="right">
                    层次：{{ array.catalogue }}<br>
                    地址：{{ array.building.name}}-{{ array.location}}({{ array.building.address }})<br>
                    容量：{{ array.capacity }}人
                </div>
            </div>
            <div class="jange" style="height: 10px; width: 100%; background-color: #ffffff"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchResult",
        data() {
            return{
                arrays: this.$store.state.meetingrooms,
            }
        },
        methods:{
            tiaozhuan(index){
                this.$router.push({
                    name: 'table',
                    params: {
                        roomID: this.arrays[index].roomID,
                        capacity: this.arrays[index].capacity,
                    }
                })
            }
        }

    }
</script>

<style scoped>
    .left{
        height: 150px;
        width: 35%;
        background-color: #008181;
        float: left;
    }

    .shang{
        height: 90px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 25px;
        color: #ffffff;
    }
    .xia{
        height: 60px;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .jieguo{
        height: 150px;
        width: 100%;
        background-color: #e7f3f3;
    }
    .right{
        height: 150px;
        width: 65%;
        float: left;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 20px;
    }
</style>
