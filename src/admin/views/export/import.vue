<template>
    <div class="modal-box">
        <div class='modal-header'>
            <h4>新增客户</h4>
            <i class="iconfont iconzu999" @click='cancel'></i>
        </div>
        
            <div class="modal-content">
                <ul>
                    <li>
                        <span class='active'>1</span>
                        上传文件
                    </li>
                    <li>
                        <span>2</span>
                        数据预览
                    </li>
                    <li>
                        <span>2</span>
                        导入数据
                    </li>
                </ul>

            </div>
            <div class="modal-foot">
                <span @click='cancel'>取消</span>
                <span @click='next("second")' class='active'>下一步</span>
            </div> 
   
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 显示得数据
                showData: [],
                // 步骤
                step: true,
                columns: [
                    {field: 'name', thwidth: '10%', title: '公司名称', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'area', thwidth: '5%', title: '城市', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'date', thwidth: '8%', title: '录入日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'trade', thwidth: '5%', title: '所属行业', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'rating',thwidth: '5%', title: '客户评级', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'intent', thwidth: '5%', title: '意向阶段', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'person', thwidth: '5%', title: '联系人', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'wx', thwidth: '7%', title: '微信', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'tel', thwidth: '7%', title: '手机号码', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'service', thwidth: '5%', title: '服务商', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'sales', thwidth: '5%', title: '销售员', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'baifang', thwidth: '5%', title: '是否拜访', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'qiandan', thwidth: '5%', title: '是否签单', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'time', thwidth: '5%', title: '签订日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'money', thwidth: '5%', title: '签订金额', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'beizhu', thwidth: '5%', title: '签单备注', titleAlign: 'center', columnAlign: 'center',isResize:true},
                ]
            }
        },
        methods: {
            cancel(){
                this.$emit('close')
            },
            next(val){
                this.step = false;
            },
        },
    }
</script>

<style lang="less" scoped>
    .modal-content{
        height: 100% !important;
        font-size: 14px;
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            font-weight: 800;
            margin: 0 0 20px;
            span{
                display: inline-block;
                width: 40px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: #eee;
                &.active{
                    background: #0079fe;
                    color: #fff;
                }
            }
        }
        .v-table{
            width: 100%;
            overflow: auto;
        }
    }
    .modal-foot{
        span{
            padding: 6px 16px;
        }
    }
</style>