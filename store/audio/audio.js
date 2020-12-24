import musicResourecs from "./musicResourecs.js"
const music = musicResourecs.musicResourecs
export default {
	state: {

	},
	getters: {

	},
	mutations: {
		addAudioEvent() {
			//监听播放的函数
			audio.onPlay(() => {

			}),
			//监听暂停的函数
			audio.onPause(() => {

			}),
			//监听停止的函数
			audio.onStop(() => {

			}),
			//监听结束的函数		
			audio.onEnded(() => {

			}),
			//监听错误的函数			
			audio.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			})
		}
	},
	actions: {
		init() {
			if (audio) {
				return;
			}
			const audio = uni.createInnerAudioContext();
		}
	}
}
