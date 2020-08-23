<template>
    <div>
        <Block width='500px'>
            <template v-slot:header>
                沟通情况
                <i class="fa fa-times"></i>
            </template>
            <template v-slot:content>
                <div>
                    而有些人的性格则是那种比较内敛的，就像一个技术工程师，我的性格里可能这方面就更多一些，在思维上比较严谨，逻辑性比较强一些。我不太愿意天天出去跟人喝酒，而更多的是愿意坐在计算机前面去感受那些新的互联网的产品，去琢磨琢磨怎么样可以把它做得更好。
                </div>
            </template>
        </Block>
        <Block width='800px'>
            <template v-slot:header>
                沟通情况
                <i class="fa fa-times"></i>
            </template>
            <template v-slot:content>
                <div class='write_up'>
                    <div>
                        <span class="name">客户评级</span>
                        <ul>
                            <li class='active'>A级</li>
                            <li>B级</li>
                            <li>C级</li>
                            <li>D级</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>标签</li>
                            <li>标签</li>
                            <li>自定义</li>
                        </ul>
                    </div>
                    <div>
                        <span class="name">意向阶段</span>
                        <ul>
                            <li class='active'>第一阶段</li>
                            <li>第二阶段</li>
                            <li>第三阶段</li>
                            <li>第四阶段</li>
                        </ul>
                    </div>
                    <div>
                        <span class="name">沟通时间</span>
                        <span>
                            <el-select v-model="value" size="small" placeholder="城市">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    size='mini'
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div>
                        <span class="name">姓名</span>
                        <span>
                            <el-select v-model="value" size="small" placeholder="城市">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    size='mini'
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div>
                        <span class="name">城市</span>
                        <span>
                            <el-select v-model="value" size="small" placeholder="城市">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    size='mini'
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div>
                        <span class="name">行业</span>
                        <span>
                            <el-select v-model="value" size="small" placeholder="城市">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    size='mini'
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div>
                        <span class="name">本次沟通方式</span>
                        <span>
                            <label>
                                <input type="radio" name='name'>电话
                            </label>
                            <label>
                                <input type="radio" name='name'>拜访
                            </label>
                        </span>
                    </div>
                    <div>
                        <span class="name">以前是否拜访</span>
                        <span>
                            <el-select v-model="value" size="small" placeholder="城市">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    size='mini'
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div class='textarea'>
                        <span class="name">沟通情况</span>
                        <textarea>

                        </textarea>
                    </div>
                    <div class='textarea'>
                        <span class="name">沟通计划</span>
                        <textarea>

                        </textarea>
                    </div>
                    <div class="submit">
                        <button class="fillin">成交填写</button>
                        <span>
                            <button>取消</button>
                            <button>提交</button>
                        </span>
                    </div>
                </div>
            </template>
        </Block>
    </div>
</template>

<script>
    import Alert from '../../../../global/components/alert.vue'
    import Block from '../../../../global/components/block.vue'
    export default {
        components: {
            Alert,
            Block
        },
        data(){
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, 
                    {
                        value: '选项2',
                        label: '双皮奶'
                    }, 
                    {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, 
                    {
                        value: '选项4',
                        label: '龙须面'
                    }, 
                    {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                value: ''
            }
        }
    }
</script>

<style lang='less' scoped>
.el-select{
    margin: 0 !important;
}
    .write_up{
        display: flex;
        flex-direction: column;
        color: #888;
        font-size: 1.4rem;
        div{
            margin: 1rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            .name{
                display: inline-block;
                width: 12rem;
                &:before{
                    content: '*';
                    color: red;
                    font-size: 2.2rem;
                    margin: 4px 1rem 0 -1.2rem;
                }
            }
            ul{
                display: flex;
                flex-direction: row;
                li{
                    width: 6rem;
                    height: 2.6rem;
                    text-align: center;
                    line-height: 2.6rem;
                    background: #f2f2f2;
                    margin-right: 1.8rem;
                    color: #666;
                    border-radius: 4px;
                    &.active{
                        background: #f3f9ff;
                        color: #0079fe
                    }
                }
            }
            label{
                margin-right: 2rem;
            }
            &.textarea{
                align-items: flex-start;
                .name{
                    flex: 0 0 12rem;
                }
                textarea{
                    border: 1px solid #ccc;
                    flex-grow: 1;
                    height: 12rem;
                    border-radius: 1rem;
                }
            }
            &.submit{
                margin-top: 2rem;
                justify-content: space-between;
                button{
                    width: 8rem;
                    height: 3rem;
                    line-height: 3rem;
                    text-align: center;
                    border-radius: 4px;
                    background: #fff;
                    color: #777;
                    border: 1px solid #777;
                }
                .fillin{
                    background: #169bd5;
                    color: #fff;
                    border: none;
                }
            }
        }
    }
</style>

