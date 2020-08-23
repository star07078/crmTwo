<template>
    <div class="view">
        <div class="view-nav">
            <LeftNav />
        </div>
        <div class="view-main">
            <router-view />
        </div>
    </div>
</template>

<script>
    import LeftNav from '../../global/components/leftNav.vue'
    export default {
        name: 'view',
        components: {
            LeftNav,
        }
    }
</script>