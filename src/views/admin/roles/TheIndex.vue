<template>
  <div>VAI TRÒ</div>
</template>

<script>
import { useSidebarMenu } from '../../../stores/sidebar-menu.js'
export default {
  setup() {
    useSidebarMenu().onSelectedKeys(['admin-role'])
  }
}
</script>
