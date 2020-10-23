import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import logins from './modules/logins.js'
const store = new Vuex.Store({
	state:{
		statusHeight:0,//状态栏高度
	},
	mutations:{
		//修改状态栏高度
		setStatus(state,option){
			state.statusHeight = option;
		}
	},
	actions:{
		//获取状态栏高度
		getStatus({ commit }){
			commit('setStatus',uni.getSystemInfoSync().statusBarHeight)
		}
	},
	modules:{
		logins
	}
})

export default store