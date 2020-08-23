<template>
    <div class="content">
        <div class='setup'>
            <div class='title'>
                修改密码
            </div>
            <div class='gly'>
                <div class="user">
                    <img src="../../../global/assets/wan.jpeg" alt="">
                    总站超级管理员：<strong>耿耿</strong>
                    <strong>13745685218</strong>
                    admin： <strong>我</strong>
                </div>
                <div class="table_top">
                    <div>
                        <span class='add' @click="addUser = true">新增管理员</span>
                        <span class='stop' @click='editAllAuth(false)'>批量停用</span>
                        <span class='open' @click='editAllAuth(true)'>批量启用</span>
                    </div>
                </div>
                <div class="table">
                    <vTable
                        style="width:100%"
                        title-bg-color="#eee"
                        :columns="columns"
                        :table-data="tableData"
                        row-hover-color="#eee"
                        row-click-color="#edf7ff"
                        :tableOperating='tableOperating'
                    ></vTable>
                </div>
                <div class="table_foot">
                    <div>
                        <label>
                            <span>
                                <input name="radio" id="add" type="checkbox" v-model='anti'>
                                反选
                            </span>
                        </label>
                    </div>
                    <div class="page">
                        <el-pagination
                            background
                            size='small'
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[10, 20, 30]"
                            page-size="5"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total"
                        >
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <Alert v-if="addUser" @close='addUser = false'>
            <AddUser @close='submitAddUser'/>
        </Alert>
        <Alert v-if="editAuth" @close='editAuth = false'>
            <EditAuth @close='editAuth = false'/>
        </Alert>
    </div>
</template>

<script>
    import Alert from '../../../global/components/alert.vue'
    import Block from '../../../global/components/block.vue'
    import AddUser from './adduser.vue'
    import EditAuth from './editAuth.vue'
    export default {
        components: {
            Alert,
            Block,
            AddUser,
            EditAuth
        },
        data() {
             return {
                // 新增用户开关
                addUser: false,
                editAuth: false,
                value1: '',
                // 反选
                anti: false,
                tableData: [
                    {
                        "checked": false,
                        "name": "张三",
                        "user": "star3",
                        "tel": "123456798453",
                        "sex": "男",
                        "status": true
                    },
                    {
                        "checked": false,
                        "name": "李四",
                        "user": "star2",
                        "tel": "123456798453",
                        "sex": "男",
                        "status": false
                    },
                    {
                        "checked": false,
                        "name": "王五",
                        "user": "star3",
                        "tel": "123456798453",
                        "sex": "女",
                        "status": false
                    },
                ],
                columns: [
                    {thwidth: '5%', type: 'selection'},
                    {thwidth: '15%', field: 'name', title: '管理员姓名' },
                    {thwidth: '15%', field: 'user', title: '管理员账号' },
                    {thwidth: '15%', field: 'tel', title: '管理员手机号' },
                    {thwidth: '15%', field: 'sex', title: '管理员性别' },
                    {thwidth: '15%', field: 'status', title: '管理员状态' ,
                        formatter: function (rowData,rowIndex) {
                            return rowData.status
                            ? '<span style="color:#009999">启用</span>'
                            : '<span>停用</span>'
                        }
                    },
                    {thwidth: '20%', ield: 'operating', title: '操作', componentName: 'gly-operation' },
                ]
            }
        },
        computed: {
            isName(){
                var reg = /(\w)|[-|\s]/;
                if(this.person.length > 4 || this.person.length < 2){
                    return false
                }
                return !reg.test(this.person);
            },
            isAddress(){
                var reg = /(\W\w)|(\w\W)|(\W)/g;
                return reg.test(this.address);
            },
            isPerson(){
                var reg = /(\w)|[-|\s]/;
                if(this.person.length > 4 || this.person.length < 2){
                    return false
                }
                return !reg.test(this.person);
            },
            isTel(){
                var reg = /^1[3456789]\d{9}$/;
                return reg.test(this.tel);
            }
        },
        watch: {
            // 监听反选
            anti(){
                this.tableData.forEach(item => item.checked = !item.checked);
            }
        },
        methods:{
            // 关闭或提交新增用户
            submitAddUser(bool){
                if(!bool){
                    this.addUser = false;
                }
            },
            // 显示查看
            tableOperating(rowData, rowIndex, num){
                switch(num){
                    case 1:
                        this.see(rowData, rowIndex, num);
                        break;
                    case 2:
                        this.stop(rowData, rowIndex, num)
                        break;
                    case 3:
                        this.editAuthFn(rowData, rowIndex, num)
                        break;
                    case 4:
                        this.delete(rowData, rowIndex, num)
                        break;
                    default :
                        alert('操作失误')
                }
            },
            // 查看
            see(rowData, rowIndex, num){
                this.addUser = true;
            },
            // 停用
            stop(rowData, rowIndex, num){
                this.tableData[rowIndex].status = !this.tableData[rowIndex].status
            },
            editAuthFn(rowData, rowIndex, num){
                this.editAuth = true;
            },
            delete(rowData, rowIndex, num){
                if(window.confirm('确定要删除管理员' + rowData.name)){
                    this.tableData.splice(rowIndex, 1);
                    this.$message('删除成功')
                }
            },
            editAllAuth(bool){
                if(!this.tableData.some(item=>item.checked == true)){
                    this.$message.error('请勾选管理员');
                    return;
                }
                this.tableData.forEach(item => {
                    if(item.checked){
                        item.status = bool;
                    }
                })
            },
        }
    }
    Vue.component('gly-operation',{
        template:`<span>
        <a href="" @click.stop.prevent="fn(1)">查看</a>&nbsp;
        <a href="" @click.stop.prevent="fn(2)">{{rowData.status ? '停用' : '恢复启用'}}</a>
        <a href="" @click.stop.prevent="fn(3)">编辑权限</a>
        <a href="" @click.stop.prevent="fn(4)">删除</a>
        </span>`,
        props:{
            rowData:{
                type: Object
            },
            rowIndex:{
                type: Number
            },
            tableOperating: Function,
        },
        methods:{
            fn(num){
                this.tableOperating && this.tableOperating(this.rowData, this.rowIndex, num);
            }
        }
    })
</script>

<style lang='less' scoped>
    .setup{
        flex-grow: 1;
        background: #fff;
        border: 1px solid #ccc;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        h3{
            line-height: 4rem;
        }
        .gly{
            padding: 20px;
        }
        .user{
            margin: 1rem 0;
            img{
                vertical-align: middle;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-right: 20px;
            }
            strong{
                margin-right: 40px;
            }
        }
        .table_top{
            margin: 20px 0;
            span{
                height: 32px;
                border: none;
                color: #fff;
                line-height: 32px;
                &.add{
                    background: #ffac1e;
                }
                &.stop{
                    background: #fa4d3c;
                }
                &.open{
                    background: #0c9803;
                }
            }
        }
        .table_foot{
            margin-top: 30px;
            flex: 0 1 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
        }
        span{
            border: 1px solid #eee;
            background: #fff;
            padding: 0 20px;
            border-radius: 3px;
            margin-right: 20px;
            height: 36px;
            display: inline-block;
            text-align: center;
            line-height: 36px;
            color: #222;
            cursor: pointer;
        }
    }

</style>