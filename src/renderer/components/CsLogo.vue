<template>
    <router-link class="cs-logo h100" :to="link ? link : {}">
        <img src="@/assets/img/logo.jpg" :style="`height: ${height}`" alt="logo" />
    </router-link>
</template>
<script>
export default {
  props: {
    height: String,
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
