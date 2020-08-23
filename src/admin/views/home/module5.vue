<template>
    <div class="modal-box module5">
        <div class='modal-header'>
            <div class="title">
                <h4>客户质量占比</h4>
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
                    :clearable='false'
                    start-placeholder="开始"
                    end-placeholder="结束">
                </el-date-picker>
                
            </div>
        </div>
        <div class="modal-content">
            <div class='content-title'>
                规则: A类: <strong>56</strong> B类: <strong>7</strong> CDE类: <strong>0</strong>
            </div>
            <div class="font_echarts">
                <div id="myChart5" style="width:66%; height: 290px"></div>
                <ul>
                    <li>
                        <span>客户总量</span>
                        <p>36666客户</p>
                    </li>
                    <li>
                        <span>A类客户</span>
                        <p>3334客户</p>
                    </li>
                    <li>
                        <span>B类客户</span>
                        <p>4400客户</p>
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
                var myChart = this.$echarts.init(document.getElementById('myChart5'));
                // 绘制图表
                myChart.setOption({
                    // tooltip: {
                    //     trigger: 'item',
                    //     formatter: '{a} <br/>{b}: {c} ({d}%)'
                    // },
                    // legend: {
                    //     orient: 'vertical',
                    //     left: 10,
                    //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    // },
                    graphic:{     //图形中间文字
                         elements: [
                            {
                                type:"text",
                                left:"center",
                                top:"center",
                                style:{
                                    text:"AB类客户占比",
                                    textAlign:"center",
                                    fill:"#000",
                                    fontSize: 14
                                }
                            },
                            {
                                type:"text",
                                left:"center",
                                bottom: '40%',
                                style:{
                                    text:"46%",
                                    textAlign:"center",
                                    fill:"#5962ff",
                                    fontSize: 14
                                }
                            }
                        ]
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            // emphasis: {
                            //     label: {
                            //         show: true,
                            //         fontSize: '30',
                            //         fontWeight: 'bold'
                            //     }
                            // },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 335, name: 'A类客户'},
                                {value: 310, name: 'B类客户'},
                                {value: 234, name: 'CDE类'},
                            ]
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
