import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Home from '../pages/Home.vue';
import Boiling from '../pages/Boiling.vue';
import Main from '../pages/Main.vue';
import Talk from '../pages/Talk.vue';
import Activity from '../pages/Activity.vue';
import Brochure from '../pages/Brochure.vue';
import Details from '../pages/Details.vue';
import shopCar from '../pages/shopCar.vue';
import Login from '../pages/Login.vue';

const routes = [{
    path: '/main',
    name: 'main',
    component: Main,

    children: [{
        path: 'home',
        name: 'home',
        component: Home,
        //别名
        alias: 'h',
    }, {
        path: 'boiling',
        name: 'boiling',
        component: Boiling
    }, {
        path: 'talk',
        name: 'talk',
        component: Talk
    }, {
        path: 'activity',
        name: 'activity',
        component: Activity
    },
    {
        path: 'details/:id',
        name: 'details',
        component: Details
    },
    {
        path: 'shopcar/:id',
        name: 'shopcar',
        component: shopCar
    },
    ]
},
{
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/brochure',
    name: 'brochure',
    component: Brochure
},

// 默认重定向
{
    path: '/',
    redirect: '/main/home'
}
]
const router = new VueRouter({
    // hash
    mode: 'history',
    routes
})

// 路由守卫
// 进所有路由之前都要判断
// router.beforeEach((to, from, next) => {

//     window.console.log(to, from, next)
//     // 如果登录信息是正确的，或者你所在登录页，那就触发next放行，否则，回跳到login页面，重新获取登录信息
//     if (window.sessionStorage.getItem('token') === '123' || to.name === 'login') {
//         next()
//     } else {
//         // 如果不成功，回跳登录页
//         router.push({
//             name: 'login'
//         })
//     }

// })
export default router