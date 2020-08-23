<template>
    <div class='details'>
        <Aside>
            <template v-slot:label>
               <span class='gatbage'>垃圾客户</span>
            </template>
            <template v-slot:client>
                <ul>
                    <li>
                        <i class='fa fa-window-maximize'></i>
                        派发客户
                    </li>
                    <li>
                        <i class='fa fa-window-maximize'></i>
                        转入公海
                    </li>
                </ul>
            </template>
        </Aside>
        <div class="basic">
            <Message />
            <Message />
            <Follow />
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
        .gatbage{
            background: #000;
            color: #fff;
        }
        .basic{
            background: #fff;
            padding: 20px;
            margin-top: 20px;
        }
    }
</style>