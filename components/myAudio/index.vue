<template>
	<view class="mx-2 mb-2 rounded fixed-bottom " style="opacity: 0.9; height:160rpx; background-color:#d1ccc0;">
		<!-- 播放进度 -->
		<view class="flex align-center justify-center" style="color:#7a8388; height: 65rpx;">
			<view>00:00</view>
			<view style="width: 500rpx;">
				<slider block-size="14" activeColor="#e48267" backgroundColor="#eef2f3"/>
			</view>
			<view>00:00</view>
		</view>
		
		<!-- 音频简介以及歌曲切换 -->
		<view class="flex justify-between align-center mx-2" style="height:95rpx">
			<view class="flex flex-column ">
				<text>歌手-{{getMusicName}}</text>
				<text>歌曲-{{getSingerName}}</text>
			</view>
			<view class="flex align-center justify-center">
				<view class="animated" hover-class="pulse">
					<my-icon @my-click="PreOrNext('prev')" iconName="icon-shangyishou" iconColor="text-dark" iconSize="75"></my-icon>
				</view>
				<my-icon @my-click="PlayOrPause" :iconName="playStatus ? 'icon-bofang': 'icon-ziyuan'" iconColor="text-dark" iconSize="75" class="mx-2"></my-icon>
				<view class="animated" hover-class="pulse">
					<my-icon @my-click="PreOrNext('next')" iconName="icon-xiayishou" iconColor="text-dark" iconSize="75"></my-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"	
export default {
	data(){
		return {
		}
	},
	computed:{
		...mapState({
			playStatus : ({audio}) => audio.playStatus
		}),
		...mapGetters([
			"getMusicName",
			"getSingerName"
		])
	},
	methods: {
		...mapActions([
			"PlayOrPause",
			"init",
			"PreOrNext"
		])
		
		
	},
	mounted(){
		this.init()
	}
}
</script>

<style>
</style>

<!-- 事件函数   方法

监听       观察一个东西的一举一动

监听事件	  观察这个事件以及他所执行的方法的一举一动


监听事件函数  监听这个事件以及他所执行的方法的一举一动,都被我这个监听事件函数所处理

play		播放（H5端部分浏览器需在用户交互时进行）
pause		暂停
stop		停止
seek	position	跳转到指定位置，单位 s

当执行播放方法的时候

触发

监听播放事件的函数


 -->

