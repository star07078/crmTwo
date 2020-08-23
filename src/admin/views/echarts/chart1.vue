<template>
    <div class="content">
        <!-- <div class='echarts-header'></div> -->
        <aside class='aside'>
            <div class="modal-box">
                <div class='modal-header'>
                    <div class="title">
                        <h4>各城市数据对比</h4>
                    </div>
                    <div class="option">
                        <el-select v-model="value" size="small" placeholder="城市">
                            <el-option
                                v-for="item in options"
                                :key="item.value1"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        
                        <el-select v-model="value" size="small" placeholder="服务商">
                            <el-option
                                v-for="item in options"
                                :key="item.value2"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" size="small" placeholder="销售员">
                            <el-option
                                v-for="item in options"
                                :key="item.value3"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-date-picker
                            v-model="value4"
                            type="daterange"
                            size='small'
                            start-placeholder="开始"
                            end-placeholder="结束">
                        </el-date-picker>
                        
                    </div>
                </div>
                <div class="modal-content paddingnone">
                    <div id="myChart15" style="width:auto; height:310px"></div>
                </div>
            </div>
        </aside>
        <div class="modal-box">
            <div class='modal-header'>
                <div class="title">
                    <h4>销售从成交数据报表</h4>
                </div>
                <!-- <strong>销售从成交数据报表</strong> -->
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
    export default {
        data(){
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                //  当前页码的数值
                currentPage: 1,
                // 数据的总条数
                total: '',
                // 每页的条数
                pageSizes: 5,
                // 导出开关
                exportsSwitch: false,
                tableData: [
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                 ],
                columns: [
                    {field: 'time', title: '时间', titleAlign: 'center'},
                    {field: 'number', title: '成交数量', titleAlign: 'center'},
                    {field: 'money', title: '成交金额', titleAlign: 'center'},
                    {field: 'grow1', title: '成交金额环比增长', titleAlign: 'center'},
                    {field: 'grow2', title: '成交金额同比增长', titleAlign: 'center'},
                    {field: 'average', title: '平均客单价', titleAlign: 'center'}
                ]
            }
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart15'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月','12月'],
    
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [{
                        data: [200, 160, 100, 155, 142, 180, 50, 80, 90, 133, 55,78],
                        type: 'bar',
                        barWidth: 30,
                        itemStyle:{
                            normal:{
                                color: '#ccc'
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 20,
                                color: '#ccc'
                            }
                        }
                    }]
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>