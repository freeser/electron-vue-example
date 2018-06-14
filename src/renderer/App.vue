<template>
    <article id="app">
        <vue-topprogress ref="topProgress"></vue-topprogress>
        <cs-header></cs-header>
        <section style="min-height: 80vh;">
            <router-view/>
        </section>
        <cs-footer></cs-footer>
    </article>
</template>

<script>
    import CsHeader from '@/components/CsHeader.vue'
    import CsFooter from '@/components/CsFooter.vue'
    import { vueTopprogress } from 'vue-top-progress'
    export default {
      name: 'app',
      components: {
        CsHeader,
        CsFooter,
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
