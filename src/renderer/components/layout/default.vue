<template>
    <div class="layout-wrapper">
        <cs-header></cs-header>
        <cs-sidebar></cs-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import CsHeader from '@/components/CsHeader.vue'
    import CsSidebar from '@/components/CsSidebar.vue'
    import event from '@/components/layout/event'
    export default {
        data () {
            return {
                collapse: false
            }
        },
        components: {
            CsHeader, CsSidebar
        },
        created () {
            event.$on('collapse', msg => {
                this.collapse = msg
            })
        }
    }
</script>
<style lang="less">
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        width: 8px;
        height: 8px;
        box-shadow: none;
        background-color: hsla(220, 4%, 58%, 0.3);
    }
</style>

<style lang="less" scoped>
    .content-box {
        position: absolute;
        left: 200px;
        right: 0;
        top: 60px;
        bottom: 0;
        overflow-y: auto;
        -webkit-transition: left 0.3s ease-in-out;
        -o-transition: left 0.3s ease-in-out;
        transition: left 0.3s ease-in-out;
        background: #f0f0f0;
    }
    .content {
        width: auto;
        padding: 20px;
    }
    .content-collapse {
        left: 72px;
    }
</style>
