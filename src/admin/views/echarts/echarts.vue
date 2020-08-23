<template>
    <div class='main'>
        <TopNav />
        <div class="main-content">
            <mainNav>
                <template v-slot:title>
                    数据列表
                </template>
                <template v-slot:list>
                    <router-link :to="obj.url"
                        v-for='(obj, i) in list'
                        :key='i'
                        tag='dd'
                        v-html='obj.name'
                    >
                    </router-link>
                </template>
            </mainNav>
            <div class='echarts'>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import mainNav from '../../../global/components/mainNav.vue'
    import TopNav from '../../../global/components/topNav.vue'
    export default {
        name: 'client',
        components: {
            TopNav,
            mainNav
        },
        data() {
            return {
                active: 'chart1',
                list: [
                    {
                        url: '/admin/echarts/chart1',
                        name: '销售数据报表'
                    },
                    {
                        url: '/admin/echarts/chart2',
                        name: '客户新增'
                    },
                    {
                        url: '/admin/echarts/chart3',
                        name: '跟进与成交'
                    },
                    {
                        url: '/admin/echarts/chart4',
                        name: '客户质量占比'
                    },
                    {
                        url: '/admin/echarts/chart5',
                        name: '投资回报率'
                    },
                    {
                        url: '/admin/echarts/chart6',
                        name: '客户类型成交<br />转化率'
                    },
                    {
                        url: '/admin/echarts/chart7',
                        name: '沟通频次成交<br />占比'
                    },
                    {
                        url: '/admin/echarts/chart8',
                        name: '客户等级变化'
                    },
                    {
                        url: '/admin/echarts/chart9',
                        name: '客户等级分布'
                    },
                    {
                        url: '/admin/echarts/chart10',
                        name: '客户阶段变化'
                    },
                    {
                        url: '/admin/echarts/chart11',
                        name: '客户初次跟进<br/>等级标签分布'
                    },
                    {
                        url: '/admin/echarts/chart12',
                        name: '城市对比'
                    },
                    
                ]
            }
        },
        created(){
            this.$store.commit('topNavTwo',this.list[0].name)
        }
    }
</script>

<style lang='less'>
    .block{
        margin-bottom: 20px;
    }
</style>