
Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'active',
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/admin/login',
            name: '/admin/login',
            component: ()=> import('../login/login.vue')
        },
        {
            path: '/',
            name: 'index',
            component: ()=> import('../views/index.vue'),
            redirect: '/admin/index',
            children: [
                {
                    path: '/admin/index',
                    name: 'home',
                    component: ()=> import('../views/home/home.vue'),
                    meta: { requiresAuth: true },
                },
                {
                    path: '/admin/client',
                    name: 'client',
                    component: ()=> import('../views/client/client.vue'),
                    meta: { requiresAuth: true },
                    redirect: '/admin/client/publicd',
                    children: [
                        {
                            path: '/admin/client/publicd',
                            name: 'publicd',
                            component: ()=> import('../views/client/publicd/publicd.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/publicd/details',
                            name: 'publicd_details',
                            component: ()=> import('../views/client/publicd/publicd_details.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/garbage',
                            name: 'garbage',
                            component: ()=> import('../views/client/garbage/garbage.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/garbage/details',
                            name: 'garbage_details',
                            component: ()=> import('../views/client/garbage/garbage_details.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/privated',
                            name: 'privated',
                            component: ()=> import('../views/client/privated/privated.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/privated/details',
                            name: 'privated_details',
                            component: ()=> import('../views/client/privated/privated_details.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/aduit',
                            name: 'aduit',
                            component: () => import('../views/client/aduit/aduit.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/write',
                            name: 'write',
                            component: ()=> import('../views/client/details/write.vue'),
                            meta: {requiresAuth: true},
                        }
                    ]
                },
                {
                    path: '/admin/service',
                    name: 'service',
                    component: ()=> import('../views/service/service.vue'),
                    meta: {requiresAuth: true},
                    redirect: '/admin/service/servicelist',
                    children: [
                        {
                            path: '/admin/service/servicelist',
                            name: 'servicelist',
                            component: ()=> import('../views/service/serviceList.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/service/clientlist',
                            name: 'clientlist',
                            component: ()=> import('../views/service/clientList.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/service/saleslist',
                            name: 'saleslist',
                            component: ()=> import('../views/service/salesList.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/service/saleslist/details1',
                            name: 'details',
                            component: ()=> import('../views/client/publicd/publicd_details.vue'),
                            meta: {requiresAuth: true},
                        },
                    ]
                },
                {
                    path: '/admin/echarts',
                    name: 'echarts',
                    component: ()=> import('../views/echarts/echarts.vue'),
                    meta: {requiresAuth: true},
                    redirect: '/admin/echarts/chart1', 
                    children: [
                        {
                            path: '/admin/echarts/chart1',
                            name: 'chart1',
                            component: ()=> import('../views/echarts/chart1.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart2',
                            name: 'chart2',
                            component: ()=> import('../views/echarts/chart2.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart3',
                            name: 'chart3',
                            component: ()=> import('../views/echarts/chart3.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart4',
                            name: 'chart4',
                            component: ()=> import('../views/echarts/chart4.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart5',
                            name: 'chart5',
                            component: ()=> import('../views/echarts/chart5.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart6',
                            name: 'chart6',
                            component: ()=> import('../views/echarts/chart6.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart7',
                            name: 'chart7',
                            component: ()=> import('../views/echarts/chart7.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart8',
                            name: 'chart8',
                            component: ()=> import('../views/echarts/chart8.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart9',
                            name: 'chart9',
                            component: ()=> import('../views/echarts/chart9.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart10',
                            name: 'chart10',
                            component: ()=> import('../views/echarts/chart10.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart11',
                            name: 'chart11',
                            component: ()=> import('../views/echarts/chart11.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart12',
                            name: 'chart12',
                            component: ()=> import('../views/echarts/chart12.vue'),
                            meta: {requiresAuth: true},
                        },
                    ]
                },
                {
                    path: '/admin/setup',
                    name: 'setup',
                    component: ()=> import('../views/setup/setup.vue'),
                    meta: {requiresAuth: true},
                    redirect: '/admin/setup/gz',
                    children: [
                        {
                            path: '/admin/setup/pwd',
                            name: 'pwd',
                            component: () => import('../views/setup/pwd.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/setup/gr',
                            name: 'gr',
                            component: ()=> import('../views/setup/gr.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/setup/gz',
                            name: 'gz',
                            component: ()=> import('../views/setup/gz.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/setup/gly',
                            name: 'gly',
                            component: ()=> import('../views/setup/gly.vue'),
                            meta: {requiresAuth: true},
                        }
                    ]
                },
                {
                    path: '/admin/news',
                    name: 'news',
                    component: ()=> import('../views/news/news.vue'),
                    meta: {requiresAuth: true},
                    redirect: '/admin/news/xtnews',
                    children: [
                        {
                            path: '/admin/news/xtnews',
                            name: 'xtnews',
                            component: ()=> import('../views/news/xtnews.vue'),
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/news/ywnews',
                            name: 'ywnews',
                            component: ()=> import('../views/news/ywnews.vue'),
                            meta: {requiresAuth: true},
                        },
                    ]
                }
            ]
        }
    ]
})