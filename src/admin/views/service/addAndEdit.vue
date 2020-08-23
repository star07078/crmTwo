<template>
    <div class="modal-box">
        <div class='modal-header'>
            <slot><h4>创建地区</h4></slot>
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
                        <td class='asterisk'>城市分配比率</td>
                        <td class='ratio'>
                            <button 
                                @click='ratio>0 ? ratio-- : 0'
                                :class="[ratio<=0 ? 'notallowed' : '']"
                            >-</button>
                            <input type='text' v-model.number='ratio'>%
                            <button 
                                @click='ratio<100 ? ratio++ : 100'
                                :class="[ratio>=100 ? 'notallowed' : '']"
                            >+</button>
                        </td>
                        <td>
                            <strong>
                                <i class="iconfont icondui2" v-if='typeof(ratio) == "number"'></i>
                                <span v-else>格式不合法</span>
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal-foot">
            <span @click='cancel(false)'>取消</span>
            <span @click='cancel(true)' class='active'>保存</span>
        </div>
    </div>
</template>

<script>
    import city from '../../../../static/js/city.json'
    export default {
        data(){
            return {
                city1: city.districts,      //省份列表
                city2: [],                  //城市列表
                cityValue1: '',             //省份选择
                cityValue2: '',             //城市选择
                ratio: 10,
            }
        },
        methods: {
            cancel(bool){
                if(bool){
                    if(this.cityValue2 == ''){
                        this.$message.error('请选择城市');
                        return; 
                    }
                    if(this.city2.length == 1){
                        this.cityValue2 = this.cityValue1;
                    }
                    var obj = {
                        name: this.cityValue2,
                        ratio: this.ratio
                    }
                }
                this.$emit('close',obj)
                this.cityValue1 = this.cityValue2 = '';
            },
            taggleArea(obj){
                this.active = obj.id;
                this.areaMsg = obj;
            },
            changeCity1(name){
                this.city2 = 
                this.city1.filter(item=>item.name == name)[0].districts;
                this.cityValue2 = this.city2[0].name;
            },
        }
    }
</script>