<template>
    <div class="modal-box module10">
        <div class='modal-header'>
            <div class="title">
                <h4>客户等级变化趋势</h4>
            </div>
            <div class="option">
                <label><input type="radio" name='module10'>A类客户</label>
                <label><input type="radio" name='module10'>B类客户</label>
                <label><input type="radio" name='module10'>C类客户</label>
                <label><input type="radio" name='module10'>D类客户</label>
                <label><input type="radio" name='module10'>E类客户</label>
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
                    range-separator="至"
                    start-placeholder="开始"
                    end-placeholder="结束">
                </el-date-picker>
                
            </div>
        </div>
        <div class="modal-content">
            <div class='content-title'>
                规则：从客户起始状态到客户最后状态的等级变化
            </div>
            <div id="myChart10" style="width: 99%; height:310px"></div>
        </div>
        <Alert v-if='labelSwitch' @close='labelSwitch = false'>
            <div class="modal-box-blue">
                <div class='modal-header'>
                    <h4>客户等级变化趋势</h4>
                    <i class='iconfont iconzu999' @click='labelSwitch = false'></i>
                </div>
                <div class="modal-content">
                    <dl>
                        <dd>
                            <i class='iconfont iconbiaoqian'></i><span>标签1</span><em>合计出现{{56}}次</em>
                            <p>标签话数文本标签话数文本标签</p>
                        </dd>
                        <dd>
                            <i class='iconfont iconbiaoqian'></i><span>标签1</span><em>合计出现{{56}}次</em>
                            <p>标签话数文本标签话数文本标签</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </Alert>
    </div>
</template>

<script>
    import Alert from '../../../global/components/alert.vue'
    import Block from '../../../global/components/block.vue'
    export default {
        name: 'index',
        components: {
            Alert,
            Block
        },
        data(){
            return {
                labelSwitch: false, //标签显示开关
                title: '', //标签标题
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
                var myChart = this.$echarts.init(document.getElementById('myChart10'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['A-A', 'A-B','A-C','A-D','A-E'],
                        offset: 38,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#000',
                                fontSize: 18
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 20
                    },
                    yAxis: {
                        type: 'value',
                        show: false
                    },
                    series: [{
                        data: [2234, 1927, 1700, 897, 1673],
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                color: '#5962ff'
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 20,
                                color: '#5962ff'
                            }
                        },
                        markPoint: {
                            symbol: 'rect',
                            symbolSize: [80,24],
                            symbolOffset: [0, 46],
                            animation: false,
                            label: {
                                color: '#5962ff',
                            },
                            itemStyle: {
                                color: '#fff',
                                borderColor: '#5962ff',
                                borderWidth: 1,
                            },
                            data: [
                                { value: '查看标签', xAxis: 0, yAxis: 0},
                                { value: '查看标签', xAxis: 1, yAxis: 0},
                                { value: '查看标签', xAxis: 2, yAxis: 0},
                                { value: '查看标签', xAxis: 3, yAxis: 0},
                                { value: '查看标签', xAxis: 4, yAxis: 0}
                            ]
                        },
                    }]
                })
                myChart.on('click',(params)=>{
                    if (params.componentType === 'markPoint') {
                        this.labelSwitch = true;
                        this.title = params.name;
                    }
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>
