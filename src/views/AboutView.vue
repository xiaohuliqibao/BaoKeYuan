<template>
  <div class="about">
    <h1>This is an about page</h1>
    <n-button type="primary">
      Primary
    </n-button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
  import { NButton } from 'naive-ui'

  export default defineComponent({
    components: {
      NButton
    }
  })
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
