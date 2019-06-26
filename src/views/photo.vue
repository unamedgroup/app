<template>
    <div class="photo">
        <div class="header">
            <div class="left1" style="height: 60px; width: 20%; display: flex;align-items: center; float: left;">
                <img src="../assets/back.png" @click="back">
            </div>
            <div class="wenzi" style="width: 60%; font-weight: bold; font-size: 24px;">
                人像录入
            </div>
            <div class="bian" style="height: 60px; width: 20%; float: left"></div>
        </div>
        <div class="jiange" style="height: 15px; width: 100%; background-color: #f3f5f7"></div>
        <div class="xiang" v-show="this.zhao==0">
            <img :src="avatar" @click="callCamera" alt="摄像头">
        </div>

        <div class="photoz" v-show="this.zhao==1">
        <div class="huabu">
            <video ref="video" width="180" height="180" autoplay></video>
            <canvas ref="canvas" width="180" height="180"></canvas>
        </div>
        <div class="zhaoxiang">
            <div class="button1">
                <mt-button type="default" size="normal" @click="photograph" >拍照</mt-button>
            </div>
            <div class="button1">
                <mt-button type="default" size="normal" @click="closeCamera">确认</mt-button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import remote from '../assets/photograph.png'
    export default {
        name: "photo",
        data(){
            return{
                zhao: 0,
                avatar: remote,
                state: 0,
            }
        },
        methods:{
            back(){
                this.$router.push('/person');
            },
            callCamera () {
                // H5调用电脑摄像头API
                this.zhao=1;
                navigator.mediaDevices.getUserMedia({
                    video: {width: 180, height: 180},
                    audio: true
                }).then(success => {
                    // 摄像头开启成功
                    this.$refs['video'].srcObject = success;
                    // 实时拍照效果
                    this.$refs['video'].play()
                }).catch(error => {
                    console.error('摄像头开启失败，请检查摄像头是否可用！');
                    this.$messagebox.alert("摄像头开启失败，请刷新重试");
                })
            },

            photograph () {
                this.state=1;
                let ctx = this.$refs['canvas'].getContext('2d');
                ctx.drawImage(this.$refs['video'], 0, 0, 180, 180)
                // 转base64格式、图片格式转换、图片质量压缩
                let imgBase64 = this.$refs['canvas'].toDataURL('image/jpeg');
                this.avatar=imgBase64;
                console.log(imgBase64);
                let form={
                    userID: this.$store.state.userID,
                    imgStr: imgBase64,
                };
                this.$store.dispatch("setFace",form).then(() =>{
                    // this.$messagebox.alert("设置成功");
                    console.log(form.userID);
                })
                // this.$messagebox.alert("设置成功");
            },

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
                this.$refs['video'].srcObject = null;
                this.zhao=0;
                this.$router.push('/person');
            },
        }
    }
</script>

<style scoped>
    .header{
        height: 60px;
        width: 100%;
        background-color: #ffffff;
    }

    .wenzi{
        height: 60px;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .xiang{
        height: 300px;
        width: 100%;
        background-color: #ffffff;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }


    .huabu{
        height: 250px;
        width: 100%;
        background-color: #ffffff;
    }

    .zhaoxiang{
        height: 100px;
        width: 100%;
        background-color: #ffffff;
    }

    .button1{
        height: 80px;
        width: 50%;
        background-color: #ffffff;
        float: left;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
</style>
