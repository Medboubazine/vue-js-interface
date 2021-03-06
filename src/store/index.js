import Vue from "vue"
import Vuex from "vuex"
import MainModules from "./modules/main"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        main: MainModules,
    },
})
