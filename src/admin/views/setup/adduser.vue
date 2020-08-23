<template>
    <div class="modal-box">
        <div class='modal-header'>
            <h4>新增客户</h4>
            <i class="iconfont iconzu999" @click='cancel(false)'></i>
        </div>
        <div class="modal-content">
            <table border='1' class='table'>
                <thead>
                    <tr>
                        <th style="width: 20%">列名</th>
                        <th style="width: 60%">填写</th>
                        <th style="width: 20%">校验格式</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class='asterisk'>管理员姓名</td>
                        <td>
                            <input type="text" v-model='name' placeholder='请输入管理员姓名'>
                        </td>
                        <td>
                            <strong v-if="name">
                                <i class="iconfont icondui2" v-if='isName'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class='asterisk'>管理员账号</td>
                        <td>
                            <input type="text" v-model='user' placeholder='请输入管理员账号'>
                        </td>
                        <td>
                            <strong v-if="user">
                                <i class="iconfont icondui2" v-if='isUser'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class='asterisk'>管理员密码</td>
                        <td>
                            <input type="text" v-model='pwd' placeholder='请输入管理员密码'>
                        </td>
                        <td>
                            <strong v-if="pwd">
                                <i class="iconfont icondui2" v-if='isUser'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class='asterisk'>手机号码</td>
                        <td>
                            <input type="text" v-model='tel' placeholder='请输入手机号码'>
                        </td>
                        <td>
                            <strong v-if="tel">
                                <i class="iconfont icondui2" v-if='isTel'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td>性别</td>
                        <td>
                            <el-select v-model="sexValue" placeholder="请选择">
                                <el-option
                                v-for="item in sexOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <strong v-if="sexValue">
                                <i class="iconfont icondui2"></i>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td>功能权限配置</td>
                        <td>
                            23个功能
                        </td>
                        <td>
                            <a href="">编辑</a>
                        </td>
                    </tr>
                    <tr>
                        <td>数据权限配置</td>
                        <td>
                            石家庄（3个服务商）
                        </td>
                        <td>
                            <a href="">编辑</a>
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
                sexOptions: [
                    {
                        value: '选项1',
                        label: '男'
                    }, 
                    {
                        value: '选项2',
                        label: '女'
                    }
                ],
                value: '',
                name: '',
                user: '',
                pwd: '',
                tel: '',
                sexValue: ''
            }
        },
        methods: {
            cancel(bool){
                this.$emit('close', bool)
            }
        },
        computed: {
            isName(){
                var reg = /\w|-|\s/;
                if(this.name.length > 4 || this.name.length < 2){
                    return false
                }
                return !reg.test(this.name);
            },
            isUser(){
                var reg = /\W/;
                return !reg.test(this.user);
            },
            isTel(){
                var reg = /^1[3456789]\d{9}$/;
                return reg.test(this.tel);
            }
        }
    }
</script>

<style lang="less" scoped>
    .block_content{
        height: 100%;
    }
</style>