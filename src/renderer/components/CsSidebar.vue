<template>
    <div class="sidebar-custom-main">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i class="mrem" :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i class="mrem" :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import event from '@/components/layout/event'
    export default {
        data () {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'iconfont icon-zuzhiguanxi',
                        index: '/tasks',
                        title: '任务列表'
                    },
                    {
                        icon: 'iconfont icon-zhanghuguanli',
                        index: '/manage',
                        title: '帐户管理'
                    }
                ]
            }
        },
        computed: {
            onRoutes () {
                return this.$route.path
            }
        },
        created () {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            event.$on('collapse', msg => {
                this.collapse = msg
            })
        }
    }
</script>

<style lang="less">
    .sidebar-custom-main {
        display: block;
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
        background: #1d2939;
        & > ul {
            height: 100%;
        }
        .sidebar-el-menu {
            background: transparent;
            &:not(.el-menu--collapse) {
                width: 200px;
            }
            .el-menu-item {
                color: #8c99a2;
                margin: 1em;
                border-radius: 5px;
                height: 40px;
                line-height: 39px;
                padding: 0 14px !important;
                i {
                    color: inherit;
                }
            }
            .el-menu-item:focus,
            .el-menu-item:hover {
                outline: 0;
                background-color: transparent;
                color: #fff;
            }
            .el-menu-item.is-active {
                background: #1baf99;
                color: #fff;
            }
            &.el-menu--collapse {
                width: 72px;
                .el-menu-item .el-tooltip {
                    padding: 0 14px !important;
                }
            }
        }
    }
</style>
