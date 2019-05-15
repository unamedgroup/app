<template>
    <div class="rili2">
        <div class="zhaopian">
            <img src="../assets/room.png" width="410">
        </div>
        <div class="jiange" style="height: 40px; width: 100%; background-color: #e7f3f3"></div>
        <div class="kuang">
            <div class="kaishi">
                <mu-date-input  icon="today" v-model="selectform.start" label="开始时间" type="dateTime" label-float full-width landscape></mu-date-input>
            </div>
            <div class="jieshu">
                <mu-date-input  icon="today" v-model="selectform.end" label="结束时间" type="dateTime" label-float full-width landscape></mu-date-input>
            </div>
            <div class="select">
                <mu-select icon="reorder" label="楼号" v-model="normal.value1" style="width: 100%; ! important">
                    <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
            </div>
        </div>

        <div class="anniu">
            <mu-button color="#008181" style="width: 55%; height: 50px; font-size: 20px" @click="getFree">查询房间</mu-button>
        </div>

        <div class="jiange" style="height: 40px; width: 100%; background-color: #e7f3f3"></div>
        <mu-container style="background-color: #008181; ! important">
            <mu-bottom-nav style="background-color: #008181; ! important">
                <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script>
    import {getDateTime} from "../util/change";

    export default {
        name: "rili2",
        data(){
            return {
                selectform: {
                    start: '',
                    end: '',
                },
                options: [
                    '见贤楼', '思齐楼', '致远楼', '逸夫楼',
                    '文清楼', '凝晖楼'
                ],
                normal: {
                    value1: '',
                    value2: '',
                    value3: '',
                    value4: 'Option 1',
                    value5: 'Option 2'
                }
            }
        },
        methods:{
            getFree(){
                if(!this.selectform.start){
                    this.$messagebox.alert("请输入开始时间");
                }
                if(!this.selectform.end){
                    this.$messagebox.alert("请输入结束时间");
                }
                this.$store.commit('SET_STARTIME',this.selectform.start);
                this.$store.commit('SET_ENDTIME',this.selectform.end);
                this.selectform.start = getDateTime(this.selectform.start);
                this.selectform.end  = getDateTime(this.selectform.end);
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
    @import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
   .rili2{
       height: 550px;
       width: 100%;
   }

    .kuang{
        height: 260px;
        width: 100%;
        background-color: #e7f3f3;
    }
    .kaishi,.jieshu{
        height: 90px;
        width: 100%;
    }

    .select{
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 90px;
        width: 100%;
    }

    .anniu{
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 145px;
        background-color: #e7f3f3;
    }
</style>
