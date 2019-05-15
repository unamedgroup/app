<template>
    <div class="mymessage">
       <div v-for="(meet,index) in meets" >
           <div class="shijian" style="height: 150px; width: 100%; background-color: #e7f3f3">
               <div class="shang" style="height: 100px; width: 100%; background-color: #e7f3f3">
                   <div class="left">
                       {{ meet.subject }}<br>
                       {{ meet.room.building.name }}<br>
                       {{ meet.room.name}}
                   </div>
                   <div class="right">
                       {{ meet.startTime }}<br>
                       至<br>
                       {{ meet.endTime }}
                   </div>
               </div>
               <div class="xia" style="height: 50px; width: 100%;">
                   <div class="zuo">
                       <mt-button size="small" v-if="meet.status==1" v-on:click="cancel(index)">取消预订</mt-button>
                       <div class="wenzi" v-show="meet.status==0" style="font-size: 15px; color: #ffffff;">被驳回</div>
                       <div class="wenzi" v-show="meet.status==-1" style="font-size: 15px; color: #ffffff;">已取消</div>
                   </div>
                   <div class="you">
                       <!--<mt-button size="small">添加与会人</mt-button>-->
                       <mu-flex justify-content="center">
                           <mu-button @click="xianshi(index)">与会人名单</mu-button>
                           <mu-button @click="openSimpleDialog(index)">编辑与会人</mu-button>
                           <!--<div v-for = "todo in todos">-->
                                   <!--<span v-show="todo!==' '" v-on:click="remove">{{ todo }}×</span>-->
                           <!--</div>-->
                       </mu-flex>
                       <mu-dialog title="请输入与会人姓名" width="360" :open.sync="openSimple">
                           <!--<input v-model="title" placeholder="请输入内容" @click="fetchData">-->
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
                   </div>
               </div>
           </div>
           <div class="jange" style="height: 10px; width: 100%; background-color: #ffffff"></div>
       </div>
        <!--<div>-->
            <!--<input v-model="title" placeholder="请输入内容" @keyup="fetchData">-->
            <!--<ul v-for="(user,index) in users" :key="index" >-->
        <!--<span v-show="flag==0" @click="appClick(index)">{{ user.realName }}</span>-->
        <!--</ul>-->
        <!--</div>-->
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
                this.userids.splice(0,this.userids.length);
                this.flag=1;
                this.shunxu=index;
            },

            async fetchData(val){
                this.flag=0;
                this.$store.dispatch('getuser',this.title).then(()=>{
                    console.log("wenting");
                    this.users=this.$store.state.userlist;
                })
            },
            openSimpleDialog (index) {
                this.openSimple = true;
                console.log("index到底是什么"+index);
                this.cid = index;
                console.log("cid="+this.cid);
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

    .left{
        height: 100px;
        width: 40%;
        float: left;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 20px;
    }

    .right{
        height: 100px;
        width: 60%;
        float: left;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 20px;
    }

    .zuo{
        height: 50px;
        width: 40%;
        float: left;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 20px;
    }

    .you{
        height: 50px;
        width: 60%;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 20px;
    }
</style>
