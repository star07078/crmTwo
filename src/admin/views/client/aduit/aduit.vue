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
                    <span class='by' @click='allYes'>批量通过</span>
                    <span class='noBy' @click='allNo'>批量驳回</span>
                </div>
                <div>
                    <div class="rule">
                        <i>公海规则说明</i>
                        <div>
                            <em></em>
                            <table border='1'>
                                <thead>
                                    <tr>
                                        <th>客户评级</th>
                                        <th>未成交天数</th>
                                        <th>未跟进天数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A-C级</td>
                                        <td>45</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>D-E级</td>
                                        <td>30</td>
                                        <td>15</td>
                                    </tr>
                                </tbody>
                            </table>
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
                        :page-sizes="[10, 20, 30]"
                        page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- 导出 -->
        <Alert v-if="exportsSwitch" @close='exportsSwitch = false'>
            <Exports
                @close="exportsSwitch = false" :exportsTableData='exportsTableData'
            />
        </Alert>
        <Alert v-if="yesNo" @close='yesNo = false' width='80rem'>
            <AduitYesNo @close='yesNoFn'>
                <slot v-if="isYesOrNo == 'no'">
                    驳回后，客户将返回给销售员【贾春天】
                </slot>
            </AduitYesNo>
        </Alert>
    </div>
</template>

<script>
    var p, tableData;

    import HighFilter from '../publicComponent/highFilter.vue'
    import AduitYesNo from '../publicComponent/aduitYesNo.vue'
    import Exports from '../../export/exports.vue'
    export default {
        components: {
            HighFilter,
            Exports,
            AduitYesNo
        },
        data() {
            return {
                value1: '',
                //  当前页码的数值
                currentPage: 1,
                // 数据的总条数
                total: '',
                // 每页的条数
                pageSizes: 10,
                //  高级筛选开关
                filterSwitch: true,
                // 是否正在加载
                isLoading: true,
                // 派发客户控制开关
                paiFaSwitch: false,
                // 派发选中的客户
                selectTableData: [],
                // 导出选中得用户
                exportsTableData: [],
                // 导出开关
                exportsSwitch: false,
                // 转入公海开关
                publicdSwitch: false,
                // 绑定反选
                anti: false,
                // 通过驳回开关
                yesNo: false,
                // 通过驳回索引
                yesNoIndex: '',
                // 点击的是通过还是驳回
                isYesOrNo: '',
                tableData: tableData,
                columns: [
                    {titleAlign: 'center', thwidth: '3%', columnAlign:'center',type: 'selection'},
                    {field: 'name', thwidth: '10%', title: '公司名称', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'area', thwidth: '7%', title: '城市', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'date', thwidth: '7%', title: '录入日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'trade', thwidth: '6%', title: '所属行业', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'rating',thwidth: '6%', title: '客户评级', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'intent', thwidth: '6%', title: '意向阶段', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'person', thwidth: '6%', title: '联系人', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'wx', thwidth: '8%', title: '微信', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'tel', thwidth: '8%', title: '手机号码', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'service', thwidth: '7%', title: '服务商', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'sales', thwidth: '7%', title: '销售员', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'operating', thwidth: '9%', title: '操作', componentName: 'publicd-see', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'aduit', thwidth: '10%', title: '审核', componentName: 'publicd-aduit', titleAlign: 'center', columnAlign: 'center',isResize:true},
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
            // 删除表格数据
            tableOperating(rowData, rowIndex, str){
                var s = str == 'yes' ? '通过' : '驳回';
                // if(window.confirm('确定要'+ s +'这条数据吗')){
                //     this.$axios.get('/api/')
                //     .then(()=>{
                //         this.tableData.splice(rowIndex, 1)
                //         this.$message(s + '成功');
                //     })
                //     .catch(()=>{
                //         this.$message.error(s + '失败');
                //     })
                // }
                this.$confirm('确定要'+ s +'吗, 是否继续?', '提示', {
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
                        message:  s + '成功'
                    });
                })
                
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
            // vtable 传递的事件
            childEvent(rowIndex, str){
                this.yesNo = true;
                this.yesNoIndex = rowIndex;
                this.isYesOrNo = str;
            },
            // 处理点击通过驳回发生的事情
            yesNoFn(bool){
                // bool 为 true 代表的是点击通过
                if(bool){ 
                    if(this.isYesOrNo == 'yes'){
                        this.tableData.splice(this.yesNoIndex, 1)
                    }else{
                        this.tableData.splice(this.yesNoIndex, 1)
                    }
                }
                this.yesNo = false;
            },
            // 批量通过
            allYes(){
                this.exportsTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.exportsTableData.length == 0){
                    this.$message.error('请选择需要通过得用户');
                    return;
                }
                this.$confirm('确定要将这些数据全部通过吗, 是否继续?', '提示', {
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
                        message: '全部通过!'
                    });
                })
            },
            // 批量驳回
            allNo(){
                this.exportsTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.exportsTableData.length == 0){
                    this.$message.error('请选择需要驳回得用户');
                    return;
                }
                this.$confirm('确定要将这些数据全部驳回吗, 是否继续?', '提示', {
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
                        message: '全部通过!'
                    });
                })
            }
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
    
    Vue.component('publicd-see',{
        template:`<span>
        <a href="" @click.stop.prevent="jump">查看</a>&nbsp;
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
                this.$store.commit('topNavThree', this.rowData.name);
                window.localStorage.setItem('topNavThree', this.rowData.name)
                this.$router.push('/admin/client/publicd/details')
            }
        }
    })
    Vue.component('publicd-aduit',{
        template:`<span>
        <a href="" @click.stop.prevent="fn('yes')">通过</a>&nbsp;
        <a href="" @click.stop.prevent="fn('no')">驳回</a>
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
            fn(str){
                this.tableOperating && this.tableOperating(this.rowData, this.rowIndex, str);
            }
        }
    })
</script>

<style lang='less' scoped>
    @import '../publicComponent/content.less';
</style>