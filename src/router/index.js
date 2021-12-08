import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/LandingPage.vue'

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
},

{
    path: '/about',
    name: 'About',
    component: () =>
        import('../views/About.vue')
},

{
    path: '/',
    name: 'login',
    component: () =>
        import('../auth/Login.vue'),
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("user") != null) {
            return next({
                name: 'Home'
            })
        }
        next()
    }
},
{
    path: '/register',
    name: 'register',
    component: () =>
        import('../auth/Register.vue'),
    beforeEnter: (to, from, next) => {
        let user = localStorage.getItem("user")
        if (user != null) {
            return next({
                name: 'Home'
            })
        }
        next()
    }
},
{
    path: '/show/:id',
    name: 'Modal',
    component: () => import('../components/Product/ShowProduct.vue'),
    props: true
},
{
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../components/Product/BasedEditProduct.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
        let user = localStorage.getItem("user")
        if (user == null) {
            return next({
                name: 'login'
            })
        }
        next()
    }
},
{
    path: '/product',
    name: 'Product',
    component: () =>
        import('../views/Product.vue')
},
{
    path: '/addproduct',
    name: 'addProduct',
    component: () =>
        import('../components/Product/AddProduct.vue'),
    beforeEnter: (to, from, next) => {
        let user = localStorage.getItem("user")
        if (user == null) {
            return next({
                name: 'login'
            })
        }
        next()
    }
},
{
    path: '/product/T-Shirt',
    name: 'T-Shirt',
    component: () =>
        import('../components/Product/ProductType/T-Shirt.vue')
},
{
    path: '/product/Shirt',
    name: 'Shirt',
    component: () =>
        import('../components/Product/ProductType/Shirt.vue')
},
{
    path: '/product/Sweater',
    name: 'Sweater',
    component: () =>
        import('../components/Product/ProductType/Sweater.vue')
},
{
    path: '/product/Women',
    name: 'Women',
    component: () =>
        import('../components/Product/GenderProduct/FemaleProduct.vue')
},
{
    path: '/product/Men',
    name: 'Men',
    component: () =>
        import('../components/Product/GenderProduct/MaleProduct.vue')
},
{
    path: '/product/Uniqlo',
    name: 'Uniqlo',
    component: () =>
        import('../components/Product/BrandProduct/Uniqlo.vue')
},
{
    path: '/product/HM',
    name: 'HM',
    component: () =>
        import('../components/Product/BrandProduct/HM.vue')
},
{
    path: '/product/Zara',
    name: 'Zara',
    component: () =>
        import('../components/Product/BrandProduct/Zara.vue')
},
{
    path: '/userlist',
    name: 'UserList',
    component: () =>
        import('../views/Users/Userlist.vue'),
    // beforeEnter: (to, from, next) => {
    //     let user = JSON.parse(localStorage.getItem("user"))
    //     if (user != null) {
    //         if (user.roleId.roleName == 'admin') {
    //             return next({
    //                 name: 'login'
    //             })
    //         }
    //     }else{
    //          next()
    //     }

       
    // }
},
{
    path: '/edituser',
    name: 'Editusert',
    component: () =>
        import('../views/Users/EditUser.vue'),
    beforeEnter: (to, from, next) => {
        let user = JSON.parse(localStorage.getItem("user"))
        if (user == null) {
            return next({
                name: 'login'
            })
        }
        next()
    }

},


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router