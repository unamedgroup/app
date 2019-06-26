<template>
    <div class="mymessage">
        <div class="header">我的预约</div>
        <div v-for="(meet,index) in meets">
            <div class="middle">
                <div class="top">
                    <div class="top1">{{ meet.subject }}</div>
                    <div class="top2">
                        <div class="left">
                            <img src="../assets/tubiao.png" height="50" width="50">
                        </div>
                        <div class="zhong">
                            <div class="second">
                            会议室名称：{{ meet.room.name }}
                            </div>
                            <div class="second">
                            开始时间：{{ meet.startTime }}
                            </div>
                            <div class="second">
                            结束时间：{{ meet.endTime }}
                            </div>
                            <div class="second">
                            地点：{{ meet.room.building.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="anniu">
                    <div class="delete">
                        <mt-button size="small" v-if="meet.status==1" v-on:click="cancel(index)">取消预订</mt-button>
                        <div class="wenzi" v-show="meet.status==0" style="font-size: 15px; color: #ffffff;">被驳回</div>
                        <div class="wenzi" v-show="meet.status==-1" style="font-size: 15px; color: #ffffff;">已取消</div>
                    </div>
                    <div class="bianji">
                        <mu-flex justify-content="center">
                            <div class="tianjia">
                                <mu-button @click="xianshi(index)">与会人名单</mu-button>
                            </div>
                            <div class="shanchu">
                                <mu-button @click="openSimpleDialog(index)">编辑与会人</mu-button>
                            </div>

                            <mu-dialog title="请输入与会人姓名" width="360" :open.sync="openSimple">
                                <input v-model="title" placeholder="请输入内容" @keyup="fetchData">
                                <ul v-for="(user,shunxu) in users" :key="shunxu" >
                                     <span v-show="flag==0" @click="appClick(shunxu)">{{ user.realName }}</span>
                                </ul>
                                <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">确定</mu-button>
                                <mu-button slot="actions" flat color="primary" @click="submit(cid)">提交</mu-button>
                                <div v-for = "todo in todos">
                                    <span v-show="todo!==' '" v-on:click="remove">{{ todo }}×</span>
                                </div>
                            </mu-dialog>

                            <mu-dialog title="与会人名单" width="360" :open.sync="see">
                                <div v-for="(conpeople,index) in conpeoples">
                                <ul>
                                {{ conpeople.realName }}
                                </ul>
                                </div>
                                <mu-button slot="actions" flat color="primary" @click="close">关闭</mu-button>
                            </mu-dialog>
                        </mu-flex>
                    </div>
                </div>
            </div>
            <div class="xian"></div>
        </div>
    </div>
</template>

<script>
    const delay = (function() {
        let timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();
    export default {

        name: "mymessage",
        data(){
            return{
                meets:this.$store.state.meetings,
                title: '',
                users: [],
                flag: 0,
                openSimple: false,
                see: false,
                todos: [],
                b: '',
                cid: 1,
                userids: [],
                shunxu: 1,
                conpeoples: [],
            }
        },
        // watch:{
        //     title(){
        //         delay(()=>{
        //             this.fetchData();
        //         },300);
        //     },
        // },
        methods:{
            cancel(index){
                this.$confirm('确定要删除吗？','确定').then(()=>{
                    this.$store.dispatch('deletemeeting',this.meets[index].conferenceID).then(()=>{
                        this.$store.dispatch('getmeetings',this.$store.state.userID).then(()=>{
                            this.$router.replace({
                                path: '/supply',
                                name: 'Supply'
                            })
                        })
                    })

                });

            },

            appClick(index){
                this.title=this.users[index].realName;
                // this.userids.splice(0,this.userids.length);

                this.flag=1;
                this.shunxu=index;
            },

            async fetchData(val){
                this.flag=0;
                this.$store.dispatch('getuser',this.title).then(()=>{
                    this.users=this.$store.state.userlist;
                })
            },
            openSimpleDialog (index) {
                this.openSimple = true;
                this.cid = index;
                this.userids.length=0;
            },
            closeSimpleDialog () {
                //this.openSimple = false;
                var text = this.title.trim();
                var id = this.users[this.shunxu].userID;
                if(text){
                    this.todos.push(text);
                    //this.userList.push(text);
                    this.userids.push(id);
                    this.title='';
                }
            },
            remove:function(index){
                this.todos.splice(index,1);
                this.userids.splice(index,1);
            },
            submit:function (index) {
                this.b = this.userids.join(",");
                console.log("index"+index);
                let form={
                    userIdList: this.b,
                    conferenceID: this.meets[index].conferenceID,
                };
                console.log("userIdList:"+this.b);
                this.openSimple = false;
                console.log("fffttt");
                console.log("会议号是"+this.meets[index].conferenceID);
                this.$store.dispatch('addPeople',form).then(res=>{
                   this.$messagebox.alert("修改成功");
                });
                this.todos=[];
                // this.$router.replace({
                //     path: '/black',
                //     name: 'Black',
                // })
            },
            xianshi(index){
                this.$store.dispatch('SeePeople',this.meets[index].conferenceID).then(()=> {
                    this.conpeoples = this.$store.state.conPeople.data;
                    console.log("我要看啊");
                    console.log(this.$store.state.conPeople);
                    this.see =true;

                });
            },
            close(){
                this.see=false;
            }
        }
    }
</script>

<style scoped>
    .mymessage{
        height: 600px;
        width: 100%;
    }

    .header{
        height: 60px;
        width: 100%;
        background-color: #232842;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        color: #fdfdfd;
        font-size: 24px;
    }

    .middle{
        height: 200px;
        width: 100%;
        background-color: #2b3050;
    }

    .xian{
        height: 2px;
        width: 100%;
        background-color: #3c426a;
    }

    .top{
        height: 140px;
        width: 100%;
    }

    .left{
        height: 100px;
        width: 20%;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .zhong{
        height: 100px;
        width: 80%;
        float: left;
    }

    .second{
        height: 25px;
        width: 100%;
        font-size: 15px;
        color: #989fc6;
    }

    .top1{
        height: 40px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        color: #f9fafa;
        font-size: 20px;
    }

    .top2{
        height: 100px;
        width: 100%;
    }

    .anniu{
        height: 60px;
        width: 100%;

    }

    .delete{
        width: 25%;
        height: 60px;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        float: left;
    }

    .bianji{
        width: 75%;
        height: 60px;
        float: left;
    }

    .tianjia,.shanchu{
        height: 60px;
        width: 50%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        float: left;
    }
</style>
