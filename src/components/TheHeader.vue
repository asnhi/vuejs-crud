<template>
  <div class="container-fluid">
    <div class="row text-white" style="background-color: #1e2022; padding: 1rem">
      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="toggleDrawer('Danh Mục')">X</span>
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
        <span @click="toggleDrawer('User')">X</span>
      </div>
    </div>
  </div>

  <a-drawer
    :visible="drawerVisible"
    @close="closeDrawer"
    :title="drawerTitle"
    :placement="drawerPlacement" 
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
  
</template>

<script setup>
import { ref } from 'vue';

const drawerVisible = ref(false);
const drawerTitle = ref('');
const drawerPlacement = ref('left'); // Khởi tạo placement mặc định là 'left'

const toggleDrawer = (title) => {
  drawerVisible.value = true;
  drawerTitle.value = title;

};

const closeDrawer = () => {
  drawerVisible.value = false;
};
</script>
