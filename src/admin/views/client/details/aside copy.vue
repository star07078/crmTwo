<template>
    <aside>
        <div class='firm'>
            <h3>公司名字</h3>
            <slot name='label'>
            </slot>
        </div>
        <div class="message">
            <div class="message_left">
                <dl>
                    <dd>
                        服务商：<span>某某某</span>
                    </dd>
                    <dd>
                        销售员：<span>某某某</span>
                    </dd>
                    <dd>
                        联系人姓名：<span>李小红</span>
                    </dd>
                    <dd>
                        联系人电话：<span>18288888888</span>
                    </dd>
                </dl>
                <slot name="client">
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
                </slot>
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
</template>

<style lang="less" scoped>
    aside{
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 2rem;
        .firm{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 1rem;
            h3{
                font-size: 1.8rem;
            }
            span{
                padding: 4px 1.2rem;
                margin: 0 2rem;
                background: #ccc;
            }
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
                        color: #aaa;
                        span{
                            color: #222;
                        }
                    }
                }
                ul{
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    li{
                        border: 1px solid #ccc;
                        margin-right: 2rem;
                        padding: 6px 1rem;
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
</style>