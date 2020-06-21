<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">⻚⾯不存在</h1>
    <h1 v-else>应⽤发⽣错误异常</h1>
    <p>{{ error }}</p>
    <nuxt-link to="/">⾸ ⻚</nuxt-link>
  </div>
</template>
<script lang="ts">
export default {
  props: ['error'],
  // 使用自定义布局
  layout: 'blank',
}
</script>
