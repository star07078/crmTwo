<template>
    <div class="modal-box">
        <div class='modal-header'>
            <h4>新增客户</h4>
            <i class="iconfont iconzu999" @click='cancel'></i>
        </div>
        <div v-if='step'>
            <div class="modal-content">
                <ul>
                    <li>
                        <span class='active'>1</span>
                        导出预览
                    </li>
                    <li>
                        <span>2</span>
                        导出数据
                    </li>
                </ul>
                <div class="v-table">
                    <vTable
                        style="width:1200px"
                        title-bg-color="#eee"
                        :columns="columns"
                        :table-data="showData"
                        row-hover-color="#eee"
                        row-click-color="#edf7ff"
                    ></vTable>
                </div>
                <div class="page">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    page-size="5"
                    @current-change='currentChange'
                    :total="exportsTableData.length">
                    </el-pagination>
                </div>
            </div>
            <div class="modal-foot">
                <span @click='cancel'>取消</span>
                <span @click='next("second")' class='active'>下一步</span>
            </div> 
        </div>
        <div v-else>
            <div class="modal-content">
                <ul>
                    <li>
                        <span>1</span>
                        导出预览
                    </li>
                    <li>
                        <span class='active'>2</span>
                        导出数据
                    </li>
                </ul>
                <div class="address">
                    <button @click='exportData'>请选择导出地址</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            exportsTableData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                // 显示得数据
                showData: [],
                // 步骤
                step: true,
                columns: [
                    {field: 'name', thwidth: '10%', title: '公司名称', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'area', thwidth: '5%', title: '城市', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'date', thwidth: '8%', title: '录入日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'trade', thwidth: '5%', title: '所属行业', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'rating',thwidth: '5%', title: '客户评级', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'intent', thwidth: '5%', title: '意向阶段', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'person', thwidth: '5%', title: '联系人', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'wx', thwidth: '7%', title: '微信', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'tel', thwidth: '7%', title: '手机号码', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'service', thwidth: '5%', title: '服务商', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'sales', thwidth: '5%', title: '销售员', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'baifang', thwidth: '5%', title: '是否拜访', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'qiandan', thwidth: '5%', title: '是否签单', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'time', thwidth: '5%', title: '签订日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'money', thwidth: '5%', title: '签订金额', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'beizhu', thwidth: '5%', title: '签单备注', titleAlign: 'center', columnAlign: 'center',isResize:true},
                ]
            }
        },
        methods: {
            cancel(){
                this.$emit('close')
            },
            next(val){
                this.step = false;
            },
            exportData(){
                this.export2Excel()
            },
            currentChange(val) {
                this.showData = this.exportsTableData.slice((val-1)*5, val*5)
            },
            export2Excel(){
                require.ensure([], () => {
                    const { export_json_to_excel } = require('./Export2Excel');
                    const tHeader = ['公司名称', '城市', '录入日期', '所属行业', '客户评级', '意向阶段', '联系人',
                 '微信', '手机号码', '服务商', '销售员', '是否拜访', '是否签单', '签订日期', '签订金额', '签单备注',];
                    const filterVal = ['name','area','data','trade', 'rating',
                     'intent', 'person', 'wx', 'tel', 'service', 'sales',
                      'baifang', 'qiandan', 'time', 'money', 'beizhu'];
                    const list = this.showData;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '数据');
                })
            },
            formatJson(filterVal, jsonData){
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
        },
        created(){
            this.showData = this.exportsTableData.slice(0,5);
        }
    }
</script>

<style lang="less" scoped>
    .modal-box{
        height: auto;
        font-size: 14px;
    }
    .modal-content{
        height: 100% !important;
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            font-weight: 800;
            margin: 0 0 20px;
            span{
                display: inline-block;
                width: 40px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: #eee;
                &.active{
                    background: #0079fe;
                    color: #fff;
                }
            }
        }
        .v-table{
            width: 100%;
            overflow: auto;
        }
        .address{
            width: 100%;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                background: #0079fe;
                padding: 6px 20px;
                font-size: 20px;
                color: #fff;
                border-radius: 4px;
            }
        }
        .page{
            display: flex;
            justify-content: flex-end;
            margin: 10px -10px -10px 0;
        }
    }
    .modal-foot{
        span{
            padding: 2px 16px;
        }
    }
</style>