<template>
  <a-card title="Thông tin thành viên" style="width: 100%">
    <div class="row">
      <div class="col-12">
        <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
          <template #bodyCell="{ column, index, record }">
            <template v-if="column.key === 'stt'">
              <span>{{ index + 1 }}</span>
            </template>
            <template v-if="column.key === 'status'">
              <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
              <span v-else-if="record.status_id == 2" class="text-danger"
                ><strong>{{ record.status }}</strong></span
              >
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </a-card>
</template>

<script>
import { ref } from 'vue'
import { useSidebarMenu } from '@/stores/sidebar-menu.js'
export default {
  setup() {
    useSidebarMenu().onSelectedKeys(['admin-user'])

    const users = ref([])
    const columns = [
      {
        title: 'STT',
        key: 'stt',
        width: 58
      },
      {
        title: 'Ảnh đại diện',
        dataIndex: 'avatar',
        key: 'avatar',
        responsive: ['lg']
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 200,
        responsive: ['lg']
      },
      {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Dự án',
        dataIndex: 'projects',
        key: 'projects',
        width: 120
      },
      {
        title: 'Vị trí',
        dataIndex: 'positions',
        key: 'username',
        width: 100
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        width: 100
      },
      {
        title: '',
        dataIndex: 'tools',
        key: 'tools',
        fixed: 'right'
      }
    ]

    /*global axios*/
    const getUsers = () => {
      axios
        .get('http://localhost:8000/api/user')
        .then((response) => {
          users.value = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    getUsers()

    return {
      users,
      columns
    }
  }
}
</script>
