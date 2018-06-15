<template>
    <section class="task-detail-page">
        <div class="tright mgb20">
            <el-button type="primary" @click="$router.back()">返回</el-button>
        </div>
        <el-card shadow="hover" class="mgb20">
            <div slot="header" class="clearfix">
                <span>任务详情</span>
                <span class="fright successcolor">运行中</span>
            </div>
            <div class="bodyer clearfix">
                <el-col :span="8">
                    <dl>
                        <dd class="task-item">
                            <label>任务名称：</label>
                            <span>测试001号</span>
                        </dd>
                        <dd class="task-item">
                            <label>转账币种：</label>
                            <span>BCB</span>
                        </dd>
                        <dd class="task-item">
                            <label>互转测试账户数量：</label>
                            <span>50</span>
                        </dd>
                        <dd class="task-item">
                            <label>开始-结束(时间)：</label>
                            <span>11:00 - 12:00</span>
                        </dd>
                        <dd class="task-item">
                            <label>是否重复执行：</label>
                            <span>是</span>
                        </dd>
                        <dd class="task-item">
                            <label>共转账笔数：</label>
                            <span>测试001号</span>
                        </dd>
                        <dd class="task-item">
                            <label>转账金额区间：</label>
                            <span>10 ~ 15</span>
                        </dd>
                    </dl>
                </el-col>
                <el-col :span="14" :offset="2">
                    <dl class="action-dl">
                        <dt>
                            <el-button type="danger">停止运行</el-button>
                            <el-button type="success">编辑</el-button>
                        </dt>
                        <dd class="successcolor">
                            <label>转账成功</label>
                            <span class="block big26">19,213</span>
                        </dd>
                        <dd class="dangercolor">
                            <label>转账失败</label>
                            <span class="block big26">623</span>
                        </dd>
                        <dd class="maincolor">
                            <label>转账金额</label>
                            <span class="block big26">12,213.09</span>
                        </dd>
                    </dl>
                </el-col>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div slot="header" class="clearfix">
                <span>运行状态</span>
            </div>
            <dl class="runing-dl">
                <dd class="whitespace">19:10:12 转账成功 from: x06152222sf22222f2dg2d2fg2dg2d2g2d2g2d to: x06safsadfsafsda34534345k435k345k34j53k5 (19:23)</dd>
                <dd class="whitespace dangercolor">19:10:12 转账成功 from: x06152222sf22222f2dg2d2fg2dg2d2g2d2g2d to: x06safsadfsafsda34534345k435k345k34j53k5 (19:23)</dd>
                <dd class="whitespace">19:10:12 转账成功 from: x06152222sf22222f2dg2d2fg2dg2d2g2d2g2d to: x06safsadfsafsda34534345k435k345k34j53k5 (19:23)</dd>
                <dd class="whitespace">19:10:12 转账成功 from: x06152222sf22222f2dg2d2fg2dg2d2g2d2g2d to: x06safsadfsafsda34534345k435k345k34j53k5 (19:23)</dd>
                <dd class="whitespace dangercolor">19:10:12 转账成功 from: x06152222sf22222f2dg2d2fg2dg2d2g2d2g2d to: x06safsadfsafsda34534345k435k345k34j53k5 (19:23)</dd>
                <dd class="whitespace">19:10:12 转账成功 from: x06152222sf22222f2dg2d2fg2dg2d2g2d2g2d to: x06safsadfsafsda34534345k435k345k34j53k5 (19:23)</dd>
                <dd class="whitespace">19:10:12 转账成功 from: x06152222sf22222f2dg2d2fg2dg2d2g2d2g2d to: x06safsadfsafsda34534345k435k345k34j53k5 (19:23)</dd>
            </dl>
        </el-card>
    </section>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .task-item{
        padding: .5em 0; line-height: 1.6;
        label{
            color: #9B9B9B;
        }
    }
    .action-dl{
        margin: 4em 0;
        padding-left: 2em;
        border-left: 1px solid #E8E8E8;
        dt{
            padding-bottom: 3em;
        }
        dd{
            display: inline-block;
            min-width: 8em;
            width: 30%;
            label{
                display: block;
                margin-bottom: .8em;
            }
        }
    }
    .runing-dl{
        dd{
            line-height: 2;
            font-size: 12px;
            color: #709BD2;
        }
    }
</style>
