<template>
    <div class='content'>
        <div class='gz'>
            <div class='title'>
                修改密码
            </div>
            <ul>
                <li v-for='(obj,i) in rating' :key='i'>
                    <div>
                        <span>{{ obj.name }}级</span>
                    </div>
                    <input type="text" v-model='rating[i]["info"]' placeholder="暂无说明">
                </li>
            </ul>
        </div>
        <div class='gz'>
            <div class='title'>
                评级标签管理
            </div>
            <ul>
                <li v-for='(obj,i) in rating' :key='i'>
                    <div>
                        <span>{{ obj.name }}级</span>
                        <a href='javascript:void(0)' @click='editLabelSwitchFn(i, obj.id)'>编辑</a>
                    </div>
                    <ul v-if='obj.menu.length != 0'>
                        <li v-for='(attr,n) in obj.menu' :key='n' :title='attr.info'>
                            {{attr.name}}
                        </li>
                    </ul>
                    <ul v-else>
                        暂无标签
                    </ul>
                </li>
            </ul>
        </div>
        <div class='gz'>
            <div class='title'>
                阶段说明
            </div>
            <ul>
                <li v-for='(obj,i) in stage' :key='i'>
                    <div>
                        <span>{{obj.name}}</span>
                    </div>
                    <input type="text" v-model='stage[i]["info"]' placeholder="暂无说明">
                </li>
            </ul>
        </div>
        <footer class='footer'>
            <button @click='resetFn'>重置</button>
            <button class='active' @click="submitEditFn">提交</button>
        </footer>
        <Alert v-if='editLabelSwitch'>
            <div class="modal-box">
                <div class='modal-header'>
                    <h4>标签管理</h4>
                    <i class="iconfont iconzu999" @click='cancelLabelSwitchFn'></i>
                </div>
                <div class="modal-content">
                    <ul>
                        <li v-for='(obj, i) in labelArr' :key='i'>
                            <div>
                                <span>
                                    {{obj.name}}
                                    <i class="iconfont iconzu999" @click='deleteLabel(i, obj.id)'></i>
                                </span>
                            </div>
                            <input type="text" v-model='labelArr[i].info' placeholder="请输入标签文本">
                        </li>
                    </ul>
                    <div class="adulabel">
                        <div>
                            <span @click='aliLabel'>新增标签</span>
                        </div>
                        <input type="text" v-model='aliLabelVal' placeholder="请输入标签内容">
                    </div>
                    <div class="btn">
                        <button  @click='cancelLabelSwitchFn'>取消</button>
                        <button @click='saveEditLabel'>保存</button>
                    </div>
                </div>
            </div>
        </Alert>
        <Alert mask="hide" width="400px" v-if="submitShow">
            <div class="submitShow">
                <i class="iconfont" :class="showClass"></i>
                <h2>{{msg1}}</h2>
                <p>{{msg2}}</p>
            </div>
        </Alert>
    </div>
</template>

