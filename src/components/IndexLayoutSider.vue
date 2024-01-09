<script setup lang="ts">
import { h, ref } from 'vue'
import { NMenu, NIcon,NLayoutSider } from 'naive-ui'
import  type { Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { Apps, GameController,Construct } from '@vicons/ionicons5'

const collapsed = ref(true)

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: { path: '/index/system' } }, { default: () => '系统信息' }),
    key: 'go-system-info',
    icon: renderIcon(Apps)
  },
  {
    label: () => h(RouterLink, { to: { path: '/index/game' } }, { default: () => '游戏信息' }),
    key: 'go-game-info',
    icon: renderIcon(GameController)
  },
  {
    label: () => h(RouterLink, { to: { path: '/index/config' } }, { default: () => '游戏配置' }),
    key: 'go-game-info',
    icon: renderIcon(Construct)
  }
]
</script>

<template>
  <n-layout-sider
    bordered
    icon-size="24"
    collapse-mode="width"
    :collapsed-width="70"
    :width="180"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu class="sider-menu" :options="menuOptions" :collapsed-icon-size="22" style="margin-top: 30%;" />
  </n-layout-sider>
</template>

<style scoped>
.sider-menu {
  margin-bottom: 100px;
}

::v-deep(.n-menu-item){
  margin-top: 20px;
  font-size: 17px;
}

::v-deep(.n-menu-item-content__icon){
  margin-left: 7px;
}

::v-deep(.n-layout-toggle-button){
  top: 30%;
}
</style>