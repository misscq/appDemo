<template>
	<view class="goodsAll flexSpace flexWrap">
		<goodsItem v-for="(item, index) in 8" :key="index"/>
	</view>
</template>

<script>
import goodsItem from './goodsItem.vue'
export default{
	props:{
		list:{
			type:Array,
			default: () => [1,2,3,4,5,6,7,8]
		}
	},
	components:{
		goodsItem
	},
	data(){
		return {
			
		}
	}
}
</script>

<style>
</style>
