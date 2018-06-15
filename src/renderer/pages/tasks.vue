<template>
    <div class="tasks-page">
        <div class="crumbs clearfix mgb20">
            <el-breadcrumb separator="/" class="fleft breadcrumb-div">
                <el-breadcrumb-item>
                    <i class="el-icon-tickets"></i> 任务列表</el-breadcrumb-item>
            </el-breadcrumb>
            <el-button class="fright" type="primary" @click="handleEdit">创建任务</el-button>
        </div>
        <div class="container">
            <el-form class="handle-box" size="small" :inline="true">
                <el-form-item>
                    <el-input v-model="taskName" placeholder="任务名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="coinCode" placeholder="转账币种">
                        <el-option key="1" label="BCB" value="BCB"></el-option>
                        <el-option key="2" label="USDX" value="USDX"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="search" class="btn-maincolor" @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
            <!-- 结果页面 -->
            <el-table class="el-table-custom" :data="tableData" border stripe size="small" ref="multipleTable">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <div class="expand-detail">
                            {{ props.row.a }}<br> {{ props.row.b }}<br> {{ props.row.c }}<br> {{ props.row.d }}<br> {{ props.row.e }}<br> {{ props.row.f }}<br>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="a" label="任务名称" width="150"></el-table-column>
                <el-table-column prop="b" label="转账币种" width="120" align="center"></el-table-column>
                <el-table-column prop="c" label="互转测试帐户数量" align="center"></el-table-column>
                <el-table-column prop="d" label="开始-结束(时间)" align="center"></el-table-column>
                <el-table-column prop="e" label="是否重复执行" align="center"></el-table-column>
                <el-table-column prop="f" label="共转账笔数" align="center"></el-table-column>
                <el-table-column prop="g" label="转账金额区间" align="center"></el-table-column>
                <el-table-column prop="h" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" width="150" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="text" @click="handleOnOff(scope.$index, scope.row)">关闭</el-button>
                        <el-button size="mini" type="text" @click="$router.push('/task/id')">详情</el-button>
                        <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination tcenter">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next, sizes" :total="table.total" prev-text="上一页" next-text="下一页"></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog :title="form.id ? '编辑任务' : '新建任务'" class="el-dialog-custom" :visible.sync="editVisible" :close-on-click-modal="false" width="800px">
            <el-form ref="form" :model="form" size="small" class="el-task-form">
                <div class="flex form-item">
                    <label class="label">任务名称</label>
                    <div class="flex_1">
                        <el-form-item>
                            <el-input v-model="form.taskName"></el-input>
                        </el-form-item>
                    </div>
                    <div class="remark w30">任务的名称，例如：刷量1</div>
                </div>
                <div class="flex form-item">
                    <label class="label">转账币种</label>
                    <div class="flex_1">
                        <el-form-item>
                            <el-select v-model="form.coinCode" class="w100">
                                <el-option key="1" label="BCB" value="BCB"></el-option>
                                <el-option key="2" label="USDX" value="USDX"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="remark w30">请选择转账任务的币种</div>
                </div>
                <div class="flex form-item">
                    <label class="label">互转帐户数量</label>
                    <div class="flex_1">
                        <el-form-item>
                            <el-input v-model="form.userNum">
                                <template slot="append">＜200</template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="remark w30">请输入互转测试帐户数量</div>
                </div>
                <div class="flex form-item">
                    <label class="label">转账频次</label>
                    <div class="flex_1">
                        <el-row>
                            <el-col :span="14">
                                <el-form-item>
                                    <label slot="label" class="form-item-label">时间范围</label>
                                    <el-time-picker is-range v-model="form.rangtime" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围" class="w100"></el-time-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8" :offset="2">
                                <el-form-item>
                                    <label slot="label" class="form-item-label">共转账笔数</label>
                                    <el-input v-model="form.moneyNum"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item>
                            <el-checkbox v-model="form.isRepeat">是否重复执行</el-checkbox>
                        </el-form-item>
                    </div>
                    <div class="remark w30">请设置转账的频次，<br>从开始到结束时间内共转X笔数</div>
                </div>
                <div class="flex form-item">
                    <label class="label">转账金额</label>
                    <div class="flex_1">
                        <el-col :span="11">
                            <el-form-item>
                                <el-input v-model="form.money1"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="tcenter" style="line-height: 32px;" :span="2">
                            <span>-</span>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item>
                                <el-input v-model="form.money2"></el-input>
                            </el-form-item>
                        </el-col>
                    </div>
                    <div class="remark w30">单次转账随机金额的区间范围</div>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" class="btn-maincolor" @click="saveEdit">保存任务</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData: [],
                cur_page: 1,
                taskName: '',
                coinCode: '',
                editVisible: false,
                form: {
                    rangtime: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
                },
                table: {
                    taskName: '',
                    coinCode: 'BCB',
                    page: 1,
                    size: 10,
                    total: 1000
                }
            }
        },
        created () {
            this.getData()
    },
        methods: {
            // 分页导航
            handleCurrentChange (val) {
                this.table.page = val
            this.getData()
        },
            getData () {
                // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
                // this.$axios.post(this.url, {
                //     page: this.cur_page
                // }).then((res) => {
                //     this.tableData = res.data.list;
                // })
                this.tableData = [
                    {
                        a: '任务一',
                        b: 'BCB',
                        c: '10',
                        d: '12:00 - 14:00',
                        e: '否',
                        f: '100',
                        g: '10 - 10000',
                        h: '完成'
                    }, {
                        a: '任务二',
                        b: 'BCB',
                        c: '10',
                        d: '12:00 - 14:00',
                        e: '否',
                        f: '100',
                        g: '10 - 10000',
                        h: '完成'
                    }, {
                        a: '任务三',
                        b: 'BCB',
                        c: '10',
                        d: '12:00 - 14:00',
                        e: '否',
                        f: '100',
                        g: '10 - 10000',
                        h: '完成'
                    }
                ]
            },
            search () {
                this.table.taskName = this.taskName
                this.table.coinCode = this.coinCode
                this.getData()
        },
            handleEdit (row = {}) {
                this.form = {
                    name: row.name,
                    date: row.date,
                    address: row.address
                }
                this.editVisible = true
        },
            handleOnOff (index, row) {
                this.$message.success('开启关闭成功')
            },
            // 保存编辑
            saveEdit () {
                this.editVisible = false
            this.$message.success('修改成功')
        }
        }
    }
</script>

<style lang="less">
    .tasks-page {
        .container {
            padding: 20px;
            background: #fff;
            border: 1px solid #ddd;
            -webkit-border-radius: 5px;
            border-radius: 5px;
        }
        .pagination {
            padding: 1em;
            .el-select .el-input .el-select__caret {
                line-height: 1;
            }
            .el-pager li {
                font-weight: 400;
            }
        }
    }
    .el-task-form {
        .form-item {
            .label {
                width: 8em;
                line-height: 32px;
                text-align: right;
                padding-right: 2em;
            }
            .remark {
                color: #888;
                font-size: 13px;
                line-height: 32px;
                padding-left: 2em;
            }
            .form-item-label {
                font-size: 12px;
                color: #888;
            }
        }
    }
</style>
