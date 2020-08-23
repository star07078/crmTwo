<template>
    <div class="headhide">
        <div class="condition">
            <dl>
                <dt>新增时段：</dt>
                <dd 
                    v-for="(val, i) in filter1.val"
                    :key='i'
                    @click='filterOptions(val, filter1.name)'
                    :class='{active: filter1.active == val}'
                >
                    {{ val }}
                </dd>
            </dl>
            <dl>
                <dt>首字母筛选：</dt>
                <dd 
                    v-for="(val, i) in filter2.val"
                    :key='i'
                    @click='filterOptions(val, filter2.name)'
                    :class='{active: filter2.active == val}'
                >
                    {{ val }}
                </dd>
                <dd class='find'><span>查询</span></dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // 高级筛选1
                filter1: {
                    name: 'filter1',
                    active: '全部',
                    val: ['全部', '近30日新增', '近7日新增', '今日新增']
                },
                // 高级筛选2
                filter2: {
                    name: 'filter2',
                    active: '全部',
                    val: ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z', '#']
                },
            }
        },
        methods: {
            // 高级筛选的筛选选项
            filterOptions(val, name){
                if(name == 'filter1'){
                    this.filter1.active = val;
                }else{
                    this.filter2.active = val;
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .headhide{   
        width: 100%;
        overflow: hidden;
        .condition{
            dl{
                display: flex;
                flex-direction: row;
                margin-bottom: 20px;
                align-items: center;
                dt{
                    width: 120px;
                    margin-right: 20px;
                    color: #666;
                    padding: 4px 0;
                }
                dd{
                    margin-right: 6px;
                    padding: 6px 8px;
                    cursor: pointer;
                    &.active{
                        background: #f3f9ff;
                        color: #0079fe;
                        border-radius: 4px;
                        white-space: nowrap;
                    }
                }
                &:nth-of-type(2){
                    margin-bottom: 0;
                }
                .find{
                    flex: 1 1 auto;
                    text-align: right;
                    span{
                        display: inline-block;
                        padding: 6px 14px;
                        background: #5962ff;
                        border-radius: 4px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>