<template>
    <div class="follow">
        <h3 class="mb20">跟进记录</h3>
        <dl>
            <dt>
                <span @click='writeFollowSwitch = true'>写跟进</span>
            </dt>
            <dd class="solid">
                <div class="time">
                    <span>2020-06-20</span>
                </div>
            </dd>
            <dd class="top30 solid">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            贾春天
                        </span>
                        <strong>签单成交</strong>
                        <span class='price'>9999元</span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <div class='success'>
                        客户直接付款，打到了对公账户上
                        <!-- <p class='fr'>
                            <span class='fr_comment'>评论</span>
                        </p> -->
                    </div>
                    <!-- <div class="submit">
                        <input type="text" placeholder='请输入评论'>
                        <input type="submit" value="评论">
                    </div> -->
                </div>
            </dd>
            <dd class="solid">
                <div class="time">
                    <span>4-27</span>
                </div>
            </dd>
            <dd class="top30 solid">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            客户归属
                        </span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <p>客户被 部门A 贾春天领取</p>
                    <!-- <div>
                        <span class='belong'>归属</span>
                    </div> -->
                </div>
            </dd>
            <slot></slot>
            <dd class="top30">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            跟进
                        </span>
                        <strong>[第二次沟通]</strong>
                        <span class='tel'>拜访</span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <div class="message2 mb20 cl">
                        <!-- 客户等级 -->
                        <ul>
                            <li>
                                客户等级
                                <span>A</span>
                            </li>
                            <li>
                                意向阶段
                                <span>第二阶段</span>
                            </li>
                            <li>
                                沟通时间
                                <span>2019-04-26</span>
                            </li>
                            <li>
                                沟通情况
                                <span>
                                    <a href='javascript:void(0)' @click='see1 = true'>查看</a>
                                </span>
                            </li>
                            <li>
                                沟通计划
                                <span>
                                    <a href='javascript:void(0)' @click='see2 = true'>查看</a>
                                </span>
                            </li>
                        </ul>
                        <span class='fr fr_comment' @click='one = !one'>
                            <i class=""></i>
                            {{one ? '关闭评论' : '发表评论'}}
                        </span>
                    </div>
                    <div class="submit" v-if='one'>
                        <input type="text" placeholder='请输入评论'>
                        <input type="submit" value="评论">
                    </div>
                    <div class="comment">
                        <span>
                            <i></i>
                            赵小刚
                            2019-03-23 20:21
                        </span>
                        <span>
                            上门拜访了客户，客户对产品意向很高，但是希望价格能有优惠。
                        </span>
                    </div>
                    <div class="comment">
                        <span>
                            <i></i>
                            赵小刚
                            2019-03-23 20:21
                        </span>
                        <span>
                            上门拜访了客户，客户对产品意向很高，但是希望价格能有优惠。
                        </span>
                    </div>
                </div>
            </dd>
            <dd class="top30 solid">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            掉入公海
                        </span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <p>因30天未跟进，掉入公海</p>
                    <!-- <div>
                        <span class='belong'>归属</span>
                    </div> -->
                </div>
            </dd>
            <dd class="solid notop">
                <div class="time">
                    <span>4-27</span>
                </div>
            </dd>
            <dd class="top30">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            跟进
                        </span>
                        <strong>[第一次沟通]</strong>
                        <span class='tel'>电话</span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <div class="message2 mb20 cl">
                        <!-- 客户等级 -->
                        <ul>
                            <li>
                                客户等级
                                <span>A</span>
                            </li>
                            <li>
                                意向阶段
                                <span>第二阶段</span>
                            </li>
                            <li>
                                沟通时间
                                <span>2019-04-26</span>
                            </li>
                            <li>
                                沟通情况
                                <span>
                                    <a href='javascript:void(0)' @click='see1 = true'>查看</a>
                                </span>
                            </li>
                            <li>
                                沟通计划
                                <span>
                                    <a href='javascript:void(0)' @click='see2 = true'>查看</a>
                                </span>
                            </li>
                        </ul>
                        <span class='fr fr_comment' @click='two = !two'>
                            <i class=""></i>
                            {{two ? '关闭评论' : '发表评论'}}
                        </span>
                    </div>
                    <div class="submit" v-if='two'>
                        <input type="text" placeholder='请输入评论'>
                        <input type="submit" value="发表">
                    </div>
                    <div class="comment">
                        <span>
                            <i></i>
                            赵小刚
                            2019-03-23 20:21
                        </span>
                        <span>
                            上门拜访了客户，客户对产品意向很高，但是希望价格能有优惠。
                        </span>
                    </div>
                </div>
            </dd>
        </dl>
        <Alert v-if='writeFollowSwitch' @close='writeFollowSwitch = false'>
            <WriteFollow @close='writeFollowSwitch = false' />
        </Alert>
        <Alert v-if='see1' @close='see1 = false'>
            <div class="modal-box">
                <div class='modal-header'>
                    <strong>沟通情况</strong>
                    <i class="iconfont iconzu999" @click='see1 = false'></i>
                </div>
                <div class="modal-content">
                    <p>沟通情况沟通情况沟通情况沟通情况沟通情况沟通情况</p>
                </div>
            </div>
        </Alert>
        <Alert v-if='see2' @close='see2 = false'>
            <div class="modal-box">
                <div class='modal-header'>
                    <strong>沟通计划</strong>
                    <i class="iconfont iconzu999" @click='see2 = false'></i>
                </div>
                <div class="modal-content">
                    <p>沟通计划沟通计划沟通计划沟通计划沟通计划沟通计划</p>
                </div>
            </div>
        </Alert>
    </div>
