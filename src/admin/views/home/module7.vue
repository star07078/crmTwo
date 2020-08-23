<template>
    <div class="modal-box module7">
        <div class='modal-header'>
            <div class="title">
                <h4>各城市数据对比</h4>
            </div>
            <div class="option">
                
                <label><input type="radio" name='module7'>成交金额</label>
                <label><input type="radio" name='module7'>成交量</label>
                <label><input type="radio" name='module7'>跟进</label>
                <label><input type="radio" name='module7'>A类客户</label>
                <label><input type="radio" name='module7'>B类客户</label>
                <label><input type="radio" name='module7'>C类客户</label>
                <label><input type="radio" name='module7'>D类客户</label>
                <label><input type="radio" name='module7'>E类客户</label>
                
                <el-date-picker
                    v-model="value"
                    type="daterange"
                    size='small'
                    start-placeholder="开始"
                    end-placeholder="结束">
                </el-date-picker>
                
            </div>
        </div>
        <div class="modal-content">
            <div id="myChart7" style="width:99%; height:310px"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                value: ''
            }
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart7'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['石家庄', '广州', '深圳', '北京', '上海', '芜湖', '杭州', '银川', '拉萨', '南宁', '郑州', '大连'],
    
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [{
                        data: [200, 160, 100, 155, 142, 180, 50, 80, 90, 133, 50, 88],
                        type: 'bar',
                        barWidth: 30,
                        showBackground: false,
                        itemStyle:{
                            normal:{
                                color: '#5962ff'
                            }
                        },
                        
                        // label: {
                        //     show: false,
                        //     position: 'top',
                        //     textStyle: {
                        //         fontSize: 20,
                        //         color: '#ccc'
                        //     }
                        // }
                    }]
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>
