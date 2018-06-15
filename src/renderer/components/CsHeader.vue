<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <cs-logo></cs-logo>
        </div>
        <div class="logo">转账机器人</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 用户头像 -->
                <div class="user-avator">
                    <i class="iconfont icon-tubiaozhizuomoban big26"></i>
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://blog.gdfengshuo.com/about/" target="_blank">
                            <el-dropdown-item>关于作者</el-dropdown-item>
                        </a>
                        <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import event from '@/components/layout/event'
    import CsLogo from '@/components/CsLogo.vue'
    export default {
        components: {
            CsLogo
        },
        data () {
            return {
                collapse: false,
                name: 'Robot'
            }
        },
        computed: {
            username () {
                let username = localStorage.getItem('ms_username')
                return username || this.name
            }
        },
        methods: {
            // 用户名下拉菜单选择事件
            handleCommand (command) {
                if (command == 'loginout') {
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login')
                }
            },
            // 侧边栏折叠
            collapseChage () {
                this.collapse = !this.collapse
                event.$emit('collapse', this.collapse)
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #4a4a4a;
        background: #fff;
        border-bottom: 1px solid #ebebeb;
    }
    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 60px;
    }
    .header .logo {
        float: left;
        width: 250px;
        line-height: 60px;
    }
    .header-right {
        float: right;
        padding-right: 20px;
    }
    .header-user-con {
        display: flex;
        height: 60px;
        align-items: center;
    }
    .user-name {
        margin-left: 10px;
    }
    .user-avator {
        margin-left: 20px;
    }
    .user-avator img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .el-dropdown-link {
        cursor: pointer;
        line-height: 60px;
    }
    .el-dropdown-menu__item {
        text-align: center;
    }
</style>
