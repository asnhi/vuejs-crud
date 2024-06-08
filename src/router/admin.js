const admin = [
  {
    path: '/admin',
    component: () => import('@/layouts/TheAdmin.vue'),
    children: [
      {
        path: 'users',
        name: 'admin-user',
        component: () => import('@/views/admin/users/TheIndex.vue')
      },
      {
        path: 'roles',
        name: 'admin-role',
        component: () => import('@/views/admin/roles/TheIndex.vue')
      },
      {
        path: 'settings',
        name: 'admin-setting',
        component: () => import('@/views/admin/settings/TheIndex.vue')
      }
    ]
  }
]

export default admin
