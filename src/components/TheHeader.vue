<template>
  <div class="container-fluid">
    <div class="row text-white" style="background-color: #27374D; padding: 1rem">
      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="toggleDrawer('Danh Mục', 'left')"> <MenuOutlined /></span>
      </div>

      <div
        class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start"
      >
        <img
          src="@/assets/logo.jpg"
          class="rounded-circle ms-3 me-3"
          alt="Logo"
          height="45"
          width="45"
        />
        <span class="d-none d-sm-flex">QUẢN LÝ NGƯỜI DÙNG</span>
      </div>

      <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
        <span>Admin</span>
      </div>

      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="toggleDrawer('User', 'right')"><UserSwitchOutlined /></span>
      </div>
    </div>
  </div>

  <a-drawer
    :visible="drawerVisible"
    @close="closeDrawer"
    :title="drawerTitle"
    :placement="drawerPlacement"
  >
    <TheSidebarMenu />
  </a-drawer>
</template>

<script>
import TheSidebarMenu from '@/components/TheSidebarMenu.vue'
import { MenuOutlined, UserSwitchOutlined } from '@ant-design/icons-vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    TheSidebarMenu,
    MenuOutlined,
    UserSwitchOutlined
  },

  setup() {
    const drawerVisible = ref(false)
    const drawerTitle = ref('')
    const drawerPlacement = ref('')

    const toggleDrawer = (title, placement) => {
      drawerTitle.value = title
      drawerPlacement.value = placement
      drawerVisible.value = true
    }

    const closeDrawer = () => {
      drawerVisible.value = false
    }

    return {
      drawerVisible,
      drawerTitle,
      drawerPlacement,
      toggleDrawer,
      closeDrawer
    }
  }
})
</script>
