<template>
	<view class="flex flex-column flex-1 align-center position-relative w-100" style="height:300rpx">
		<image :src="itemSrc" mode="aspectFill" style="width:100%; height:100%"></image>
		<text class="font my-1 text-light-black">{{itemName}}</text>
		<my-icon iconColor="text-light-white" iconName="icon-erji" class="position-absolute" style="font-size:34rpx; left :44rpx ; top: 20rpx;"></my-icon>
	</view>
</template>

<script>
export default {
	props : {
		itemSrc : {
			type : String,
			default : ""
		},
		itemName : {
			tyep : String,
			default : ""
		}
	}
}
</script>

<style>
</style>
