import musicResourecs from "./musicResourecs.js"
const music = musicResourecs.musicResourecs;
let audio = null;
export default {
	state: {
		playStatus : false,
		playCurrentIndex : 0,
		musicName : music[0].name,
		singerName : music[0].singer.name
	},
	getters: {
		getMusicName(state){
			return state.musicName
		},
		getSingerName(state){
			return state.singerName
		}
	},
	mutations: {
		//事件监听的函数
		addAudioEvent(state) {
			//监听播放的函数
			audio.onPlay(() => {
				state.playStatus = true;
				console.log("开始播放")
			}),
			//监听暂停的函数
			audio.onPause(() => {
				state.playStatus = false;
				console.log("暂停播放")
			}),
			//监听停止的函数
			audio.onStop(() => {
				state.playStatus = false;
				console.log("停止播放")
			}),
			//监听结束的函数		
			audio.onEnded(() => {
				state.playStatus = false;
				console.log("结束播放")
			}),
			//监听错误的函数			
			audio.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			}),
			//监听音频播放进度的函数
			audio.onTimeUpdate((res)=>{
				// console.log(res)
				// console.log("123")
			})
		},
		
		//播放方法
		audioPlay(state){
			let index = state.playCurrentIndex
			audio.src = music[index].src;
			state.musicName = music[index].name;
			state.singerName = music[index].singer.name;
			audio.play()
		},
		
		//暂停方法
		audioPause(){
			audio.pause();
		},
		
		//停止方法
		audioStop(){
			audio.stop();
		},
		
		//改变播放下标的方法
		changeIndex(state,data){
			state.playCurrentIndex = data;
		}
	},
	actions: {
		//初始化的方法
		init({commit}) {
			if (audio) {
				return;
			}
			audio = uni.createInnerAudioContext();
			commit("addAudioEvent")
		},
		//播放与暂停的方法
		PlayOrPause({state,commit}){
			if(!state.playStatus){
				commit("audioPlay")
			}else{
				commit("audioPause")
			}
		},
		//切歌方法
		PreOrNext({state,commit},type){
			commit("audioStop");
			let currentIndex = state.playCurrentIndex,
				lastIndex = music.length - 1;
			switch (type){
				case "prev" :
					currentIndex == 0 ? commit("changeIndex",lastIndex) : commit("changeIndex",currentIndex -1);
				break;
				case "next" :
					currentIndex == lastIndex ? commit("changeIndex",0) : commit("changeIndex", currentIndex + 1)
				break;
			}
			commit("audioPlay")
		}
	}
}

/*
	
	点击icon图标 - 触发一个方法 PlayOrPause
	
	PlayOrPause 定义在vuex里面 

*/