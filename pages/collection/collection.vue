<template>
	<view class="collection">
		<!-- 通知栏占位符 -->
		<view :style="{height : `${$statusBarHeight}px`}" class="cal"></view>
		
		<!-- 搜索组件 -->
		<my-search class="cal"></my-search>
		
		<!-- 收藏内容 -->
		<view>
			
			<!-- tab选项卡组件 -->
			<my-tab class="cal" :tabArr="tabArr" :tabIndex="tabIndex" @getTabIndex="getTabIndex"></my-tab>
			
			<!-- swiper | 内容组件 -->
			<swiper :current="tabIndex" @change="swiperChangeIndex" :style="{height : `${calHeight}rpx`}">
				<!-- 我的收藏 -->
				<swiper-item>
					<scroll-view scroll-y="true" :style="{height : `${calHeight}rpx`}">
						<block v-for="(item,index) in collectionArr" :key="item.id">
							<my-collection-item @getID="getID" @showCancalCol="showCancalCol" :id="item.id" :imgurl="item.imgurl" :name="item.name" :synopsis="item.synopsis"></my-collection-item>
						</block>
					</scroll-view>
				</swiper-item>
				<!-- 收听历史 -->
				<swiper-item>
					
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 取消收藏 -->
		<my-pop-up type="bottom" ref="pop" @change="changeStatus">
			<view class="bg-white">
				<view style="height: 100rpx;line-height: 100rpx;" @tap="cancelCollection">
					<my-icon iconName="icon-xingxing" iconColor="text-danger" class="px-3"></my-icon>
					<text class="font">取消收藏</text>
				</view>
				<view class="bg-hover-light" style="height: 15rpx;"></view>
				<view class="text-center" style="height: 110rpx;line-height: 110rpx;" @tap="showCancalCol(false)">取消</view>
			</view>
		</my-pop-up>
		
	</view>
</template>

<script>
//计算高度
import $U from "@/utils/unit.js"	
// 搜索组件
import mySearch from "@/components/search"
//tab组件
import myTab from "@/components/tapTop"
//收藏列表组件
import myCollectionItem from "@/components/collectionItem"
//底部弹出框
import myPopUp from "@/components/uni-popup/uni-popup.vue"


//引入模拟的数据文件
import {books} from "@/api/book.js"

export default {
	data(){
		return {
			statusBarHeight : this.$statusBarHeight,
			tabArr : ["我的收藏","收听历史"],
			tabIndex : 0,
			calHeight : 0,
			collectionArr : [],
			flag : true,
			bool : false,
			collectionId : 0
		}
	},
	components: {
		mySearch,
		myTab,
		myCollectionItem,
		myPopUp
	},
	watch:{
		bool(val){
			val ? uni.hideTabBar({animation:true}) : uni.showTabBar({animation:true})
		}
	},
	methods: {
		getTabIndex(index){
			this.tabIndex = index;
		},
		swiperChangeIndex(e){
			this.tabIndex = e.detail.current
		},
	
		//初始化数据
		initData(){
			this.collectionArr = books
		},
		//获取子组件发送过来的id值
		getID(id){
			console.log(id)
			this.collectionId = id;
		},
		showCancalCol(val){
			val ? this.$refs.pop.open() : this.$refs.pop.close();
		},
		changeStatus(e){
			console.log(e)
			this.bool =e.show
		},
		// 根据id找index
		IDtoIndex(id){
			return this.collectionArr.findIndex(item => item.id === id)
		},
		cancelCollection(){
			const index= this.IDtoIndex(this.collectionId);
			this.collectionArr.splice(index,1);
			this.showCancalCol(false);
		}
		
	},
	onLoad(){
		this.initData();
		console.log(this.collectionArr)
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
</style>
