<template>
    <div class="modal-box module1">
        <div class='modal-header'>
            <div class="title">
                <h4>数据简报</h4>
            </div>
            <div class="option">
                <el-cascader 
                    :options="options" 
                    :show-all-levels="false"
                    size='small'
                ></el-cascader>
                
                <el-select v-model="value2" size="small" placeholder="服务商">
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value3" size="small" placeholder="销售员">
                    <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker
                    v-model="value4"
                    type="daterange"
                    size='small'
                    start-placeholder="开始"
                    end-placeholder="结束">
                </el-date-picker>
            </div>
        </div>
        <div class="modal-content">
            <ul class='ul'>
                <li><h3>33222</h3><p>新增客户</p></li>
                <li><h3>33222</h3><p>新增跟进</p></li>
                <li><h3>33222</h3><p>销售员</p></li>
                <li><h3>33222</h3><p>服务商</p></li>
                <li><h3>33222</h3><p>成交量</p></li>
                <li><h3>33222</h3><p>成交金额</p></li>
                <li><h3>33222</h3><p>成交转化率</p></li>
                <li><h3>33222</h3><p>跟进总量</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                options: this.elementCity,
                options2: [
                    {
                        value: '选项1',
                        label: '服务商A'
                    }, 
                    {
                        value: '选项2',
                        label: '服务商B'
                    },
                ],
                value2: '',
                options3: [
                    {
                        value: '选项1',
                        label: '销售员1'
                    }
                ],
                value3: '',
                value4: ''
            }
        }
    }
</script>
