<template>
	<view class="flex flex-column align-center position-relative bg-secondary" style="height:300rpx;flex:1;">
		<image :src="itemSrc" mode="widthFix" class="w-100" style="height:100%"></image>
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
