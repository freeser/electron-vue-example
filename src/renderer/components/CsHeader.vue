<template>
    <!-- 头部导航 -->
    <div class="header bcb-header-page navbar">
        <div class="layout el-row">
            <ul class="bcb-scan-menu fleft el-col-1100-24 cs-menu">
                <li class="cs-menu-item cs-sub-menu-item el-col-xs-24 logoItem">
                    <cs-logo link="/"></cs-logo>
                    <div class="hidden-sm-and-up fright">
                        <el-button type="primary" class="toggleMenu" icon="el-icon-menu" @click="toggleMenu" size="mini"></el-button>
                    </div>
                </li>
                <li class="cs-menu-item cs-sub-menu-item el-col-xs-24 hidden-xs-only toggleItem" :class="{'is-active': currRoute=='index'}">
                    <router-link to="/">HOME</router-link>
                </li>
                <li class="el-col-xs-24 hidden-xs-only toggleItem el-submenu" :class="{'is-active': ['txns', 'txn', 'blocks', 'block', 'accounts'].includes(currRoute)}">
                    <div class="el-submenu__title">BLOCKCHAIN
                        <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                    </div>
                    <ul class="cs-menu cs-menu--inline">
                        <li class="cs-menu-item">
                            <router-link to="/txns">View Txns</router-link>
                        </li>
                        <li class="cs-menu-item">
                            <router-link to="/blocks">View Blocks</router-link>
                        </li>
                        <!-- <li class="cs-menu-item">
                            <router-link to="/accounts">All Accounts</router-link>
                        </li> -->
                    </ul>
                </li>
                <!-- <li class="el-col-xs-24 hidden-xs-only toggleItem el-submenu" :class="{'is-active': ['tokens', 'token', 'transfers', 'transfer'].includes(currRoute)}">
                    <div class="el-submenu__title">TOKENS
                        <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                    </div>
                    <ul class="cs-menu cs-menu--inline">
                        <li class="cs-menu-item">
                            <router-link to="/tokens">View Tokens</router-link>
                        </li>
                        <li class="cs-menu-item">
                            <router-link to="/transfers">View Tokens Transfers</router-link>
                        </li>
                    </ul>
                </li> -->
            </ul>
            <div class="fright el-col-1100-24">
                <div class="keywords el-col-1100-24 bbox">
                    <el-input placeholder="Search by Address/Txhash/Block/Token/Ens" @keyup.native.enter="search" v-model="keywords"></el-input>
                </div>
                <div class="search ml1em hidden-md-and-down fright">
                    <el-button type="primary" @click="search" round>GO</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CsLogo from '@/components/CsLogo.vue'
    export default {
      components: {
        CsLogo
      },
      data () {
        return {
          keywords: '',
          currRoute: this.$route.name
        }
      },
      watch: {
        '$route': function (route) {
          this.currRoute = route.name
        }
      },
      methods: {
        toggleMenu () {
          let menus = document.querySelectorAll('.toggleItem')
          for (let i = 0, j = menus.length; i < j; i++) {
            let cls = menus[i].className
            if (cls.includes('hidden-xs-only')) {
              menus[i].className = cls.replace('hidden-xs-only', 'show-xs-only')
            } else if (cls.includes('show-xs-only')) {
              menus[i].className = cls.replace('show-xs-only', 'hidden-xs-only')
            } else {
              menus[i].className += ' show-xs-only'
            }
          }
        },
        search () {
          this.keywords && this.$axios.$post('bcbscan/search', {
            search: this.keywords
          }).then(d => {
            d.data != 'error' && d.data ? this.$router.push('/' + d.data + '/' + this.keywords) : this.$message.error('oop! error keywords!')
            this.keywords = ''
          })
        }
      }
    }
</script>

<style lang="less">
    @import '../assets/css/var';
    .bcb-header-page {
        border-bottom: 1px solid #eaeaea;
        line-height: 80px;
        .cs-menu {
            border: 0;
        }
        .el-submenu__icon-arrow {
            position: static;
            margin-left: 5px;
            vertical-align: 0px;
        }
        .keywords {
            .el-input__inner {
                background: #f2f2f2;
                border: 1px solid #ffffff;
                border-radius: 100px;
                min-width: 25em;
                height: 36px;
            }
        }
        .el-button.is-round {
            border-radius: 20px;
            padding: 0 21px;
            height: 36px;
        }
        .el-submenu.is-active .el-submenu__title,
        .cs-menu-item.is-active {
            border-bottom: 0 !important;
            color: @main-color!important;
            a {
                color: @main-color!important;
            }
        }
        .cs-menu--inline {
            display: none !important;
            position: absolute;
            z-index: 10;
            padding: 5px 0;
            border-radius: 2px; background: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            .cs-menu-item a {
                color: @main-color!important;
                display: block;
            }
            .cs-menu-item {
                height: 40px;
                line-height: 40px;
                padding: 0 25px !important;
                &:hover {
                    background: #ecf5ff;
                }
            }
        }
        .el-submenu__title:focus,
        .el-submenu__title:hover,
        .cs-menu-item:focus,
        .cs-menu-item:hover {
            background: transparent;
            color: @main-color!important;
        }
        .el-submenu:hover {
            .cs-menu--inline {
                display: block !important;
            }
        }
        .logoItem {
            line-height: 80px;
            height: 80px;
        }
        .toggleItem {
            padding: 0 0 0 3em !important;
            line-height: 80px;
            height: 80px;
            a {
                font-size: 14px;
                color: #9b9b9b;
                display: block;
            }
            .el-submenu__title {
                padding: 0 !important;
                line-height: 80px;
                height: 80px;
                color: #9b9b9b;
            }
        }
        .toggleMenu {
            padding: 7px;
            .el-icon-menu {
                color: #fff;
            }
        }
    }
    @media only screen and (max-width: 1100px) {
        .el-col-1100-24 {
            width: 100%;
        }
    }
    @media only screen and (max-width: 768px) {
        .cs-menu--inline {
            position: static!important;
            box-shadow: none!important;
        }
        .bcb-header-page .toggleItem .el-submenu__title,
        .bcb-header-page .toggleItem{
            height: auto;
            line-height: 40px;
            .el-submenu__icon-arrow{
                position: absolute;
            }
        }
    }
</style>

