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
		<!-- 书籍列表 -->
		<my-book-list :bookResources="bookResources"></my-book-list>
	</view>
</template>

<script>
	//引入搜索组件
	import mySearch from "@/components/search"
	//引入轮播图组件
	import myRotationChart from "@/components/rotationChart"
	//引入菜单组件
	import myFunctionSort from "@/components/functionSort"
	//猜你喜欢组件
	import myRecommond from "@/components/recommond"
	//书籍列表组件
	import myBookList from "@/components/bookList"
	export default {
		data() {
			return {
				//通知栏的高度
				statusBarHeight: this.$statusBarHeight,
				//轮播图的数据
				swiperImages: [{
						src: "/static/swiperImages/swipertab1.png"
					},
					{
						src: "/static/swiperImages/swipertab2.png"
					},
					{
						src: "/static/swiperImages/swipertab3.png"
					},
					{
						src: "/static/swiperImages/swipertab4.png"
					},
					{
						src: "/static/swiperImages/swipertab5.png"
					}
				],
				//菜单的数据
				functionSortArr: [{
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
				Rebooks: [{
						id: 1,
						name: '西游记',
						src: '/static/Rebook/Rebook1.jpg'
					},
					{
						id: 2,
						name: '三国演义',
						src: '/static/Rebook/Rebook2.jpg'
					},
					{
						id: 3,
						name: '水浒传',
						src: '/static/Rebook/Rebook3.jpg'
					}
				],
				//书籍列表的数据
				bookResources: [
					{
						headerTitle: "人文",
						books: [{
								id: 1000,
								name: '《朝花夕拾》',
								synopsis: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集，收录鲁迅于1926年创作的10篇回忆性散文...',
								imgurl: '/static/indexListImg/indexListImg4.png'
							},
							{
								id: 1001,
								name: '《人间草木》',
								synopsis: '这本书其实是汪曾祺先生的优秀散文集。汪曾祺的文字大都十分有味道，他是一个十分懂得生活的人，在当代作家中...',
								imgurl: '/static/indexListImg/indexListImg5.png'
							},
							{
								id: 1002,
								name: '《行者无疆》',
								synopsis: '15年前余秋雨开始以长途旅行方式实地考察文化。他从国内走到国外，从中华文明走到了其他文明。这期间...',
								imgurl: '/static/indexListImg/indexListImg6.png'
							}
						]
					},
					{
						headerTitle: "历史",
						books: [{
								id: 1003,
								name: '《人类简史》',
								synopsis: '作者尤瓦尔·赫拉利为1976年生人，来自以色列。牛津大学历史学博士，现为耶路撒冷希伯来大学的历史系教授...',
								imgurl: '/static/indexListImg/indexListImg1.png'
							},
							{
								id: 1004,
								name: '《极简欧洲史》',
								synopsis: '本书作者约翰·赫斯特，为澳大利亚与英联邦权威的社会暨政治历史学家、欧洲史专家。现任墨尔本的拉筹伯大学...',
								imgurl: '/static/indexListImg/indexListImg2.png',
							},
							{
								id: 1005,
								name: '《全球通史》',
								synopsis: '作者斯塔夫里阿诺斯是美国加州大学的历史学教授，享誉世界的历史学家，曾获得过古根海姆奖、福特杰出教师奖...',
								imgurl: '/static/indexListImg/indexListImg3.png'
							}
						]
					},
					{
						headerTitle: "音乐",
						books: [{
								id: 1006,
								name: '《聆听音乐》',
								synopsis: '读完本书，你会发现你的脑袋里多了一栋建筑，它的名字叫做古典音乐史，这个建筑精巧，而又准确的...',
								imgurl: '/static/indexListImg/indexListImg7.png'
							},
							{
								id: 1007,
								name: '《心里的烦恼》',
								synopsis: '世界上最重要的迪伦研究专家为鲍勃迪伦的福音时期提供了一个深入的辩解,从1979年到1981年，这段迪伦...',
								imgurl: '/static/indexListImg/indexListImg8.png'
							},
							{
								id: 1008,
								name: '《梦到披头士》',
								synopsis: '滚石杂志资深评论家谢菲尔德对过去的几十年里披头士乐队造成的影响进行了深入地探索,这是有史以来关于...',
								imgurl: '/static/indexListImg/indexListImg9.png'
							}
						]
					},
					{
						headerTitle: "艺术",
						books: [{
								id: 1009,
								name: '《艺术的故事》',
								synopsis: '是有关艺术的书籍中最著名、最流行的著作之一。它概括地叙述了从最早的洞窟绘画到当今的实验艺术的发展历程...',
								imgurl: '/static/indexListImg/indexListImg10.png',
							},
							{
								id: 1010,
								name: '《詹森艺术史》',
								synopsis: '《詹森艺术史》是2013年世界图书出版公司出版的图书,《詹森艺术史》是一部在学界和社会大众中很有影响...',
								imgurl: '/static/indexListImg/indexListImg11.png'
							},
							{
								id: 1011,
								name: '《加德纳艺术通史》',
								synopsis: '《加德纳艺术通史》遵循加德纳的基本框架，以“全景化”的视角来阐释艺术发展的主旨...',
								imgurl: '/static/indexListImg/indexListImg12.png'
							}
						]
					}
				]
			}
		},
		components: {
			mySearch,
			myRotationChart,
			myFunctionSort,
			myRecommond,
			myBookList
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
