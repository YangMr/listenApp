<template>
	<view>
		<my-list-header>
			<template v-slot:title> 猜你喜欢 </template>
			<template v-slot:tips> 更多推荐 </template>
		</my-list-header>
		<view class="flex align-center ">
			<block v-for="(item,index) in Rebooks" :key="index">
				<view class="flex flex-column align-center flex-1 position-relative" style="height:300rpx;">
					<image :src="item.src" mode="widthFix" class="w-100" style="height:100%"></image>
					<text class="font my-1 text-light-black">{{item.name}}</text>
					<my-icon iconColor="text-light-white" iconName="icon-erji" class="position-absolute" iconSize="35" style=" left :45rpx ; top: 20rpx;"></my-icon>
				</view>
				<!-- <my-item :itemSrc="item.src" :itemName="item.name"></my-item> -->
			</block>
		</view>
	</view>
</template>

<script>
//列表头部组件
import myListHeader from "../list-header"
//引入item组件
import myItem from "./item.vue"
export default {
	props : {
		Rebooks : {
			type : Array,
			default : []
		}
	},
	components:{
		myListHeader,
		myItem
	}
}
</script>

<style>
</style>
