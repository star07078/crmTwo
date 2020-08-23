<template>
    <div class="content">
        <div class='service_content'>
            <div class="head-one">
                <div>
                    <!-- <h3>{{areaMsg.name}}地区</h3> -->
                    <h3>北京地区</h3>
                    <span>
                        地区客户分配比率50%
                    </span>
                </div>
                <div>
                    <button @click='editAreaSwitch = true' class='edit'>
                        编辑信息
                    </button>
                    <button class='delete' @click='deleteCitySwitch = true'>
                        移除城市
                    </button>
                </div>
            </div>
            <div class='head-two'>
                <ul>
                    <li>
                        <span>
                            <i class="iconfont iconkehuguanli-copy"></i>
                        </span>
                        <h2>23</h2><p>客户持有</p>
                    </li>
                    <li>
                        <span>
                            <i class="iconfont iconzhengzaiyunhang"></i>
                        </span>
                        <h2>16</h2><p>正在跟进</p>
                    </li>
                    <li>
                        <span>
                            <i class="iconfont icongenjin"></i>
                        </span>
                        <h2>7</h2><p>签单量</p>
                    </li>
                    <li>
                        <span>
                            <i class="iconfont iconqianbao"></i>
                        </span>
                        <h2>6899</h2><p>签单金额</p>
                    </li>
                </ul>
            </div>
            <div class='title'>
                <p>服务商列表</p>
            </div>
            <div class="section">
                <div class="table_top">
                    <div>
                        <span class="sort">排序</span>
                        <span @click='exportsSwitchFn'>导出</span>
                        <span class='add' @click='addClientSwitch = true'>新增服务商</span>
                    </div>
                </div>
                <div class="table">
                    <vTable
                        style="width:100%"
                        title-bg-color="#eee"
                        :columns="columns"
                        :table-data="tableData"
                        row-click-color="#edf7ff"
                        :is-loading='isLoading'
                        :tableOperating='tableOperating'
                    ></vTable>
                </div>
                <div class="table_foot">
                    <div>
                        <label>
                            <span>
                                <input type="checkbox" v-model='anti'>反选
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
        <Alert v-if='editAreaSwitch' @close='editAreaSwitch = false'>
            <AddAndEdit @close='close'>
                <slot><h4>编辑城市</h4></slot>
            </AddAndEdit>
        </Alert>
        <Alert v-if='addClientSwitch' @close='addClientSwitch = false'>
            <div class="modal-box">
                <div class='modal-header'>
                    <h4>新增客户</h4>
                    <i class="iconfont iconzu999" @click='addClientSwitch = false'></i>
                </div>
                <div class="modal-content">
                    <table border='1' class='table'>
                        <thead>
                            <tr>
                                <th style="width: 20%">列名</th>
                                <th style="width: 60%">填写</th>
                                <th style="width: 20%">校验格式</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class='asterisk'>客户公司名称</td>
                                <td>
                                    <input type="text" v-model='name' placeholder='请输入公司名称'>
                                </td>
                                <td>
                                    <strong v-if="name">
                                        <span v-if='isName'>格式不合法</span>
                                        <i class="iconfont icondui2" v-else></i>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td class='asterisk'>城市</td>
                                <td class="city">
                                    <el-select v-model="cityValue1" @change='changeCity1' placeholder="请选择">
                                        <el-option
                                        v-for="item in city1"
                                        :key="item.adcode"
                                        :value="item.name">
                                        </el-option>
                                    </el-select>
                                    <el-select v-model="cityValue2" placeholder="请选择">
                                        <el-option
                                        v-for="item in city2"
                                        :key="item.adcode"
                                        :value="item.name">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <strong v-if='cityValue1 || cityValue2'>
                                        <i class="iconfont icondui2" v-if='cityValue1 && cityValue2'></i>
                                        <span v-else>格式不合法</span>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td class='asterisk'>地址</td>
                                <td>
                                    <input type="text" v-model='address' placeholder='请输入地址'>
                                </td>
                                <td>
                                    <strong v-if="address">
                                        <i class="iconfont icondui2" v-if='isAddress'></i>
                                        <span v-else>格式不合法</span>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td class='asterisk'>管理员姓名</td>
                                <td>
                                    <input type="text" v-model="person" placeholder='请输入管理员姓名'>
                                </td>
                                <td>
                                    <strong v-if="person">
                                        <i class="iconfont icondui2" v-if='isPerson'></i>
                                        <span v-else>格式不合法</span>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td class='asterisk'>管理员账号</td>
                                <td>
                                    <input type="text" v-model='user' placeholder='请输入管理员账号'>
                                </td>
                                <td>
                                    <strong v-if="user">
                                        <i class="iconfont icondui2" v-if='isUser'></i>
                                        <span v-else>格式不合法</span>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td class='asterisk'>管理员密码</td>
                                <td>
                                    <input type="text" v-model='pwd' placeholder='请输入管理员密码,不少于6位'>
                                </td>
                                <td>
                                    <strong v-if="pwd">
                                        <i class="iconfont icondui2" v-if='isPwd'></i>
                                        <span v-else>格式不合法</span>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td class='asterisk'>管理员手机</td>
                                <td>
                                    <input type="text" v-model='tel' placeholder='请输入管理员手机'>
                                </td>
                                <td>
                                    <strong v-if="tel">
                                        <i class="iconfont icondui2" v-if='isTel'></i>
                                        <span v-else>格式不合法</span>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>管理员性别</td>
                                <td>
                                    <el-select v-model="sexValue" placeholder="请选择">
                                        <el-option
                                            v-for="item in sexOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <strong v-if="sexValue">
                                        <i class="iconfont icondui2"></i>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>客户分配比率</td>
                                <td class='ratio'>
                                    <button 
                                        @click='ratio>0 ? ratio-- : 0'
                                        :class="[ratio<=0 ? 'notallowed' : '']"
                                    >-</button>
                                    <input type='text' v-model.number='ratio'>%
                                    <button 
                                        @click='ratio<100 ? ratio++ : 100'
                                        :class="[ratio>=100 ? 'notallowed' : '']"
                                    >+</button>
                                </td>
                                <td>
                                    <strong v-if="ratio">
                                        剩余{{ 100 - ratio}}%
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>客户金额成本</td>
                                <td>
                                    <input type="text" v-model.number='money' placeholder='请输入客户金额成本'>
                                </td>
                                <td>
                                    <strong v-if="money">
                                        <i class="iconfont icondui2" v-if='isMoney'></i>
                                        <span v-else>格式不合法</span>
                                    </strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-foot">
                    <span @click='addClientSwitch = false'>取消</span>
                    <span @click='addClientSwitchFn' class='active'>保存</span>
                </div>
            </div>
        </Alert>
        <!-- 导出 -->
        <Alert v-if="exportsSwitch" @close='exportsSwitch = false'>
            <ExportService
                @close="exportsSwitch = false" :exportsTableData='exportsTableData'
            />
        </Alert>
        <Alert v-if="deleteCitySwitch" @close='deleteCitySwitch = false'>
            <aside class='aside'>
                <h1>提示</h1>
                <p>是否移除该城市及下属信息</p>
                <span class='txt'>
                    <span>请输入“DELETE"</span>
                    <input type="text" v-model.lazy='deleteCity'>
                </span>
                <div>
                    <span @click='deleteCitySwitch = false'>取消</span>
                    <span class="active" @click='deleteCityFn'>确定</span>
                </div>
            </aside>
        </Alert>
    </div>
