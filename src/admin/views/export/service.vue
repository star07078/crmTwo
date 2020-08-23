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
                    {thwidth: '10%', field: 'name', title: '公司名称'},
                    {thwidth: '10%', field: 'data', title: '创建时间'},
                    {thwidth: '10%', field: 'sales', title: '销售员'},
                    {thwidth: '10%', field: 'manage', title: '管理员'},
                    {thwidth: '10%', field: 'manageUser', title: '管理员账号'},
                    {thwidth: '10%', field: 'ratio', title: '分配比率'},
                    {thwidth: '10%', field: 'cost', title: '金额成本'},
                    {thwidth: '10%', field: 'hold', title: '客户持有'},
                    {thwidth: '10%', field: 'followup', title: '正在跟进量'},
                    {thwidth: '10%', field: 'money', title: '签订金额'},
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
                    const tHeader = ['公司名称', '创建事件', '销售员', '管理员', '管理员账号', '分配比率', '金额成本',
                 '客户持有', '正在跟进量', '签订金额'];
                    const filterVal = ['name','data', 'sales', 'manage', 'manageUser', 'ratio', 'cost', 'hold', 'followu', 'money'];
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
        },
        mounted(){
            console.log(this.exportsTableData)
        }
    }
</script>

<style lang="less" scoped>
    .modal-content{
        // height: 100% !important;
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            font-weight: 800;
            font-size: 16px;
            margin: 0 0 20px;
            span{
                display: inline-block;
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                background: #eee;
                &.active{
                    background: #0079fe;
                    color: #fff;
                }
            }
        }
        .v-table{
            width: 100%;
            height: 400px;
            overflow: auto;
        }
        .address{
            width: 100%;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                background: #0079fe;
                padding: 10px 20px;
                font-size: 16px;
                color: #fff;
                border-radius: 4px;
            }
        }
        .page{
            display: flex;
            justify-content: flex-end;
            margin: 20px -1px 0 0;
        }
    }
    .modal-foot{
        span{
            font-size: 14px;
        }
    }
</style>