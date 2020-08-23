import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        topNavOne: '首页',
        topNavTwo: '',
        topNavThree: '',
        topNavFour: '',
        topNavFive: '',
        // 必须要在每个页面手动发起，不然页面回退时检测不到
        // topNavList: [
        //     {
        //         name: '服务商',
        //         url: '/admin/index',
        //         show: true,
        //         num: 0,
        //     },
        //     {
        //         name: '北京市',
        //         url: null,
        //         show: true,
        //         num: 1,
        //     },
        //     {
        //         name: '服务商A',
        //         url: null,
        //         show: true,
        //         num: 2,
        //     },
        //     {
        //         name: '销售员',
        //         url: null,
        //         show: true,
        //         num: 3,
        //     },
        //     {
        //         name: '客户A',
        //         url: null,
        //         show: true,
        //         num: 4,
        //     }
        // ]
    },
    mutations: {
        // changeTopNavList(state, obj){
        //     state.topNavList.forEach(item => {
        //         if(item.num == obj.num){
        //             state.topNavList.splice(obj.num, 1, obj)
        //         }else if(item.num > obj.num){
        //             item.show = false
        //         }
        //     })
        // },
        // changeTopNavListTwo(state, obj){

        // },
        topNavOne(state, val){
            state.topNavOne = val;
        },
        topNavTwo(state, val){
            state.topNavTwo = val;
        },
        topNavThree(state, val){
            state.topNavThree = val;
        },
        topNavFour(state, val){
            state.topNavFour = val;
        },
        topNavFive(state, val){
            state.topNavFive = val;
        },
        topNavChange(state){
            state.topNavThree = '';
            state.topNavFour = '';
            state.topNavFive = '';
        },
    }
})