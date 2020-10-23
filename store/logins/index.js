//这是注册模块的仓库
import Vue from 'vue'
export default{
	namespaced:true,
	state:{
		
	},
	
	mutations:{
		
	},
	
	actions:{
		//登录方法
		toLogin({ commit }, options){
			Vue.prototype.$http(options.url,options.form)
			.then( ({ code, data }) => {
				Vue.prototype.toast(data)
				if (code === 1) {
					setTimeout( () => {
						uni.switchTab({
							url:"/pages/tabbar/self"
						})
					},1200)
				}
			})
		}
	}
}
