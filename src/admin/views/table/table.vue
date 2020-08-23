<template>
    <div class='home main'>
        <div class="content">
            <v-table
                style="width:100%"
                title-bg-color="#eee"
                :title-row-height="60"
                :row-height="60"
                :columns="columns"
                :table-data="tableData"
                :is-loading='true'
                row-click-color="#edf7ff"
                :tableOperating='tableOperating'
            ></v-table>
            <!-- tableOperating 操作表单内的组件，有三个参数
                    1 , 操作当前行的数据
                    2 , 操作当前行的索引
                    第三个需要在子组件内主动添加
                    3 , 点击当前子组件的type类型,
                @selectChange  单个按钮点击时被触发
                @selectAll     全选按钮点击时被触发
             -->
        <button @click='change'>change</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){ 
            return {
                tableData: [
                    {
                        "checked": false,
                        "name": "太原****",
                        "area": "太原",
                        "data": "2019-12-30",
                        "trade":"互联网",
                        "rating": "A",
                        "intent": "第一阶段",
                        "person": "",
                        "wx": "",
                        "tel": "",
                        "service": "",
                        "sales": "",
                        "baifang": "否",
                        "qiandan": "",
                        "tiem": "",
                        "money": "",
                        "beizhu": ""
                    },
                    {
                        "checked": true,
                        "name": "太原****",
                        "area": "太原",
                        "data": "2019-12-30",
                        "trade":"互联网",
                        "rating": "A",
                        "intent": "第一阶段",
                        "person": "",
                        "wx": "",
                        "tel": "",
                        "service": "",
                        "sales": "",
                        "baifang": "否",
                        "qiandan": "",
                        "tiem": "",
                        "money": "",
                        "beizhu": "1"
                    },
                    {
                        "checked": false,
                        "name": "太原****",
                        "area": "太原",
                        "data": "2019-12-30",
                        "trade":"互联网",
                        "rating": "A",
                        "intent": "第一阶段",
                        "person": "",
                        "wx": "",
                        "tel": "",
                        "service": "",
                        "sales": "",
                        "baifang": "否",
                        "qiandan": "",
                        "tiem": "",
                        "money": "",
                        "beizhu": "1"
                    },
                    {
                        "checked": true,
                        "name": "太原****",
                        "area": "太原",
                        "data": "2019-12-30",
                        "trade":"互联网",
                        "rating": "A",
                        "intent": "第一阶段",
                        "person": "",
                        "wx": "",
                        "tel": "",
                        "service": "",
                        "sales": "",
                        "baifang": "否",
                        "qiandan": "",
                        "tiem": "",
                        "money": "",
                        "beizhu": "1"
                    }
                ],
                columns: [
                    {width: 40, titleAlign: 'center',columnAlign:'center',type: 'selection'},
                    {field: 'name', title: '公司名称', width: 80, theadAlign: 'center',},
                    {field: 'area', title: '城市', width: 60, theadAlign: 'center',},
                    {field: 'data', title: '录入日期', width: 60, theadAlign: 'center',},
                    {field: 'trade', title: '所属行业', width: 60, theadAlign: 'center',},
                    {field: 'rating', title: '客户评级', width: 50, theadAlign: 'center',},
                    {field: 'intent', title: '意向阶段', width: 60, theadAlign: 'center',},
                    {field: 'person', title: '联系人', width: 60, theadAlign: 'center',},
                    {field: 'wx', title: '微信', width: 60, theadAlign: 'center',},
                    {field: 'tel', title: '手机号码', width: 60, theadAlign: 'center',},
                    {field: 'service', title: '服务商', width: 60, theadAlign: 'center',},
                    {field: 'sales', title: '销售员', width: 60, theadAlign: 'center',},
                    {field: 'baifang', title: '是否拜访', width: 40, theadAlign: 'center',},
                    {field: 'qiandan', title: '是否签单', width: 40, theadAlign: 'center',},
                    {field: 'time', title: '签订日期', width: 60, theadAlign: 'center',},
                    {field: 'money', title: '签订金额', width: 60, theadAlign: 'center',},
                    {field: 'beizhu', title: '签单备注', width: 60, theadAlign: 'center',},
                    {field: 'operating', title: '操作', width: 80, componentName: 'publicd-operation', titleAlign: 'center',},
                ]
            }
        },
        methods: {
            change(){
                // this.tableData[1].checked = !this.tableData[1].checked;
                // console.log(this.tableData)
            },
            tableOperating(rowData, rowIndex, type){
                rowData.checked = false
            }
        }
    }
    Vue.component('publicd-operation',{
        template:`<span>
        <a href="" @click.stop.prevent="look">查看</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow">删除</a>
        </span>`,
        props:{
            rowData: {
                type: [Object, Array ]
            },
            rowIndex: Number,
            tableOperating: Function
        },
        methods:{
            look(obj){
                console.log(this.rowData)
            },
            deleteRow(){
                console.log(this.rowIndex)
            }
        }
    })
</script>

<style lang="less">
   
</style>