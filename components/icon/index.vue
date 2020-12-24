<template>
	<text class="iconfont" :class="[iconName,iconColor]" :style="{fontSize : `${iconSize}rpx`}" @tap="myClick"></text>
</template>

<script>
	export default {
		props : {
			iconName : {
				type : String,
				default : ""
			},
			iconColor : {
				type : String,
				default : "text-dark"
			},
			iconSize : {
				type : [Number,String],
				default : 45
			} 
		},
		methods:{
			myClick(){
				this.$emit("my-click")
			}
		}
	}
</script>