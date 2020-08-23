<template>
    <div class='main'>
        <TopNav />
        <div class="main-content">
            <mainNav>
                <template v-slot:list>
                    <router-link to='/admin/client/publicd' tag='dd'>公海客户</router-link>
                    <router-link to='/admin/client/privated' tag='dd'>私库客户</router-link>
                    <router-link to='/admin/client/garbage' tag='dd'>垃圾客户</router-link>
                    <router-link to='/admin/client/aduit' tag='dd'>垃圾客户审核</router-link>
                </template>
            </mainNav>
            <router-view />
        </div>
    </div>
</template>

<script>
    import mainNav from '../../../global/components/mainNav.vue'
    import TopNav from '../../../global/components/topNav.vue'
    export default {
        name: 'client',
        components: {
            mainNav,
            TopNav
        },
        created(){
            this.$store.commit('topNavTwo','公海客户')
        }
    }
</script>