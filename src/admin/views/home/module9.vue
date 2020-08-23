<template>
    <div class="modal-box module9">
        <div class='modal-header'>
            <div class="title">
                <h4>沟通频次成交占比</h4>
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
                    range-separator="至"
                    start-placeholder="开始"
                    end-placeholder="结束">
                </el-date-picker>
                
            </div>
        </div>
        <div class="modal-content">
            <div class="content-title">
                <label><input type="radio" name="module8">A类客户</label>
                <label><input type="radio" name="module8">B类客户</label>
                <label><input type="radio" name="module8">C类客户</label>
                <label><input type="radio" name="module8">D类客户</label>
            </div>
            <div class="font_echarts">
                <div id="myChart9" style="width:66%; height:290px"></div>
                <ul>
                    <li>
                        <span>A类客户总成交总量</span>
                        <p class='oringe'>83334400客户</p>
                    </li>
                    <li>
                        <span>A类客户沟通量</span>
                        <p>83334400客户</p>
                    </li>
                    <li>
                        <span>A类客户沟通频次成交占比</span>
                        <p>83334400客户</p>
                    </li>
                </ul>
            </div>
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
                var myChart = this.$echarts.init(document.getElementById('myChart9'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['沟通频次', '成交数量'],
                        axisLabel: {
                            margin: 20,
                            textStyle: {
                                color: '#000',
                                fontSize: 14
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
                        data: [300, 80],
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                color: function(params){
                                    var color = ['#5962ff', '#f8622f'];
                                    return color[params.dataIndex]
                                }
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 20
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

<style scoped>
    .modal-content{
        padding: 10px 0;
    }
</style>