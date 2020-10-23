<template>
	<view>
		<!--头部-->
		<view class="status_bar"></view>
		<!-- <view class"></view> -->
		<view class="headerBox flexRight">
			<view @tap="isOpen = !isOpen" class="rightBtn mColor size28 bor10">{{ isOpen? '收起':'展开' }}</view>
		</view>
		<!--展开区域-->
		<view class="suanlImg" :style="{ height: isOpen?'1000rpx' : '0rpx' }">
			<u-image src="../../static/images/suanli.png" width="100%" height="1000rpx"></u-image>
		</view>
		
		<view class="pad24">
			<!--推荐项目-->
			<view>
				<u-section title="推荐项目" line-color="var(--mainColor)" :right="false"></u-section>
				<view class="marT24">
					<u-image src="/static/images/usdtZQ.png" mode="widthFix" width="100%" loading-icon="none"></u-image>
				</view>
			</view>
			
			<!--商城公告部分-->
			<view class="flexLeft padTB24 gBorB1px">
				<view class="flexColumn padR24" style="align-items: flex-start;justify-content: space-around;height: 130rpx;">
					<view class="weight550 size30">商城</view>
					<view class="gongaoLable mBgColor wColor size24 textCenter">公告</view>
				</view>
				<view class="flex1 gBorL1px padL24">
					<view class="flexLeft">
						<view class="leftLabel mColor mbor1px">通知</view>
						<view class="flex1 elipes">九州精品商城2.0.14版本隆重发布九州精品商城2.0.14版本隆重发布</view>
					</view>
					<view class="flexLeft marT10">
						<view class="leftLabel mColor mbor1px">公告</view>
						<view class="flex1 elipes">九州精品商城2.0.14版本隆重发布九州精品商城2.0.14版本隆重发布</view>
					</view>
				</view>
			</view>
			
			<!--图片橱窗-->
			<view class="flexSpace marT24">
				<view style="width: 44%;">
					<u-image src="/static/images/yubiBAO.png" width="100%" mode="widthFix" loading-icon="none"></u-image>
				</view>
				<view class="flex1 marL10">
					<view>
						<u-image src="/static/images/douYin.png" width="100%" mode="widthFix" loading-icon="none" border-radius="10rpx"></u-image>
					</view>
					<view>
						<u-image src="/static/images/ziXun.png" width="100%" mode="widthFix" loading-icon="none" border-radius="10rpx"></u-image>
					</view>
				</view>
			</view>
		</view>
		
		<!--商品分类和列表-->
		<goodsClass />
	</view>
</template>

<script>
	import goodsClass from '../../components/googsClass.vue'
	export default {
		components:{
			goodsClass
		},
		data() {
			return {
				isOpen:false,  //判断算力图片是否打开
				tabs:[
					{ name:'新品零食' },
					{ name:'生活用哦' },
					{ name:'泰国代购' },
					{ name:'运动品牌' },
					{ name:'新品零食' },
					{ name:'生活用哦' },
					{ name:'泰国代购' },
					{ name:'运动品牌' }
				],
				current:0,  //当前分类
			}
		},
		methods: {
			change(e){
				this.current = e
			}
		}
	}
</script>

<style>

.suanlImg{
	transition: height .3s ease;
	overflow: hidden;
}
.headerBox{
	background-color: #08070e;
	height: 50px;
	width: 100%;
	z-index: 998;
	padding: 0 24rpx;
	position: sticky;
	top: var(--status-bar-height);
	left: 0;
}

.rightBtn{
	padding: 6rpx 30rpx;
	border: 1px solid var(--mainColor);
}
.gongaoLable{
	padding: 4rpx 10rpx;
	border-radius: 6rpx;
}
.leftLabel{
	padding: 8rpx 16rpx;
	border-radius: 6rpx;
	font-size: 28rpx;
}
</style>
