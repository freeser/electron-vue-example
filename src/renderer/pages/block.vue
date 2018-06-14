<template>
    <article>
        <div class="page-header">
            <div class="layout flex">
                <h2 class="flex ohidden">
                    <span>Block</span>
                    <span class="whitespace">#{{$route.params.id}}</span>
                </h2>
            </div>
        </div>
        <div class="page-content layout">
            <section class="panel_detail">
                <div class="p_title">
                    Block Information
                </div>
                <div class="p_content">
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Height:</el-col>
                        <el-col :sm="18" :xs="24">
                            <router-link v-if="info.blockHeight - 1" :to="`/block/${info.blockHeight - 1}`" class="el-button el-button--primary el-button--mini el-inner-button"><i class="iconfont icon-arrow-left"></i> Prev</router-link>
                            <span class="ml1em mr1em">{{info.blockHeight}}</span>
                            <router-link v-if="info.blockHeight + 1" :to="`/block/${info.blockHeight + 1}`" class="el-button el-button--primary el-button--mini el-inner-button">Next <i class="iconfont icon-arrow-right"></i></router-link>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">TimeStamp:</el-col>
                        <el-col :sm="18" :xs="24">{{info.timeDesc}} ({{info.timestamp}})</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Transactions:</el-col>
                        <el-col :sm="18" :xs="24">
                            <router-link class="link-color link-a" :to="`/txns?block=${info.blockHeight}`">{{info.domainTxCount}} transactions and {{info.tokenTxCount}} contract internal transactions in this block</router-link>
                            <!-- <router-link class="link-color link-a" to="/txnsInternal?block=5634354">1 contract internal transaction</router-link> in this block -->
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Hash:</el-col>
                        <el-col :sm="18" :xs="24">{{info.blockHash}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Parent Hash:</el-col>
                        <el-col :sm="18" :xs="24">
                            <router-link class="link-color link-a" :to="`/block/${info.parentHash}`">{{info.parentHash}}</router-link>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Proposed By:</el-col>
                        <el-col :sm="18" :xs="24">
                            <router-link class="link-color link-a" :to="`/address/${info.proposerAddress}`">{{info.proposerAddress}}</router-link>
                             in {{info.intval}} secs
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Size:</el-col>
                        <el-col :sm="18" :xs="24">{{info.blockSize}} bytes</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Gas Used:</el-col>
                        <el-col :sm="18" :xs="24">
                            {{info.gasUsed || 0}} ({{((info.gasUsed/info.gasLimit * 100) || 0).toFixed(2) }}%)
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Gas Limit:</el-col>
                        <el-col :sm="18" :xs="24">{{info.gasLimit || 0}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Block Reward:</el-col>
                        <el-col :sm="18" :xs="24">{{info.reward}} BCB</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Validator List:</el-col>
                        <el-col :sm="18" :xs="24">
                            <dl>
                                <dd v-for="i in validat" :key="i.id">
                                    <p style="width: 400px; display: inline-block">{{i.validatorAddr}}</p>
                                    round: {{i._round}}
                                </dd>
                            </dl>
                        </el-col>
                    </el-row>
                </div>
            </section>
        </div>
    </article>
</template>

<style lang="less" scoped>

</style>
<script>
export default {
  data () {
    return {
      info: {},
      validat: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.initData(to.params)
    next()
  },
  created () {
    this.initData()
  },
  methods: {
    initData (params = this.$route.params) {
      this.$axios.$get('bcbscan/block/' + params.id).then(d => {
        this.info = d.data.detail || {}
        this.validat = d.data.validators || []
      })
    }
  }
}
</script>
