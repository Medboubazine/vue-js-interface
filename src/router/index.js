import Vue from "vue"
import VueRouter from "vue-router"
import VueStore from "../store/index"
//Import routes
import MainRoutes from "./routes/main"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: MainRoutes,
})
/**
 * MIDDLEWARES
 */
router.beforeEach((to, from, next) => {
    //check route if has middlewares
    if (!to.meta.middlewares) {
        return next()
    }
    //get middlewares
    const middlewares = to.meta.middlewares
    //prepare arguments
    const args = { to, from, next, store: VueStore }
    //LOOP MIDDLEWARES (For multi middlewares routes)
    for (let index = 0; index < middlewares.length; index++) {
        //get middleware
        const middleware = middlewares[index]
        //call middleware
        middleware(args)
    }
    //all is done !!  next
    return next()
})
//EXPORT
export default router
