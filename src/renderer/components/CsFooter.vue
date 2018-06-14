<template>
    <footer class="page-footer">
        <el-row class="layout">
            <el-col :sm="8" :xs="24">
                <dl>
                    <dt>&ensp;</dt>
                    <dd>&ensp;</dd>
                    <dd><cs-logo theme="white"></cs-logo></dd>
                </dl>
            </el-col>
            <el-col :sm="5" :xs="24">
                <dl>
                    <dt><span>公司</span></dt>
                    <dd>关于</dd>
                    <dd>招聘</dd>
                    <dd>联系我们</dd>
                </dl>
            </el-col>
            <el-col :sm="5" :xs="24">
                <dl>
                    <dt><span>支持</span></dt>
                    <dd>帮助中心</dd>
                    <dd>教程</dd>
                    <dd>条款</dd>
                </dl>
            </el-col>
        </el-row>
        <p class="copyright tcenter">
            @copy by gichain 2016-2019
        </p>
    </footer>
</template>
<script>
    import CsLogo from '@/components/CsLogo.vue'
    export default {
      components: {
        CsLogo
      }
    }
</script>
<style lang="less" scoped>
    @import '../assets/css/var';
    .page-footer{
        background: #4A4A4A;
        color: #fff; padding: 30px 0;
        dl{
            margin: 1em 2em;
        }
        dt{
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #FFFFFF;
            line-height: 35px;
            span{
                border-bottom: 1px solid #fff;
            }
        }
        dd{
            font-family: PingFangSC-Regular;
            font-size: 12px;
            line-height: 35px;
        }
        .copyright{
            font-family: PingFangSC-Ultralight;
            font-size: 12px; padding: 30px 0 7px;
            color: #9E9E9E;
        }
    }
</style>
