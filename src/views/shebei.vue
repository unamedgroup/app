<template>
    <div class="shebei">
        <div class="remote">
            设备遥控器
        </div>
        <div class="touying">
            <mt-switch :value.sync="value1" style="font-size: 20px; ! important">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投影仪</mt-switch>
        </div>
        <div class="jiange"></div>
        <div class="touying">
            <mt-switch :value.sync="value2" style="font-size: 20px; ! important">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幻灯片</mt-switch>
        </div>
        <div class="jiange"></div>
        <div class="touying">
            <mt-switch :value.sync="value3" style="font-size: 20px; ! important">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;灯控器</mt-switch>
        </div>
        <div class="jiange"></div>
        <div class="touying">
            <mt-switch :value.sync="value4" style="font-size: 20px; ! important">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扩音器</mt-switch>
        </div>
        <div class="jiange"></div>
        <div class="touying">
            <mt-switch :value.sync="value" style="font-size: 20px; ! important">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;影碟机</mt-switch>
        </div>
        <div class="jiange"></div>
        <div class="touying">
            <mt-switch :value.sync="value5" style="font-size: 20px; ! important">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录像机</mt-switch>
        </div>
        <div class="jiange"></div>
        <div class="kongtiao">
            <mt-cell style="background-color: #e7f3f3; font-size: 25px; !important"
                     title="空调"
                     to="/kongtiao"
                     is-link
                     value="">
            </mt-cell>
        </div>
        <div class="kongbai"></div>
    </div>
</template>

<script>
    export default {
        name: "shebei",
        data () {
            return {
                value1: undefined,
                value2: undefined,
                value3: undefined,
                value4: undefined,
                value5: undefined,
                panel: '',
            }
        },
        methods: {
            toggle (panel) {
                this.panel = panel === this.panel ? '' : panel;
            }
        }
    }
</script>

<style scoped>

    .remote{
        height: 70px;
        width: 100%;
        background-color: #008181;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        color: #ffffff;
        font-size: 25px;
    }

    .touying{
        height: 50px;
        width: 100%;
        background-color: #e7f3f3;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .jiange{
        height: 1px;
        width: 100%;
        background-color: #c2cfe6;
    }

    .kongtiao{
        height: 50px;
        width: 100%;
        background-color: #e7f3f3;
        font-size: 20px;
    }

    .kongbai{
        height: 310px;
        width: 100%;
        background-color: #e7f3f3;
    }
</style>
