<template>
    <div class="content">
        <!-- <div class='echarts-header'></div> -->
        <aside class='aside'>
            <Module6 />
        </aside>
        <div class="modal-box">
            <div class='modal-header'>
                <strong>投资回报率</strong>
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
    import Module6 from '../home/module6.vue'
    export default {
        components: {
            Module6
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
                    {"city":"石家庄","service":"服务商A","sales":"销售员A","soleMoney":"688","allMoney":"832","money":"38888","payback":"20%"},
                    {"city":"石家庄","service":"服务商A","sales":"销售员A","soleMoney":"688","allMoney":"832","money":"38888","payback":"20%"},
                    {"city":"石家庄","service":"服务商A","sales":"销售员A","soleMoney":"688","allMoney":"832","money":"38888","payback":"20%"},
                    {"city":"石家庄","service":"服务商A","sales":"销售员A","soleMoney":"688","allMoney":"832","money":"38888","payback":"20%"},
                    {"city":"石家庄","service":"服务商A","sales":"销售员A","soleMoney":"688","allMoney":"832","money":"38888","payback":"20%"},
                 ],
                columns: [
                    {field: 'city', title: '城市', titleAlign: 'center'},
                    {field: 'service', title: '服务商', titleAlign: 'center'},
                    {field: 'sales', title: '销售员', titleAlign: 'center'},
                    {field: 'soleMoney', title: '单客户金额成本', titleAlign: 'center'},
                    {field: 'allMoney', title: '合计投资金额成本', titleAlign: 'center'},
                    {field: 'money', title: '成交金额', titleAlign: 'center'},
                    {field: 'payback', title: '投资回报率', titleAlign: 'center'}
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