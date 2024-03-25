<script setup lang="ts">
import { h, ref } from 'vue'
import { NMenu, NIcon,NLayoutSider ,NButton} from 'naive-ui'
import  type { Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { Apps, GameController,MusicalNotes,ExitOutline,ReaderOutline } from '@vicons/ionicons5'

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
    label: () => h(RouterLink, { to: { path: '/index/musicplayer' } }, { default: () => '音乐馆' }),
    key: 'go-music-app',
    icon: renderIcon(MusicalNotes)
  },
  {
    label: () => h(RouterLink, { to: { path: '/index/markdown' } }, { default: () => 'MarkDown' }),
    key: 'go-markdown',
    icon: renderIcon(ReaderOutline)
  }
]

function logout(this: any) {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('userInfo')
  window.location.href = '/'
  // window.location.reload()
  this.$router.push('/login')
}
</script>

<template>
  <n-layout-sider
    class="sider-master"
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
    <n-button class="sign-out" quaternary @click="logout()">
      <n-icon class="sign-out-icon" size="25">
        <ExitOutline />
      </n-icon>
    </n-button>
    
  </n-layout-sider>
</template>

<style scoped>

.sider-master{
  display: flex;
  flex-direction: column;
  
  height: 100%;
  align-items: center;
  justify-content: between;
}

.sider-menu {
  margin-bottom: 100px;
}

.sign-out{
  margin: 0px 0px 10px -3px;
}

.sign-out .sign-out-icon{
  transform: rotateY(180deg);
}

::v-deep(.n-layout-sider-scroll-container)
{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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