<template>
	<view>
		<view class="headerBox pad24">
			<view :style="{ height: $sHeight() + 'px' }"></view>
			<view class="flexRight padTB24">
				<u-image @click="toSetUp" src="/static/images/setBtn.png" width="40rpx" height="40rpx" loading-icon="none"></u-image>
			</view>
			<view class="flexColumn padTB24">
				<u-image src="/static/images/header.png" width="120rpx" height="120rpx" loading-icon="none"></u-image>
				<view class="wColor flexColumn">
					<view class="size36 weight550">张暴君</view>
					<view class="size24">会员ID:4239</view>
				</view>
			</view>
		</view>
		
		<view class="padL24 padR24" style="margin-top: -24rpx;">
			<view class="wBgColor bor10 padL24 padR24">
				<view class="padTB24 gBorB1px">
					<u-section title="我的订单" sub-title="查看全部" :show-line="false"></u-section>
				</view>
				<view class="padTB24 flexAround">
					<view class="flexColumn" v-for="(item, index) in orderClass" :key="index">
						<view class="orderBox" :style="{ backgroundPosition: -(index * 70) + 'rpx 0' }"></view>
						<view class="gColor">{{ item }}</view>
					</view>
				</view>
			</view>
			
			<view class="marT24 wBgColor bor10">
				<view class="padTB24 gBorB1px">
					<u-section title="交易相关" sub-title="查看全部" line-color="var(--mainColor)" :right="false"></u-section>
				</view>
				<u-cell-item icon="map-fill" title="收货地址" hover-class="cell-hover-class"></u-cell-item>
				<u-cell-item icon="coupon-fill" title="提现地址" hover-class="cell-hover-class"></u-cell-item>
				<u-cell-item icon="scan" title="推荐二维码" hover-class="cell-hover-class"></u-cell-item>
				<u-cell-item icon="thumb-up-fill" title="我的推荐" hover-class="cell-hover-class"></u-cell-item>
				<u-cell-item icon="man-add-fill" title="子账户管理" hover-class="cell-hover-class"></u-cell-item>
				<u-cell-item icon="man-add" title="关于我们" hover-class="cell-hover-class"></u-cell-item>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderClass:['待支付', '待签收', '已完成', '退换货', '已收藏'],
				funcs:['收货地址', '提现地址', '推荐二维码', '我的推荐', '子账户管理', '关于我们']
			}
		},
		methods: {
			//跳转设置页面
			toSetUp(){
				uni.navigateTo({
					url:"/pages/myPages/setUp",
					animationType:"slide-in-bottom"
				})
			}
		}
	}
</script>

<style>
.headerBox{
	background-color: #393939;
}
.orderBox{
	width: 70rpx;
	height: 70rpx;
	background-image: url(../../static/images/myImgs.png);
	background-repeat: no-repeat;
	background-size: 350rpx 70rpx;
}
</style>
