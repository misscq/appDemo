export default{
	namespaced:true,
	state:{
		seconds:120,//短信倒计时
		timer:null,//定时器
		isFlag:true,//判断到时器的状态  true => 能点击  false => 运行中
		
		couunt:'',//账号
	},
	mutations:{
		// 修改seconds -- 
		setSeconds(state){
			if(state.seconds>0){
				state.seconds--;
			}
		},
		//清除定时器，重新赋值
		clearTimer(state){
			clearInterval(state.timer)
			state.seconds = 120
			state.isFlag = true
		},
		
		//设置账号
		setCouunt(state,option){
			state.couunt = option.couunt
		}
	},
	actions:{
		//开始倒计时
		setSeds({ commit,state },option){
			if(state.isFlag){
				state.isFlag = false;
				//接收方法  在此执行
				option.that.$http(option.url,{ num:option.mobile })
				.then(res => {
					option.that.toast(res.msg)
				})
				state.timer = setInterval(() => {
					if(state.seconds>0){
						commit('setSeconds');
					}else{
						commit('clearTimer');
					}
				},1000)
			}else{
				option.that.toast("请勿重复点击")
			}
		}
	}
}