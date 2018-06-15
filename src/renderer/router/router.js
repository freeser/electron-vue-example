
export default [
    {
        path: '/',
        redirect: '/tasks'
    },
    {
        path: '/',
        component: resolve => require(['@/components/layout/default.vue'], resolve),
        meta: { title: '模版' },
        children: [
            {
                path: '/tasks',
                component: resolve => require(['@/pages/tasks.vue'], resolve),
                meta: { title: '任务列表' }
            },
            {
                path: '/task/:id',
                component: resolve => require(['@/pages/task.vue'], resolve),
                meta: { title: '任务详情' }
            },
            {
                path: '/manage',
                component: resolve => require(['@/pages/manage.vue'], resolve),
                meta: { title: '管理设置界面' }
            }
        ]
    },
    {
        path: '/500',
        component: () => import('@/pages/500.vue')
    },
    {
        path: '*',
        component: () => import('@/pages/404.vue')
    }
]
