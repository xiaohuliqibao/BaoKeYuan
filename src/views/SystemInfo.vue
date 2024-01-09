<script setup lang="ts">
import { NLayout,NLayoutContent,NFlex, NButton,NCard } from 'naive-ui';
import IndexLayoutSider from '@/components/IndexLayoutSider.vue';
</script>

<template>
    <n-layout class="layout" has-sider > 
        <IndexLayoutSider/>
        <n-layout-content>
          <n-flex class="system-content" justify="space-between">
            <n-card size="medium" hoverable>
              卡片内容
            </n-card>
            <n-card title="内存信息" size="medium" hoverable>
              卡片内容
            </n-card>
            <n-card title="磁盘信息" size="medium" hoverable>
              卡片内容
            </n-card>
          </n-flex>
        </n-layout-content>
      </n-layout>
</template>

<style scoped>
.layout{
  width: 100vw;
  height: 100vh;
}
.system-content {
  align-content: center;
  margin: 3.5% 5% 0 5%;
}

.n-card {
  width: 31%;
}


</style>