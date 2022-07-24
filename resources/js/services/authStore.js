export default{
	state:{
		loading:false,
		token:localStorage.getItem('token') || '',
		user:{}
	},
	mutation:{
		auth_init(state){
			state.loading=true
		},

		auth_success(state,data){
			state.token=token
			state.loading=false

		}
	},
	actions:{
		login({commit},data){
			return new Promise((resolve,reject)=>{
				commit('auth_init')
				Api.post('/admin/login',data).then(resp=>{
					resolve(resp)
				}).catch(err=>{
					reject(err)
				})
			})
		}
	},
	getters:{
		isLoggedIn:state => !!state.token,
		user:state => state.username,
		getLoginFormLoadingResponse:state =>state.loading
	}
}