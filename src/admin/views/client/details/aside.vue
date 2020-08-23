<template>
    <aside>
        <div class='firm'>
            <h3>公司名字</h3>
            <span class='garbage'>垃圾客户</span>
            <span class='follow'>跟进中</span>
            <span class='stop'>已停止跟进12天</span>
            <span class='step'>已签单</span>
            <span class='success'>成交金额9999元</span>
        </div>
        <div class="message">
            <ul>
                <li>
                    服务商：<span>某某某</span>
                </li>
                <li>
                    联系人：<span>李小红</span>
                </li>
                <li>
                    客户评级：<span>18288888888</span>
                </li>
            </ul>
            <ul>
                <li>
                    销售员：<span>某某某</span>
                </li>
                <li>
                    联系电话：<span>某某某</span>
                </li>
                <li>
                    意向阶段：<span>李小红</span>
                </li>
            </ul>
        </div>
        <div class='btn'>
            <button class='follow' @click='writeFollowSwitch = true'>写新跟进</button>
            <button class='sleep'>移交客户</button>
            <button class='paifa' @click='paiFaSwitch = true'>派发客户</button>
            <button class='sleep'>转入公海</button>
            <button class='garbage' @click='garbageSwitch = true'>转入垃圾客户</button>
        </div>
        <Alert v-if='writeFollowSwitch' @close='writeFollowSwitch = false'>
            <WriteFollow @close='writeFollowSwitch = false' />
        </Alert>
        <!-- 转入垃圾客户 -->
        <Alert v-if="garbageSwitch" @close='garbageSwitch = false'>
            <GarbageClient @close='garbageSwitch = false' @submit='submitGarbage'/>
        </Alert>
        <!-- 派发客户 -->
        <Alert v-if="paiFaSwitch" @close='paiFaSwitch = false'>
            <PaiFaClient1 @close='submitPaiFaClient' />
        </Alert>
    </aside>
</template>

<script>
    import WriteFollow from './writeFollow.vue'
    import GarbageClient from '../publicComponent/garbageClient.vue'
    import PaiFaClient1 from '../publicComponent/paiFaClient1.vue'
    export default {
        components: {
            WriteFollow,
            GarbageClient,
            PaiFaClient1
        },
        data(){
            return {
                // 转入垃圾客户开关
                garbageSwitch: false,
                // 派发客户控制开关
                paiFaSwitch: false,
                writeFollowSwitch: false,
            }
        },
        methods: {
            // 转移垃圾客户得标签
            submitGarbage(str){
                this.garbageSwitch = false;
            },
            // 关闭或提交派发用户
            submitPaiFaClient(bool){
                if(!bool){
                    this.paiFaSwitch = false;
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    aside{
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 20px;
        .firm{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 10px;
            h3{
                // font-size: 1.8rem;
            }
            span{
                padding: 4px 10px;
                margin: 0 10px;
                &.follow{
                    color: #ffb33d;
                    border: 1px solid #ffb33d;
                }
                &.garbage{
                    color: #000;
                    border: 1px solid #000;
                }
                &.stop{
                    color: #ef3332;
                    border: 1px solid #ef3332;
                }
                &.step{
                    color: #5862ff;
                    border: 1px solid #5862ff;
                }
                &.success{
                    color: #f53318;
                }
            }
        }
        .message{
            ul{
                flex: 1;
                display: flex;
                flex-direction: row;
                margin: 16px 0;
                li{
                    margin-right: 30px;
                    width: 200px;
                    color: #888;
                    span{
                        color: #222;
                        font-weight: 700;
                    }
                }
            }
        }
        .btn{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            button{
                color: #fff;
                height: 34px;
                padding: 0 18px;
                margin-left: 20px;
                border-radius: 3px;
                &.sleep{
                    background: #5962fd;
                }
                &.follow{
                    background: #18ae42;
                }
                &.garbage{
                    background: #2f72a9;
                }
                &.paifa{
                    background: #29abb8;
                }
            }
        }
    }

</style>