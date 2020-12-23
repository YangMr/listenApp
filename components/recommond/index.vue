<template>
	<view>
		<my-list-header>
			<template v-slot:title> 猜你喜欢 </template>
			<template v-slot:tips> 更多推荐 </template>
		</my-list-header>
		<view class="flex align-center ">
			<block v-for="(item,index) in Rebooks" :key="index">
				<my-item :itemSrc="item.src" :itemName="item.name"></my-item>
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
