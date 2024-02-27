<script setup lang="ts">
import { NLayout,NLayoutContent } from 'naive-ui';
import IndexLayoutSider from '@/components/IndexLayoutSider.vue';
import "@/assets/js/Aplayer.js";
import "@/assets/js/meting.js";
import "@/assets/css/Aplayer.css";
</script>

<template>
    <n-layout class="layout" has-sider >
        <IndexLayoutSider/>
        <n-layout-content class="container">
          <meting-js server="tencent" type="playlist" id="1237321347" ></meting-js>
        </n-layout-content>
    </n-layout>
</template>

<style scoped>

.layout{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

</style>