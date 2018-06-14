<template>
    <div class="haspagenation flex">
        <div class="flex_1 flex" v-if="$attrs.hasPageSize && pages > 1">
            <span>Show</span>
            <el-select v-model="pageSize" size="mini" style="width: 7em; margin: 0 .4em;">
                <el-option v-for="size in sizes" :key="size" :label="size" :value="size"></el-option>
            </el-select>
            <span>Page</span>
        </div>
        <div class="flex_1 pagenation_title hidden-xs-only">
            <slot name="title"></slot>
        </div>
        <div v-if="pages > 1" class="paginations flex">
            <el-button :disabled="$attrs['current-page']==1" @click="pageto(1)" type="text" class="btn-prev">Frist</el-button>
            <el-pagination v-on="$listeners" v-bind="$attrs" :page-size="pageSize" prev-text="Prev" next-text="Next" layout="prev, slot, next">
                <slot>
                    <span class="pageinfo">Page {{ $attrs['current-page'] }} of {{ pages }}</span>
                </slot>
            </el-pagination>
            <el-button :disabled="$attrs['current-page']==pages" @click="pageto(pages)" type="text" class="btn-next">Last</el-button>
        </div>
        <slot name="all"></slot>
    </div>
</template>
<script>
    export default {
      name: 'cspagination',
      data () {
        return {
          pageSize: 20,
          sizes: [10, 20, 30, 50, 100, 200, 500]
        }
      },
      watch: {
        pageSize (size) {
          this.$emit('size-change', size)
        }
      },
      computed: {
        pages () {
          return Math.ceil(this.$attrs.total / this.pageSize)
        }
      },
      methods: {
        pageto (page) {
          this.$emit('current-change', this.$attrs['current-page'] = page)
        }
      }
    }
</script>

<style lang="less">
    .haspagenation{
        padding: .6em 0;
        line-height: 30px;
        .pagenation_title{
            font-size: 14px;
            color: #585858;
            letter-spacing: -0.15px;
        }
        .btn-prev,
        .btn-next{
            color: #333;
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 1px 5px;
            font-size: 12px;
            line-height: 1.5;
            height: 28px; border-radius: 0;
            span{
                line-height: inherit;
                display: inline;
            }
            &:hover{
                background-color: #e6e6e6;
                border-color: #adadad;
                color: #409EFF;
            }
        }
        .el-pagination{
            padding: 0 5px;
            .btn-next, .btn-prev{
                padding: 0 6px;
                span{
                    line-height: 26px;
                    font-size: 12px;
                }

            }
        }
        button[disabled],
        button.disabled {
            color: #c0c4cc!important;
            background-color: #fff!important;
            cursor: not-allowed!important;
            border-color: transparent!important;
        }
        .pageinfo{
            padding: 0 6px; color: #555; font-weight: 400;
            border: 1px solid #D4D4D4; margin: 0 5px;
            line-height: 26px!important; font-size: 12px;
            background-color: #EAEAEA;
        }
    }
</style>
