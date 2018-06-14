<template>
    <article>
        <div class="page-header">
            <div class="layout flex">
                <h2 class="flex ohidden">
                    <span>Transactions</span>
                    <span class="whitespace">{{$route.params.id}}</span>
                </h2>
            </div>
        </div>
        <div class="page-content layout">
            <section class="panel_detail">
                <div class="p_title">
                    Transaction Information
                </div>
                <div class="p_content">
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">TxHash:</el-col>
                        <el-col :sm="18" :xs="24">{{info.txid}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">TxReceipt Status:</el-col>
                        <el-col :sm="18" :xs="24">
                            <span class="buycolor" v-if="info.status == 1">Success</span>
                            <span class="sellcolor" v-else>Fail</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Block Height:</el-col>
                        <el-col :sm="18" :xs="24"><router-link class="link-color link-a" :to="`/block/${info.blockHeight}`">{{info.blockHeight}}</router-link> ({{info.confirmBlock}} block confirmation)</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">TimeStamp:</el-col>
                        <el-col :sm="18" :xs="24">{{info.timeDesc}} ({{info.timestamp}})</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">From:</el-col>
                        <el-col :sm="18" :xs="24"><router-link class="link-color link-a" :to="`/address/${info._from}`">{{info._from}}</router-link></el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">To:</el-col>
                        <el-col :sm="18" :xs="24"><router-link class="link-color link-a" :to="`/address/${info._to || info.contractAddr}`">{{info._to || info.contractAddr}}</router-link></el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Value:</el-col>
                        <el-col :sm="18" :xs="24">{{info.amount}} BCB</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Gas Limit:</el-col>
                        <el-col :sm="18" :xs="24">{{info.gasLimit}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Gas Price:</el-col>
                        <el-col :sm="18" :xs="24">------ BCB (13.7875 cong)</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Actual Tx Cost/Fee:</el-col>
                        <el-col :sm="18" :xs="24">{{info.fee}} BCB ($0.20)</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Nonce & {Position}:</el-col>
                        <el-col :sm="18" :xs="24">{{info.nonce}} | {---}</el-col>
                    </el-row>
                    <el-row>
                        <el-col class="label" :sm="6" :xs="24">Input Data:</el-col>
                        <el-col :sm="18" :xs="24">
                            <el-input type="textarea" :readonly="true" rows="6"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </section>
        </div>
    </article>
</template>

<script>
export default {
  data () {
    return {
      info: {}
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
      this.$axios.$get('bcbscan/tx/' + params.id).then(d => {
        this.info = d.data || {}
      })
    }
  }
}
</script>
</script>
