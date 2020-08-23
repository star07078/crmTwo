<template>
    <div class="module">
        <div class="title">
            <h4>快 捷<br />入 口</h4>
        </div>
        <ul class='ulNav'>
            <router-link to='/admin/client/publicd' tag='li'>
                <span><i class="iconfont iconkehuguanli-copy"></i></span>
                <p>公海客户</p>
            </router-link>
            <router-link to='/admin/client/privated' tag='li'>
                <span><i class="iconfont iconkehugonghai"></i></span>
                <p>私库客户</p>
            </router-link>
            <router-link to='/admin/client/garbage' tag='li'>
                <span><i class="iconfont iconshanchu"></i></span>
                <p>垃圾客户</p>
            </router-link>
            <router-link to='' tag='li'>
                <span><i class="iconfont iconbumen"></i></span>
                <p>销售部门</p>
            </router-link>
            <router-link to='/admin/setup/gz' tag='li'>
                <span><i class="iconfont iconguize"></i></span>
                <p>规则设置</p>
            </router-link>
            <router-link to='/admin/setup/pwd' tag='li'>
                <span><i class="iconfont iconxiugaimima"></i></span>
                <p>修改密码</p>
            </router-link>
            <router-link to='' tag='li'>
                <span><i class="iconfont iconbianji"></i></span>
                <p>个人信息设置</p>
            </router-link>
            <router-link to='/admin/setup/gr' tag='li'>
                <span><i class="iconfont iconguanliyuan"></i></span>
                <p>管理员管理</p>
            </router-link>
            <router-link to='/admin/news/xtnews' tag='li' class='newsNumber'>
                <span><i class="iconfont iconxiaoxizhongxin1"></i></span>
                <!-- <mark>40</mark> -->
                <p>消息中心</p>
            </router-link>
            <li class='newsNumber' @click='alertSwitch = true'>
                <span><i class="iconfont iconfabu1"></i></span>
                <p>发布公告</p>
            </li>
        </ul>
        <Alert v-if='alertSwitch' @close='alertSwitch = false'>
            <div class="modal-box">
                <div class='modal-header'>
                    <strong>公告发布</strong>
                    <i class="iconfont iconzu999" @click='alertSwitch = false'></i>
                </div>
                <div class="modal-content module2-alert">
                    <div class="mb2">
                        <span>公告标题</span>
                        <span class="rightInput">
                            <input type="text" placeholder="请填写标题" v-model.lazy='title'>
                        </span>
                    </div>
                    <div class="mb2">
                        <span>公告分类</span>
                        <span class="rightInput">
                            <el-select v-model="value" size="small" placeholder="系统消息">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div class="mb2">
                        <span>公告内容</span>
                        <textarea v-model.lazy='msg'></textarea>
                    </div>
                    <div class="mb2 center">
                        <span>发布时间</span>
                        <el-date-picker
                            v-model="time"
                            type="datetime"
                            size='small'
                            format="yyyy-MM-dd H:m"
                            value-format="yyyy-MM-dd H:m"
                            placeholder="选择日期时间">
                        </el-date-picker>
                        <span>
                            <label>
                                <input type="checkbox" v-model='checked'>立即发布
                            </label>
                        </span>
                    </div>
                    <div class="btn">
                        <button @click='alertSwitch = false'>取消</button>
                        <button @click='sumbitAlertSwitchFn'>提交</button>
                    </div>
                </div>
            </div>
        </Alert>
    </div> 
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                alertSwitch: false,
                title: '',
                msg: '',
                time: '',
                checked: false, //是否立即发布
                options: [
                    {
                        value: '选项1',
                        label: '系统消息'
                    }, 
                    {
                        value: '选项2',
                        label: '业务消息'
                    },
                ],
            }
        },
        methods: {
            sumbitAlertSwitchFn(){
                switch(''){
                    case this.title:
                        this.$message.error('标题不能为空');
                        break;
                    case this.mag:
                        this.$message.error('内容不能为空');
                        break;
                    case this.time:
                        this.$message.error('时间不能为空');
                        break;
                    default:
                        {
                            if(this.checked){
                                this.list.unshift({
                                    title: this.title,
                                    msg: this.msg,
                                    time: this.time
                                })
                            }
                            this.$message({
                                type: 'success',
                                message: '提交成功'
                            });
                            this.alertSwitch = false;
                            this.title = this.msg = this.time = '';
                        }
                }
            },
        }
    }
</script>


<style lang="less" scoped>
   .module{
        background: #fff;
        height: 94px;
        padding: 14px 0;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .title{
            flex: 0 0 118px;
            height: 100%;
            font-size: 16px;
            line-height: 32px;
            color: #666;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #e5e5e5;
        }
        .ulNav{
            display: flex;
            flex: 1 1 auto;
            padding: 0 20px;
            justify-content: space-around;
            li{
                display: inline-block;
                text-align: center;
                margin: 0 6px;
                cursor: pointer;
                span{
                    width: 50px;
                    height: 50px;
                    display: inline-block;
                    background: #5962ff;
                    border-radius: 4px;
                    text-align: center;
                    i{
                        color: #fff;
                        display: inline-block;
                        font-size: 30px;
                        line-height: 50px;
                    }
                }
                p{
                    color: #666;
                    font-size: 14px;
                    margin-top: 14px;
                }
            }
        }
        .modal-content{
            overflow-y: auto;
            padding: 0 30px;
            .mb2{
                display: flex;
                flex-direction: row;
                margin: 20px 0;
                span{   
                    flex: 0 1 100px;
                    color: #999;
                    line-height: 40px;
                    vertical-align: middle;
                    input{
                        vertical-align: middle;
                    }
                }
    
                input{
                    border: 1px solid #DCDFE6;
                    font-size: 14px;
                    border-radius: 3px;
                    &[type='text']{
                        padding-left: 10px;
                        width: 290px;
                        height: 30px;
                    }
                }
                div.el-select{
                    width: 300px;
                }
                textarea{
                    flex: 1 1 auto;
                    border: 1px solid #DCDFE6;
                    height: 140px;
                    border-radius: 3px;
                    padding: 10px;
                }
            }
            .btn{
                text-align: right;
                margin: 0 0 30px 0;
                button{
                    padding: 6px 30px;
                    margin-left: 30px;
                    border: 1px solid #DCDFE6;
                    border-radius: 3px;
                }
            }
            .center{
                align-items: center;
                label{
                    margin-left: 10px;
                }
            }
        }
    }
</style>
