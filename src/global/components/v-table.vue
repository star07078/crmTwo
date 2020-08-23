<template>
    <table border='1' :style="{fontSize: fontSize}">
        <thead>
            <tr :style="{
                    height: titleRowHeight,
                    background: titleBgColor
                }"
            >
                <th v-for='(col,i) in columns' 
                    :key='i'
                    :style="{textAlign: col.theadAlign, width: col.thwidth}"
                >
                    <span v-if="col.type == 'selection'"
                        class="v-checkbox"
                    >
                        <label :class='{"v-checkbox-active" : col.checked}'>
                            <input type="checkbox" 
                                v-model="col.checked"
                                @change='selectAll(col.checked)'
                            >
                            <span></span>
                        </label>
                    </span>
                    <span v-else :style="{textAlign: col.theadAlign}">
                        {{ col.title }}
                    </span>
                </th>
            </tr>
        </thead>
        <tbody :style="{textAlign: tbodyAlign}">
            <tr v-for='(item,i) in tableData'
                :key='i'
                :value='i'
                :style="{
                    height: titleRowHeight,
                    background: i === trBgNum ? rowClickColor : ''
                }"
                @click='changeTrBg(i)'
            >
                <td v-for='(col, j) in columns' 
                    :key='j'
                >
                    <span v-if="col.type == 'selection'"
                        class="v-checkbox"
                    >
                        <label :class='{"v-checkbox-active" : item.checked}'>
                            <input type="checkbox" 
                                @change='selectChange(i, item.checked)'
                                v-model="item.checked"
                            >
                            <span></span>
                        </label>
                    </span>
                    <span v-else-if='col.componentName'>
                        <compontent :rowData='item' :rowIndex='i'
                            :is='col.componentName'
                            :tableOperating='tableOperating'
                        />
                    </span>
                    <span v-else-if='col.formatter' v-html='col.formatter(item, i)'>
                    </span>
                    <span v-else >
                        {{ item[col.field] }}
                    </span>
                </td>
            </tr>
            <tr :style="{height: rowHeight}" v-if="tableData.length == 0">
                <td :colspan="columns.length">
                    <span>暂无数据</span>
                </td>
            </tr>
        </tbody>
            <tfoot>
                <tr :style="{height: rowHeight}" v-if="isLoading">
                    <td :colspan="columns.length">
                        <i class="iconfont iconjiazai1"></i>
                    </td>
                </tr>
            </tfoot>
    </table>
</template>

<script>
    export default {
        name: 'v-table',
        props: {
            // 字体大小
            // fontSize: {
            //     type: String,
            //     default: '14px'
            // },
            // 表格内容数据
            tableData: {
                type: Array,
                required: true,
                default: []
            },
            // 表头数据
            columns: {
                type: Array,
                required: true,
                default: []
            },
            // th高度
            titleRowHeight: {
                type: [Number, String],
                default: '50px'
            },
            // td高度
            rowHeight: {
                type: [Number, String],
                default: '50px'
            },
            // tr的背景色
            titleBgColor: {
                type: String,
                default: '#ccc'
            },
            // 点击tr的背景色
            rowClickColor: {
                type: String,
            },
            // tody的对齐方式
            tbodyAlign:{
                type: String,
                default: 'center'
            },
            // 正在加载
            isLoading: {
                type: Boolean,
                default: false
            },
            tableOperating: Function
        },
        data(){
            return {
                trBgNum: '', //记录当前点击的是那个tr
            }
        },
        watch: {
            tableData: {
                handler(){
                    if(this.tableData.length != 0){
                        this.columns[0].checked = 
                        this.tableData.some(item=>item.checked == false) ? false : true;
                    }
                },
                deep: true
            }
        },
        methods: {
            // 单个按钮触发
            selectChange(i, checked, $event){
                this.$emit('selectChange', i, checked)
            },
            // 全选按钮触发
            selectAll(checked){
                this.tableData.forEach(item=>item.checked = checked);
                this.$emit('selectAll', checked)
            },
            // 改变tr的背景色
            changeTrBg(i, $event){
                this.trBgNum = i;
            },
            // upMessage(rowIndex, str){
            //     this.trBgNum = rowIndex;
            //     if(str){
            //         this.$emit('childEvent', rowIndex, str)
            //     }
            // }
        }
    }
    Vue.component('component',{
        props: {
            rowData: {
                type: [Object, Array]
            },
            rowIndex: Number,
        }
    })
</script>

<style lang='less' scoped>
    table{
        border: 1px solid #ccc;
        table-layout: fixed;
        font-size: 15px;
        .v-checkbox{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            label{
                width: 20px;
                height: 20px;
                position: relative;
                input{
                    opacity: 0;
                }
                span{
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    background: #fff;
                    cursor: pointer;
                    transition: all 0.3s;
                    &:hover{
                        border-color: #108ee9;
                    }   
                }
                &.v-checkbox-active{
                    span{
                        border-color: #108ee9;
                        background: #108ee9;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &:after{
                            content: '';
                            transition: all 0.3s;
                            width: 3px;
                            height: 10px;
                            border: 2px solid #fff;
                            border-top-color: transparent;
                            border-left-color: transparent;
                            transform: rotate(40deg) translate(-1px,-2px);
                        }
                    }
                }
            }
        }
        thead{
            th{
                font-weight: 500;
            }
        }
        tbody{
            tr{
                // &:hover{
                //     background: #eee;
                // }
                td{
                    span{
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        display: inline-block;
                    }
                }
                &:nth-child(2n){
                    background: #f1f6f9;
                }
            }      
        }
        tfoot{
            td{
                text-align: center;
                @keyframes rotate {
                    0%{
                        transform: rotate(0);
                    }
                    100%{
                        transform: rotate(360deg);
                    }
                }
                i{
                    display: inline-block;
                    font-size: 20px;
                    animation: rotate 1s infinite linear;
                }
            }
        }
    }
    @media screen and (max-width: 1600px){
        table{
            font-size: 13px;
        }
    }
</style>