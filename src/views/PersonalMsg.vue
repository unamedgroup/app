<template>
    <div class="PersonalMsg">
        <!--<div class="photo" v-show="zhao==0">-->
            <!--<img :src="avatar" @click="callCamera" alt="摄像头">-->
        <!--</div>-->
        <!--<div class="photoz" v-show="zhao==1">-->
            <!--<div class="photo">-->
                <!--<video ref="video" width="200" height="200" autoplay></video>-->
                <!--<canvas ref="canvas" width="200" height="200"></canvas>-->
            <!--</div>-->
            <!--<div class="zhaoxiang">-->
                <!--<button type="primary" @click="photograph">拍照</button>-->
                <!--<button type="primary" @click="closeCamera">确认</button>-->
            <!--</div>-->

        <!--</div>-->
        <!--&lt;!&ndash;<div class="zhaoxiang">&ndash;&gt;-->
            <!--&lt;!&ndash;<mu-button style="background-color: #ffffff; color: #008181;" @click="gaizhao">更换图片</mu-button>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<div class="form" >-->
            <!--<mt-field label="用户名" v-model="name" style="background-color: #e7f3f3; height: 20px! important"></mt-field>-->
            <!--<mt-field label="工号" v-model="userid" style="background-color: #e7f3f3; height: 20px! important"></mt-field>-->
            <!--<mt-field label="密码" type="password" v-model="password" style="background-color: #e7f3f3; height: 20px! important"></mt-field>-->
            <!--<mt-field label="电话" v-model="phonenumber" type="tel" style="background-color: #e7f3f3; height: 20px! important"></mt-field>-->
            <!--<mt-field label="所属部门" v-model="department" style="background-color: #e7f3f3; height: 20px! important"></mt-field>-->
        <!--</div>-->

        <!--<div class="anniu">-->
            <!--<mu-button style="background-color: #008181; color: #ffffff;" @click="unbind">保存更改</mu-button>-->
        <!--</div>-->
    <!--</div>-->
        <div class="header">
            <div class="left" style="height: 60px; width: 20%; display: flex;align-items: center; float: left;" v-on:click="back">
                <img src="../assets/back.png" height="28">
            </div>
            <div class="middle" style="width: 60%; font-weight: bold; font-size: 24px;">
                个人信息
            </div>
            <div class="right" style="width: 20%; font-size: 20px;" @click="update">
                保存
            </div>
        </div>
        <div class="bank" style="height: 15px; width: 100%; background-color: #f3f5f7"></div>
        <div class="form">
            <div class="name" style="height: 60px; width: 100%; background-color: #fefefe">
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="ming" style="height: 60px; width: 15%; color: #818181;float: left; font-family: 黑体; font-size: 22px">
                   姓名
                </div>
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="inpu1" style="height: 60px; width: 58%; float: left; display: flex; align-items: center; font-size: 22px; font-family: 黑体">
                    <!--<input v-model="usermsg.realName">-->
                    {{ usermsg.realName }}
                </div>
            </div>
            <div class="jiange" style="height: 1.2px; width: 100%;">
                <div class="zuo" style="height: 1.2px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1.2px; width: 95%; background-color: #efefef; float: left"></div>
            </div>
            <div class="name" style="height: 60px; width: 100%; background-color: #fefefe">
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="ming" style="height: 60px; width: 15%; color: #818181;float: left; font-family: 黑体; font-size: 22px">
                    部门
                </div>
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="inpu1" style="height: 60px; width: 58%; float: left; display: flex; align-items: center; font-size: 22px; font-family: 黑体">
                    <!--<input v-model="usermsg.department" >-->
                    {{ usermsg.department }}
                </div>
            </div>
            <div class="jiange" style="height: 1.2px; width: 100%;">
                <div class="zuo" style="height: 1.2px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1.2px; width: 95%; background-color: #efefef; float: left"></div>
            </div>
            <div class="name" style="height: 60px; width: 100%; background-color: #fefefe">
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="ming" style="height: 60px; width: 15%; color: #818181;float: left; font-family: 黑体; font-size: 22px">
                    ID号
                </div>
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="inpu1" style="height: 60px; width: 58%; float: left; display: flex; align-items: center; font-size: 22px; font-family: 黑体">
                    <!--<input v-model="usermsg.userID">-->
                    {{ usermsg.userID }}
                </div>
            </div>
            <div class="jiange" style="height: 1.2px; width: 100%;">
                <div class="zuo" style="height: 1.2px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1.2px; width: 95%; background-color: #efefef; float: left"></div>
            </div>
            <div class="name" style="height: 60px; width: 100%; background-color: #fefefe">
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="ming" style="height: 60px; width: 15%; color: #818181;float: left; font-family: 黑体; font-size: 22px">
                    电话
                </div>
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="inpu" style="height: 60px; width: 58%; float: left">
                    <input v-model="usermsg.phoneNumber">
                </div>
                <div class="submit" style="height: 60px; width: 17%;float: left;">点击修改</div>
            </div>
            <div class="jiange" style="height: 1.2px; width: 100%;">
                <div class="zuo" style="height: 1.2px; width: 5%; background-color: #fefefe; float: left"></div>
                <div class="you" style="height: 1.2px; width: 95%; background-color: #efefef; float: left"></div>
            </div>
            <div class="name" style="height: 60px; width: 100%; background-color: #fefefe">
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="ming" style="height: 60px; width: 15%; color: #818181;float: left; font-family: 黑体; font-size: 22px">
                    邮箱
                </div>
                <div class="bian" style="height: 60px; width: 5%; float: left"></div>
                <div class="inpu" style="height: 60px; width: 58%; float: left">
                    <input v-model="usermsg.email">
                </div>
                <div class="submit" style="height: 60px; width: 17%;float: left;">点击修改</div>
            </div>
        </div>
        <div class="bank" style="height: 15px; width: 100%; background-color: #f3f5f7"></div>
        <div class="name" style="height: 60px; width: 100%; background-color: #fefefe">
            <div class="bian" style="height: 60px; width: 5%; float: left;"></div>
            <div class="wenzi" style="height: 60px; width: 37%;float: left; color: #818181; font-family: 黑体; font-size: 22px">录入人脸信息</div>
            <div class="bank" style="height: 60px; width: 47%; float: left;"></div>
            <div class="left" style="height: 60px; width: 11%; display: flex;align-items: center; float: left;" @click="put">
                <img src="../assets/put.png" height="28">
            </div>
        </div>
    </div>



