<template>
    <div class="topnav">
        <div>
            <ul>
                <i class='iconfont iconzhuye2'></i>
                <li v-if="topNavOne" class='topNavOne'>{{topNavOne}}</li>
                <li v-if="topNavTwo">{{topNavTwo}}</li>
                <li v-if="topNavThree">{{topNavThree}}</li>
                <li v-if="topNavFour">{{topNavFour}}</li>
                <li v-if="topNavFive">{{topNavFive}}</li>
            </ul>
        </div>
        <div>
            <span>
                <i class='iconfont iconnaoling'></i>
                <mark>99</mark>
                <dl>
                    <dt></dt>
                    <dd
                        v-for='(obj,i) in nav2'
                        :key='i'
                        @click='jump(obj,"消息")'
                    >
                        <router-link :to="obj.url">
                            {{obj.name}}
                            <em v-if='obj.msg'>{{obj.msg}}</em>
                        </router-link>
                    </dd>
                </dl>
            </span>
            <span>
                <i class='iconfont iconshezhi1'></i>
                <dl>
                    <dt></dt>
                    <dd
                        v-for='(obj,i) in nav1'
                        :key='i'
                        @click='jump(obj,"设置")'
                    >
                        {{obj.name}}
                    </dd>
                </dl>
            </span>
            <span title='退出' @click='out'>
                <i class='iconfont iconguanji'></i>
            </span>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                nav1: [
                    {
                        url: '/admin/setup/gz',
                        name: '规则设置'
                    },
                    {
                        url: '/admin/setup/gr',
                        name: '个人信息设置'
                    },
                    {
                        url: '/admin/setup/gly',
                        name: '管理员设置'
                    },
                    {
                        url: '/admin/setup/pwd',
                        name: '修改密码'
                    }
                ],
                nav2: [
                    {
                        url: '/admin/news/xtnews',
                        name: '系统消息',
                        msg: 50
                    },
                    {
                        url: '/admin/news/ywnews',
                        name: '业务消息',
                        msg: 44
                    }
                ]
            }
        },
        methods: {
            // 设置部分跳转
            jump(obj, msg){
                this.$router.push(obj.url)
                this.$store.commit('topNavOne',msg)
                this.$store.commit('topNavTwo',obj.name)
            },
            out(){
                // this.$axios.get(this.$api + '')
                this.$confirm('确认要退出吗？', '确认信息', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                })
                .then(() => {
                    this.$router.push('/admin/login');
                    window.localStorage.removeItem('token');
                })
            }
        },
        computed: mapState({
            // topNavList: state => {
            //     return state.topNavList;
            // }
            topNavOne: state=>{
                return state.topNavOne ? state.topNavOne : null;
            },
            topNavTwo: state=>{
                return state.topNavTwo ? state.topNavTwo : null;
            },
            // topNavThree: state=>{
            //     return state.topNavThree ? state.topNavThree : null;
            // },
            // topNavFour: state=>{
            //     return state.topNavFour ? state.topNavFour : null;
            // },
            // topNavFive: state=>{
            //     return state.topNavFive ? state.topNavFive : null;
            // },
        })
    }
</script>

<style lang="less" scoped>
    .topnav{
        flex: 0 0 70px;
        padding: 0 12px;
        color: #fff;
        background: #5962ff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        line-height: 70px;
        div{
            display: flex;
            flex-direction: row;
            height: 70px;
            margin-right: 20px;
            ul{
                li{
                    display: inline;
                    &:before{
                        content: '>';
                        margin: 0 14px;
                    }
                    &:first-of-type{
                        &:before{
                            content: '';
                            margin: 0;
                        }
                    }
                }
            }
            span{
                height: 100%;
                position: relative;
                display: inline-block;
                width: 50px;
                text-align: center;
                cursor: pointer;
                &:hover{
                    background: rgba(0,0,0,0.3);
                    dl{
                        display: block;
                    }
                }
                i{
                    font-size: 18px;
                }
                mark{
                    display: inline-block;
                    line-height: 18px;
                    text-align: center;
                    background: #f23219;
                    width: 18px;
                    height: 18px;
                    font-size: 8px;
                    color: #fff;
                    border-radius: 50%;
                    transform: translate(-6px,-10px);
                }
                dl{
                    position: absolute;
                    z-index: 1000;
                    display: none;
                    border-radius: 10px;
                    width: 140px;
                    top: 70px;
                    left: -44px;
                    color: #000;
                    border: 1px solid #ededed;
                    background: #fff;
                    box-shadow: 0 6px 6px rgba(0,0,0,0.3);
                    font-size: 14px;
                    dt{
                        width: 0;
                        height: 0;
                        border-top: 20px solid transparent;
                        border-left: 14px solid transparent;
                        border-right: 14px solid transparent;
                        border-bottom: 20px solid #fff;
                        position: absolute;
                        top: -40px;
                        left: 54px;
                    }
                    dd{
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        border-bottom: 1px solid #dcdcdc;
                        em{
                            color: red;
                            font-style: initial;
                        }
                        &:last-of-type{
                            border: none;
                        }
                    }
                }
            }
        }
    }
</style>