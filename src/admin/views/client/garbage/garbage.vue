<template>
    <div class="content">
            <div class="head">
                <span class='filter' @click='filterSwitchFn'>
                    <i class='iconfont iconqiehuan1'></i>
                    切换{{ filterSwitch ? '高级' : '普通' }}筛选
                </span>
                <div class='headshow' v-if="filterSwitch" >
                    <div class='kw'>
                        <i class='iconfont iconios-shijian'></i>
                        <input type="text" v-model.lazy='keyWord' placeholder="搜索关键词">
                    </div>
                    <el-date-picker
                        v-model="timeValue"
                        type="date"
                        size="small"
                        placeholder="选择日期">
                    </el-date-picker>
                    <button class='blue'>查询</button>
                    <button @click='keyWord = timeValue = ""'>重置</button>
                </div>
                <HighFilter v-else/>
            </div>
            <div class="section">
                <div class="table_top">
                    <div>
                        <span>排序</span>
                        <span @click='exportsSwitchFn'>导出</span>
                        <span class='public' @click='publicdSwitchFn'>转入公海</span>
                        <span class='paifa' @click='paiFaSwitchFn'>派发客户</span>
                    </div>
                    <div>
                        <div class="rule">
                            <i>公海规则说明</i>
                            <div>
                                <em></em>
                                <p>超过N天“未成交”和“未跟进”的客户，由系统定时划入公海。从开启公海或获得客户（新增、转移、从公海抢到客户）开始来计算客户多久未达到“成交”和“跟进”状态。</p>
                            </div>
                        </div>
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
                        :is-loading='isLoading'
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
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20]"
                            page-size="5"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total"
                        >
                        </el-pagination>
                    </div>
                </div>
            </div>
        <!-- </div> -->
        <Alert v-if="paifaClient" @hide='paifaClient = false'>
            <PaiFaClient @hide='submitpaifaClient'/>
        </Alert>
        <!-- 导出 -->
        <Alert v-if="exportsSwitch" width='1000px' @close='exportsSwitch = false'>
            <Exports
                @close="exportsSwitch = false" :exportsTableData='exportsTableData'
            />
        </Alert>
        <!-- 派发客户 -->
        <Alert v-if="paiFaSwitch" @close='paiFaSwitch = false'>
            <PaiFaClient @close='submitPaiFaClient' :selectTableData='selectTableData'>
                <slot>转入公海</slot>
            </PaiFaClient>
        </Alert>
        <!-- 转入公海 -->
        <Alert v-if="publicdSwitch" @close='publicdSwitch = false'>
            <PaiFaClient @close='zhuanRuPublicdFn' :selectTableData='selectTableData'>
                <slot>转入公海</slot>
            </PaiFaClient>
        </Alert>
    </div>
</template>

<script>
    var p, tableData;
    import Exports from '../../export/exports.vue'
    import HighFilter from '../publicComponent/highFilter.vue'
    import PaiFaClient from '../publicComponent/paiFaClient.vue'
    export default {
        components: {
            PaiFaClient,
            Exports,
            HighFilter
        },
        data() {
            return {
                timeValue: '',
                //  当前页码的数值
                currentPage: 1,
                // 数据的总条数
                total: '',
                // 每页的条数
                pageSizes: 5,
                //  高级筛选true开关
                filterSwitch: true,
                // 派发客户控制开关
                paiFaSwitch: false,
                // 派发选中的客户
                selectTableData: [],
                // 导出选中得用户
                exportsTableData: [],
                // 导出开关
                exportsSwitch: false,
                publicdSwitch: false,
                // 转入公海开关
                // 绑定反选
                anti: false,
                tableData: tableData,
                columns: [
                    {titleAlign: 'center', thwidth: '3%', columnAlign:'center',type: 'selection'},
                    {field: 'name', thwidth: '9%', title: '公司名称', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'area', thwidth: '4%', title: '城市', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'date', thwidth: '7%', title: '录入日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
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
                    {field: 'operating', thwidth: '7%', title: '操作', componentName: 'publicd-garbage', titleAlign: 'center', columnAlign: 'center',isResize:true},
                ]
            }
        },
        watch: {
            // 监听反选
            anti(){
                this.tableData.forEach(item => item.checked = !item.checked);
            }
        },
        methods:{
            // 控制高级筛选显示隐藏
            filterSwitchFn(){
                this.filterSwitch = !this.filterSwitch;
            },
            // 导出数据
            exportsSwitchFn(){
                this.exportsTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.exportsTableData.length == 0){
                    this.$message.error('请选择导出数据');
                    return;
                }
                this.exportsSwitch = true;
            },
            // 显示派发用户
            paiFaSwitchFn(){
                this.selectTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.selectTableData.length == 0){
                    this.$message.error('请选择派发用户');
                    return;
                }
                this.paiFaSwitch = true;
            },
            // 关闭或提交派发用户
            submitPaiFaClient(bool){
                if(!bool){
                    this.paiFaSwitch = false;
                }
            },
            // 转入公海
            publicdSwitchFn(){
                this.selectTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.selectTableData.length == 0){
                    this.$message.error('请选择派发用户');
                    return;
                }
                this.paiFaSwitch = true;
            },
            zhuanRuPublicdFn(bool){
                if(!bool){
                    this.paiFaSwitch = false;
                }
            },
            // 每页显示的条数改变时触发
            handleSizeChange(val) {
                this.pageSizes = val;
                this.changeTableData();
            },
            // 页码改变时触发
            handleCurrentChange(val) {
                var num = (val-1) * this.pageSizes;
                this.changeTableData(num);
            },
            // 加载数据
            changeTableData(num=0){
                this.$axios({
                    url: this.$api + '/dayou/data.json'
                })
                .then((data)=>{
                    this.total = data.data.length;
                    this.tableData = data.data.slice(num,this.pageSizes+num);
                })
            },
            // 删除表格数据
            tableOperating(rowData, rowIndex){
                // if(window.confirm('确定要删除这条数据吗')){
                //     this.$axios.get('/api/')
                //     .then(()=>{
                //         this.tableData.splice(rowIndex, 1)
                //         this.$message('删除成功');
                //     })
                //     .catch(()=>{
                //         this.$message.error('删除失败');
                //     })
                // }
                this.$confirm('确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(() => {
                    // this.tableData = this.tableData.filter(item=>{
                    //     return item.checked == false
                    // })
                    this.tableData.splice(rowIndex, 1)
                    this.$message({
                        type: 'success',
                        message:  '删除成功'
                    });
                })
            },
        },
        created(){
            // this.changeTableData();
            p
            .then((data)=>{
                this.total = data.data.length;
                tableData = this.tableData = data.data.slice(0,this.pageSizes);
            })
        },
        beforeCreate(){
            p = new Promise((res, rej)=>{
                this.$axios({
                    url: this.$api + '/dayou/data.json'
                })
                .then((data)=>{
                    res(data)
                })
                .catch(()=>{
                    rej()
                })
            })
        }
    }
    Vue.component('publicd-garbage',{
        template:`<span>
        <a href="" @click.stop.prevent="jump">查看</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow">删除</a>
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
                window.localStorage.setItem('topNavThree', this.rowData.name)
                this.$router.push('/admin/client/garbage/details')
            },
            deleteRow(){
                this.tableOperating && this.tableOperating(this.rowData, this.rowIndex);
            }
        }
    })
</script>

<style lang='less' scoped>
    @import '../publicComponent/content.less';
</style>