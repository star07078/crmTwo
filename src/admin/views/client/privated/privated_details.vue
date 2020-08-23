<template>
    <div class='details'>
        <Aside>
        </Aside>
        <div class="basic">
            <Message />
            <Message />
            <Follow>
                <template>
                    <dd class="top30 solid deal">
                        <div class="notes">
                            <div class="message1 mb20 cl">
                                <span>
                                    <i class="fa fa-window-maximize"></i>
                                    客户归属
                                </span>
                                <strong>签单成交</strong>
                                <span class='price'>9999元</span>
                                <span class='fr'>
                                    <i></i>
                                    2019-03-23 22:31
                                </span>
                            </div>
                            <p>客户被 部门A 贾春天领取</p>
                            <div>
                                <span class='belong'>归属</span>
                                <p class='fr'>
                                    <span class='fr_comment'>详情</span>
                                    <span class='fr_comment'>评论</span>
                                </p>
                            </div>
                        </div>
                    </dd>
                </template>
            </Follow>
        </div>
    </div>
</template>

<script>
    import Aside from '../details/aside.vue'
    import Message from '../details/message.vue'
    import Follow from '../details/follow.vue'
    export default {
        components: {
            Aside,
            Message,
            Follow
        },
        created(){
            this.$store.commit('topNavThree', window.localStorage.getItem('topNavThree'));
        },
        destroyed(){
            this.$store.commit('topNavThree','')
        }
    }
</script>

<style lang='less' scoped>
    .details{
        flex-grow: 1;
        overflow-y: auto;
        .basic{
            background: #fff;
            padding: 2rem;
            margin-top: 2rem;
        }
    }
</style>