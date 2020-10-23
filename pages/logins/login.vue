<template>
	<!--登录页-->
	<view class="container" @tap="isShow=false">
		
		<!--内容部分-->
		<view class="w48 marAuto contentBox flexContent">
			<view class="flex1">
				<view class="box01 flexLeft">
					<view class="imgBox01 flexColumn">
						<image src="../../static/images/logo.png" style="width: 100rpx;height: 100rpx;" />
					</view>
					<!-- <image class="marL24" src="../../static/images/logoText.png" style="width: 70rpx;height: 38rpx;" /> -->
				</view>
				
				<view class="box02">
					<view class="size40">欢迎登录您的账户!</view>
					<view class="size24">Welcome to your account!</view>
				</view>
				
				<view class="box02">
					<view @tap.stop="returnFun" class="itemInput borB1px flexLeft padTB24">
						<view class="gColor">账号(手机号)</view>
						<input @input="inputF" v-model="form.mobile" class="flex1 marL20 padL24"/>
						<selectMoald :isShow="isShow" :list="copyList" @removeItem="removeItem" @tapItem="tapItem"/>
					</view>
					<view class="itemInput borB1px flexLeft padTB24">
						<view class="gColor">密码</view>
						<input @focus="isShow=false" password v-model="form.password" class="flex1 marL20 padL24"/>
					</view>
					<view class="flexRight">
						<navigator hover-class="none" url="/pages/logins/forGet" class="size24 marT30 color6">忘记密码?</navigator>
					</view>
					
					<!--登录按钮-->
					<view class="borB1px marT30 padTB24">
						<view @tap="subTo" style="padding: 24rpx 0;text-align: center;border-radius: 100rpx;" class="size28 wColor mBgColor">立即登录</view>
					</view>
					
					<navigator hover-class="none" url="/pages/logins/reg" class="flexContent">
						<text class="size24 marT30 color6">还没有账号，去注册?</text>
					</navigator>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import selectMoald from '../../components/selectNum/index.vue'
import { mapState } from 'vuex'

export default{
	components:{
		selectMoald
	},
	data(){
		return{
			form:{
				mobile:'',//手机号
				password:'',//登录密码
			},
			isShow:false,//显示历史账号
			list:[],//历史账号
			copyList:[],//接收历史账号
		}
	},
	computed:{
		...mapState('logins',['couunt'])
	},
	onLoad() {
		let _list = uni.getStorageSync('mobileList')
		if(_list) this.list = _list;
		else this.list = [];
	},
	onShow() {
		console.log(this.couunt)
		this.getMobile()  //如果仓库中的账号为真 即给他赋值
	},
	watch:{
		"form.mobile"(newVal){
			this.setSelect(newVal)
		}
	},
	methods:{
		//立即登录
		subTo(){
			if (!this.form.mobile) return this.toast('请输入手机号');
			if (!this.form.password) return this.toast('请输入密码');
			this.$http('login/logindo',{ username: this.form.mobile, pwd: this.form.password })
			.then( ({ code,msg,data }) => {
				if (code === 1) {
					uni.setStorageSync('uid', data)
					let flag = true;  //判断是否是新账号 true => 新账号  false =>登录过的账号
					for (let i=0;i<this.list.length;i++) { if (this.list[i] == this.form.mobile) flag = false }
					if (flag) {
						uni.setStorage({
							key:'mobileList',
							data:[this.form.mobile,...this.list],
							success: () => {
								this.toast(msg)
								setTimeout( () => {
									uni.switchTab({url:"/pages/tabbar/self"})
								},1200)
							}
						})
					}else {
						this.toast(msg)
						setTimeout( () => {
							uni.switchTab({url:"/pages/tabbar/self"})
						},1200)
					}
				}else this.toast(msg)
			})
		},
		
		//如果vuex中mobile为真 直接赋值手机号
		getMobile(){
			if(this.couunt){
				this.form.mobile = this.couunt
			}
		},
		
		//输入时显示
		inputF(){
			this.isShow = true
		},
		
		//监听 手机号 执行下列代码
		setSelect(newVal){
			if(this.form.mobile.length>=11) this.isShow = false
			this.copyList = this.list
			let newList = this.list.map(item => {
				if(item.indexOf(newVal)!=-1){
					return item.replace(newVal,`<span style="color:#000">${newVal}</span>`)
				} 
			})
			let _newList = newList.filter(item => {
				if(item){
					return true
				}
			})
			this.copyList = _newList
		},
		
		//阻止冒泡
		returnFun(){
			return false
		},
		
		//点击单个 设置手机号
		tapItem(option){
			this.copyList[option] = this.copyList[option].replace('<span style="color:#000">','')
			this.copyList[option] = this.copyList[option].replace('</span>','')
			this.form.mobile = this.copyList[option]
			this.isShow = false
		},
		
		//删除这个
		removeItem(option){
			for(let i=0;i<this.list.length;i++){
				this.copyList[option] = this.copyList[option].replace('<span style="color:#000">','')
				this.copyList[option] = this.copyList[option].replace('</span>','')
				if(this.list[i] == this.copyList[option]){
					this.list.splice(i,1);
					this.copyList.splice(option,1);
					uni.setStorageSync('mobileList',this.list)
				}
			}
		}
	}
}
</script>

<style>
page{
	background-color: #FAFAFA;
}
.contentBox{
	min-height:90vh;
}
.box02{
	margin-top: 100rpx;
}
.borB1px{
	border-bottom: 1px solid #EFEEEE;
}
.itemInput{position: relative;}
.imgBox01{
	width: 100rpx;
	height: 100rpx;
	border-radius: 16rpx;
	box-shadow: 0 7px 10px #ccc;
}
/* #ifdef H5 */
input{
	background-color: #FAFAFA;
}
/* #endif */
</style>
