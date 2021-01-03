<template>
	<view class="position-relative">
		<view class="px-2 border-bottom flex align-center py-4  " @tap="goBookDetail">
			<image :src="imgurl" mode="aspectFill" class="rounded mx-2" style="width:250rpx; height:250rpx"></image>
			<view class="flex flex-column  flex-1" style="height:250rpx" >
				<text class="font-md mb-2 font-weight-bold">{{name}}</text>
				<text class="font text-light-black Multi-row-truncation">{{synopsis}}</text>
			</view>
		</view>
		<my-icon @my-click="init"  iconName="icon-diandian" class="position-absolute" style="right : 20rpx; bottom:20rpx;"></my-icon>
	</view>
	
</template>

<script>
export default {
	props : {
		id : {
			type : [String,Number],
			default : ""
		},
		imgurl : {
			type : String,
			default : ""
		},
		name : {
			type : String,
			default : ""
		},
		synopsis : {
			type : String,
			default : ""
		}
	},
	methods : {
		goBookDetail(){
			uni.navigateTo({
				url : "../../pages/bookDetail/bookDetail"
			})
		},
		init(){
			this.throwID(this.id)
			this.showCancalCol(true)
		},
		//把当前点击三个点的数据id传递给父组件
		throwID(id){
			this.$emit('getID', id)
		},
		//点击控制弹出框的显示或者隐藏
		showCancalCol(bol){
			this.$emit('showCancalCol', bol)
		}
		
	}
}
</script>

<style>

</style>
