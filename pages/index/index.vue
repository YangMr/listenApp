<template>
	<view class="content">
		<view :style="{height : `${statusBarHeight}px` }"></view>
		<!-- 搜索组件 -->
		<my-search></my-search>
		<!-- 轮播图组件 -->
		<my-rotation-chart :imgArr="swiperImages"></my-rotation-chart>
		<!-- 菜单组件 -->
		<my-function-sort :functionSortArr="functionSortArr"></my-function-sort>
		<!-- 猜你喜欢 -->
		<my-recommond :Rebooks="Rebooks"></my-recommond>
		
 </view>
</template>

<script>
	//引入搜索组件
	import mySearch from "@/components/search"
	//引入轮播图组件
	import myRotationChart from "@/components/rotationChart"
	//引入菜单组件
	import myFunctionSort from "@/components/functionSort"
	//猜你喜欢
	import myRecommond from "@/components/recommond"
	export default {
		data() {
			return {
				//通知栏的高度
				statusBarHeight : this.$statusBarHeight,
				//轮播图的数据
				swiperImages : [
					{
						src : "/static/swiperImages/swipertab1.png"
					},
					{
						src : "/static/swiperImages/swipertab2.png"
					},
					{
						src : "/static/swiperImages/swipertab3.png"
					},
					{
						src : "/static/swiperImages/swipertab4.png"
					},
					{
						src : "/static/swiperImages/swipertab5.png"
					}
				],
				//菜单的数据
				functionSortArr: [
					{
						iconId: 'icon-icon-test',
						iconColor: 'text-warning',
						name: '看榜单',
					},
					{
						iconId: 'icon-startRead',
						iconColor: 'text-hover-primary',
						name: '听小说'
					},
					{
						iconId: 'icon-icon09',
						iconColor: 'text-light-black',
						name: '听音乐'
					},
					{
						iconId: 'icon-zhishi',
						iconColor: 'text-success',
						name: '听知识'
					}
				],
				//猜你喜欢的数据
				Rebooks:[
					{
						id:1,
						name:'西游记',
						src:'/static/Rebook/Rebook1.jpg'
					},
					{
						id:2,
						name:'三国演义',
						src:'/static/Rebook/Rebook2.jpg'
					},
					{
						id:3,
						name:'水浒传',
						src:'/static/Rebook/Rebook3.jpg'
					}
				]
			}
		},
		components:{
			mySearch,
			myRotationChart,
			myFunctionSort,
			myRecommond
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>


<!-- 组件: 
	页面级别的组件
	
	功能性组件
	
组件化开发:  
	组件的开放性 
	组件的封闭性 
	
	组件的粒度:  
	
	粗粒度  细粒度
	一粒一粒  非常的散  
	高内聚 :    集中
	低耦合 :   组件的关联性依赖程度很低  
	
	可扩展性 : 在原来的基础之上我们可以对他再次进行改造
	 
	组件的可扩展性 : 在原组件的基础上 我们可以进行再次的改造
		组件的开放性:    接受外来的事物,我们称之为开发
			我们可以接受 外面传递进来的数据
			将组件内的数据传递给外面
		 -->
	
	<!-- 无可扩展性: 我们对封装的组件不能进行改造 -->
