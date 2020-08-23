<template>
    <div>
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
        <h3>系统信息</h3>
        <dl>
            <dd>
                <strong>系统编号</strong>
                <span>大有企服</span>
            </dd>
            <dd>
                <strong>服务商</strong>
                <span>贾春天</span>
            </dd>
            <dd>
                <strong>创建人员</strong>
                <span>河北石家庄</span>
            </dd>
            <dd>
                <strong>销售员</strong>
                <span>河北石家庄</span>
            </dd>
            <dd>
                <strong>前服务商</strong>
                <span>13579246810</span>
            </dd>
            <dd>
                <strong>创建时间</strong>
                <span>***************</span>
            </dd>
            <dd>
                <strong>更新时间</strong>
                <span>暂无</span>
            </dd>
            <dd>
                <strong>更新时间</strong>
                <span>最后跟进时间</span>
            </dd>
        </dl>
    </div>
</template>

<style lang='less' scoped>
    h3{
        margin-bottom: 20px;
    }
    dl{
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: 	repeat(2,2fr);
        dd{
            height: 40px;
            line-height: 40px;
            border: 1px solid #dcdcdc;
            border-top: none;
            display: inline-block;
            box-sizing: border-box;
            &:nth-child(1){
                border-top: 1px solid #dcdcdc;
            }
            &:nth-child(2){
                border-top: 1px solid #dcdcdc;
            }
            &:nth-child(2n){
                border-left: none;
            }
            strong{
                display: inline-block;
                width: 120px;
                height: 100%;
                text-align: right;
                padding-right: 1rem;
                background: #ebf2fa;
                color: #666;
                border-style: #c7d7ee;
                box-sizing: border-box;
            }
            span{
                padding-left: 20px;
            }
        }
    }
</style>