<template>
  <div>NGƯỜI DÙNG</div>
</template>

<script>
import { useSidebarMenu } from '@/stores/sidebar-menu.js'
export default {
  setup() {
    useSidebarMenu().onSelectedKeys(['admin-user'])
  }
}
</script>
