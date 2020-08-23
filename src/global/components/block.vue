<template>
    <div class="block" :style="{width: width}">
        <div class='header'>
            <slot name="header"></slot>
        </div>
        <div class="block_content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: '100%'
            }
        }
    }
</script>

<style lang="less" scoped>
    .block{
        width: 100%;
        border: 1px solid rgba(230,230,230,1);
        display: flex;
        flex-direction: column;
        .header{
            background: rgba(249,249,249,1);
            height: 60px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 1px solid rgba(240,240,240,1);
            padding: 0 20px;
            justify-content: space-between;
            .title{
                flex: 0 1 200px;
            }
            .option{
                display: flex;
                flex: 0 1 80%;
                justify-content: flex-end;
                div{
                    margin: 0 10px;
                }
                span{
                    width: 90px;
                    margin: 0 10px; 
                    height: 32px;
                    border: 1px solid #DCDFE6;
                    color: #DCDFE6;
                    background: #fff;
                    border-radius: 4px;
                    text-align: center;
                    line-height: 34px;
                }
            }
        }
        .block_content{
            background: #fff;
            padding: 20px;
            height: 400px;
        }
    }
</style>