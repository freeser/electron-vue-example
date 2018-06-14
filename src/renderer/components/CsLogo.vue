<template>
    <router-link class="cs-logo h100" :to="link ? link : {}">
        <img v-if="theme=='white'" src="@/assets/img/logo_white.png" :style="`height: ${height}`" alt="logo" />
        <img v-else src="@/assets/img/logo_blue.png" :style="`height: ${height}`" alt="logo" />
    </router-link>
</template>
<script>
export default {
  props: {
    height: String,
    theme: String,
    link: String
  }
}
</script>

<style lang="less" scoped>
    .cs-logo {
        display: inline-block;
        img {
            height: 27px;
            position: relative;
            vertical-align: -5px;
        }
    }
</style>
