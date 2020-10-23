<template>
	<view>
		<view class="status_bar"></view>
		<!-- <view class="searchBox flexContent">
			<u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
		</view> -->
		<u-swiper :list="list" height="335rpx" autoplay circular></u-swiper>
		
		<!--金刚区-->
		<view class="flexAround padTB24">
			<view v-for="(item, index) in kingList" :key="index">
				<view class="imgBox" :style="{ backgroundPosition: -(index * 110) + 'rpx 0' }"></view>
				<view class="marT10">{{ item }}</view>
			</view>
		</view>
		
		<!--分类商品-->
		<goodsClass :height="0"/> 
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
				keyword: '',
				list: ['/static/images/shopBanner.png','/static/images/shopBanner.png'],
				kingList:['热销商品', '促销商品', '精品推荐', '新品上市']
			}
		},
		methods: {

		}
	}
</script>

<style>
	.status_bar {
		background-color: #343434;
	}

	.searchBox {
		background-color: #343434;
		height: 50px;
		width: 100%;
		padding: 0 24rpx;
	}
	.imgBox{
		width: 110rpx;
		height: 110rpx;
		background-image: url(../../static/images/shopImg.png);
		background-repeat: no-repeat;
		background-size: 440rpx 110rpx;
	}
</style>
