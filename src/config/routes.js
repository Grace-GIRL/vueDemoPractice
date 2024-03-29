import App from '../app'

export default[
    {
        path:'/',
        component:App,
        children:[
            {
                path:'/login',
                meta:{auth:false},
                component:resolve=>require(['../pages/login/'],resolve)
            },
            {
                path:'/signout',
                component:resolve=>require(['../pages/signout'],resolve)
            },
            {
                path: '/home', //个人主页
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]

    }
]