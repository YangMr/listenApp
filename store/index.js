import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import audio from "./audio/audio.js"

const store = new Vuex.Store({
	modules:{
		audio
	}
})

export default store