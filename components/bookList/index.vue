<template>
	<view>
		<block v-for="(item,index) in bookResources" :key="index">
			<my-list-header><template v-slot:title> {{item.headerTitle}} </template></my-list-header>
			<block v-for="(mitem,mindex) in item.books" :key="mindex">
				<my-book-item :imgurl="mitem.imgurl" :name="mitem.name" :synopsis="mitem.synopsis"></my-book-item>
			</block>
		</block>
	</view>
</template>

<script>
//引入列表头部组件
import myListHeader from "../list-header"
//引入书籍列表子组件
import myBookItem from "../bookItem"
export default {
	props : {
		bookResources : {
			type : Array,
			default : []
		}
	},
	components: {
		myListHeader,
		myBookItem
	}
}
</script>

<style>
</style>
