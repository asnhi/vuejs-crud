<template>
  <div>CÀI ĐẶT</div>
</template>

<script>
import { useSidebarMenu } from '../../../stores/sidebar-menu.js'
export default {
  setup() {
    useSidebarMenu().onSelectedKeys(['admin-setting'])
  }
}
</script>
