<template>
	<view class="container" v-show="isShow&&list.length!=0">
		<view class="itemBox" @tap="setHistoryMobile(index)" v-for="(item,index) in list" :key="index">
			<view class="fontColor" v-html="item"></view>
			<view style="width: 100rpx;height: 100%;text-align: right;" @tap.stop="removeItem(index)">x</view>
		</view>
	</view>
</template>

<script>

export default{
	props:{
		list:{
			default:[]
		},
		isShow:{
			default:false
		}
	},
	data(){
		return{
			
		}
	},
	methods:{
		//点击
		setHistoryMobile(index){
			this.$emit('tapItem',index)
		},
		
		//删除
		removeItem(index){
			this.$emit('removeItem',index)
		}
	}
}
</script>

<style scoped>
.container{
	width: 100%;
	max-height: 500rpx;
	overflow-y: auto;
	position: absolute;
	z-index: 998;
	left: 0;
	top:100rpx;
	background-color: #FFFFFF;
	border:1px solid #CCCCCC;
	border-bottom-right-radius: 20rpx;
	border-bottom-left-radius:20rpx;
	box-shadow: 0 6px 10px #ccc;
}
.itemBox{
	padding: 24rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.fontColor{
	color: #bbb;
}
</style>
