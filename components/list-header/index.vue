<template>
	<view class="flex justify-between p-2 my-1">
		<text class="font-lg">
			<slot name="title"></slot>
		</text>
		<view class="flex align-center justify-center">
			<text class="font text-light-black">
				<slot name="tips">查看全部</slot>
			</text>
			<my-icon iconName="icon-iconfonti" iconColor="text-light-black" style="font-size:44rpx"></my-icon>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
