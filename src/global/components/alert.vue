<template>
    <div class="alert" v-if="hidden">
        <div class="body" :style='{width: width}'>
            <slot></slot>
        </div>
        <div class="mask"
            v-if="mask == 'show'"
            @click='close'
        ></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                hidden: true
            }
        },
        props: {
            mask: {
                type: String,
                default: 'show'
            },
            width: {
                type: String,
                default: '800px'
            }
        },
        methods: {
            close(){
                this.hidden = false;
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    @keyframes opacity{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes top_to_bottom{
        0%{
            transform: translateY(-3rem);
        }
        100%{
            transform: translateX(0)
        }
    }
    .alert{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
    }
    .alert .body{
        border-radius: 4px;
        background: #fff;
        animation: top_to_bottom 0.3s;
        position: relative;
        z-index: 1002;
    }
    .alert .mask{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1001;
        animation: opacity 0.8s;
        background: rgba(0,0,0,0.3);
    }
</style>