<template>
    <div class='details'>
        <Aside></Aside>
        <div class="basic">
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
            // console.log(this.$router.history)
            if(this.$router.history.current.path.endsWith('details')){
                this.$store.commit('topNavThree', window.localStorage.getItem('topNavThree'));
            }else{
                this.$store.commit('topNavFive', window.localStorage.getItem('topNavFive'));
            }
        },
        destroyed(){
            if(this.$router.history.current.path.endsWith('details')){
                this.$store.commit('topNavThree','')
            }else{
                this.$store.commit('topNavFive','')
            }
        }
    }
</script>

<style lang='less' scoped>
    .details{
        flex-grow: 1;
        overflow-y: auto;
        .basic{
            background: #fff;
            padding: 20px;
            margin-top: 20px;
        }
    }
</style>