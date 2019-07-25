<template>
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['/package']"
          @click="handleClick"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="/package">快递管理</a-menu-item>
          <a-menu-item key="/booking">预约取件</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
        <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout-content></a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "home",
  methods: {
    handleClick (item) {
      this.$router.push(item.key)
    },
  }
};
</script>
