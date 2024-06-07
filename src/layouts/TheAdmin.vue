<template>
  <div>
    <TheHeader />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 d-none d-sm-flex">SLIDE BAR</div>
        <div class="col-sm-9 col-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
