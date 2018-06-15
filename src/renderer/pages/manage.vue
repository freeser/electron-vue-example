<template>
    <section class="task-detail-page">
        <el-row>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>主账户</span>
                    </div>
                    <dl class="tcenter">
                        <dd class="whitespace" style="margin-bottom: 1em;">帐户余额</dd>
                        <dd class="whitespace maincolor strong mainnumber">13458263214.31</dd>
                        <dd class="whitespace">
                            <el-button type="primary" class="btn-maincolor" @click="showDialog('join')">充币</el-button>
                        </dd>
                    </dl>
                </el-card>
            </el-col>
            <el-col :span="11" :offset="1">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>测试帐户</span>
                        <el-button class="fright floatbtn" @click="showDialog('pi')" size="mini" icon="iconfont icon-piliangshenpi" style="margin: -10px;">
                            <span class="mlem">批量生成</span>
                        </el-button>
                    </div>
                    <dl class="tcenter">
                        <dd class="whitespace" style="margin-bottom: 1em;">帐户数量</dd>
                        <dd class="whitespace successcolor strong mainnumber">1000</dd>
                        <dd class="whitespace">
                            <el-button type="primary" @click="showDialog('chong')">充币</el-button>
                            <el-button type="primary" @click="showDialog('gui')">归集</el-button>
                        </dd>
                    </dl>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog class="el-dialog-custom" :title="dialogTitle" :visible.sync="dialogVisible" :close-on-click-modal="false" width="600px">
            <el-form :model="form" label-width="8em">
                <template v-if="type=='pi'">
                    <el-form-item label="当前数量">
                        <span class="big20">1,000</span>
                    </el-form-item>
                    <el-form-item label="生成数量">
                        <el-input v-model="form.v1" auto-complete="off"></el-input>
                    </el-form-item>
                </template>
                <template v-if="type=='chong'">
                    <el-form-item label="主帐户余额">
                        <span class="big20">135,221,000</span>
                    </el-form-item>
                    <el-form-item label="充值总金额">
                        <el-input v-model="form.v1" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="充值模式">
                        <el-radio-group v-model="form.v2">
                            <el-radio label="均分" value="1"></el-radio>
                            <el-radio label="随机" value="2"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </template>
                <template v-if="type=='gui'">
                    <h1 class="tcenter big24">将所有测试账户内余额，全部转入主帐户中</h1>
                    <h1 class="tcenter maincolor big24" style="padding: 1em 0 2em">是否确认操作？</h1>
                    <p class="tcenter">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
                    </p>
                </template>
            </el-form>
            <div slot="footer" class="dialog-footer" v-if="type != 'gui'">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">提 交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                dialogVisible: false,
                type: '',
                form: {}
            }
        },
        computed: {
            dialogTitle () {
                switch (this.type) {
                    case 'join': return '主账户充值'
                    case 'pi': return '批量生成测试帐户'
                    case 'chong': return '充值'
                    case 'gui': return '归集'
                    default: return '提示'
                }
            }
        },
        methods: {
            showDialog (type) {
                this.dialogVisible = true
                this.type = type
            }
        }
    }
</script>

<style lang="less" scoped>
    .mainnumber {
        font-size: 30px;
        margin: 10px auto 1.5em;
    }
    .floatbtn {
        margin: -10px;
        color: #418bca;
        border-color: #418bca;
    }
</style>
