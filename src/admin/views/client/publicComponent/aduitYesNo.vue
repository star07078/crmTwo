<template>
    <aside>
        <h1>提示</h1>
        <div class="p">
            <slot>
                通过后此客户评定为【E】级别客户，评定标签为
                <span>标签</span>
            </slot>
        </div>
        <div class='btn'>
            <span @click='cancel(false)'>取消</span>
            <span @click='cancel(true)' class="active">确定</span>
        </div>
    </aside>
</template>

<script>
    export default {
        methods: {
            cancel(bool){
                this.$emit('close', bool)
            }
        }
    }
</script>

<style lang="less" scoped>
    aside{
        background: #fff;
        padding: 0 4rem;
        h1{
            color: #0099ff;
            margin: 2rem 0;
        }
        .p{
            font-size: 1.6rem;
            line-height: 4rem;
            margin-bottom: 2rem;
            span{
                display: inline-block;
                width: 10rem;
                height: 4rem;
                background: #ccc;
                line-height: 4rem;
                text-align: center;
                border-radius: 10px;
                margin-right: 2rem;
            }
        }
   
        .btn{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 2rem;
            span{
                display: inline-block;
                width: 10rem;
                height: 4rem;
                border-radius: 1rem;
                border: 1px solid #ccc;
                background: #fff;
                text-align: center;
                line-height: 4rem;
                margin-left: 2rem;
                cursor: pointer;
                &.active{
                    background: #0079fe;
                    color: #fff;
                    border: none;
                }
            }
        }
    }
</style>