<template>
    <div class="detail">
        <div class="header">
            <div class="left" style="height: 60px; width: 20%; display: flex;align-items: center; float: left;" v-on:click="back">
                <img src="../assets/back.png" height="28">
            </div>
            <div class="middle">会议详情</div>
        </div>

        <div class="jiange"></div>

        <div class="body">
            <div class="subject">
                <div class="left1">
                    <div class="sek"></div>
                </div>
                <div class="content">会议主题：{{ subject }}</div>
            </div>
            <div class="subject">
                <div class="left1"></div>
                <div class="content">开始时间：{{ startTime }}</div>
            </div>
            <div class="subject">
                <div class="left1"></div>
                <div class="content">结束时间：{{ endTime }}</div>
            </div>
            <div class="subject">
                <div class="left1"></div>
                <div class="content">参会人数：{{ number }}人</div>
            </div>
            <div class="subject">
                <div class="left1"></div>
                <div class="content">房间地点：{{ address }} {{ name }} {{ meeting }}</div>
            </div>
            <div class="kong">
                <div class="jiang" style="height: 2px; width: 90%; background-color: #e8e8e8"></div>
            </div>
            <div class="anniu">
                <div class="bian" style="height: 98px; width: 5%; background-color: #ffffff; float: left;"></div>
                <div class="left2">
                    <mt-button type="default" size="small" v-if="this.meets[index].status==1" @click="openAlertDialog">取消预订</mt-button>
                    <div class="wenzi" v-show="this.meets[index].status==0" style="font-size: 15px; color: #000;">被驳回</div>
                    <div class="wenzi" v-show="this.meets[index].status==-1" style="font-size: 15px; color: #000;">已取消</div>
                    <mu-dialog title="提示" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
                        确定要删除吗？
                        <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">取消</mu-button>
                        <mu-button slot="actions" flat color="primary" @click="cancel(index)">确定</mu-button>
                    </mu-dialog>
                </div>
                <div class="left2">
                    <mt-button type="default" size="small" @click="xianshi">与会人名单</mt-button>
                    <mu-dialog title="与会人名单" width="360" :open.sync="see">
                        <div v-for="(conpeople,index) in conpeoples">
                            <ul>
                                {{ conpeople.realName }}
                            </ul>
                        </div>
                        <mu-button slot="actions" flat color="primary" @click="close">关闭</mu-button>
                    </mu-dialog>
                </div>
                <div class="left2">
                    <mt-button type="default" size="small" @click="openSimpleDialog">编辑与会人</mt-button>
                    <mu-dialog title="请输入与会人姓名" width="360" :open.sync="openSimple">
                        <input v-model="title" placeholder="请输入内容" @keyup="fetchData">
                        <ul v-for="(user,shunxu) in users" :key="shunxu" >
                            <span v-show="flag==0" @click="appClick(shunxu)">{{ user.realName }}</span>
                        </ul>
                        <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">确定</mu-button>
                        <mu-button slot="actions" flat color="primary" @click="submit">提交</mu-button>
                        <div v-for = "todo in todos">
                            <span v-show="todo!==' '" v-on:click="remove">{{ todo }}×</span>
                        </div>
                    </mu-dialog>
                </div>
                <div class="bian" style="height: 98px; width: 5%; background-color: #ffffff; float: left;"></div>
            </div>
        </div>

        <div class="jiange"></div>
        <div class="open">
            <div class="left3"></div>
            <div class="middle1">远程开门</div>
            <div class="bai" style="height: 60px; width: 40%; float: left;"></div>
            <div class="zhao" style="height: 60px; width: 20%; float: left;" @click="Opendoor" >
                <img src="../assets/control.png" height="32">
            </div>
        </div>
        <!--<mu-menu placement="bottom" open-on-hover>-->
            <!--<mu-button color="#f6f8fa" style="color: #000">Open On Hover</mu-button>-->
            <!--<mu-list slot="content">-->
                <!--<mu-list-item>-->
                    <!--<mu-list-item-title>Refresh</mu-list-item-title>-->
                <!--</mu-list-item>-->
                <!--<mu-list-item>-->
                    <!--<mu-list-item-title>Send feedback</mu-list-item-title>-->
                <!--</mu-list-item>-->
                <!--<mu-list-item>-->
                    <!--<mu-list-item-title>Settings</mu-list-item-title>-->
                <!--</mu-list-item>-->
                <!--<mu-list-item>-->
                    <!--<mu-list-item-title>Help</mu-list-item-title>-->
                <!--</mu-list-item>-->
                <!--<mu-list-item>-->
                    <!--<mu-list-item-title>Sign out</mu-list-item-title>-->
                <!--</mu-list-item>-->
            <!--</mu-list>-->
        <!--</mu-menu>-->
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
                meets: this.$store.state.meetings,
                subject: this.$route.params.subject,
                startTime: this.$route.params.starttime,
                endTime: this.$route.params.endtime,
                number: this.$route.params.number,
                address: this.$route.params.address,
                name: this.$route.params.name,
                meeting: this.$route.params.meeting,
                index: this.$route.params.index1,
                openAlert: false,
                openSimple: false,
                title: '',
                users: [],
                flag: 0,
                userids: [],
                todos: [],
                shunxu: 1,
                b: '',
                see: false,
                conpeoples: [],
            }

        },
        methods:{
            back(){
                this.$router.push('/zhuye');
            },
            cancel(index){
                this.$store.dispatch('deletemeeting',this.meets[index].conferenceID).then(()=>{
                    this.openAlert=true;
                    this.$store.dispatch('getmeetings', this.$store.state.userID).then(()=>{
                        this.$router.push('/zhuye');
                    })
                })
            },
            Opendoor(){
                this.$store.dispatch('opendoor',this.$store.state.userID).then(()=>{
                    this.$messagebox.alert("门已开启");
                })
            },
            openAlertDialog () {
                this.openAlert = true;
            },
            closeAlertDialog () {
                this.openAlert = false;
            },
            openSimpleDialog () {
                this.openSimple = true;
                this.userids.length = 0;
            },
            async fetchData(){
                this.flag=0;
                this.$store.dispatch('getuser',this.title).then(()=>{
                    this.users=this.$store.state.userlist;
                })
            },
            appClick(index){
                this.title=this.users[index].realName;
                this.flag=1;
                this.shunxu=index;
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
            submit:function () {
                this.b = this.userids.join(",");
                let form={
                    userIdList: this.b,
                    conferenceID: this.meets[this.index].conferenceID,
                };
                console.log("userIdList:"+this.b);
                this.openSimple = false;
                console.log("fffttt");
                console.log("会议号是"+this.meets[this.index].conferenceID);
                this.$store.dispatch('addPeople',form).then(res=>{
                    this.$messagebox.alert("修改成功");
                });
                this.todos=[];
            },
            xianshi(){
                this.$store.dispatch('SeePeople',this.meets[this.index].conferenceID).then(()=> {
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
.header{
    height: 60px;
    width: 100%;
    background-color: #fefefe;
}

    .middle{
        height: 60px;
        width: 60%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 25px;
        font-family: 黑体;
        font-weight: bolder;
    }

    .jiange{
        height: 15px;
        width: 100%;
        background-color: #e8e8e8;
    }

    .body{
        width: 100%;
        height: 300px;
        background-color: #fefefe;
    }

    .subject{
        width: 100%;
        height: 40px;
        background-color: #fefefe;

    }

    .sek{
        height: 30px;
        width: 20%;
        background-color: #2fbba9;
    }

    .left1{
        height: 40px;
        width: 10%;
        background-color: #fefefe;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        float: left;
    }

    .content{
        height: 40px;
        width: 90%;
        float: left;
        display: flex;
        align-items: center;
        color: #afacaf;
        font-size: 18px;
        font-family: 黑体;
    }

    .kong{
        height: 2px;
        width: 100%;
        background-color: #fefefe;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .anniu{
        height: 98px;
        width: 100%;
    }

    .left2{
        height: 98px;
        width: 30%;
        background-color: #ffffff;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .open{
        height: 60px;
        width: 100%;
        background-color: #ffffff;
    }

    .left3{
        height: 60px;
        width: 5%;
        float: left;
    }

    .middle1{
        height: 60px;
        width: 35%;
        float: left;
        display: flex;
        align-items: center;
        font-family: 黑体;
        font-size: 22px;
    }

    .zhao{
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
</style>
