<template>
    <div class="PersonalMsg">
        <div class="photo" v-show="zhao==0">
            <img :src="avatar" @click="callCamera" alt="摄像头">
        </div>
        <div class="photoz" v-show="zhao==1">
            <div class="photo">
                <video ref="video" width="200" height="200" autoplay></video>
                <canvas ref="canvas" width="200" height="200"></canvas>
            </div>
            <div class="zhaoxiang">
                <button type="primary" @click="photograph">拍照</button>
                <button type="primary" @click="closeCamera">确认</button>
            </div>

        </div>
        <!--<div class="zhaoxiang">-->
            <!--<mu-button style="background-color: #ffffff; color: #008181;" @click="gaizhao">更换图片</mu-button>-->
        <!--</div>-->
        <div class="form" >
            <mt-field label="用户名" v-model="name" style="background-color: #e7f3f3; height: 20px! important"></mt-field>
            <mt-field label="工号" v-model="userid" style="background-color: #e7f3f3; height: 20px! important"></mt-field>
            <mt-field label="密码" type="password" v-model="password" style="background-color: #e7f3f3; height: 20px! important"></mt-field>
            <mt-field label="电话" v-model="phonenumber" type="tel" style="background-color: #e7f3f3; height: 20px! important"></mt-field>
            <mt-field label="所属部门" v-model="department" style="background-color: #e7f3f3; height: 20px! important"></mt-field>
        </div>

        <div class="anniu">
            <mu-button style="background-color: #008181; color: #ffffff;" @click="unbind">保存更改</mu-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalMsg",
        data(){
            return{
                name: '刘孟骁',
                userid: '1607020101',
                password: '205544',
                phonenumber: '17864214150',
                department: '开发部门',
                zhao: 0,
                avatar: require('../assets/touxiang.jpg'),
                userID: this.$store.state.userID,
            }
        },
        methods:{
            unbind(){
                this.$messagebox.alert("操作成功");
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
        }

    }
</script>

<style scoped>
    .photo{
        height: 350px;
        width: 100%;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .zhaoxiang{
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

    .form{
        height: 300px;
        width: 100%;
        font-size: 20px;
        background-color: #e7f3f3;
        padding-top: 30px;
    }

    .anniu{
        height: 85px;
        width: 100%;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
</style>
