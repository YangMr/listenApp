<template>
	<view>
		<!-- 图书详情标题 -->
		<my-page-title Theme="geryTheme">
			<template v-slot:title>图书详情</template>
		</my-page-title>
		
		<!-- 图书信息 -->
		<my-book-info :name="bookInfo.name" :author="bookInfo.author"></my-book-info>
		
		<view  style="height: 1210rpx;">
			<!-- tab选项卡 -->
			<my-tab-top class="shadow "  :tabArr="tabArr" @getTabIndex="tabIndex"></my-tab-top>
			
			<scroll-view scroll-y v-if="selectedIndex == 0"  style="height : 900rpx;">
				<view>
					<view class="py-2 flex justify-center text-light-black">——简介——</view>
					<view class="px-2 font-lg" style="line-height: 80rpx;"> {{synopsis}} </view>
				</view>
			</scroll-view>
			
			<scroll-view scroll-y v-else style="height: 1129rpx;">
				<block v-for="item in chapterCatalog" :key="item.id">
					<view hover-class="bg-light" class="p-2 text-ellipsis border-bottom"> {{item.title}} </view>
				</block>
			</scroll-view>
			
		</view>
		
		
		
	</view>
</template>

<script>
// 引入顶部标题组件
import myPageTitle from "@/components/pageTitle"
//引入tab组件
import myTabTop from "@/components/tapTop"
//引入书籍信息组件
import myBookInfo from "@/components/bookInfo"

//引入书籍详情的数据
import bookDetailData from "@/api/test.js"

export default {
	data(){
		return {
			tabArr : [
				"目录",
				"详情"
			],
			selectedIndex : 0,
			bookInfo : {
				name : bookDetailData.name,
				author : bookDetailData.author
			},
			synopsis : bookDetailData.synopsis,
			chapterCatalog : bookDetailData.chapterCatalog
		}
	},
	components:{
		myPageTitle,
		myTabTop,
		myBookInfo
	},
	methods:{
		tabIndex(index){
			this.selectedIndex = index
			console.log(index)
		}
	}
}
</script>

<style>
.geryTheme {
		background-color: #a8b0c3;
	}
</style>
