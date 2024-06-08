<template>
  <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
    <a-menu-item key="admin-user">
      <router-link :to="{ name: 'admin-user' }">
        <span> <UserOutlined class="me-1" /> Tài khoản </span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-role">
      <router-link :to="{ name: 'admin-role' }">
        <span> <CrownOutlined class="me-1" /> Vai trò </span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-setting">
      <router-link :to="{ name: 'admin-setting' }">
        <span> <SettingOutlined class="me-1" /> Cài đặt </span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { defineComponent } from 'vue'
import { useSidebarMenu } from '@/stores/sidebar-menu.js'
import { storeToRefs } from 'pinia'
import { UserOutlined, CrownOutlined, SettingOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    UserOutlined,
    CrownOutlined,
    SettingOutlined
  },
  setup() {
    const store = useSidebarMenu()
    const { selectedKeys, openKeys } = storeToRefs(store)

    return {
      selectedKeys,
      openKeys
    }
  }
})
</script>

<style>
.ant-menu-item-selected {
  background-color: #dde6ed !important;
  color: #000000 !important;
}
</style>
