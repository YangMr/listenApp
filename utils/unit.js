/**
 * 获取屏幕宽度
 */
const getScreenWidth = () => uni.getSystemInfoSync().windowWidth;

/**
 * 获取屏幕高度
 */
const getScreenHeight = () => uni.getSystemInfoSync().windowHeight;


/**
 *  px 转 rpx
 */
const Torpx = num => 750 * num / getScreenWidth();

/**
 * rpx 转 px
 */
const Topx = num => num * getScreenWidth() / 750;



/**
 * 过滤器方法 时间戳转时间
 */
const formatTime = num => {
	if (!num && num !== 0) return '00:00';

	let divisionNum = Math.floor(num / 60),
		remainderNum = Math.floor(num % 60),
		zero = (x) => '0'.repeat(2 - String(x).length);
	return `${zero(divisionNum)+divisionNum}:${zero(remainderNum)+remainderNum}`
}




//  以下方法在生命周期mounted以及mounted之后调用,不支持nvue, 用pos -> className
 


/**
 * 获取各节点的高度信息
 * @param {Object} op 配置对象
 */
const getNodesHeightInfo = op => {
	let {
		pageID, 
		pos,
		success
	} = op || {}
	const heightArr = []; // 用于接收各节点高度
	const query = uni.createSelectorQuery().in(pageID);

	query.selectAll(`.${pos}`).boundingClientRect(data => {
		data.forEach(item => heightArr.push(item.height));
		success(heightArr)
	}).exec();
}

/**
 * 计算剩余高度
 * @param {Object} op 配置对象
 */
const calSurplusHeight = op => {
	let {
		pageID, // 页面标识
		pos, // 位置
		isRpx = true, // 返回值是否是rpx, 默认是rpx
		// isTabBarPage = false, // 是否是tabbar页面, 默认不是
		success // 成功回调
	} = op || {};

	// 计算具体实现
	const calRealization = totalHeight => {
		let SurHeight;
		
		// 计算剩余高度
		SurHeight = getScreenHeight() - totalHeight;

		//  判断是否转换为rpx形式(默认转换)
		SurHeight = isRpx ? Torpx(SurHeight) : SurHeight;
		return Math.floor(SurHeight); // 取整防止震动
	}



	// 获取高度信息的回调
	const infoFn = NodesHeightArr => {
		let usedTotalHeight = NodesHeightArr.reduce((pre, item) => pre + item);
		const SurHeightEND = calRealization(usedTotalHeight);
		success(SurHeightEND)
	}

	getNodesHeightInfo({
		pageID,
		pos,
		success: infoFn
	})
}



export default {
	Torpx, //px转rpx
	Topx, //rpx转px
	//获取屏幕高度
	getSystemHeight: (isRpx = true) => isRpx ? Torpx(getScreenHeight()) : getScreenHeight(),
	formatTime, //过滤器方法
	getNodesHeightInfo, //获取各节点高度信息
	calSurplusHeight //计算剩余高度
}