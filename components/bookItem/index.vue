<template>
	<view class="px-2 border-bottom flex align-center py-4 " >
		<image :src="imgurl" mode="aspectFill" class="rounded mx-2" style="width:250rpx; height:250rpx"></image>
		<view class="flex flex-column justify-between flex-1" style="height:250rpx">
			<text class="font-md  font-weight-bold">{{name}}</text>
			<text class="font text-light-black">{{synopsis}}</text>
		</view>
	</view>
</template>

<script>
export default {
	props : {
		imgurl : {
			type : String,
			default : ""
		},
		name : {
			type : String,
			default : ""
		},
		synopsis : {
			type : String,
			default : ""
		}
	}
}
</script>

<style>
</style>
