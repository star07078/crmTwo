<template>
    <div class="details">
        <aside>
            <h3>公司名字</h3>
            <div class="message">
                <div class="message_left">
                    <dl>
                        <dd>
                            服务商：<span></span>
                        </dd>
                        <dd>
                            销售员：<span></span>
                        </dd>
                        <dd>
                            联系人姓名：<span></span>
                        </dd>
                        <dd>
                            联系人电话：<span></span>
                        </dd>
                    </dl>
                    <ul>
                        <li>
                            <i class='fa fa-window-maximize'></i>
                            派发客户
                        </li>
                        <li>
                            <i class='fa fa-window-maximize'></i>
                            移交客户
                        </li>
                        <li>
                            <i class='fa fa-window-maximize'></i>
                            写新跟进
                        </li>
                        <li>
                            <i class='fa fa-window-maximize'></i>
                            转入垃圾客户
                        </li>
                    </ul>
                </div>
                <div class="message_right">
                    <dl>
                        <dt>客户评级</dt>
                        <dd>A级</dd>
                        <dd>B级</dd>
                        <dd class="active">C级</dd>
                        <dd>D级</dd>
                        <dd>E级</dd>
                    </dl>
                    <dl>
                        <dt>意向阶段</dt>
                        <dd>第一阶段</dd>
                        <dd>第二阶段</dd>
                        <dd class="active">第三阶段</dd>
                        <dd>第四阶段</dd>
                    </dl>
                </div>
            </div>
        </aside>
        <div class="basic">
            <h3>基本信息</h3>
            <dl>
                <dd>
                    <strong>公司名称</strong>
                    <span>大有企服</span>
                </dd>
                <dd>
                    <strong>联系人</strong>
                    <span>贾春天</span>
                </dd>
                <dd>
                    <strong>城市</strong>
                    <span>河北石家庄</span>
                </dd>
                <dd>
                    <strong>手机号</strong>
                    <span>13579246810</span>
                </dd>
                <dd>
                    <strong>地址</strong>
                    <span>***************</span>
                </dd>
                <dd>
                    <strong>所属行业</strong>
                    <span>暂无</span>
                </dd>
            </dl>
            <h3>跟进记录</h3>
            <div class="follow">
                <div class="border pb20 solid">
                    <div class="write cl">
                        <span class="triangle">4-27</span>
                        <span class="fr">写跟进</span>
                    </div>
                </div>
                <div class="border top30">
                    <div class="notes">
                        <div class="message1 cl">
                            <span>
                                <i class="fa fa-window-maximize"></i>
                                跟进
                            </span>
                            <span>[第三次沟通]</span>
                            <span>电话</span>
                            <span class='fr'>
                                <i></i>
                                2019-03-23 22:31
                            </span>
                        </div>
                        <div class="message2 cl">
                            <!-- 客户等级 -->
                            <ul>
                                <li>
                                    客户等级<span>A</span>
                                </li>
                                <li>
                                    意向阶段<span>A</span>
                                </li>
                                <li>
                                    沟通时间<span>A</span>
                                </li>
                                <li>
                                    沟通情况<span>A</span>
                                </li>
                                <li>
                                    沟通计划<span>A</span>
                                </li>
                            </ul>
                            <span class='fr'>
                                <i class=""></i>
                                评论
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
                        <div class="submit">
                            <input type="text" placeholder='请输入评论'>
                            <input type="submit" value="评论">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .details{
        aside{
            display: flex;
            flex-direction: column;
            background: #fff;
            padding: 2rem;
            h3{
                font-size: 18px;
                margin-bottom: 1rem;
            }
            .message{
                display: flex;
                flex-direction: row;
                height: 9rem;
                .message_left{
                    flex: 1;
                    margin-right: 2rem;
                    display: flex;
                    flex-direction: column;
                    dl{
                        flex: 1;
                        margin: 1.2rem 0 1rem;
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 1rem;
                        dd{
                            margin-right: 4rem;
                        }
                    }
                    ul{
                        flex: 1;
                        display: flex;
                        flex-direction: row;
                        li{
                            border: 1px solid #ccc;
                            margin-right: 2rem;
                            padding: 0.6rem 1rem;
                        }
                    }
                }
                .message_right{
                    flex: 1;
                    border: 1px solid #ccc;
                    padding-left: 2rem;
                    display: flex;
                    flex-direction: column;
                    dl{
                        flex: 1;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        color: #929292;
                        dt{
                            color: #ababab;
                            &:after{
                                content: '?';
                                color: #fff;
                                background: #000;
                                display: inline-block;
                                width: 2rem;
                                height: 2rem;
                                border-radius: 1rem;
                                text-align: center;
                                line-height: 2rem;
                                margin: 0 1rem;
                            }
                        }
                        dd{
                            padding: 2px 0.6rem;
                            background: #f2f2f2;
                            border-radius: 2px;
                            margin-right: 1.4rem;
                            &.active{
                                color: #0079FE;
                                background: #f3f9ff;
                            }
                        }
                    }
                }
            }
        }
        .basic{
            background: #fff;
            padding: 2rem;
            margin-top: 2rem;
            h3{
                margin: 1rem 0 2rem;
            }
            dl{
                margin-bottom: 2rem;
                display: grid;
                grid-template-columns: 	repeat(2,2fr);
                dd{
                    height: 4rem;
                    line-height: 4rem;
                    border: 1px solid #f0f0f0;
                    border-top: none;
                    display: inline-block;
                    box-sizing: border-box;
                    &:nth-child(1){
                        border-top: 1px solid #f0f0f0;
                    }
                    &:nth-child(2){
                        border-top: 1px solid #f0f0f0;
                    }
                    strong{
                        display: inline-block;
                        width: 12rem;
                        height: 100%;
                        text-align: right;
                        padding-right: 1rem;
                        background: #f5f5f5;
                        color: #666;
                        border-right: 1px solid #f0f0f0;
                        box-sizing: border-box;
                    }
                    span{
                        padding-left: 2rem;
                    }
                }
            }
        }
        .follow{
            .border{
                padding-left: 3rem;
                padding-bottom: 3rem;
                border-left: 1px solid #ccc;
                position: relative;
                &:before{
                    content: '';
                    display: inline-block;
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 4px;
                    border: 1px solid #0079fe;
                    background: #fff;
                    position: absolute;
                    left: -4px;
                }
                &.top30{
                    &:before{
                        top: 3rem;
                    }
                }
                &.solid{
                    &:before{
                        background: #0079fe;
                    }
                }
                &.pb20{
                    padding-bottom: 2rem;
                }
                .write{
                    position: relative;
                    padding-left: 1.4rem;
                    top: -1rem;
                    .triangle{
                        &:before{
                            content: '';
                            display: inline-block;
                            width: 0;
                            height: 0;
                            border-top: 1.2rem solid transparent;
                            border-bottom: 1.2rem solid transparent;
                            border-left: 1.2rem solid transparent;
                            border-right: 1.2rem solid #0079fe;
                            position: absolute;
                            left: -1rem;
                            top: 0;
                        }
                    }
                    span{
                        color: #fff;
                        background: #0079fe;
                        display: inline-block;
                        height: 2.4rem;
                        padding: 0 1.6rem;
                        line-height: 2.4rem;
                    }
                }
                .notes{
                    border: 1px solid #e3eff8;
                    background: #f7fbfe;
                    padding: 2rem;
                    .message1{
                        margin-bottom: 2rem;
                        span{
                            margin-right: 2rem;
                            &.fr{
                                margin-right: 0;
                            }
                        }
                    }
                    .message2{
                        margin-bottom: 2rem;
                        ul{
                            display: inline-block;
                            li{
                                display: inline-block;
                                margin-right: 3rem;
                                span{
                                    padding: 4px 3rem;
                                    background: #eee;
                                    margin: 0 1.4rem;
                                }
                            }
                        }
                        span{
                            border: 1px solid #eee;
                            background: #fff;
                            padding: 4px 2rem;
                        }
                    }
                    .comment{
                        margin-bottom: 2rem;
                        padding: 2rem;
                        background: #ffffff;
                        border: 1px solid #e3eff7;
                        span{
                            display: block;
                            &:first-child{
                                margin-bottom: 2rem;
                            }
                        }
                    }
                    .submit{
                        height: 4rem;
                        border: 1px solid #ccc;
                        background: #fff;
                        position: relative;
                        box-sizing: border-box;
                        input[type='text']{
                            width: 100%;
                            height: 100%;
                            line-height: 4rem;
                            padding-left: 2rem;
                        }
                        input[type='submit']{
                            position: absolute;
                            right: 0;
                            top: 0;
                            width: 8rem;
                            height: 3.8rem;
                            background: #0079fe;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>