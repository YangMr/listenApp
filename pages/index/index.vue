<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px` }" style="background-color: red;"></view>
 </view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight : this.$statusBarHeight,

			}
		},
		components:{
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>

