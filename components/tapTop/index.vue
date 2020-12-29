<template>
	<view class="flex bg-hover-dark border text-center bg-white " style="height:80rpx;justify-content: space-around; ">
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
			tabIndex : 0
		}
	},
	props : {
		tabArr : {
			type : Array,
			default : []
		}
	},
	methods : {
		selected(index){
			this.tabIndex = index;
			this.$emit('getTabIndex', index)
		}
	}
}
</script>

<style>
</style>
