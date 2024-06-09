<template>
  <TheHeader />

  <div class="container-fluid mt-3">
    <div class="row d-flex align-items-start">
      <div class="col-sm-3 d-none d-sm-flex">
        <a-list bordered style="width: 100%; background-color: #f0f5f9">
          <TheSidebarMenu />
          <!-- <template #header>
            <div style="font-weight: bold;">BẢNG ĐIỀU KHIỂN</div>
          </template> -->
        </a-list>
      </div>

      <div class="col-12 col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebarMenu from '@/components/TheSidebarMenu.vue'

export default {
  components: {
    TheHeader,
    TheSidebarMenu
  }
}
</script>
