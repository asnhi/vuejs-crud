const admin = [
  {
    path: '/admin',
    component: () => import('@/layouts/TheAdmin.vue'), // Đảm bảo đường dẫn chính xác và tên tệp chính xác
    children: [
      {
        path: 'user',
        name: 'admin-user',
        component: () => import('@/views/admin/user/TheIndex.vue') // Đảm bảo đường dẫn chính xác và tên tệp chính xác
      }
    ]
  }
]

export default admin
