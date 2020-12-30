<template>
	<view>
		<!-- 被通知到覆盖的盒子 -->
		<view :style="{height : `${statusBarHeight}px`}"></view>
		
		<!-- 搜索框 -->
		<my-search></my-search>
		
		<!-- 搜索框下面的白色间距 -->
		<view style="height:20rpx"></view>
		
		<!-- 分类模块 -->
		<view>
			<!-- 左侧 -->
			<scroll-view scroll-y="true" >
				<view></view>
			</scroll-view>
			
			<!-- 右侧 -->
			<scroll-view scroll-y="true" >
				<view></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
//搜索组件
import mySearch from "@/components/search"
export default {
	data(){
		return {
			statusBarHeight : this.$statusBarHeight
		}
	},
	components:{
		mySearch
	},
	methods: {
		
	}
}
</script>

<style>
</style>
