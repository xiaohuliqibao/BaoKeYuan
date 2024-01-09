<script setup lang="ts">
import { NLayout,NLayoutContent } from 'naive-ui';
import IndexLayoutSider from '@/components/IndexLayoutSider.vue';
</script>

<template>
    <n-layout class="layout" has-sider >
      <IndexLayoutSider/>
      <n-layout-content content-style="padding: 24px;">
        Game
      </n-layout-content>
    </n-layout>
</template>

<style scoped>
.layout{
  width: 100%;
}

</style>