</template>

<script>
    export default {
        name: "PersonalMsg",
        data(){
            return{
                usermsg: this.$store.state.usermsg,
            }
        },
        methods:{
            back(){
                this.$router.push('/zhuye');
            },
            update(){
                // let form={
                //     userID: this.$store.state.userID,
                //     email: this.usermsg.email,
                // };
                // this.$store.dispatch('updateEmail',form);
                //
                // let form1={
                //     userID: this.$store.state.userID,
                //     phoneNumber: this.usermsg.phoneNumber,
                // };
                // this.$store.dispatch('updatePhone',form1);
                let form={
                    email: this.usermsg.email,
                    phoneNumber: this.usermsg.phoneNumber,
                };
                this.$store.dispatch('updateMsg',form).then(()=>{
                    this.$router.push({
                        name: 'login2',
                        params: {
                            username: this.usermsg.phoneNumber,
                        }
                    })
                })

            },
            // gaizhao()
            // {
            //     this.zhao=1;
            //     let constraints = {
            //         video: {width: 200, height: 200},
            //         audio: true
            //     };
            //     let video = document.getElementById("video");
            //     // let promise = navigator.mediaDevices.getUserMedia(constraints);
            //     // promise.then(function (MediaStream) {
            //     //     video.srcObject = MediaStream;
            //     //     video.play();
            //     // });
            //     video.play();
            //     let canvas = document.getElementById("canvas");
            //     let ctx = canvas.getContext('2d');
            //     ctx.fillStyle="#ffffff";
            //     ctx.fillRect(0,0,200,200);
            //     ctx.drawImage(video, 0, 0, 200, 200);
            //     var code=canvas.toDataURL("image/jpeg");
            // },
            callCamera () {
                // H5调用电脑摄像头API
                this.zhao=1;
                navigator.mediaDevices.getUserMedia({
                    video: {width: 200, height: 200},
                    audio: true
                }).then(success => {
                    // 摄像头开启成功
                    this.$refs['video'].srcObject = success;
                    // 实时拍照效果
                    this.$refs['video'].play()
                }).catch(error => {
                    console.error('摄像头开启失败，请检查摄像头是否可用！')
                })
            },
            photograph () {
                let ctx = this.$refs['canvas'].getContext('2d')
                // 把当前视频帧内容渲染到canvas上
                ctx.drawImage(this.$refs['video'], 0, 0, 200, 200)
                // 转base64格式、图片格式转换、图片质量压缩
                let imgBase64 = this.$refs['canvas'].toDataURL('image/jpeg');
                this.avatar=imgBase64;
                console.log(imgBase64);

                // this.$store.dispatch("setFace",form).then((res) =>{
                //     this.$messagebox.alert(res.data);
                // })
                let form={
                    userID: this.userID,
                    imgStr: imgBase64,
                };
                this.$store.dispatch("setFace",form).then(() =>{
                    // this.$messagebox.alert("设置成功");
                    console.log(form.userID);
                })


                // 由字节转换为KB 判断大小
                // let str = imgBase64.replace('data:image/jpeg;base64,', '')
                // let strLength = str.length
                // let fileLength = parseInt(strLength - (strLength / 8) * 2)
                // // 图片尺寸  用于判断
                // let size = (fileLength / 1024).toFixed(2)
                // console.log(size)

                // // 上传拍照信息  调用接口上传图片 .........
                //
                // // 保存到本地
                // this.dialogCamera = false
                // let ADOM = document.createElement('a')
                // ADOM.href = this.headImgSrc
                // ADOM.download = new Date().getTime() + '.jpeg'
                // ADOM.click()
            },
            // 关闭摄像头
            closeCamera () {
                if (!this.$refs['video'].srcObject) {
                    this.dialogCamera = false;
                    return
                }
                let stream = this.$refs['video'].srcObject;
                let tracks = stream.getTracks();
                tracks.forEach(track => {
                    track.stop()
                });
                this.$refs['video'].srcObject = null
                this.zhao=0;

                // let form={
                //     userID: this.userID,
                //     imgStr: imgBase64,
                // };
                // this.$store.dispatch("setFace",form).then(() =>{
                //     // this.$messagebox.alert("设置成功");
                //     this.$messagebox.alert(form.userID);
                // })
            },

            put(){
                this.$router.push({path: '/photo'});
            }
        }

    }
</script>

<style scoped>
    .header{
        height: 60px;
        width: 100%;
        background-color: #fefefe;
        color: #353535;
        font-family: 黑体;
    }

    .middle,.right{
        height: 60px;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .bian,.ming,.inpu,.you,.wenzi{
        height: 60px;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    input{
        height: 40px;
        width: 100%;
        font-size: 20px;
        font-family: 黑体;
        border: 0;
        outline: none;
    }
    
    .submit{
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        color: #818181;
    }
</style>
