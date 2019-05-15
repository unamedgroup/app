<template>
    <div class="table">
        <div class="header">
            会议室预订
        </div>
        <mu-container style="background-color: #e7f3f3; height: 650px; ! important">
            <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                <mu-form-item prop="input" label="会议主题">
                    <mu-text-field v-model="form.subject"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="date" label="会议时间">
                    <mu-date-input v-model="form.startTime" type="dateTime" actions></mu-date-input>
                    <br>至<br>
                    <mu-date-input v-model="form.endTime" type="dateTime" actions></mu-date-input>
                </mu-form-item>
                <mu-form-item prop="input" label="申请人">
                    <mu-text-field v-model="form.user"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="select" label="会议室">
                    <mu-select v-model="form.room">
                        <mu-option v-for="option,index in options" :key="option" :label="option"
                                   :value="option"></mu-option>
                    </mu-select>
                </mu-form-item>
                <mu-form-item prop="input" label="与会人数">
                    <mu-text-field v-model="form.number"></mu-text-field>
                </mu-form-item>
            </mu-form>
            <mu-button color="success" v-on:click.prevent="post">提交</mu-button>
        </mu-container>
    </div>

</template>

<script>

    import axios from 'axios'
    import qs from "qs";
    import {getDateTime} from "../util/change";
    export default {
        name: "table",
        data() {
            return {
                options: [
                    '1', '2', '3', '4',
                    '5', '6', '7', '8',
                    '9', '10'
                ],
                labelPosition: 'top',
                form: {
                    subject: '',
                    room: this.$route.params.roomID,
                    startTime: this.$store.state.startTime,
                    endTime: this.$store.state.endTime,
                    user: 1,
                    number: this.$route.params.capacity,
                    status: 1,
                }
            }
        },
        methods: {
                post: function () {
                    this.form.startTime = getDateTime(this.form.startTime);
                    this.form.endTime = getDateTime(this.form.endTime);
                this.$store.dispatch('orderMeeting', this.form).then(() => {
                    console.log('Jump');
                    this.$messagebox.alert("预订成功！").then(()=>{
                        this.$router.push({path: this.redirect || '/zhuye'});
                    });

                    console.log('End Jump')
                }).catch(() => {
                    console.log('Error');
                })

            }
        },
    }

</script>

<style scoped>
    .header {
        height: 70px;
        width: 100%;
        background-color: #009688;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        font-size: 25px;
    }

</style>
