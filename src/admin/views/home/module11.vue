<template>
    <div class="modal-box module11">
        <div class='modal-header'>
            <div class="title">
                <h4>客户等级分布</h4>
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
            <div id="myChart11" style="width: auto; height:280px"></div>
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
                var myChart = this.$echarts.init(document.getElementById('myChart11'));
                // 绘制图表

                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 50,
                        top: 50,
                        itemGap: 30,
                        itemWidth: 60,
                        textStyle: {
                            fontSize: 16,
                            lineHeight: 30
                        },
                        data: ['A级客户', 'B级客户', 'C级客户', 'D级客户', 'E级客户']
                    },
                    series: [
                        {
                            name: '客户等级分布',
                            type: 'pie',
                            radius: '65%',
                            center: ['40%', '60%'],
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
                            data: [
                                {value: 335, name: 'A级客户'},
                                {value: 310, name: 'B级客户'},
                                {value: 234, name: 'C级客户'},
                                {value: 135, name: 'D级客户'},
                                {value: 1548, name: 'E级客户'}
                            ],
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

