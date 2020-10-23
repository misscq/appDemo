<template>
	<!--商品分类-->
	<view>
		<view class="posiSticky w100v" :style="{ top: $sHeight() + height + 'px' }" style="left: 0;z-index: 998;">
			<u-tabs :list="tabs" :is-scroll="true" :current="current" @change="change" :bar-style="obj1" :active-item-style="obj2"></u-tabs>
		</view>
		<view class="padL24 padR24">
			<goodsList />
		</view>
	</view>
</template>

<script>
import goodsList from './goodsList.vue'
export default{
	components:{
		goodsList
	},
	props:{
		height:{
			type:Number,
			default: 50
		}
	},
	// computed:{
	// 	sHeight(){
	// 		return this.$sHeight()
	// 	}
	// },
	data(){
		return{
			obj1:{backgroundColor: '#e0c180'},
			obj2:{ color:'#000' },
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
	methods:{
		change(e){
			this.current = e
		}
	}
}
</script>

<style>
</style>
