<template>
	<view>
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<!-- 用户信息组件 -->
		<my-user-info></my-user-info>
		<!-- 用户列表组件 -->
		<my-user-list :userList="userList"></my-user-list>
	</view>
</template>

<script>
//引入用户信息组件
import myUserInfo from "@/components/mine/userInfo.vue"
//引入用户列表组件
import myUserList from "@/components/mine/userList.vue"
export default {
	data(){
		return {
			//通知栏的高度
			statusBarHeight : this.$statusBarHeight,
			//我的页面列表数据
			userList : [
				{
					id : 1,
					title : "签到",
					url : ""
				},
				{
					id : 2,
					title : "设置",
					url : ""
				},
				{
					id : 3,
					title : "意见反馈",
					url : ""
				},
				{
					id : 4,
					title : "切换账号",
					url : ""
				}
			]
		}
	},
	components: {
		myUserInfo,
		myUserList
	}
}
</script>

<style>

</style>


<!-- 兼容:

	安卓与ios的兼容问题
	
	安卓多手机型号间的兼容问题
	
	安卓系统版本所造成的兼容性问题 
-->