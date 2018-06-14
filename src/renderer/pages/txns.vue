<template>
    <article>
        <div class="page-header">
            <div class="layout flex">
                <h2>Transactions <span v-if="address">:: Address {{address}}</span></h2>
            </div>
        </div>
        <div class="page-content layout">
            <cs-pagination :current-page="table.pageNo" :total="table.totalCount" @current-change="pageChange">
                <span slot="title">More than > {{ table.totalCount }} transactions found (showing the last {{ table.totalCount }} records)</span>
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
                <el-table-column prop="timeDesc" label="Age" min-width="180"></el-table-column>
                <el-table-column label="From" min-width="200">
                    <template slot-scope="scope">
                        <div class="flex">
                            <router-link class="whitespace flex_1" :to="`/address/${scope.row._from}`">{{ scope.row._from }}</router-link>
                            <i class="iconfont icon-jiantou"></i>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="To" min-width="200">
                    <template slot-scope="scope">
                        <div class="flex">
                            <i class="iconfont icon-wenben"></i>
                            <router-link class="whitespace flex_1" :to="`/address/${scope.row._to || scope.row.contractAddr}`">{{ scope.row._to || scope.row.contractAddr }}</router-link>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="amount" label="Value" min-width="180">
                    <template slot-scope="scope">
                        {{ scope.row.amount || 0 }} BCB
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
      tableData: [],
      table: {
        pageNo: 1,
        pageSize: 20,
        totalCount: 0,
        blockHeight: this.$route.query.block
      },
      address: this.$route.query.address || ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.blockHeight = to.query.block
    this.address = to.query.address || ''
    this.initData()
    next()
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      let url = !this.address
        ? 'bcbscan/txs'
        : `bcbscan/address/${this.address}`
      this.$axios.$get(url, this.table).then(d => {
        this.tableData = !this.address ? d.data.list : d.data
        this.table.totalCount = d.data.totalCount
        this.table.pageNo = d.data.pageNo
        this.table.pageSize = d.data.pageSize
      })
    },
    pageChange (page) {
      this.table.pageNo = page
      this.initData()
    }
  }
}
</script>
