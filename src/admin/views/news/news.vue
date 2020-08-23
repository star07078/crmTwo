<template>
    <div class='main'>
        <TopNav />
        <div class="main-content">
            <router-view />
        </div>
    </div>
</template>

<script>
    import TopNav from '../../../global/components/topNav.vue'
    export default {
        name: 'client',
        components: {
            TopNav,
        }
    }
</script>

<style scoped>
    .news span{
        line-height: 2rem;
        content: '';
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background: #ff5918;
        position: absolute;
        right: 2.2rem;
        top: 1.5rem; 
        color: #fff;
    }
</style>