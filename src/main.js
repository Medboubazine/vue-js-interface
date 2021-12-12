import Vue from "vue"
import Application from "./Application.vue"
//vue router
import VueRouter from "./router"
//vue store
import VueStore from "./store"
//bootstraping
require("./bootstraping/app.js")
//
Vue.config.productionTip = false
//
new Vue({
    router: VueRouter,
    store: VueStore,
    render: (h) => h(Application),
}).$mount("#app")
