<template>
	<view>
		<view :style="{height:`${statusBarHeight}px`,paddingTop:`60rpx`}" :class="Theme"></view>
		<view :style="{height:`${statusBarHeight}px`}" class="fixed-top bg-white" :class="Theme"></view>
		<view class="flex px-1 position-fixed w-100 align-center bg-white" :class="Theme" :style="{height:`60rpx`,top:`${statusBarHeight}px`}" style="z-index: 99;">
			<my-icon iconName="icon-jiantou-copy" iconColor="text-dark" iconSize="44" @click.native="goBack"></my-icon>
			<view class="font-lg text-light-black pl-1" style="color:#000;">
				<slot name="title"></slot>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props : {
		Theme : {
			type : String,
			default : "bg-white"
		}
	},
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
