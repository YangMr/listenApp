<template>
	<view class="flex align-center py-2" style="height:250rpx; background-color: #a8b0c3;">
		<image src="../../static/Rebook/Rebook1.jpg" class=" mx-2 rounded" mode="aspectFill" style="width:250rpx; height:210rpx;"></image>
		<view class=" flex-2 mx-2">
			<view style="font-size: 44rpx;">{{name}}</view>
			<view class="mt-1 font">作者: {{author}}</view>
			<view class="flex align-center mt-2">
				<button type="default" class="flex-1 mx-1">分享</button>
				<button type="default" class="flex-1 mx-1">收藏</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props : {
		name : {
			type : String,
			default : ""
		},
		author : {
			type : String,
			default : ""
		}
	}
}
</script>

<style>
</style>
