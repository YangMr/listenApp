<template>
	<view class="m-2">
		<swiper class="swiper" indicator-dots autoplay circular style="height:380rpx">
			<swiper-item v-for="(item,index) in imgArr" :key="index">
				<image :src="item.src" mode="aspectFill" class="w-100"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	props : {
		imgArr : {
			type : Array,
			default : []
		}
	}
}
</script>

<style>
</style>
