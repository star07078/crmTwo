<template>
    <div class="modal-box module12">
        <div class='modal-header'>
            <div class="title">
                <h4>客户阶段分布</h4>
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
            <div id="myChart12" style="width: auto; height:280px"></div>
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
                var myChart = this.$echarts.init(document.getElementById('myChart12'));
                // 绘制图表

                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 50,
                        top: 70,
                        itemGap: 30,
                        itemWidth: 60,
                        textStyle: {
                            fontSize: 16,
                            lineHeight: 50
                        },
                        data: [ '第一阶段', '第二阶段', '第三阶段', '第四阶段']
                    },
                    series: [
                        {
                            name: '客户阶段分布',
                            type: 'pie',
                            radius: '65%',
                            center: ['40%', '60%'],
                            data: [
                                {value: 310, name: '第一阶段'},
                                {value: 234, name: '第二阶段'},
                                {value: 135, name: '第三阶段'},
                                {value: 1048, name: '第四阶段'}
                            ],
                            label:{            //饼图图形上的文本标签
                                normal:{
                                    show:true,
                                    // position:'inner',
                                    textStyle : {
                                        fontWeight : 300 ,
                                        fontSize : 16    //文字的字体大小
                                    },
                                    formatter:'{d}%'
                                }
                            },
                            itemStyle:{ 
                                normal:{ 
                                    label:{ 
                                        show: true, 
                                        formatter: '{b} : {c} ({d}%)' 
                                    }, 
                                    labelLine:{
                                        show:true
                                    } 
                                } 
                            } 
                        }
                    ]
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>