<script>
    import Alert from '../../../global/components/alert.vue'
    // 怕数据请求失败，页面显示为空，所以开始的时候有一些基本的数据
     //评级数据
    let rating = [                  
        {name: 'A', info: '', menu: []},
        {name: 'B', info: '', menu: []},
        {name: 'C', info: '', menu: []},
        {name: 'D', info: '', menu: []},
        {name: 'E', info: '', menu: []},
    ];
    //阶段数据
    let stage = [                  
        {name: '第一阶段', info: ''},
        {name: '第二阶段', info: ''},
        {name: '第三阶段', info: ''},
        {name: '第四阶段', info: ''}
    ];
    var p = new Promise((res, rej)=>{
        axios.get('/index.php/crm/admin/setting/role')
        .then((data)=>{
            rating = data.data.data.rating;
            stage = data.data.data.stage;
            res(data)
        })
        .catch(()=>{
            rej();
        })  
    })
    export default {
        components: {
            Alert
        },
        data(){
            return {
                showClass: '',              //加载对错图标
                msg1: '',                   //h1标签的提示信息
                msg2: '',                   //p标签的提示信息
                editLabelSwitch: false,      //点击编辑显示的标签管理的开关
                submitShow: true,          //总的提交后显示的开关
                rating: rating,
                stage: stage,
                // 点击标签之后 要循环的 标签管理的数组
                labelArr: [],
                // 记录点击标签的id
                labelId: '',
                // 新增标签input的value
                aliLabelVal: '',
                // 要删除label id的集合
                deleteLabelId: [],
                // 新增标签的集合
                aliLabelArr: []
            }
        },
        methods: {
            show: function(obj){
                let { showClass, msg1, msg2} = obj;
                showClass = showClass == 0 ? 
                'iconjiazai' : showClass == 1 ? 'icondui2' : 'iconzu999';
                return new Promise((res, rej)=>{
                    this.showClass = showClass;
                    this.msg1 = msg1;
                    this.msg2 = msg2;
                    this.submitShow = true;
                    setTimeout(()=>{ 
                        this.submitShow = false
                        res()
                    },2000)
                })
            },
            // 提交信息
            submitEditFn(){
                // 显示正在加载
                this.submitShow = true;
                this.msg1 = '正在修改，请稍后';
                this.msg2 = '';
                this.showClass = 'iconjiazai';

                this.$axios({
                    url: '/index.php/crm/admin/setting/role',
                    method: 'post',
                    data: {
                        rating: {
                            1: this.rating[0].info,
                            2: this.rating[1].info,
                            3: this.rating[2].info,
                            4: this.rating[3].info,
                            5: this.rating[4].info,
                        },
                        stage: {
                            1: this.stage[0].info,
                            2: this.stage[1].info,
                            3: this.stage[2].info,
                            4: this.stage[3].info
                        }
                    }
                })
                .then((data)=>{
                    this.show({
                        showClass: 1,
                        msg1: '规则保存成功',
                        msg2: '为不影响当天工作，规则将于次日生效',
                    })
                })
                .catch(()=>{
                    this.show({
                        showClass: 2,
                        msg1: '修改失败',
                        msg2: '请重新修改',
                    })
                })
            },
            // 点击编辑，显示评级标签管理
            editLabelSwitchFn(i, id){
                // 直接复制的话相当于浅拷贝，两边会同时修改
                this.labelArr = this.rating[i].menu.map(item=>item);
                this.editLabelSwitch = true;
                this.labelId = id;
            },
            // 新增标签
            aliLabel(){
                if(!this.aliLabelVal){
                    this.$message.error('新增标签内容不能为空');
                    return;
                }
                var bool = this.labelArr.find(item=>{
                    return item.name == this.aliLabelVal
                })
                if(bool){
                    this.$message.error('标签内容不能重复');
                    return;
                }
                this.labelArr.push({name: this.aliLabelVal, info: ''})
                this.aliLabelArr.push({name: this.aliLabelVal, info: ''})
            },
            // 点击❌要删除的标签
            deleteLabel(i, id){
                this.labelArr.splice(i,1);
                // 新增的没有id，所以新增的不用push
                id && this.deleteLabelId.push(id);
            },
            // 取消标签
            cancelLabelSwitchFn(){
                this.editLabelSwitch = false;
                this.aliLabelVal = '';
            },
            // 保存标签
            saveEditLabel(){
                var obj = {
                    rating_edit: {}
                };
                var arr = [];
                this.labelArr.forEach(item=>{
                    if(item.id){
                        obj.rating_edit[item.id] = item.info;
                    }else{
                        arr.push({name: item.name, info: item.info, pid: this.labelId})
                    }
                })
                obj.rating_ali = arr;
                obj.rating_delete = this.deleteLabelId.toString();
                obj.id = this.labelId;

                // 为什么要如此麻烦的设计obj呢
                // 因为ajax提交的数据格式必须保持这样

                this.$axios({
                    url: '/index.php/crm/admin/setting/lable',
                    method: 'post',
                    data: obj
                })
                .then((data)=>{
                    this.rating[this.labelId - 1].menu = this.labelArr;
                    this.$message('保存成功')
                    this.editLabelSwitch = false;
                })
                .catch(()=>{
                    this.$message.error('保存失败')
                })
            },
            // 重置为空
            resetFn(){
                this.rating.forEach(item=>{
                    item.info = ''
                })
                this.stage.forEach(item=>{
                    item.info = ''
                })
            }
        },
        // 初始化后获取数据
        created(){
            p.then((data)=>{
                this.rating = rating;
                this.stage = stage;
            })
            p.catch(()=>{
                this.rating = rating;
                this.stage = stage;
                this.show({
                    showClass: 2,
                    msg1: '数据请求失败'
                })
            })
        },
        beforeCreate(){
            console.log(rating)
        }
    }
</script>

<style lang='less' scoped>
    .gz{
        display: flex;
        flex: 1;
        flex-direction: column;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        background: #fff;
        margin-top: 10px;
        .title{
            padding: 20px 30px;
            border-bottom: 1px solid #ebebeb;
        }
        ul{
            padding: 10px 30px;
            li{
                display: flex;
                flex-direction: row;
                margin: 30px 0;
                align-items: center;
                div{
                    flex: 0 1 100px;
                    a{
                        float: right;
                        margin-right: 30px;
                    }
                }
                input{
                    flex: 1 0 auto;
                    height: 36px;
                    font-size: 14px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    padding-left: 20px;
                }
                ul{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    flex-wrap: wrap;
                    li{
                        background: #eee;
                        border-radius: 4px;
                    }
                }
            }
        }
    }
    .modal-box{
        margin: 0;
    }
    .modal-content{
        height: auto;
        padding-top: 10px;
        input{
            flex: 1 0 auto;
            border: 1px solid #ccc;
            height: 32px;
            border-radius: 4px;
            padding-left: 20px;
        }
        ul{
            max-height: 300px;
            overflow-y: auto;
            li{
                display: flex;
                align-items: center;
                margin: 16px 0;
                div{
                    flex: 0 1 140px;
                    margin: 10px 0;
                    span{
                        position: relative;
                        background: #eee;
                        width: 100px;
                        justify-content: center;
                        padding: 6px 10px;
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        border-radius: 4px;
                        i{
                            position: absolute;
                            top: -10px;
                            right: -10px;
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 20px;
                            color: #fff;
                            background: red;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .adulabel{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 10px 0;
            div{
                flex: 0 0 140px;
                span{
                    display: inline-block;
                    background: #0079FE;
                    color: #fff;
                    width: 100px;
                    text-align: center;
                    border-radius: 4px;
                    padding: 6px 10px;
                }
            }
        }
        .btn{
            text-align: right;
            padding: 14px 0;
            button{
                width: 80px;
                height: 32px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 5px;
                background: #fff;
                margin-left: 20px;
            }
        }
    }
</style>