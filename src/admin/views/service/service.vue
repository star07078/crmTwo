<template>
    <div class='main'>
        <TopNav />
        <div class="main-content">
            <div class="list">
                <div class='add'>
                    <span @click='addArea = true'>创建地区</span>
                </div>

                <div v-for='(obj,i) in list' :key='i'
                    class='options'
                    :class='{auto: obj.show}'
                >
                    <span @click='show(obj, i)' v-if='obj.city && obj.city.length'>
                        {{ obj.province }}
                        <i class='iconfont icondown2'></i>
                    </span>
                    <span v-else @click='fn(obj,$event)'>
                        {{ obj.province }}
                    </span>
                    <ul
                        :ref='obj.id'
                        v-if='obj.city && obj.city.length'
                    >
                        <li v-for='(o,j) in obj.city' :key='j' @click='fn(o,$event)'>
                            {{ o.name }}
                        </li>
                    </ul>
                </div>

            </div>
            <div class='main-content-service'>
                <router-view></router-view>
            </div>
        </div>
        <Alert v-if="addArea" @close='addArea = false'>
            <AddAndEdit @close='close'/>
        </Alert>
    </div>
</template>

<script>
    var list = [];
    import TopNav from '../../../global/components/topNav.vue'
    import AddAndEdit from './addAndEdit.vue'
    export default {
        name: 'client',
        components: {
            TopNav,
            AddAndEdit,
        },
        data() {
            return {
                ele: null,
                n: null,
                active: 'bj',
                // 创建地区显示开关
                addArea: false,
                areaMsg: {},
                list: [
                    {
                        province: '北京',
                        id: 'bj'
                    },
                    {
                        id: 'gd',
                        province: '广东',
                        show: false,
                        city: [
                            {
                                id: 'sz',
                                name: '深圳市',
                                ratio: 40
                            },
                            {
                                id: 'fs',
                                name: '佛山市',
                                ratio: 58
                            }
                        ]
                    },
                    {
                        province: '上海',
                        id: 'sh'
                    },
                    {
                        province: '河北',
                        show: false,
                        id: 'hb',
                        city: [
                            {
                                id: 'lf',
                                name: '廊坊市',
                                ratio: 40
                            },
                            {
                                id: 'sjz',
                                name: '石家庄市',
                                ratio: 58
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            fn(obj, event){
                this.ele && this.ele.classList.remove('active');
                event.target.classList.add('active');
                this.ele = event.target;
            },
            getStyle(obj,attr){
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]
            },
            bufferMove(obj){
                let { el, json, time=20, fn } = obj;
                clearInterval(el.timer)
                var inow = 0, speed;
                var that = this;
                el.timer = setInterval(()=>{
                    var bool;
                    for(var attr in json){
                        bool = false;
                        inow = parseInt(this.getStyle(el,attr));
                        speed = inow - json[attr] > 0 ? Math.ceil((inow - json[attr])/6) : Math.floor((inow - json[attr])/6);
                        if(inow == json[attr]){
                            bool = true;
                        }else{
                           el.style[attr] = inow - speed + 'px';
                        }
                    }
                    if(bool){
                        clearInterval(el.timer)
                        typeof fn == 'function' && fn()
                    }
                },time)
            },
            // 展开列表
            show(obj, i){
                obj.show = !obj.show
                var el = this.$refs[obj.id][0];
                var height = obj.city.length * 44;
                if(obj.show){
                    this.bufferMove({
                        el: el,
                        json: {height: height}
                    })
                }else{
                    this.bufferMove({
                        el: el,
                        json: {height: 0}
                    })
                }
            },
            // 根据传进来的obj 来判断 提交 或 关闭
            close(obj){
                if(obj){
                    this.list.push({
                        name: obj.name,
                        ratio: obj.ratio
                    })
                    this.$message('添加成功');
                }
                this.addArea = false;
            },
            // 提交编辑信息
            editArea(obj){
                this.list.splice(this.areaMsg.index, 1, obj);
                this.areaMsg = obj;
            },
            taggleArea(obj,i){
                obj.index = i;
                this.$router.push('/admin/service/servicelist')
                this.active = obj.id;
                this.areaMsg = obj;
            },
            deleteArea(){
                this.list.splice(this.areaMsg.index, 1);
                this.areaMsg = this.list[0];
                this.areaMsg.index = 0;
                this.$message('删除城市成功')
            }
        },
        created() {
            this.areaMsg = this.list[0];
            this.areaMsg.index = 0;

            let active = window.sessionStorage.getItem('area');
            this.active = active == null ? this.list[0].id : active;
            window.addEventListener('beforeunload', ()=>{
                window.sessionStorage.setItem('area', this.active);
            })
            this.$store.commit('topNavTwo',this.list[0].name)
        },
        destroyed() {
            window.sessionStorage.setItem('area', this.list[0].id);
            this.$store.commit('topNavChange');
        }
    }
</script>


<style lang='less' scoped>
    .list{
        flex: 0 0 122px;
        background: #e8ebf4;
        overflow-y: auto;
        font-size: 14px;
        .options{
            width: 100%;
            overflow: hidden;
            .active{
                background: #ecf5ff;
                color: #409eff;
            }
            span{
                color: #222;
                height: 44px;
                display: flex;
                line-height: 44px;
                padding: 0 20px;
                justify-content: space-between;
                cursor: pointer;
                &:hover{
                    background: #ecf5ff;
                }
                i{
                    transition: .5s;
                    transform: rotate(180deg);
                    font-size: 14px;
                    color: #ccc;
                }
            }
            ul{
                height: 0;
                li{
                    color: #222;
                    height: 44px;
                    line-height: 44px;
                    padding-left: 30px;
                    cursor: pointer;
                    &:hover{
                        background: #ecf5ff;;
                    }
                }
            }
        }
        .add{
            height: 32px;
            padding: 14px 0;
            text-align: center;
            span{
                display: inline-block;
                width: 96px;
                height: 34px;
                text-align: center;
                line-height: 34px;
                border-radius: 6px;
                background: #5962ff;
                color: #fff;
            }
        }
        .auto{
            span{
                i{
                    transform: rotate(0);
                }
            }
        }
        // @keyframes heightauto1 {
        //     0%{
        //         height: 0;
        //     }
        //     100%{
        //         height: 100%;
        //     }
        // }
        // @keyframes heightauto2 {
        //     0%{
        //         height: 44px;
        //     }
        //     100%{
        //         height: auto;
        //     }
        // }
    }

</style>

