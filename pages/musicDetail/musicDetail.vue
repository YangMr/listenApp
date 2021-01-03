<template>
	<view>
		<!-- 通知栏高度 -->
		<view :style="{height : `${statusBarHeight}px`}" ></view>
		
		<!-- 音乐详情页标题 -->
		<my-page-title><template v-slot:title>音乐详情</template></my-page-title>
		
		<!-- 歌曲信息 -->
		<view class="flex flex-column align-center justify-center py-2">
			<view>
				<text class="font">歌曲:</text>
				<text class="font-weight-bold font-lg">{{getMusicName}}</text>
			</view>
			<view>
				<text class="font">歌手:</text>
				<text class="font-weight-bold font-lg">{{getSingerName}}</text>
			</view>
		</view>
		
		<!-- 歌曲图片 -->
		<view class="flex justify-center align-center" style="height : 420rpx">
			<image src="/static/music/music1.png" mode="widthFix" style="border-radius: 40rpx; box-shadow: 0 2rpx 6rpx 0;"></image>
		</view>
		
		<!-- 播放进度 -->
		<view class="flex align-center justify-center mt-1" style="color:#7a8388; height: 65rpx;">
			<view>{{getDurationTime | formatTime}}</view>
			<view style="width: 500rpx;">
				<slider block-size="14" activeColor="#e48267" :value="getCurrentTime"  :max="getDurationTime ? getDurationTime  : 100" @change="sliderToPlay" @changing="sliderToPlay" backgroundColor="#eef2f3"/>
			</view>
			<view>{{getCurrentTime | formatTime}}</view>
		</view>
		
		<!-- 歌曲播放图标 -->
		<view>
			<!-- 播放图标 -->
			<view class="flex align-center justify-center" style="padding-top: 40rpx;">
				<view class="mr-3">
					<my-icon iconName="icon-shangyixiang" iconSize="85"></my-icon>
				</view>
				<view class="mx-5">
					<my-icon iconName="icon-bofang1" iconSize="80"></my-icon>
				</view>
				<view class="ml-2">
					<my-icon iconName="icon-xiayixiang" iconSize="85"></my-icon>
				</view>
			</view>
			<!-- 其他相关图标 -->
			<view class="flex align-center justify-center font text-light-black" style="padding-top: 60rpx;">
				<view class="flex flex-column align-center">
					<my-icon iconName="icon-icon--" iconSize="60"></my-icon>
					<text class="pt-1">播放列表</text>
				</view>
				<view class="flex flex-column align-center" style="padding: 0 80rpx;">
					<my-icon iconName="icon-aixinfengxian" iconSize="60"></my-icon>
					<text class="pt-1">收藏</text>
				</view>
				<view class="flex flex-column align-center">
					<my-icon iconName="icon-yejianmoshi" iconSize="60"></my-icon>
					<text class="pt-1">夜间模式</text>
				</view>
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
// 标题组件
import myPageTitle from "@/components/pageTitle"

//引入工具库
import unit from "@/utils/unit.js"

// 使用辅助函数
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"

export default {
	data(){
		return {
			statusBarHeight : this.$statusBarHeight
		}
	},
	filters: {
		formatTime : unit.formatTime
	},
	computed:{
		...mapState({
			playStatus : ({audio}) => audio.playStatus,
			getDurationTime : ({audio}) => audio.durationTime,
			getCurrentTime : ({audio})=> audio.currentTime
		}),
		...mapGetters([
			"getMusicName",
			"getSingerName"
		])
	},
	components:{
		myPageTitle
	},
	methods: {
		...mapActions([
			"PlayOrPause",
			"init",
			"PreOrNext",
			"sliderToPlay"
		])
	}
}
</script>

<style>
</style>
