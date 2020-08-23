<template>
    <div class="nav">
        <div class="logo">
            <img src="../assets/logo.png" alt="大有企服">
        </div>
        <div class='border'>
            <div class="user-img">
                <img src="../assets/wan.jpeg" alt="">
                <h4>{{username}}</h4>
                <p class='blue'>（超级管理员）</p>
            </div>
            <ul>
                <li
                    v-for='(obj,i) in nav'
                    :key='i'
                    @click='jumpTop(obj, i)'
                >
                    <router-link :to="obj.url" tag='span'>
                        {{obj.name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav',
        data(){
            return {
                username: '',
                nav: [
                    {
                        url: '/admin/index',
                        name: '首页'
                    },
                    {
                        url: '/admin/client',
                        name: '客户管理'
                    },
                    {
                        url: '/admin/service',
                        name: '服务商'
                    },
                    {
                        url: '/admin/echarts',
                        name: '数据报表'
                    }
                ]
            }
        },
        methods: {
            jumpTop(obj,i){
                this.$store.commit('topNavOne',obj.name)
                this.$store.commit('topNavThree','')
                if(i == 0){
                    this.$store.commit('topNavTwo','')
                }
                // this.$store.commit('changeTopNavList', {
                //     name: obj.name,
                //     url: obj.url,
                //     show: true,
                //     num: 0
                // })
            },
            out(){
                var bool = confirm('确定要退出吗');
                if(bool){
                    window.localStorage.removeItem('token');
                    this.$router.push('/admin/login')
                }
            },
        },
        created(){
            this.username = window.localStorage.getItem('username') || 'null';
        }
    }
</script>

<style scoped>
    .nav{
        width: 100%;
        background: #fff;
        color: #6e6e6e;
        overflow: hidden;
        font-size: 14px;
    }
    .logo{
        width: 100%;
        height: 70px;
        line-height: 70px;
        background: #525bff;
        text-align: center;
    }
    .logo img{
        vertical-align: middle;
        width: 130px;
    }
    .border{
        width: 175px;
        height: 100%;
        border-right: 1px solid #e7e7e7;
    }
    .border .user-img{
        height: 138px;
        padding: 27px 0;
        text-align: center;
    }
    .border .user-img img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 1px solid #22d1e2;
    }
    .border .user-img h4{
        margin-top: 5px;
        color: #000;
        line-height: 22px;
    }
    .border .user-img p{
        color: #525bff;
        line-height: 22px;
    }
    .border span{
        line-height: 44px;
        cursor: pointer;
        display: inline-block;
        height: 44px;
        width: 100%;
        box-sizing: border-box;
        padding-left: 54px;
    }
    /* span:hover{
        color: #aaa;
    } */
    /* span:hover i{
        color: #fff;
    } */
    .setup{
        border-top: 1px solid #ccc;
        display: flex;
        flex-direction: column;
    }
    .router-link-active{
        background: #515afd;
        color: #fff;
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
    }
    /* .router-link-active:after{
        content: '';
        width: 0;
        height: 0;
        border-top: 0.8rem solid transparent;
        border-bottom: 0.8rem solid transparent;
        border-left: 1.5rem solid transparent;
        border-right: 1.5rem solid #fff;     
    } 
    .user{
        background: #666;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 0.4rem;
    }
    .user img{
        width: 4rem;
        height: 4rem;
        background: #ccc;
        border-radius: 50%;
        margin-right: 0.6rem;
    }
    .setup span i{
        top: -0.2rem;
        right: -2.4rem;
        z-index: 100;
        width: 2rem;
        height: 2rem;
        display: inline-block;
        text-align: center;
        line-height: 2rem;
        background: #ff5918;
        border-radius: 50%;
        font-size: 1rem;
        transform: translateY(-0.6rem);
        text-indent: 0;
    }*/
</style>