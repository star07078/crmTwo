<template>
    <div class="modal-box">
        <div class='modal-header'>
            <h4>
                <slot>派发用户</slot>
            </h4>
             <i class="iconfont iconzu999" @click='cancel(false)'></i>
        </div>
        <div class="modal-content">
            <table border='1' class='table'>
                <thead>
                    <tr>
                        <th style="width: 20%">列名</th>
                        <th style="width: 60%">填写</th>
                        <th style="width: 20%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>派发服务商</td>
                        <td>
                            <el-select v-model="value" placeholder="选择部门">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <label>
                                <!-- <input type="radio">比例派发 -->
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>派发服务商</td>
                        <td>
                            <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择日期时间"
                                default-time="12:00:00">
                            </el-date-picker> 
                        </td>
                        <td>
                            <label>
                                <input type="radio">立即派发
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal-foot">
            <span @click='cancel(false)'>取消</span>
            <span @click='cancel(true)' class='active'>保存</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '部门1'
                    }, 
                    {
                        value: '选项2',
                        label: '部门2'
                    }
                ],
                value: '',
                value1: ''
            }
        },
        methods: {
            cancel(bool){
                this.$emit('close', bool)
            }
        }
    }
</script>

<style lang="less" scoped>
    .modal-content{
        height: 100% !important;
        .maxheight{
            margin-bottom: 20px;
            max-height: 300px;
            overflow-y: auto;
            border-bottom: 1px solid #ccc;
            border-top: 1px solid #ccc;
            .noborder{
                border-top: none;
                border-bottom: none;
                thead{
                    th{
                        border-top: none;
                    }
                }
                tbody{
                    tr{
                        &:last-of-type{
                            td{
                                border-bottom: none;
                            }
                        }
                    }
                }
            }
        }
        i.el-icon-time{
            display: none;
        }
    }
</style>