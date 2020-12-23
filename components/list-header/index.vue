<template>
	<view class="flex align-center justify-between p-2 my-1">
		<view class="font-lg">
			<slot name="title"></slot>
		</view>
		<view class="flex align-center">
			<view class="font text-light-black">
				<slot name="tips">查看全部</slot>
			</view>
			<my-icon iconName="icon-iconfonti" iconColor="text-light-black" style="font-size:44rpx"></my-icon>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
