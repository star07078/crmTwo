<template>
    <div class="modal-box module3">
        <div class='modal-header'>
            <div class="title">
                <h4>客户新增</h4>
            </div>
            <div class="option">
                <el-cascader 
                    :options="options1" 
                    :show-all-levels="false"
                    size='small'
                ></el-cascader>
                
                <el-select v-model="value2" size="small" placeholder="服务商">
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value3" size="small" placeholder="销售员">
                    <el-option
                        v-for="item in options3"
                        :key="item.value"
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
        <div class="modal-content">
            <div class='content-title'>
                <span></span>客户新增
            </div>
            <div id="myChart3" style="width:99%; height:310px"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                options1: this.elementCity,
                value1: '',
                options2: [
                    {
                        value: '选项1',
                        label: '服务商A'
                    }, 
                    {
                        value: '选项2',
                        label: '服务商B'
                    },
                ],
                value2: '',
                options3: [
                    {
                        value: '选项1',
                        label: '销售员1'
                    }
                ],
                value3: '',
                value4: ''
            }
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart3'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        show: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 800, 1320, 400, 600, 788, 456, 900],
                        type: 'line',
                        areaStyle: {},
                        smooth:true
                    }]
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>
