import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/admin/auth/login.vue'
import Dashboard from '@/views/admin/dashboard.vue'

const initialRoutes=[
	{
		name:'Login',
		path:'/admin/login',
		component:Login,
		meta:{
			title:'Login',
			requireAuth:false
		}
	},
	{
    	name:'Dashboard',
		path:'/admin/dashboard',
		component:Dashboard,
		meta:
		{
			title:'Dashboard',
			requireAuth:false
		}	
	}
]

var routes=[]
routes=routes.concat(
	initialRoutes,
)

const router=new createRouter({
    history: createWebHistory(),
    routes
})


export default router