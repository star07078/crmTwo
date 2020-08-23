<template>
    <div class="content">
        <!-- <div class='echarts-header'></div> -->
        <aside class='aside'>
            <Module9 />
        </aside>
        <div class="modal-box">
            <div class='modal-header'>
                <strong>沟通频次成交占比</strong>
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
    import Module9 from '../home/module9.vue'
    export default {
        components: {
            Module9
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
                    {"city":"石家庄","service":"3","sales":"16","clientA1":"7","clientA2":"12","clientA3":"46.6%"},
                 ],
                columns: [
                    {field: 'city', title: '城市', titleAlign: 'center'},
                    {field: 'service', title: '服务商', titleAlign: 'center'},
                    {field: 'sales', title: '销售员', titleAlign: 'center'},
                    {field: 'clientA1', title: 'A类客户成交量', titleAlign: 'center'},
                    {field: 'clientA2', title: 'A类客户沟通量', titleAlign: 'center'},
                    {field: 'clientA3', title: 'A类客户沟通频次成交比', titleAlign: 'center'}
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