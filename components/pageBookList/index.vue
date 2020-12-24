<template>
	<view>
		<block v-for="(item,index) in bookListArray" :key="index">
			<my-book-item :imgurl="item.imgurl" :name="item.name" :synopsis="item.synopsis"></my-book-item>
		</block>
	</view>
</template>

<script>
//引入书籍列表组件
import myBookItem from "@/components/bookItem"
export default {
	props : {
		bookListArray : {
			type :Array,
			default : []
		}
	},
	components: {
		myBookItem
	}
}
</script>

<style>
</style>
