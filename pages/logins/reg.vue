<template>
	<!--注册页-->
	<view class="container">
		
		<!--内容部分-->
		<view class="content w48 marAuto">
			<view class="box01 size40 marT30 weight650">注册生态健身馆新账号</view>
			<view class="box02 marT30">
				
				<!--手机号-->
				<view class="box02_01 flexLeft">
					<view class="flex3 size32 weight650">+86</view>
					<view class="flex7 pad24 borB1px">
						<input v-model="form.username" class="flex1" placeholder="请输入手机号" />
					</view>
				</view>
				
				<!--手机验证码-->
				<view class="box02_01 flexLeft">
					<view class="flex3 size32 weight650">手机验证码</view>
					<view class="flex7 pad24 borB1px flexLeft">
						<input v-model="form.code" class="flex1" placeholder="请输入验证码" />
						<view @tap="getCode" class="mColor">{{ isFlag?'获取验证码':seconds + 's后重新获取' }}</view>
					</view>
				</view>
				
				<!--密码-->
				<view class="box02_01 flexLeft">
					<view class="flex3 size32 weight650">登录密码</view>
					<view class="flex7 pad24 borB1px">
						<input v-model="form.pwd" password class="flex1" placeholder="请设置登录密码" />
					</view>
				</view>
				
				<!--交易密码-->
				<view class="box02_01 flexLeft">
					<view class="flex3 size32 weight650">交易密码</view>
					<view class="flex7 pad24 borB1px">
						<input v-model="form.pwd1" password class="flex1" placeholder="请输入交易密码" />
					</view>
				</view>
				
				<!--邀请码-->
				<view class="box02_01 flexLeft">
					<view class="flex3 size32 weight650">邀请码</view>
					<view class="flex7 pad24 borB1px flexLeft">
						<input v-model="form.tjuserid" class="flex1" placeholder="请输入推荐人手机号" />
						<!-- <view @tap="getqCodqe" class="iconfonts yColor">&#xe603;</view> -->
					</view>
				</view>
				
				<view class="box03 flexLeft size24 marT30 gColor">
					<view @tap="isSelect=!isSelect" class="selectBtn bor100" :class="isSelect?'mBgColor':'defaultClass'"></view>
					<view class="marL20">注册表示已阅读并接收版权声明和<text @tap="toYins" class="mColor">隐私保护条款</text></view>
				</view>
				
				<!--确认按钮-->
				<view @tap="subTo" class="wColor textCenter padTB24 bor100 marT30" :class="isSelect?'mBgColor':'gBgColor'">确定</view>
			</view>
		</view>
	</view>
</template>

<script>

import { mapState,mapActions,mapMutations } from 'vuex'

export default{
	data(){
		return{
			isSelect:true,//0=> 未勾选  1 => 已勾选
			form:{
				username:'',//用户名
				pwd:'',//密码
				pwd1:'',//交易密码
				code:'',//验证码
				tjuserid:'',//推荐人手机号
			}
		}
	},
	computed:{
		...mapState('logins',['seconds','isFlag'])
	},
	onLoad(option) {
		if (option.tjuserid) {
			this.form.jduserid = option.tjuserid
			this.form.tjuserid = option.tjuserid
		}
	},
	methods:{
		...mapActions('logins',['setSeds']),
		...mapMutations('logins',['setCouunt']),
		
		//获取验证码
		getCode(){
			if(this.form.username) {
				this.setSeds({ that:this,url:'login/set_phone',mobile:this.form.username });
			}
			else this.toast('请输入手机号')
		},
		
		//点击提交注册
		subTo(){
			if(!this.form.username) return this.toast('请输入手机号');
			if(!this.form.code) return this.toast('请输入验证码');
			if(!this.form.pwd) return this.toast('请输入密码');
			if(!this.form.pwd1) return this.toast('请输入交易密码');
			if(!this.form.tjuserid) return this.toast('请输入推荐人手机号');
			if(!this.isSelect) return this.toast('请勾选用户协议');
			console.log("开始执行")
			this.getTo('login/reg',this.form)
		},
		
		//请求接口
		getTo(url,datas){
			this.$http(url,this.form)
			.then( ({ code, msg }) => {
				console.log(msg)
				this.toast(msg)
				if (code === 1) {
					this.setCouunt({ couunt: this.form.username })
					setTimeout( () => {
						uni.navigateBack()
					},1200)
				}
			})
		},
		
		
		//跳转隐私协议
		toYins(){
			uni.navigateTo({
				url:"./yinsixy"
			})
		}
	}
}
</script>

<style>
page{
	background-color: #FAFAFA;
}
.flex3{
	flex:3
}
.flex7{
	flex:7
}
.borB1px{
	border-bottom: 1px solid #EFEEEE;
}
.selectBtn{
	width: 36rpx;
	height: 36rpx;
	border: 4px solid #EFEEEE;
}
.defaultClass{
	border: 1px solid var(--mainColor);
}
.gBgColor{
	background-color: #CCCCCC;
}
/* #ifdef H5 */
input{
	background-color: #FAFAFA;
}
/* #endif */
</style>
