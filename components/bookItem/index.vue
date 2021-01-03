<template>
	<view class="px-2 border-bottom flex align-center py-4 " @tap="goBookDetail">
		<image :src="imgurl" mode="aspectFill" class="rounded mx-2" style="width:250rpx; height:250rpx"></image>
		<view class="flex flex-column  flex-1" style="height:250rpx">
			<text class="font-md mb-2 font-weight-bold">{{name}}</text>
			<text class="font text-light-black Multi-row-truncation">{{synopsis}}</text>
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
	},
	methods : {
		goBookDetail(){
			uni.navigateTo({
				url : "../../pages/bookDetail/bookDetail"
			})
		}
	}
}
</script>

<style>

</style>
