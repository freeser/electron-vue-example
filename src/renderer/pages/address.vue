<template>
    <article>
        <div class="page-header">
            <div class="layout flex">
                <h2 class="flex ohidden">
                    <span>Address</span>
                    <span class="whitespace">{{$route.params.id}}</span>
                </h2>
            </div>
        </div>
        <div class="page-content layout">
            <el-row class="likeform" :gutter="20">
                <el-col :sm="12" :xs="24">
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label strong">Overview</el-col>
                        <el-col :sm="16" :xs="24"></el-col>
                    </el-row>
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label">Balance:</el-col>
                        <el-col :sm="16" :xs="24">---.691698714224865932 BCB</el-col>
                    </el-row>
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label">Ether Value:</el-col>
                        <el-col :sm="16" :xs="24">$-------- (@ $692.53/ETH)</el-col>
                    </el-row>
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label">Proposed:</el-col>
                        <el-col :sm="16" :xs="24">------ blocks and 23659 uncles</el-col>
                    </el-row>
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label">Transactions:</el-col>
                        <el-col :sm="16" :xs="24">------- txns</el-col>
                    </el-row>
                </el-col>
                <el-col :sm="12" :xs="24">
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label strong">Misc</el-col>
                    </el-row>
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label">Address Watch:</el-col>
                        <el-col :sm="16" :xs="24"><el-button size="small">Add To Watch List</el-button></el-col>
                    </el-row>
                    <el-row class="form_item">
                        <el-col :sm="8" :xs="24" class="label">Token Balances:</el-col>
                        <el-col :sm="16" :xs="24"></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-tabs v-model="activeName" style="margin-top: 1.5em;">
                <el-tab-pane label="Transactions" name="1"></el-tab-pane>
                <el-tab-pane label="Token Transfers" name="2"></el-tab-pane>
                <el-tab-pane label="Comments" name="3"></el-tab-pane>
            </el-tabs>
            <cs-pagination>
                <span slot="title">Latest {{tableData.length}} txns from a total Of --- transactions</span>
                <router-link slot="all" class="el-button el-button--default el-button--small" :to="`/txns?address=${$route.params.id}`">View All</router-link>
            </cs-pagination>
            <el-table size="mini" :data="tableData" border>
                <el-table-column label="TxHash" min-width="200">
                    <template slot-scope="scope">
                        <router-link class="whitespace" :to="`/tx/${scope.row.txid}`">{{ scope.row.txid }}</router-link>
                    </template>
                </el-table-column>
                <el-table-column label="Block" min-width="80">
                    <template slot-scope="scope">
                        <router-link class="whitespace" :to="`/block/${scope.row.blockHeight}`">{{ scope.row.blockHeight }}</router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="timeDesc" label="Age" min-width="130"></el-table-column>
                <el-table-column label="From" min-width="200">
                    <template slot-scope="scope">
                        <div class="flex">
                            <router-link class="whitespace flex_1" :to="`/address/${scope.row._from}`">{{ scope.row._from }}</router-link>
                            <i class="oute-txt">OUT</i>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="To" min-width="200">
                    <template slot-scope="scope">
                        <div class="flex">
                            <i class="iconfont icon-wenben"></i>
                            <router-link class="whitespace flex_1" :to="`/address/${scope.row._to}`">{{ scope.row._to }}</router-link>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="amount" label="Value" min-width="150">
                    <template slot-scope="scope">
                        {{scope.row.amount}} BCB
                    </template>
                </el-table-column>
                <el-table-column prop="txFee" label="[TxFee]" min-width="100" class-name="free_cls"></el-table-column>
            </el-table>
        </div>
    </article>
</template>

<style lang="less" scoped>

</style>
<script>
import CsPagination from '@/components/CsPagination.vue'
export default {
  components: {
    CsPagination
  },
  data () {
    return {
      activeName: '1',
      tableData: []
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
      this.$axios.$get('bcbscan/address/' + params.id).then(d => {
        this.tableData = d.data || []
      })
    }
  }
}
</script>
