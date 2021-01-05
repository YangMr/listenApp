<template>
	<view style="height:100vh" :class="nightStatus?'nightTheme':''">
		<!-- 通知栏高度 -->
		<view :style="{height : `${statusBarHeight}px`}" ></view>
		
		<!-- 音乐详情页标题 -->
		<my-page-title :Theme="nightStatus?'nightTheme':''"><template v-slot:title>音乐详情</template></my-page-title>
		
		<!-- 歌曲信息 -->
		<view class="flex flex-column align-center justify-center pb-2" style="margin-top:-40rpx">
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
		<view class="flex justify-center align-center" style="height : 400rpx">
			<image src="/static/music/music1.png" mode="widthFix" style="border-radius: 40rpx; box-shadow: 0 2rpx 6rpx 0;"></image>
		</view>
		
		<!-- 播放进度 -->
		<view class="flex align-center justify-center " style="color:#7a8388; height: 65rpx; width: 600rpx; margin:10rpx auto;">
			<view>{{getDurationTime | formatTime}}</view>
			<view style="width: 500rpx;">
				<slider block-size="14" activeColor="#e48267" :value="getCurrentTime"  :max="getDurationTime ? getDurationTime  : 100" @change="sliderToPlay" @changing="sliderToPlay" backgroundColor="#eef2f3"/>
			</view>
			<view>{{getCurrentTime | formatTime}}</view>
		</view>
		
		<!-- 歌曲播放图标 -->
		<view>
			<!-- 播放图标 -->
			<view class="flex align-center justify-center" style="padding-top: 30rpx;">
				<view class="mr-3">
					<my-icon @my-click="PreOrNext('prev')" iconName="icon-shangyixiang" iconSize="85"></my-icon>
				</view>
				<view class="mx-5">
					<my-icon @my-click="PlayOrPause" :iconName="playStatus ? 'icon-zanting': 'icon-bofang1'" iconSize="80"></my-icon>
				</view>
				<view class="ml-2">
					<my-icon @my-click="PreOrNext('next')" iconName="icon-xiayixiang" iconSize="85"></my-icon>
				</view>
			</view>
			<!-- 其他相关图标 -->
			<view class="flex align-center justify-center font text-light-black" style="padding-top: 40rpx;">
				<view class="flex flex-column align-center" @tap="changeStatus('listStatus')">
					<my-icon :iconName="!listStatus ? 'icon-icon--' : 'icon-liebiao'" iconSize="60"></my-icon>
					<text class="pt-1">播放列表</text>
				</view>
				<view class="flex flex-column align-center" style="padding: 0 80rpx;" @tap="changeStatus('collectionStatus')">
					<my-icon :iconName="!collectionStatus ? 'icon-aixinfengxian' : 'icon-xihuan2'" iconSize="60"></my-icon>
					<text class="pt-1">收藏</text>
				</view>
				<view class="flex flex-column align-center" @tap="changeStatus('nightStatus')">
					<my-icon :iconName="!nightStatus ? 'icon-yejianmoshi' : 'icon-yueliang'" iconSize="60"></my-icon>
					<text class="pt-1">夜间模式</text>
				</view>
			</view>
		</view>
		
		<!-- 歌曲简介 -->
		<view :class="nightStatus?'nightTheme':''" class=" fixed-bottom shadow p-2 bg-white animated fadeInUp "  style="height: 260rpx;border-radius: 30rpx; z-index: 0;" v-if="!listStatus">
			<view class="flex justify-between">
				<view>
					<view>
						<text class="font">歌曲:</text>
						<text class="font-weight-bold">{{getMusicName}}</text>
					</view>
					<view>
						<text class="font">歌手:</text>
						<text class="font-weight-bold">{{getSingerName}}</text>
					</view>
				</view>
				<my-icon @my-click="singer" iconName="icon-jieshao" iconSize="65"></my-icon>
			</view>
			
			<view>
				<view class="font-md pt-2">歌手简介:</view>
				<view class="text-ellipsis w-100"> 
					{{getSynopsis}}
				</view>
			</view>
		</view>
	
		<!-- 歌曲列表 -->
		<view :class="nightStatus?'nightTheme':''" class=" fixed-bottom shadow p-2 bg-white animated fadeInUp"  style="height: 350rpx;border-radius: 30rpx;" v-else>
			<view class="font-weight-bold font-md" style="height: 50rpx;">列表选择</view>
			<scroll-view scroll-y style="height: 350rpx;">
				<block v-for="(item, index) in getAudio" :key="item.id">
					<view @tap="changeMusic(item.id)" class="flex align-center font px-2" style="height: 85rpx;" :hover-class="nightStatus?'nightTheme':''">
						<text class="flex-1 text-ellipsis">{{item.name}}</text>
						<text class="flex-1 text-ellipsis">{{item.singerName}}</text>
						<view class="flex-1 ml-3 flex align-center">
							<text class="mr-2">播放</text>
							<my-icon iconName="icon-bofangsanjiaoxing" iconSize="40"></my-icon>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!-- 歌曲简介弹出框 -->
		<my-pop-up ref="pop" :animation="true" type="center">
			<view class="px-2 shadow" style="width: 600rpx;height: 850rpx;border-radius: 40rpx;" :class="nightStatus?'nightTheme':'bg-white'">
				<text class="font">{{getSynopsis}}</text>
			</view>
		</my-pop-up>
	</view>
</template>

<script>
// 标题组件
import myPageTitle from "@/components/pageTitle"

//引入工具库
import unit from "@/utils/unit.js"

//引入弹出层组件
import myPopUp from "@/components/uni-popup/uni-popup.vue"

// 使用辅助函数
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"

export default {
	data(){
		return {
			listStatus : false,
			collectionStatus : false,
			nightStatus : false,
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
			"getSingerName",
			"getSynopsis",
			"getAudio"
		])
	},
	components:{
		myPageTitle,
		myPopUp
	},
	methods: {
		...mapActions([
			"PlayOrPause",
			"init",
			"PreOrNext",
			"sliderToPlay",
			"changeMusic"
		]),
		changeStatus(status){
			this[status] = !this[status];
		},
		singer(){
			this.$refs["pop"].open();
		}
	}
}
</script>

<style>
</style>
