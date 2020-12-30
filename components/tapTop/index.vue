<template>
	<view class="flex bg-hover-dark border-bottom text-center bg-white " style="height:80rpx;justify-content: space-around; ">
		<block v-for="(item,index) in tabArr" :key="index">
			<view class="flex flex-column align-center justify-between" @tap="selected(index)">
				<view class="text-light-black pt-1 animated faster" :class="tabIndex === index ? 'font-weight-bold pulse':''"> {{item}} </view>
				<view class="rounded animated zoomIn faster" style="width: 80rpx; height: 8rpx; background-color: #f60; " v-if="tabIndex == index"></view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data(){
		return {
			
		}
	},
	props : {
		tabIndex : {
			type : [String,Number],
			default : ""
		},
		tabArr : {
			type : Array,
			default : []
		}
	},
	methods : {
		selected(index){
			//将子组件的数据发送给了父组件
			this.$emit('getTabIndex', index)
		}
	}
}
</script>

<style>
</style>
