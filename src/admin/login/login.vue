<template>
    <div class="login">
        <div class='bg'>
            <img src="../../global/assets/login-bg.png" alt="">
        </div>
        <div class='body'>
            <div class="title">
                <h1>Hello, Welcome back!</h1>
            </div>
            <div class="section">
                <h2>后台管理中心</h2>
                <div class='form'>
                    <span class="mb">
                        <i class="iconfont icontouxiang"></i>
                        <input type="text" v-model.lazy='user' placeholder='请输入用户名'>
                    </span>
                    <span class="mb">
                        <i class="iconfont iconmima-copy"></i>
                        <input type="password" v-model.lazy='pwd' placeholder='请输入密码'>
                    </span>
                    <span class="cl">
                        <p>
                            <label @click='taggleRemember'>
                                <i class="iconfont"
                                    :class="[remember ? 'iconcheck-box' : 'iconcheck-box1']">
                                </i>
                                记住账号密码
                            </label>
                            <strong class="fr">{{errMsg}}</strong>
                        </p>
                    </span>
                    <span>
                        <button @click='verify'>登 录</button>
                    </span>
                </div>
            </div>
            <div class="foot">
                <img src='../../global/assets/login-logo.png'>
                <p>石家庄市大有企服网络科技公司版权所有</p>
            </div>
        </div>
    </div>
</template>

<script>
    let Base64 = require('js-base64').Base64;
    export default {
        name: 'login',
        data(){
            return {
                remember: false,   //是否记住密码
                user: '',
                pwd: '',
                errMsg: ''
            }
        },
        methods: {
            showErrMsg(msg){
                this.errMsg = msg;
                setTimeout(()=>{
                    this.errMsg = '';
                },3000)
            },
            verify(){
                if(!this.user || !this.pwd){
                    this.showErrMsg('用户名和密码不能为空');
                    return ;
                }
                // 输入成功时，保存在本地的用户名
                var user = this.user;
                this.showErrMsg('正在登录中，请稍后');
               
                this.$axios({
                    url: this.$api + '/index.php/crm/admin/login',
                    method: 'post',
                    headers:{
                        "Authorization": "Basic" + " " + Base64.encode(this.user+':'+this.pwd)
                    }
                })
                .then((data)=>{
                    if(data.data.code == 200){
                        window.localStorage.setItem('token',data.data.data.token)
                        window.localStorage.setItem('username',this.user)
                        this.$router.push( {name:'index'})
                        this.isRemember()
                    }
                })
                .catch((data)=>{
                    this.showErrMsg('请输入正确的用户名和密码');
                })
            },
            taggleRemember(){
                this.remember = !this.remember;
            },
            // 查看是否记住账号，并将用户信息保存本地
            isRemember(){
                if(!this.remember){
                    window.localStorage.removeItem('local');
                    return ;
                }
                let local;
                if(this.remember){
                    local = {
                        "user": this.user,
                        "pwd": Base64.encode(this.pwd),
                        "remember": true
                    }
                }else{
                    local = {
                        "user": "",
                        "pwd": "",
                        "remember": false
                    }
                }
                window.localStorage.setItem('local',JSON.stringify(local))
            }
        },
        created(){
            let local = localStorage.getItem('local');
            if(local){
                let {user, pwd, remember} = JSON.parse(local);
                this.user = user;
                this.pwd = Base64.decode(pwd);
                this.remember = remember;
            }
        }
    }
</script>