</template>

<script>
    import WriteFollow from './writeFollow.vue'
    export default {
        components: {
            WriteFollow
        },
        data(){
            return {
                one: false,
                two: false,
                writeFollowSwitch: false,
                see1: false,
                see2: false
            }
        }
    }
</script>

<style lang='less' scoped>
    .follow{
        // 评论 详情按钮的样式
        font-size: 16px;
        .modal-content{
            height: 300px;
            overflow-y: auto;
        }
        .fr_comment{
            // border: 1px solid #eee;
            background: #5862ff;
            padding: 0 14px;
            height: 32px;
            display: inline-block;
            text-align: center;
            line-height: 32px;
            color: #fff;
            border-radius: 4px;
        }
        dl{
            position: relative;
            top: 30px;
            dt{
                position: absolute;
                z-index: 100;
                top: -10px;
                right: 0;
                color: #fff;
                span{
                    margin-left: 20px;
                    background: #5962ff;
                    display: inline-block;
                    height: 34px;
                    padding: 0 22px;
                    line-height: 34px;
                    cursor: pointer;
                    border-radius: 4px;
                }
            }
            dd{
                padding-left: 30px;
                padding-bottom:30px;
                border-left: 1px solid #ccc;
                position: relative;
                &:before{
                    content: '';
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 1px solid #0079fe;
                    background: #fff;
                    position: absolute;
                    left: -5px;
                }
                &.solid{
                    &:before{
                        background: #0079fe;
                    }
                }
                &.top30{
                    &:before{
                        top: 30px;
                    }
                }
                &:nth-of-type(1){
                    padding-bottom: 20px;
                }
                .time{
                    position: relative;
                    padding-left: 1.40px;
                    top: -10px;
                    span{
                        color: #5962fd;
                        // background: #0079fe;
                        display: inline-block;
                        height:  30px;
                        padding: 0 1.60px;
                        line-height: 30px;
                        // &:before{
                        //     content: '';
                        //     display: inline-block;
                        //     width: 0;
                        //     height: 0;
                        //     border-top: 1.50px solid transparent;
                        //     border-bottom: 1.50px solid transparent;
                        //     border-left: 1.50px solid transparent;
                        //     border-right: 1.50px solid #0079fe;
                        //     position: absolute;
                        //     left: -1.60px;
                        //     top: 0;
                        // }
                    }
                }
                &.notop{
                    padding-bottom: 10px;
                    &:before{
                        top: 0.80px;
                    }
                    // .time{
                    //     top: 0;
                    // }
                }
                .notes{
                    border: 1px solid #c7d7ee;
                    background: #ebf2fa;
                    padding: 20px;
                    .mb20{
                        margin-bottom: 20px;
                    }
                    p{
                        color: #999;
                        margin-bottom: 10px;
                    }
                    .belong{
                        display: inline-block;
                        // width: 6.40px;
                        height: 30px;
                        color: #333;
                        font-size: 14px;
                        text-align: center;
                        line-height: 30px;
                        background: #d7d7d7;
                    }
                    .success{
                        height: 36px;
                    }
                    .message1{
                        span{
                            margin-right: 20px;
                            &.fr{
                                margin-right: 0;
                            }
                        }
                        strong{
                            color: rgb(0, 153, 255);
                            margin-right: 20px;
                        }
                        .tel{
                            background: #5862ff url('../../../../global/assets/bottom.png') repeat bottom left;
                            color: #fff;
                            width: 40px;
                            height: 40px;
                            text-align: center;
                            line-height: 40px;
                            display: inline-block;
                        }
                        .price{
                            font-size: 20px;
                            font-weight: 800;
                            color: #fe282a;
                        }
                    }
                    .message2{
                        ul{
                            display: inline-block;
                            height: 30px;
                            line-height: 30px;
                            li{
                                display: inline-block;
                                margin-right: 30px;
                                span{
                                    display: inline-block;
                                    height: 30px;
                                    // padding: 0 20px;
                                    // background: #eee;
                                    margin: 0 14px;
                                }
                            }
                        }
                    }
                    .comment{
                        margin-bottom: 20px;
                        padding: 20px;
                        background: #ffffff;
                        border: 1px solid #e3eff7;
                        span{
                            display: block;
                            &:first-child{
                                margin-bottom: 20px;
                            }
                        }
                    }
                    .submit{
                        height: 40px;
                        border: 1px solid #ccc;
                        background: #fff;
                        position: relative;
                        box-sizing: border-box;
                        margin: 20px 0;
                        input[type='text']{
                            width: 100%;
                            height: 100%;
                            line-height: 40px;
                            padding-left: 20px;
                            box-sizing: border-box;
                            border: none;
                        }
                        input[type='submit']{
                            position: absolute;
                            right: 0;
                            top: 0;
                            width: 80px;
                            height: 38px;
                            background: #0079fe;
                            color: #fff;
                            border-radius: 0;
                        }
                    }
                }
            }
        }
    }
</style>