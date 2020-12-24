<template>
	<view>
		<!-- 页面标题组件 -->
		<my-page-title>
			<template v-slot:title>音乐</template>
		</my-page-title>
		<!-- 书籍列表组件 -->
		<my-page-book-list :bookListArray="bookListArray"></my-page-book-list>
		<!-- 加载更多组件 -->
		<uni-load-more :status="status"></uni-load-more>
	</view>
</template>

<script>
	//引入标题组件
	import myPageTitle from "@/components/pageTitle"
	//引入上拉加载组件
	import uniLoadMore from "@/components/uni-load-more/uni-load-more"
	//页面书籍列表组件
	import myPageBookList from "@/components/pageBookList"
	
	//模拟数据
	let ListResources = {
		isLoadMore: "上拉加载显示更多",
		books: [
			{
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
			},

			{
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
			},
			{
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
			},

			{
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
	};


	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				ListResources : ListResources,
				status : "loading",
				bookListArray : []
			}
		},
		components: {
			myPageTitle,
			uniLoadMore,
			myPageBookList
		},
		methods: {
			//初始化数据
			initLoad(){
				//假如说已经得到了请求的数据 ListResources
				setTimeout(()=>{
					this.bookListArray = this.ListResources.books;
					this.status = "more"
				},2000)
			},
			//加载更多
			loadMore(){
				let isLoadMore = this.ListResources.isLoadMore;
				switch(isLoadMore){
					case "正在加载中" :
						this.status = "loading"
						break;
					case "没有更多了" :
						this.status = "noMore"
						break;
					case "上拉加载显示更多":
						{
							this.status = "loading";
							setTimeout(()=>{
								this.bookListArray = [...this.bookListArray,...this.ListResources.books];
								this.status = "more"
							},1500)
						}
						break;
				}
			}
		},
		//当页面加载的时候
		onLoad(){
			this.initLoad()
		},
		//当上拉触底的时候
		onReachBottom(){
			this.loadMore()
		}
		
		/*
			1. 下载uni-load-more插件/组件
			2. 将下载好的uni-load-more这个组件放到项目的componetns文件夹里面
			3. 在需要使用上拉加载更多功能的页面里面引入 uni-load-more这个组件
			4. 在该页面对uni-load-more组件进行注册
			5. 注册好之后,在页面里面进行使用
			6. 接下来,定义默认的状态 
				more 			在底部显示的上拉加载显示更多  
			    loading 		在底部显示正在加载
				noMore			在底部显示没有更多了
			7. 业务逻辑
				7.1 当进入到列表页面的时候,将状态设置为loading
				7.2 当进入到列表页面,获取到数据之后,将状态设置为more
				7.3 当上拉加载到底部的时候,判断后台给返回的状态
					正在加载中: 将状态设置loading 
					没有更多了: 将状态设置为more
					上拉加载显示更多 : 先将状态设置为 loading,当数据请求到之后,如果没有数据了将状态设置为noMore,如果还有数据的话,将状态设置为more
		*/
		
	}
</script>

<style>
</style>
