
export default [
    {
        'path': '/',
        'name': 'index',
        'component': () => import('@/pages/index.vue'),
        'alias': '/index'
    },
    {
        'path': '/txns',
        'name': 'txns',
        'component': () => import('@/pages/txns')
    },
    {
        'path': '/tx/:id',
        'name': 'tx',
        'component': () => import('@/pages/tx')
    },
    {
        'path': '/address/:id',
        'name': 'address',
        'component': () => import('@/pages/address')
    },
    {
        'path': '/blocks',
        'name': 'blocks',
        'component': () => import('@/pages/blocks')
    },
    {
        'path': '/block/:id',
        'name': 'block',
        'component': () => import('@/pages/block')
    },
    {
        'path': '/accounts',
        'name': 'accounts',
        'component': () => import('@/pages/accounts')
    },
    {
        'path': '/tokens',
        'name': 'tokens',
        'component': () => import('@/pages/tokens')
    },
    {
        'path': '/transfers',
        'name': 'transfers',
        'component': () => import('@/pages/transfers')
    },
    {
        'path': '/500',
        'component': () => import('@/pages/500.vue')
    },
    {
        'path': '*',
        'component': () => import('@/pages/404.vue')
    }
]
