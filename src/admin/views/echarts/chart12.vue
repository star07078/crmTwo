<template>
    <div class="content">
        <!-- <div class='echarts-header'></div> -->
        <aside class='aside'>
            <Module7 />
        </aside>
        <div class="modal-box">
            <div class='modal-header'>
                <strong>销售从成交数据报表</strong>
                <span class='export'>导出</span>
            </div>
            <div class="modal-content heightauto">
                <vTable
                    style="width:100%"
                    title-bg-color="#eee"
                    :columns="columns"
                    :table-data="tableData"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
                    :is-loading='isLoading'
                    :tableOperating='tableOperating'
                ></vTable>
                <div class="modal-foot-right">
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5, 10, 20]"
                        page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData.length"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Module7 from '../home/module7.vue'
    export default {
        components: {
            Module7
        },
        data(){
            return {
                value: '',
                //  当前页码的数值
                currentPage: 1,
                // 数据的总条数
                total: '',
                // 每页的条数
                pageSizes: 5,
                // 导出开关
                exportsSwitch: false,
                tableData: [
                    {"city":"石家庄","money":"5555","number":"18","followNum":"13","a":"10","b":"16","c":"23","d":"31","e":"36"},
                    {"city":"石家庄","money":"5555","number":"18","followNum":"13","a":"10","b":"16","c":"23","d":"31","e":"36"},
                    {"city":"石家庄","money":"5555","number":"18","followNum":"13","a":"10","b":"16","c":"23","d":"31","e":"36"},
                    {"city":"石家庄","money":"5555","number":"18","followNum":"13","a":"10","b":"16","c":"23","d":"31","e":"36"},
                    {"city":"石家庄","money":"5555","number":"18","followNum":"13","a":"10","b":"16","c":"23","d":"31","e":"36"}
                 ],
                columns: [
                    {field: 'city', title: '城市', titleAlign: 'center'},
                    {field: 'money', title: '成交金额', titleAlign: 'center'},
                    {field: 'number', title: '成交量', titleAlign: 'center'},
                    {field: 'followNum', title: '跟进次数', titleAlign: 'center'},
                    {field: 'a', title: 'A类客户', titleAlign: 'center'},
                    {field: 'b', title: 'B类客户', titleAlign: 'center'},
                    {field: 'c', title: 'C类客户', titleAlign: 'center'},
                    {field: 'd', title: 'D类客户', titleAlign: 'center'},
                    {field: 'e', title: 'E类客户申请', titleAlign: 'center'}
                ]
            }
        }
    }
</script>

<style lang='less' scoped>
    .modal-content{
        height: auto;
    }
</style>