import musicResourecs from "./musicResourecs.js"
const music = musicResourecs.musicResourecs;
let audio = null, timeout =null;
export default {
	state: {
		playStatus : false,
		playCurrentIndex : 0,
		musicName : music[0].name,
		singerName : music[0].singer.name,
		synopsis : music[0].singer.synopsis,
		audioList : [],
		durationTime: 0, //音频总时长
		currentTime: 0 //音频播放时刻
	},
	getters: {
		getMusicName(state){
			return state.musicName
		},
		getSingerName(state){
			return state.singerName
		},
		getSynopsis(state){
			return state.synopsis
		},
		getAudio(state){
			return state.audioList
		}
		// getDurationTime(state){
		// 	return state.durationTime
		// },
		// getCurrentTime(state){
		// 	return state.currentTime;
		// }
	},
	mutations: {
		//事件监听的函数
		addAudioEvent(state) {
			//监听播放的函数
			audio.onPlay(() => {
				state.playStatus = true;
				state.durationTime = audio.duration
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
				state.currentTime = audio.currentTime
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
			state.synopsis = music[index].singer.synopsis;
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
		
		// 销毁
		destruction() {
			audio.offPlay();
			audio.offPause();
			audio.offStop();
			audio.offEnded();
			audio.offError()
		},
		
		//拖动方法
		audioSeek(state,data){
			audio.seek(data)
		},
		
		//改变播放下标的方法
		changeIndex(state,data){
			state.playCurrentIndex = data;
		},
		
		//改变当前时间(暂停时)
		changeCurrentTime(state,time){
			state.currentTime = time
		},
		
		//获取歌曲名称以及作者名称方法
		getAudioList(state,data){
			for(var i=0;i<data.length;i++){
				state.audioList.push({
					id : data[i].id,
					name : data[i].name,
					singerName : data[i].singer.name,
					playStatus : 0
				})
			}
		}
	},
	
	actions: {
		//初始化的方法
		init({commit}) {
			if (audio) {
				return;
			}
			commit("getAudioList",music)
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
		},
		//拖动播放的方法
		sliderToPlay({state,commit},{detail:{value:position}}){
			let time = position;
			commit('audioSeek',position)
			if(!state.playStatus){
				// commit('audioPlay')
				clearTimeout(timeout);
				timeout = setTimeout(()=>commit('changeCurrentTime',time),200)
			}
		},
		//列表歌曲切换
		changeMusic({commit,state},id){
			//获取对应歌曲的下标
			const index = music.findIndex((item,index)=>{
				return id == item.id
			});
			if (state.playCurrentIndex === index) {
				if (state.playStatus) {
					commit('audioPause')
				} else {
					commit('audioPlay')
				}
				return
			} else{
				commit('audioStop');
			}
			//改变歌曲播放的下标
			commit("changeIndex",index);
			//播放歌曲
			commit("audioPlay")
		}
	}
}

/*
	
	点击icon图标 - 触发一个方法 PlayOrPause
	
	PlayOrPause 定义在vuex里面 

*/