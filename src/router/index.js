import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const home = () => import("@/views/home/home.vue")
const cart = () => import("@/views/cart/cart.vue")
const category = () => import("@/views/category/category.vue")
const profile = () => import("@/views/profile/profile.vue")
const search = () => import("@/views/search")
const searchIndex = () => import("@/views/search/search-index")
const searchList = () => import("@/views/search/search-list")

const routes = [
	{
		path: "/",
		redirect: "/home"
	}, {
		path: "/home",
		component: home,
		meta: { show: true }
	}, {
		path: "/cart",
		component: cart,
		meta: { show: true }
	}, {
		path: "/category",
		component: category,
		meta: { show: true }
	}, {
		path: "/profile",
		component: profile,
		meta: { show: true }
	}, {
		path: "/search",
		name: "search",
		component: search,
		children: [
			{
				path: "/",
				name: "index",
				component: searchIndex
			}, {
				path: "list",
				name: "list",
				component: searchList
			},
		],
		meta: { show: false }
	},
]

const router = new vueRouter({
    routes, 
    mode: 'history'
})

export default router