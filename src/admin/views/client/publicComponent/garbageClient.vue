<template>
    <aside>
        <h3>提示</h3>
        <p>将此客户评定为【E】级别客户，转入垃圾客户，请选择一个E级标签</p>
        <ul>
            <li v-for='(obj,i) in list' :key=i>
                <span :class='{checked: num == i}' @click='changeNumFn(i)'>{{obj.val}}</span>
            </li>
            <li class="active">
                <button class='customize' v-show='customize' @click='add'>自定义</button>
                <input type="text" v-show='!customize' ref='input' v-model='val'>
            </li>
        </ul>
        <div class='garbage-bottom'>
            <span class="active" @click='submit'>确定</span>
            <span @click='cancel'>取消</span>
        </div>
    </aside>
</template>

<script>
    export default {
        data(){
            return {
                num: null,
                val: '',
                customize: true,
                list: [
                    {val: '标签1', id: ''},
                    {val: '标签2', id: ''},
                    {val: '标签3', id: ''},
                    {val: '标签4', id: ''},
                    {val: '标签5', id: ''},
                    {val: '标签6', id: ''},
                    {val: '标签7', id: ''},
                    {val: '标签8', id: ''},
                    {val: '标签9', id: ''},
                    {val: '标签10', id: ''},
                    {val: '标签10', id: ''},
                ]
            }
        },
        methods: {
            cancel(){
                this.$emit('close')
            },
            submit(){
                var str = this.num == null ? this.val : this.list[this.num];
                if(!this.customize && this.val == ''){
                    this.$message.error('请填写自定义标签或选择标签');
                    return;
                }
                this.$emit('submit',str)
            },
            add(){
                this.customize = false;
                this.num = null;
                this.$nextTick(function () {
                    this.$refs.input.focus();
                })
            },
            changeNumFn(i){
                this.num = i;
                if(!this.customize){
                    this.customize = true;
                }
            }
            // blur(){
            //     this.customize = true;
            // }
        }
    }
</script>

<style lang="less" scoped>
    aside{
        background: #fff;
        padding: 0 20px;
        h3{
            color: #0099ff;
            margin: 10px 0;
        }
        p{
            line-height: 30px;
        }
        .addlabel{
            span{
                display: inline-block;
                height: 32px;
                width: 60px;
                text-align: center;
                background: #0079fe;
                line-height: 32px;
                color: #fff;
                line-height: 32px;
                border-radius: 4px;
            }
            input{
                height: 32px;
                margin-left: 20px;
            }
        }
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 10px 0 20px;
            li{
                margin: 10px 0;
                span{
                    display: inline-block;
                    height: 32px;
                    background: #eee;
                    line-height: 32px;
                    text-align: center;
                    border-radius: 4px;
                    margin-right: 20px;
                    padding: 0 20px;
                    cursor: pointer;
                    &.checked{
                        background: #f3f9ff;
                        color: #0079fe;
                        border: none;
                        height: 32px;
                    }
                }
                &.active{
                    transition: 1s;
                    button{
                        background: #f3f9ff;
                        color: #0079fe;
                        // border: none;
                        border-radius: 4px;
                        height: 32px;
                        padding: 0 10px;
                        margin-right: 20px;
                    }
                    input{
                        margin-right: 20px;
                        padding-left: 10px;
                        height: 30px;
                    }
                }
            }
        }
        .garbage-bottom{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 20px;
            span{
                display: inline-block;
                width: 80px;
                height: 30px;
                border-radius: 4px;
                border: 1px solid #ccc;
                background: #fff;
                text-align: center;
                line-height: 30px;
                margin-left: 20px;
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