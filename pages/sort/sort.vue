<template>
	<view>
		<!-- 被通知到覆盖的盒子 -->
		<view :style="{height : `${statusBarHeight}px`}" class="cal"></view>
		
		<!-- 搜索框 -->
		<my-search class="cal"></my-search>
		
		<!-- 搜索框下面的白色间距 -->
		<view style="height:20rpx" class="cal"></view>
		
		<!-- 分类模块 -->
		<view style="background-color: #f0f3f8;" class="flex">
			<!-- 左侧 -->
			
			<scroll-view scroll-with-animation :scroll-top="scrollTop" :style="{height : `${calHeight}rpx`}" scroll-y="true" class="px-2 font text-light-black"   style="width:180rpx; ">
				<block v-for="(item,index) in leftMenus" :key="item.id">
					<view @tap="leftToRight(index)" :class="leftIndex == index ? 'selected pulse font-weight-bold' : '' " class="animated faster" style="height:150rpx; line-height: 150rpx;" >{{item.text}}</view>			
				</block>
			</scroll-view>
			
			<!-- 右侧 -->
			<scroll-view @scroll="rightToLeft" scroll-y="true" :scroll-into-view="rightIndex" scroll-with-animation :style="{height : `${calHeight}rpx`}">
				<block v-for="(item,index) in rightMenus" :key="item.id">   
					<view style="height:250; margin-bottom: 70rpx;" :id="`right${index}`">
						<view class="flex align-center justify-center" style="height:80rpx;">
							<text class="mr-1">{{item.text}}</text>
							<my-icon iconName="icon-youjiantou" iconSize="40"></my-icon>
						</view>
						<view class="flex bg-white flex-wrap" style="height:170rpx">
							<block v-for="(mitem,index) in item.content" :key="index">
								<view class="flex align-center justify-center" style="width: calc(100% / 3);">{{mitem}}</view>
							</block>
						</view>
					</view>
				</block>
				
				<!-- 占位 -->
				<view :style="{height: `${calHeight - 320}rpx`}"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
//搜索组件
import mySearch from "@/components/search"

import $U from "@/utils/unit.js"

import {sortResources as resources} from "@/api/sortResources"

export default {
	data(){
		return {
			statusBarHeight : this.$statusBarHeight,
			calHeight : 0,
			leftIndex : 0,
			rightIndex : `right${0}`,
			scrollTop : 0
		}
	},
	components:{
		mySearch
	},
	computed:{
		leftMenus(){
			return resources.map((item,index)=>{
				return {
					id : item.id,
					text : item.text
				}
			})
		},
		rightMenus(){
			return resources;
		}
	},
	methods: {

		leftToRight(index){
			this.leftIndex = index;
			this.rightIndex = `right${index}`
			
			this.scrollTop = index * 75
		},
		rightToLeft(e){
			console.log(e)
			let curScrollTop = e.detail.scrollTop,
				standardVal = $U.Topx(320),
				curIndex = Math.round(curScrollTop / standardVal);
				this.leftIndex = curIndex
				
				this.scrollTop = this.leftIndex * 75
		}
	},
	mounted(){
		$U.calSurplusHeight({
			pageID : this,
			pos : "cal",
			success : val => this.calHeight = val
		})
	}
}
</script>

<style>
	.selected {
		color: #f7646d;
	}
</style>
