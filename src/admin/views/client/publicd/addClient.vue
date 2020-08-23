<template>
    <div class="modal-box">
        <div class='modal-header'>
            <h4>新增客户</h4>
            <i class="iconfont iconzu999" @click='cancel(false)'></i>
        </div>
        <div class="modal-content">
            <table border='1' class='table'>
                <thead>
                    <tr>
                        <th style="width: 20%">列名</th>
                        <th style="width: 60%">填写</th>
                        <th style="width: 20%">校验格式</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class='asterisk'>客户公司名称</td>
                        <td>
                            <input type="text" v-model='name' placeholder='请输入公司名称'>
                        </td>
                        <td>
                            <strong v-if="name">
                                <span v-if='isName'>格式不合法</span>
                                <i class="iconfont icondui2" v-else></i>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class='asterisk'>城市</td>
                        <td class="city">
                            <el-select v-model="cityValue1" @change='changeCity1' placeholder="请选择">
                                <el-option
                                v-for="item in city1"
                                :key="item.adcode"
                                :value="item.name">
                                </el-option>
                            </el-select>
                            <el-select v-model="cityValue2" placeholder="请选择">
                                <el-option
                                v-for="item in city2"
                                :key="item.adcode"
                                :value="item.name">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <strong v-if='cityValue1 || cityValue2'>
                                <i class="iconfont icondui2" v-if='cityValue1 && cityValue2'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class='asterisk'>地址</td>
                        <td>
                            <input type="text" v-model='address' placeholder='请输入地址'>
                        </td>
                        <td>
                            <strong v-if="address">
                                <i class="iconfont icondui2" v-if='isAddress'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class='asterisk'>联系人</td>
                        <td>
                            <input type="text" v-model='person' placeholder='请输入联系人'>
                        </td>
                        <td>
                            <strong v-if="person">
                                <i class="iconfont icondui2" v-if='isPerson'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class='asterisk'>手机号码</td>
                        <td>
                            <input type="text" v-model='tel' placeholder='请输入手机号码'>
                        </td>
                        <td>
                            <strong v-if="tel">
                                <i class="iconfont icondui2" v-if='isTel'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td>联系人性别</td>
                        <td>
                            <el-select v-model="sexValue" placeholder="请选择性别">
                                <el-option
                                v-for="item in sexOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <strong v-if="sexValue">
                                <i class="iconfont icondui2"></i>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td>所属行业</td>
                        <td>
                            <input type="text" v-model='trade' placeholder='请输入所属行业'>
                        </td>
                        <td>
                            <strong v-if="trade">
                                <i class="iconfont icondui2"></i>
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td>微信</td>
                        <td>
                            <input type="text" v-model='wx' placeholder='请输入微信'>
                        </td>
                        <td>
                            <strong v-if="wx">
                                <i class="iconfont icondui2"></i>
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal-foot">
            <span @click='cancel(false)'>取消</span>
            <span @click='submit' class='active'>保存</span>
        </div>
    </div>
</template>

<script>
    import city from '../../../../../static/js/city.json'
    export default {
        data() {
            return {
                city1: city.districts,      //省份列表
                city2: [],                  //城市列表
                cityValue1: '',             //省份选择
                cityValue2: '',             //城市选择
                name: '',                   //公司名称
                person: '',                 //联系人
                address: '',                //地址
                tel: '',                    //电话
                trade: '',                  //所属行业
                wx: '',                     //微信
                sexOptions: [               //性别
                    {
                        value: '选项1',
                        label: '男'
                    }, 
                    {
                        value: '选项2',
                        label: '女'
                    }
                ],
                sexValue: ''
            }
        },
        methods: {
            changeCity1(name){
                this.city2 = 
                this.city1.filter(item=>item.name == name)[0].districts;
                this.cityValue2 = this.city2[0].name;
            },
            cancel(bool){
                this.$emit('close', bool)
            },
            submit(){
                switch(''){
                    case this.cityValue2:
                        this.$message.error('请选择城市');
                        break;
                    case this.name:
                        this.$message.error('请填写公司名称');
                        break;
                    case this.person:
                        this.$message.error('请填写联系人');
                        break;
                    case this.address:
                        this.$message.error('请填写地址');
                        break;
                    case this.tel:
                        this.$message.error('请填写联系电话');
                        break;
                }
                var obj = {
                    city1: this.city1,
                    city2: this.city2,
                    cityValue1: this.cityValue1,
                    cityValue2: this.cityValue2,
                    name: this.name,
                    person: this.person,
                    address: this.address,
                    tel: this.tel,
                    trade: this.trade,
                    wx: this.wx   
                }
                this.$emit('submit', obj)
            }
        },
        computed: {
            isName(){
                var reg = /\w|\s/g;
                return reg.test(this.name);
            },
            isAddress(){
                var reg = /(\W\w)|(\w\W)|(\W)/g;
                return reg.test(this.address);
            },
            isPerson(){
                var reg = /\w|-|\s/;
                if(this.person.length > 4 || this.person.length < 2){
                    return false
                }
                return !reg.test(this.person);
            },
            isTel(){
                var reg = /^1[3456789]\d{9}$/;
                return reg.test(this.tel);
            }
        }
    }
</script>

<style lang="less" scoped>
    .modal-box{
        height: 100%;
    }
    .modal-content{
        height: 100% !important;
    }
</style>