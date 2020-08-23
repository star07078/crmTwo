<template>
    <div class='home'>
        <TopNav />
        <div class="content" ref='scroll' @scroll='scrollShowAside'>
            <aside>
                <Module />
            </aside>
            <aside class="aside" ref='asideHeight'>
                <Module1 />
                <Module2 />
            </aside>
            <aside class="aside">
                <Module3 />
                <Module4 />
            </aside>
            <aside class="aside" v-if="show[0]">
                <Module5 />
                <Module6 />
            </aside>
            <aside v-if="show[1]">
                <Module7 />
            </aside>
            <aside class="aside" v-if="show[2]">
                <Module8 />
                <Module9 />
            </aside>
            <aside v-if="show[3]">
                <Module10 />
            </aside>
            <aside class="aside" v-if="show[4]">
                <Module11 />
                <Module12 />
            </aside>
            <aside v-if="show[5]">
                <Module13 />
            </aside>
            <aside v-if="show[6]">
                <Module14 />
            </aside>
        </div>
    </div>
</template>

<script>
    import TopNav from '../../../global/components/topNav.vue'
    import Module from './module.vue'
    import Module1 from './module1.vue'
    import Module2 from './module2.vue'
    import Module3 from './module3.vue'
    import Module4 from './module4.vue'
    import Module5 from './module5.vue'
    import Module6 from './module6.vue'
    import Module7 from './module7.vue'
    import Module8 from './module8.vue'
    import Module9 from './module9.vue'
    import Module10 from './module10.vue'
    import Module11 from './module11.vue'
    import Module12 from './module12.vue'
    import Module13 from './module13.vue'
    import Module14 from './module14.vue'

    export default {
        name: 'index',
        components: {
            TopNav,
            Module,
            Module1,
            Module2,
            Module3,
            Module4,
            Module5,
            Module6,
            Module7,
            Module8,
            Module9,
            Module10,
            Module11,
            Module12,
            Module13,
            Module14,
        },
        data(){
            return {
                show: [false, false, false, false, false, false, false],
                n: 0,
            }
        },
        computed: {
            // 计算单个aside的高
            asideHeight(){
                var obj = getComputedStyle(this.$refs.asideHeight) || this.$refs.asideHeight.currentStyle;
                var height = parseInt(obj.height) + parseInt(obj.marginBottom) + parseInt(obj.marginTop)
                return height;
            }
        },
        methods: {
            scrollShowAside(){
                var scrollTop = this.$refs.scroll.scrollTop
                var num = Math.floor(scrollTop / this.asideHeight)
                // 改变一次就行。不用每次改变
                if(this.n == num){
                    this.show.splice(num, 0, true)
                    this.n ++;
                }
            }
        },
        created(){
            // 控制topnav的显示
            // this.$store.commit('changeTopNavList',{
            //     name: '首页',
            //     url: '/admin/index',
            //     show: true,
            //     num: 0
            // })
            // console.log(this.$router.history.current, 999)
        }
    }
</script>

