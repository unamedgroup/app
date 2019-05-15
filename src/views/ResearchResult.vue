<template>
    <div class="ResearchResult">
        <div class="result">
                <mu-paper :z-depth="1">
                    <!--<mu-data-table selectable select-all :selects.sync="selects" checkbox :columns="columns" :sort.sync="sort" :data="list.slice(0, 6)">-->
                    <mu-data-table  :columns="columns" :sort.sync="sort" :data="list.slice(0, 6)">
                        <template slot-scope="scope" style="font-size: 20px ! important">
                            <td>{{scope.row.name}}</td>
                            <td>{{scope.row.mingzi}}</td>
                            <td>
                                <mu-button color="green" @click="tiaozhuan">预订</mu-button>
                            </td>
                        </template>
                    </mu-data-table>
                </mu-paper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResearchResult",
        data(){
            return{
                selects: [],
                sort: {
                    name: '',
                    order: 'asc'
                },
                columns: [
                    { title: '会议室编号', width: 120, name: 'name' },
                    { title: '会议室名称', width: 140, name: 'mingzi'},
                    { title: '预订', width: 150, name: 'anniu'},
                ],
                list: [
                    {
                        name: 1,
                        mingzi: '测试会议室',
                    },
                    {
                        name: 2,
                        mingzi: '豪华会议室',
                    },
                    {
                        name: 3,
                        mingzi: '开发会议室',
                    },
                    {
                        name: 4,
                        mingzi: '测试会议室',
                    },
                    {
                        name: 5,
                        mingzi: '研讨教室',
                    },
                    {
                        name: 6,
                        mingzi: '小会议室',
                    },
                    {
                        name: 7,
                        mingzi: '御用会议室',
                    },

                ]
            };
            },
        methods: {
            tiaozhuan(){
                this.$router.push('/table');
            }
        }
    }
</script>

<style scoped>
    .result{
        height: 390px;
        width: 100%;
    }

    .footer{
        height: 70px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        padding-top: 20px;
    }
</style>