</template>

<script>
    import AddAndEdit from './addAndEdit.vue'
    import ExportService from '../export/service.vue'
    import city from '../../../../static/js/city.json'
    export default {
        components: {
            AddAndEdit,
            ExportService
        },
        props: {
            areaMsg: {
                type: Object,
                default: {}
            }
        },
        data() {
             return {
                city1: city.districts,      //省份列表
                city2: [],                  //城市列表
                cityValue1: '',             //省份选择
                cityValue2: '',             //城市选择
                editAreaSwitch: false,      //编辑地区显示开关
                name: '',                   //公司名称
                person: '',                 //管理员姓名
                user: '',                   //管理员账户
                pwd: '',                    //管理员密码
                sexValue: '',               //管理员性别
                address: '',                //地址
                tel: '',                    //电话
                ratio: 10,                  //所属行业
                money: '',                  //金额成本
                sexOptions: [               //性别
                    {
                        value: '选项1',
                        label: '男'
                    }, 
                    {
                        value: '选项2',
                        label: '女'
                    }
                ],
                // 编辑信息开关
                editSwitch: false,
                // 删除城市开关
                deleteCitySwitch: false,
                // 新增服务商开关
                addClientSwitch: false,
                // 绑定反选
                anti: false,
                // 导出开关
                exportsSwitch: false,
                // 导出选中得用户
                exportsTableData: [],
                // 删除城市输入的数字
                deleteCity: '',
                tableData: [
                    {
                        "checked": false,
                        "name": "服务商1",
                        "data": "2019-12-30",
                        "sales":"销售A",
                        "manage": "管理员A",
                        "manageUser": "第一阶段",
                        "ratio": "20%",
                        "cost": "500",
                        "hold": "28",
                        "followup": "18",
                        "deal": "6",
                        "money": "58888"
                    },
                    {
                        "checked": false,
                        "name": "服务商2",
                        "data": "2020-04-30",
                        "sales":"销售C",
                        "manage": "管理员C",
                        "manageUser": "第一阶段",
                        "ratio": "18%",
                        "cost": "888",
                        "hold": "68",
                        "followup": "17",
                        "deal": "6",
                        "money": "66666"
                    },
                    {
                        "checked": false,
                        "name": "服务商3",
                        "data": "2019-12-30",
                        "sales":"销售A",
                        "manage": "管理员A",
                        "manageUser": "第一阶段",
                        "ratio": "20%",
                        "cost": "500",
                        "hold": "28",
                        "followup": "18",
                        "deal": "6",
                        "money": "58888"
                    },
                ],
                columns: [
                    {thwidth: '4%', type: 'selection'},
                    {thwidth: '11%', field: 'name', title: '公司名称'},
                    {thwidth: '8%', field: 'data', title: '创建时间'},
                    {thwidth: '8%', field: 'sales', title: '销售员'},
                    {thwidth: '8%', field: 'manage', title: '管理员'},
                    {thwidth: '8%', field: 'manageUser', title: '管理员账号'},
                    {thwidth: '7%', field: 'ratio', title: '分配比率'},
                    {thwidth: '7%', field: 'cost', title: '金额成本'},
                    {thwidth: '7%', field: 'hold', title: '客户持有'},
                    {thwidth: '7%', field: 'followup', title: '正在跟进量'},
                    {thwidth: '7%', field: 'deal', title: '签单量'},
                    {thwidth: '7%', field: 'money', title: '签订金额'},
                    {thwidth: '11%', field: 'operating', title: '操作', componentName: 'service-table1'},
                ]
            }
        },
        computed: {
            isName(){
                var reg = /\w|\s/g;
                return reg.test(this.name);
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
            },
            isRaatio(){

            },
            isUser(){
                var reg = /\W|\s/;
                return !reg.test(this.user)
            },
            isPwd(){
                if(this.pwd.length < 6){
                    return false;
                }else{
                    var reg = /\W|\s/;
                    return !reg.test(this.pwd)
                }
            },
            isMoney(){
                var reg = /\D/;
                return !reg.test(this.money)
            }
        },
        watch: {
            // 监听反选
            anti(){
                this.tableData.forEach(item => item.checked = !item.checked);
            }
        },
        methods:{
            // 根据传进来的obj 来判断 编辑 或 关闭
            close(obj){
                if(obj){
                    // 选择的城市 和 当前城市不符合
                    if(obj.name != this.areaMsg.name){
                        this.$message.error('请修改选择的城市为' + obj.name)
                        return;
                    }
                    this.$emit('editArea', obj)
                }
                this.editAreaSwitch = false;
            },
            // 删除城市 
            deleteCityFn(){
                if(this.deleteCity == 'DELETE'){
                    this.$emit('deleteArea');
                    this.deleteCitySwitch = false;
                }else{
                    this.$message.error('请输入正确的DELETE')
                }
            },
            changeCity1(name){
                this.city2 = 
                this.city1.filter(item=>item.name == name)[0].districts;
                this.cityValue2 = this.city2[0].name;
            },
            // 新增服务商
            addClientSwitchFn(){
                // console.log()
            },
            // 导出数据
            exportsSwitchFn(){
                this.exportsTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.exportsTableData.length == 0){
                    this.$message.error('请选择要导出的数据');
                    return;
                }
                this.exportsSwitch = true;
            },
            // 编辑或删除数据
            tableOperating(rowData, rowIndex, str){
                if(str == 'edit'){
                    this.editData()
                }else{
                    this.deleteData(rowIndex)
                }
            },
            editData(){
                this.addClientSwitch = true
            },
            deleteData(rowIndex){
                // if(window.confirm('您确定要删除该服务商吗')){
                //     this.tableData.splice(rowIndex, 1);
                //     this.$message('删除成功')
                // }
                this.$confirm('确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(() => {
                    this.tableData = this.tableData.filter(item=>{
                        return item.checked == false
                    })
                    this.$message({
                        type: 'success',
                        message:  '删除成功'
                    });
                })
            }
        }
    }
    Vue.component('service-table1',{
        template:`<span>
        <a href="" @click.stop.prevent="jump">信息</a>&nbsp;
        <a href="" @click.stop.prevent="fn('edit')">编辑</a>&nbsp;
        <a href="" style="color:red;" @click.stop.prevent="fn('delete')">删除</a>
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
            jump(){
                // 改变topnav中第三个得信息
                // this.$store.commit('topNavThree', this.rowData.name);
                window.localStorage.setItem('topNavThree', this.rowData.name);
                // this.$router.push({path: '/admin/service/clientlist?id='+this.rowData.hold})
                this.$router.push({path: '/admin/service/clientlist?id='+this.rowData.hold})
            },
            fn(str){
                this.tableOperating && this.tableOperating(this.rowData, this.rowIndex, str);
            }
        }
    })
</script>
