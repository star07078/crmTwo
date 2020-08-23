<template>
    <div class="modal-box module13">
        <div class='modal-header'>
            <div class="title">
                <h4>客户初次跟进等级标签分布</h4>
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
        <div class="modal-content flex">
            <span>
                <div id="myChart13-1" style="width:auto; height:450px"></div>
            </span>
            <span>
                <div id="myChart13-2" style="width:auto; height:450px"></div>
            </span>
            <span>
                <div id="myChart13-3" style="width:auto; height:450px"></div>
            </span>
            <span>
                <div id="myChart13-4" style="width:auto; height:450px"></div>
            </span>
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
                var myChart1 = this.$echarts.init(document.getElementById('myChart13-1'));
                var myChart2 = this.$echarts.init(document.getElementById('myChart13-2'));
                var myChart3 = this.$echarts.init(document.getElementById('myChart13-3'));
                var myChart4 = this.$echarts.init(document.getElementById('myChart13-4'));
                // 绘制图表
                myChart1.setOption({
                    title: {
                        text: 'A类客户',
                        bottom: 160,
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 'center',
                        bottom: 0,
                        itemGap: 20,
                        itemWidth: 60,
                        textStyle: {
                            fontSize: 18,
                            lineHeight: 20
                        },
                        data: [ '标签1', '标签2', '标签3', '标签4']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            center: ['center', '30%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '标签1'},
                                {value: 234, name: '标签2'},
                                {value: 135, name: '标签3'},
                                {value: 778, name: '标签4'}
                            ],
                            label:{            //饼图图形上的文本标签
                                normal:{
                                    show:true,
                                    position:'inner',
                                    textStyle : {
                                        fontWeight : 300 ,
                                        fontSize : 16    //文字的字体大小
                                    },
                                    formatter:'{d}%'
                                }
                            }
                        }
                    ]
                })
                myChart2.setOption({
                    title: {
                        text: 'B类客户',
                        bottom: 160,
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 'center',
                        bottom: 0,
                        itemGap: 20,
                        itemWidth: 60,
                        textStyle: {
                            fontSize: 18,
                            lineHeight: 20
                        },
                        data: [ '标签1', '标签2', '标签3', '标签4']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            center: ['center', '30%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '标签1'},
                                {value: 234, name: '标签2'},
                                {value: 135, name: '标签3'},
                                {value: 778, name: '标签4'}
                            ],
                            label:{            //饼图图形上的文本标签
                                normal:{
                                    show:true,
                                    position:'inner',
                                    textStyle : {
                                        fontWeight : 300 ,
                                        fontSize : 16    //文字的字体大小
                                    },
                                    formatter:'{d}%'
                                }
                            }
                        }
                    ]
                })
                myChart3.setOption({
                    title: {
                        text: 'C类客户',
                        bottom: 160,
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 'center',
                        bottom: 0,
                        itemGap: 20,
                        itemWidth: 60,
                        textStyle: {
                            fontSize: 18,
                            lineHeight: 20
                        },
                        data: [ '标签1', '标签2', '标签3', '标签4']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            center: ['center', '30%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '标签1'},
                                {value: 234, name: '标签2'},
                                {value: 135, name: '标签3'},
                                {value: 778, name: '标签4'}
                            ],
                            label:{            //饼图图形上的文本标签
                                normal:{
                                    show:true,
                                    position:'inner',
                                    textStyle : {
                                        fontWeight : 300 ,
                                        fontSize : 16    //文字的字体大小
                                    },
                                    formatter:'{d}%'
                                }
                            }
                        }
                    ]
                })
                myChart4.setOption({
                    title: {
                        text: 'D类客户',
                        bottom: 160,
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 'center',
                        bottom: 0,
                        itemGap: 20,
                        itemWidth: 60,
                        textStyle: {
                            fontSize: 18,
                            lineHeight: 20
                        },
                        data: [ '标签1', '标签2', '标签3', '标签4']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '30%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '标签1'},
                                {value: 234, name: '标签2'},
                                {value: 135, name: '标签3'},
                                {value: 778, name: '标签4'}
                            ],
                            label:{            //饼图图形上的文本标签
                                normal:{
                                    show:true,
                                    position:'inner',
                                    textStyle : {
                                        fontWeight : 300 ,
                                        fontSize : 16    //文字的字体大小
                                    },
                                    formatter:'{d}%'
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
