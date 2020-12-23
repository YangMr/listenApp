<template>
	<view class="flex flex-column align-center flex-1 position-relative" style="height:300rpx;overflow:hidden">
		<image :src="itemSrc" mode="widthFix" style="height:100%; width: 250rpx;"></image>
		<text class="font my-1 text-light-black">{{itemName}}</text>
		<my-icon iconColor="text-light-white" iconName="icon-erji" class="position-absolute" iconSize="35" style=" left :45rpx ; top: 20rpx;"></my-icon>
	</view>
</template>

<script>
	export default {
		props: {
			itemSrc: {
				type: String,
				default: ""
			},
			itemName: {
				tyep: String,
				default: ""
			}
		}
	}
</script>

<style>
</style>
