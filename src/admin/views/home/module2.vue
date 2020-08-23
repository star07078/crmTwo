<template>
    <div class="modal-box module2">
        <div class='modal-header'>
            <div class="title">
                <h4>公告</h4>
            </div>
            <div class="option">
                <router-link to='/admin/news/xtnews'>查看更多></router-link>
            </div>
        </div>
        <div class="modal-content">
            <ul>
                <li v-for="(obj, i) in list" :key='i' @click='showMsg(i)'>
                    <div>
                        <i :class='[obj.issee ? "green" : "red"]'>[{{ obj.issee ? '已读' : '未读' }}] &nbsp;</i>
                        <span>{{obj.title}}</span>
                    </div>
                    <span class="time">
                        {{ obj.time }}
                    </span>
                </li>
            </ul>
        </div>
        <Alert v-if='alertSwitch' @close='alertSwitch = false'>
            <div class="modal-box">
                <div class='modal-header'>
                    <strong>{{ list[i].title }}</strong>
                    <i class="iconfont iconzu999" @click='alertSwitch = false'></i>
                </div>
                <div class="modal-content">
                    <p>{{ list[i].msg }}</p>
                </div>
            </div>
        </Alert>
    </div>
</template>

<script>
    export default {
        name: 'module2',
        data(){
            return {
                alertSwitch: false,
                i: 0,   //记录查看的是当前那条公告的索引
                list: [
                    {
                        issee: false,
                        title: '如何建立好客户关系1',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        issee: false,
                        title: '如何建立好客户关系2',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        issee: false,
                        title: '如何建立好客户关系2',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        issee: false,
                        title: '如何建立好客户关系2',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        issee: false,
                        title: '如何建立好客户关系2',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        issee: false,
                        title: '如何建立好客户关系2',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        issee: false,
                        title: '如何建立好客户关系2',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        issee: true,
                        title: '如何建立好客户关系3',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    }
                ],
            }
        },
        methods: {
            showMsg(i){
                this.alertSwitch = true;
                this.i = i;
            }
        }
    }
</script>
