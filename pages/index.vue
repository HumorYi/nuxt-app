<template>
  <div class="container">
    <!--
      <Logo />
    -->

    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="{ name: 'detail-id', params: { id: good.id } }">
          <span>{{ good.id }}</span>
          <span>{{ good.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
  },
  // 自定义当前页 head 标签内部的 标签内容
  head() {
    return {
      title: 'humor',
      // vue-meta利⽤ hid 确定要更新 meta
      meta: [
        { name: 'description', hid: 'description', content: 'set page meta' },
      ],
      link: [{ rel: 'favicon', href: 'favicon.ico' }],
    }
  },
  data() {
    return {
      goods: [],
    }
  },
  // 首屏直接在服务器端获取了，所以初次进入时不会发起请求，切换到其它页面再回来时会触发请求
  async asyncData({ $axios, error }) {
    const { ok, data } = await $axios.$get('/api/goods')
    if (ok) {
      // 此处返回的数据会和 data 中的数据合并
      return {
        goods: data,
      }
    }

    error({ statusCode: 400, message: '数据查询失败，请重试~' })
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
