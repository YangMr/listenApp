<template>
	<view>
		<view :style="{height:`${statusBarHeight}px`,paddingTop:`60rpx`}"></view>
		<view :style="{height:`${statusBarHeight}px`}" class="fixed-top bg-white" ></view>
		<view class="flex px-1 position-fixed w-100 align-center bg-white" :style="{height:`60rpx`,top:`${statusBarHeight}px`}" style="z-index: 99;">
			<my-icon iconName="icon-jiantou-copy" iconColor="text-dark" iconSize="44" @click.native="goBack"></my-icon>
			<view class="font-lg text-light-black pl-1">
				<slot name="title"></slot>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return {
			statusBarHeight : this.$statusBarHeight
		}
	},
	methods:{
		goBack(){
			uni.navigateBack({
				delta:1
			})
		}
	}
}
</script>

<style>
</style>
