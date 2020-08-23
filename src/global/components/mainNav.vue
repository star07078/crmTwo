<template>
    <dl class="list" @click='changeTopNavTwo'>
        <slot name='area'></slot>
        <slot name='list'></slot>
    </dl>
</template>

<script>
    export default {
        methods: {
            changeTopNavTwo(ev){
                // 如果点击的是 dd ,则改变 vuex 中的 topNavTwo
                if(ev.target.nodeName == 'DD'){
                    this.$store.commit('topNavTwo', ev.target.firstChild.nodeValue)
                    this.$store.commit('topNavChange');
                }
            }
        }
    }
</script>

<style lang='less' scoped>
    .list{
        flex: 0 0 122px;
        background: #e8ebf4;
        overflow-y: auto;
        font-size: 14px;
        dt, dd{
            width: 100%;
            color: #333;
        }
        dt{
            color: #57a4fa;
            height: 44px;
            line-height: 44px;
            box-sizing: border-box;
        }
        dd{
            cursor: pointer;
            flex-wrap: wrap;
            padding: 16px 0;
            padding-left: 18px;
            box-sizing: border-box;
            &:hover{
                color: #5963ff;
            }
            &.router-link-active, &.active{
                background: #f2f3f8;
                color: #5963ff;
                // position: relative;
                // &:after{
                //     content: '';
                //     width: 0;
                //     height: 0;
                //     border-top: 0.8rem solid transparent;
                //     border-bottom: 0.8rem solid transparent;
                //     border-left: 1.5rem solid transparent;
                //     border-right: 1.5rem solid #000;
                //     position: absolute;
                //     right: 0;
                // }
            }
        }
        div{
            height: 32px;
            padding: 14px 0;
            text-align: center;
            span{
                display: inline-block;
                width: 96px;
                height: 34px;
                text-align: center;
                line-height: 34px;
                border-radius: 6px;
                background: #5962ff;
                color: #fff;
            }
        }
    }

</style>

