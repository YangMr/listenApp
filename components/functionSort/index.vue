<template>
	<view class="flex justify-between text-light-muted font-md mx-3 my-4">
		<block v-for="(item,index) in functionSortArr" :key="index">
			<view class="flex  flex-column align-center justify-center" @click="jump(index)">
				<my-icon :iconName="item.iconId" :iconColor="item.iconColor" iconSize="65"></my-icon>
				<text class="mt-1">{{item.name}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	const pagesList = {
		"0" : "/pages/readList/readList",
		"1" : "/pages/listenNoval/listenNoval",
		"2" : "/pages/listenMusic/listenMusic",
		"3" : "/pages/listenKnowledge/listenKnowledge",
 	}
	export default {
		props: {
			functionSortArr: {
				type: Array,
				default: []
			}
		},
		methods: {
			jump(index) {
				uni.navigateTo({
					url: pagesList[index]
				})
			}
		}
	}
</script>

<style>
</style>
