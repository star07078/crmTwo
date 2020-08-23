<template>
    <div class="content">
        <div class='setup'>
            <div class='title'>
                修改密码
            </div>
            <div class='setup-content'>
                <ul>
                    <li>
                        <span>
                            原登录
                        </span>
                        <input v-model='oldPwd' type="text" placeholder="原登录密码">
                    </li>
                    <li>
                        <span>
                            新密码
                        </span>
                        <div class='pwddiv'>
                            <input v-model='newPwd' type="password" placeholder="确认新的密码">
                            <p v-if="showErr1">密码必须大于6位</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            确认密码
                        </span>
                        <div class='pwddiv'>
                            <input v-model='sureNewPwd' type="password" placeholder="确认新的密码">
                            <p v-if="showErr2">两次输入的密码不一致</p>
                        </div>
                    </li>
                    <li >
                        <span></span>
                        <div class="footer">
                            <button @click='sureNewPwd = newPwd = oldPwd = ""'>重置</button>
                            <button class="active" @click='submitModify'>提交</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Alert mask="hide" width="70rem" v-if="submitShow">
            <div class="submitShow">
                <i class="iconfont" :class="showClass"></i>
                <h2>{{msg1}}</h2>
                <p>{{msg2}}</p>
            </div>
        </Alert>
    </div>
</template>

<script>
    import Alert from '../../../global/components/alert.vue'
    export default {
        components: {
            Alert
        },
        data(){
            return {
                submitShow: false,      //控制提示信息的开关
                oldPwd: '',             //旧密码
                newPwd: '',             //新密码
                sureNewPwd: '',         //确认新密码
                showClass: '',          //加载对错图标
                msg1: '',               //h1标签的提示信息
                msg2: ''                //p标签的提示信息
            }
        },
        methods: {
            show: function(obj){
                let { showClass, msg1, msg2} = obj;
                showClass = showClass == 0 ? 
                'iconjiazai' : showClass == 1 ? 'icondui2' : 'iconzu999';
                return new Promise((res, rej)=>{
                    this.showClass = showClass;
                    this.msg1 = msg1;
                    this.msg2 = msg2;
                    this.submitShow = true;
                    setTimeout(()=>{ 
                        this.submitShow = false
                        res()
                    },2000)
                })
            },
            submitModify(){
                if(!this.oldPwd && !this.newPwd && !this.sureNewPwd){
                    this.show({
                        showClass: 2,
                        msg1: '填写信息不能为空'
                    })
                    return;
                }
                if(this.showErr1){
                    this.show({
                        showClass: 2,
                        msg1: '密码必须大于6位'
                    })
                    return;
                }
                if(this.showErr2){
                    this.show({
                        showClass: 2,
                        msg1: '两次输入的密码必须一致'
                    })
                    return;
                }
                
                this.submitShow = true;
                this.msg1 = '正在修改，请稍后';
                this.showClass = 'iconjiazai';

                this.$axios({
                    url: '/index.php/crm/admin/information/password',
                    method: 'post',
                    data: {
                        old_password: this.oldPwd,
                        new_password: this.newPwd,
                        confirm_password: this.sureNewPwd
                    }
                })
                .then((data)=>{
                    this.show({
                        showClass: 1,
                        msg1: '修改成功，请重新登录'
                    })
                    .then(()=>{
                        window.localStorage.removeItem('token');
                        this.$router.push('/admin/login')
                    })
                })
                .catch((data)=>{
                    this.show({
                        showClass: 2,
                        msg1: '修改失败',
                        msg2: '请重新尝试'
                    })
                })
            }
        },
        watch: {
            newPwd(){
                if(this.newPwd != '' && this.newPwd.length < 6){
                    this.showErr1 = true;
                }else{
                    this.showErr1 = false;
                }
                if(this.sureNewPwd != '' && this.sureNewPwd != this.newPwd){
                    this.showErr2 = true;
                }else{
                    this.showErr2 = false;
                }
            },
            sureNewPwd(){
                if(this.sureNewPwd != '' && this.sureNewPwd != this.newPwd){
                    this.showErr2 = true;
                }else{
                    this.showErr2 = false;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    ul{
        width: 600px;
        li{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 40px 0;
            span{
                flex: 0 0 100px;
                text-align: right;
                margin-right: 20px;
                &:before{
                    content: '*';
                    color: red;
                }
            }
            input{
                height: 50px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding-left: 10px;
                flex: 1 0 auto;
            }
            &:last-child{
                margin-top: 40px;
                span{
                    &:before{
                        content: '';
                    }
                }
            }
            .pwddiv{
                width: 100%;
                position: relative;
                input{
                    width: 100%;
                    box-sizing: border-box;
                }
                p{
                    position: absolute;
                    bottom: -22px;
                    color: red;
                    font-weight: 800;
                }
            }
        }
    }
</style>