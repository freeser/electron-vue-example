<template>
    <article id="app">
        <vue-topprogress ref="topProgress"></vue-topprogress>
        <router-view/>
    </article>
</template>

<script>
    import { vueTopprogress } from 'vue-top-progress'
    export default {
      name: 'app',
      components: {
        vueTopprogress
      },
      computed: {
        loading () {
          return this.$store.state.loading
        }
      },
      watch: {
        loading (key) {
          this.$refs.topProgress[key]()
        }
      }
    }
</script>
<style lang="less">
    @import './assets/css/style.less';
    @import "./assets/css/color-dark.css";
</style>