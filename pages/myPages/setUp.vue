<template>
	<view class="pad24">
		<view class="wBgColor padL24 padR24 bor10">
			<view class="padTB24 gBorB1px">
				<u-section title="基本信息" sub-title="查看全部" line-color="var(--mainColor)" :right="false"></u-section>
			</view>
			<view class="padTB24 gBorB1px">
				<u-section title="真实姓名" :bold="false" sub-title="张暴君" :show-line="false"></u-section>
			</view>
			<view class="padTB24 gBorB1px">
				<u-section title="用户昵称" :bold="false" sub-title="张暴君2" :show-line="false"></u-section>
			</view>
			<view class="padTB24 gBorB1px">
				<u-section title="用户电话" :bold="false" sub-title="13083768880" :show-line="false"></u-section>
			</view>
			<view class="padTB24 gBorB1px">
				<u-section title="收货地址" :bold="false" sub-title="查看" :show-line="false"></u-section>
			</view>
			
			<view class="padTB24 gBorB1px">
				<u-section title="提现地址" :bold="false" sub-title="查看" :show-line="false"></u-section>
			</view>
			<view class="padTB24">
				<u-section title="关于我们" :bold="false" sub-title="查看" :show-line="false"></u-section>
			</view>
		</view>
		
		<view @tap="exit" class="exitBtn">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//退出登录
			exit(){
				uni.navigateTo({
					url:"/pages/logins/login"
				})
			}
		}
	}
</script>

<style>
.exitBtn{
	width: calc(100% - 48rpx);
	margin: 0 auto;
	color: #FFFFFF;
	background-color: #393939;
	text-align: center;
	padding: 20rpx 0;
	border-radius: 10rpx;
	margin-top: 40rpx;
}
</style>
