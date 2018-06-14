<template>
    <article class="layout">
        <el-row>
            <el-col :sm="12" :xs="24">
                <section class="totalinfo" style="height: 259px;">
                    <h1>
                        1 BCB/0.007101 BTC = $7.341
                        <span class="big12 buycolor">(+2.37%)</span>
                    </h1>
                    <p class="remark">MARKET CAP OF $**** BILLION</p>
                    <dl class="opacitydiv">
                        <dd class="flex acenter">
                            <label class="opacity1">LAST BLOCK</label>
                            <router-link to="/blocks" class="link-a" tag="span">{{area1.blockHeight}}</router-link>
                            <span class="big12 flex_1">({{area1.blockSpeed}}s)</span>
                        </dd>
                        <dd class="flex acenter">
                            <label class="opacity1">TRANSACTIONS</label>
                            <router-link to="/txns" class="link-a" tag="span">{{area1.txTotalCount}} </router-link>
                            <span class="big12 flex_1">({{area1.tpsData}}TPS)</span>
                        </dd>
                    </dl>
                </section>
                <section class="blocks">
                    <div class="section-title flex">
                        <span class="flex_1">
                            <i class="iconfont icon-blocks_i"></i> Blocks</span>
                        <router-link to="/blocks">View All
                            <i class="iconfont icon-arrow-right"></i>
                        </router-link>
                    </div>
                    <dl class="section-dd">
                        <dd class="flex" v-for="i in blocks" :key="i.blockHash">
                            <div class="colorblock flex column acenter jcenter">
                                <router-link :to="`/block/${i.blockHeight}`" tag="div" class="name link-a">Block {{i.blockHeight}}</router-link>
                                <div class="secs">> {{i.timeDesc}}</div>
                            </div>
                            <div class="flex_1 maininfo ohidden">
                                <div class="maininfo_1 flex">
                                    <span class="mrem">Proposed By</span>
                                    <router-link tag="span" :to="`/address/${i.proposerAddress}`" class="flex_1 name link-a whitespace">{{i.proposerAddress}}</router-link>
                                </div>
                                <div class="maininfo_2">
                                    <router-link tag="span" :to="`/txns?block=${i.blockHeight}`" class="txns link-a">{{i.txCount}} txns</router-link>
                                    in {{i.intval}} secs
                                </div>
                                <div class="remark">Block Reward {{i.reward}} BCB</div>
                            </div>
                        </dd>
                    </dl>
                </section>
            </el-col>
            <el-col :sm="12" :xs="24">
                <section class="chat relative">
                    <div id="echart" ref="mychart" style="height: 259px;"></div>
                    <h2 class="tcenter absolute left w100" style="top: 1em;">14 day Ethereum Transaction History</h2>
                </section>
                <section class="transactions">
                    <div class="section-title flex">
                        <span class="flex_1">
                            <i class="iconfont icon-databasemysql"></i> Transactions</span>
                        <router-link to="/txns">View All
                            <i class="iconfont icon-arrow-right"></i>
                        </router-link>
                    </div>
                    <dl class="section-dd section-dd-2">
                        <dd class="flex ohidden" v-for="i in txns" :key="i.txid">
                            <i class="iconfont icon-Group"></i>
                            <div class="flex_1 maininfo ohidden">
                                <div class="maininfo_1 flex">
                                    <span class="mrem">TX#</span>
                                    <router-link :to="`/tx/${i.txid}`" tag="span" class="name link-a whitespace"> {{i.txid}}</router-link>
                                </div>
                                <div class="maininfo_2 big12 flex">
                                    <span class="mrem">From</span>
                                    <router-link tag="span" :to="`/address/${i._from}`" class="txns link-a whitespace">{{i._from}}</router-link>
                                    <span class="mrem mlem">To</span>
                                    <router-link tag="span" :to="`/address/${i._to}`" class="txns link-a whitespace">{{i._to}}</router-link>
                                </div>
                                <div class="remark big12">Amount {{i.amount}} {{i.coinCode}}</div>
                            </div>
                            <span class="time">
                                > {{i.timeDesc}}
                            </span>
                        </dd>
                    </dl>
                </section>
            </el-col>
        </el-row>
    </article>
</template>

<style lang="less" scoped>
    article {
        background: #f7f7f7;
        padding: 1px 8px;
        section {
            margin: 16px 8px;
            border-radius: 2px;
            background: #fff;
        }
        .totalinfo {
            padding: 24px 28px;
            h1 {
                font-family: PingFangSC-Medium;
                font-size: 26px;
                color: #4a4a4a;
                letter-spacing: 0.5px;
            }
            span {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0.5px;
                line-height: 37px;
            }
            .remark {
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #9b9b9b;
                letter-spacing: 0.5px;
            }
            .opacitydiv {
                padding: 34px 0 10px;
                dd {
                    padding: 10px 0;
                    font-family: PingFangSC-Medium;
                    font-size: 20px;
                    color: #4a4a4a;
                    letter-spacing: 0.5px;
                    label {
                        opacity: 0.66;
                        font-size: 16px;
                        width: 40%;
                    }
                }
                .opacity1 {
                    color: #cde4f3;
                }
                .opacity2 {
                    color: #b8d5e9;
                }
            }
        }
        .section-title {
            padding: 0 10px;
            font-size: 14px;
            line-height: 36px;
            color: #9b9b9b;
            border-bottom: 2px solid #f7f7f7;
            letter-spacing: 0.5px;
            a {
                color: #4a90e2;
            }
        }
        .section-dd {
            dd {
                padding: 16px 20px;
                border-bottom: 2px solid #f7f7f7;
                font-size: 14px;
                line-height: 25px;
            }
            .colorblock {
                background: #4a90e2;
                border-radius: 2px;
                width: 30%;
                margin-right: 2em;
                color: #fff;
                padding: 13px;
                line-height: 24px;
                .secs {
                    font-size: 12px;
                }
            }
            .maininfo_1 {
                color: #4a4a4a;
                .name {
                    color: #5999e5;
                }
            }
            .maininfo_2 {
                color: #9b9b9b;
                .txns {
                    color: #4a90e2;
                }
            }
            .remark {
                color: #9b9b9b;
            }
            .icon-Group {
                color: #9b9b9b;
                margin-right: 1em;
            }
        }
        .section-dd-2 {
            dd {
                border-left: 2px solid #3dc18e;
                &:nth-child(2n + 1) {
                    border-left: 2px solid #4a90e2;
                }
            }
            .time {
                margin-left: 4em;
            }
        }
    }
</style>

<script>
    export default {
        data () {
            return {
                myChart: null,
                options: null,
                area1: {},
                blocks: [],
                txns: []
            }
        },
        created () {
            this.$axios.$get('bcbscan/mainData').then(d => this.area1 = d.data)
            this.$axios.$get('bcbscan/blocks', {
                pageNo: 1,
                pageSize: 10
            }).then(d => this.blocks = d.data.list)
            this.$axios.$get('bcbscan/txs', {
                pageNo: 1,
                pageSize: 10
            }).then(d => this.txns = d.data.list)
        }
    }
</script>
