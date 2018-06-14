<template>
    <article>
        <div class="page-header">
            <div class="layout flex">
                <h2>Blocks</h2>
            </div>
        </div>
        <div class="page-content layout">
            <cs-pagination :current-page="table.pageNo" :total="table.totalCount" @current-change="pageChange">
                <span slot="title">Showing Block (#{{first['blockHeight']}} to #{{last['blockHeight']}}) out of {{table.totalCount}} total blocks</span>
            </cs-pagination>
            <el-table size="mini" :data="tableData" border>
                <el-table-column label="Height" min-width="100">
                    <template slot-scope="scope">
                        <router-link class="whitespace" :to="`/block/${scope.row.blockHeight}`">{{ scope.row.blockHeight }}</router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="timeDesc" label="Age" min-width="140"></el-table-column>
                <el-table-column label="txn" min-width="80">
                    <template slot-scope="scope">
                        <router-link class="whitespace" :to="`/txns?block=${scope.row.blockHeight}`">{{ scope.row.txCount }}</router-link>
                    </template>
                </el-table-column>
                <el-table-column label="Proposer" min-width="200">
                    <template slot-scope="scope">
                        <router-link class="whitespace flex_1" :to="`/address/${scope.row.proposerAddress}`">{{ scope.row.proposerAddress }}</router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="gasUsed" label="GasUsed" min-width="150">
                    <template slot-scope="scope">
                        {{scope.row.gasUsed || 0}}
                        <span v-if="scope.row.gasLimit">({{ ((scope.row.gasUsed/scope.row.gasLimit * 100) || 0).toFixed(2) }}%)</span>
                    </template>
                </el-table-column>
                <el-table-column label="GasLimit" min-width="100">
                    <template slot-scope="scope">
                        {{scope.row.gasLimit || 0}}
                    </template>
                </el-table-column>
                <el-table-column label="Avg.GasPrice" min-width="130">
                    <template slot-scope="scope">
                        {{scope.row.gasPrice || 0}}
                    </template>
                </el-table-column>
                <!-- <el-table-column label="Reward" min-width="120"></el-table-column> -->
            </el-table>
            <cs-pagination :current-page="table.pageNo" :total="table.totalCount" @current-change="pageChange" :hasPageSize="true" @size-change="sizeChange"></cs-pagination>
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
        totalCount: 0
      }
    }
  },
  created () {
    this.initData()
  },
  computed: {
    first () {
      return (this.tableData.length ? this.tableData[this.tableData.length - 1] : this.tableData[0]) || {}
    },
    last () {
      return this.tableData[0] || {}
    }
  },
  methods: {
    initData () {
      this.$axios.$get('bcbscan/blocks', this.table).then(d => {
        this.tableData = d.data.list || []
        this.table.totalCount = d.data.totalCount
        this.table.pageNo = d.data.pageNo
        this.table.pageSize = d.data.pageSize
      })
    },
    sizeChange (size) {
      this.table.pageSize = size
      this.initData()
    },
    pageChange (page) {
      this.table.pageNo = page
      this.initData()
    }
  }
}
</script>
