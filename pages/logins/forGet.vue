<template>
	<!--忘记密码页-->
	<view class="container">
		<!--内容-->
		<view class="content marT30">
			
			<view class="inputBox padTB24 borB1px">
				<input v-model="form.phone" placeholder="请输入手机号"/>
			</view>
			
			<view class="inputBox padTB24 borB1px flexLeft">
				<input v-model="form.code" class="flex1" placeholder="请输入验证码"/>
				<view @tap="getCode" class="mColor">{{ isFlag?'获取验证码':seconds + 's后重新获取' }}</view>
			</view>
			
			<view class="inputBox padTB24 borB1px">
				<input v-model="form.pwd" :password="true" placeholder="请输入6~18位新密码"/>
			</view>
			
			<view class="inputBox padTB24">
				<input v-model="form.pwd1" :password="true" placeholder="请确认6~18位新密码"/>
			</view>
		</view>
		
		<view class="marT30"></view>
		<!--确认按钮-->
		<view @tap="subTo" class="mBgColor padTB24 wColor w48 marAuto bor10 textCenter">提交</view>
		
	</view>
</template>

<script>
import { mapState,mapActions,mapMutations } from 'vuex'

export default{
	data(){
		return{
			form:{
				phone:'',//手机号
				code:'', // 验证码
				pwd:'',//密码
				pwd1:''
			}
		}
	},
	computed:{
		...mapState('logins',['seconds','isFlag'])
	},
	methods:{
		...mapActions('logins',['setSeds']),
		...mapMutations('logins',['setCouunt']),
		
		//获取验证码
		getCode(){
			if(this.form.phone) {
				this.setSeds({ that:this,url:'login/set_phone',mobile:this.form.phone });
			}
			else this.toast('请输入手机号')
		},
		
		//提交
		subTo(){
			if(!this.form.phone) return this.toast('请输入手机号');
			if(!this.form.code) return this.toast('请输入验证码');
			if(!this.form.pwd) return this.toast('请输入新密码');
			if(this.form.pwd.length<6) return this.toast('请输入6-18位');
			if(!this.form.pwd1) return this.toast('请输入新密码');
			if(this.form.pwd1.length<6) return this.toast('请输入6-18位');
			this.getTo('login/forget',this.form)
		},
		
		//请求接口
		getTo(url,datas){
			this.$http(url,datas)
			.then( ({ code, msg }) => {
				console.log(msg)
				this.toast(msg)
				if (code === 1) {
					this.setCouunt(this.form.phone)
					setTimeout( () => {
						uni.navigateBack()
					},1200)
				}
			})
		}
	}
}
</script>

<style scoped>
page{
	background-color: #FAFAFA;
}
.content{
	background-color: #fff;
	padding:0 24rpx;
}
.borB1px{
	border-bottom: 1px solid #EFEEEE;
}
/* #ifdef H5 */
input{
	background-color: #Fff;
}
/* #endif */
</style>
