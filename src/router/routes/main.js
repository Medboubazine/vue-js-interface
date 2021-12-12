//Import middlewares
import ExampleMiddleware from "../middlewares/exampleMiddleware"
//Import views
import HomeView from "../../resources/views/Home.vue"
import AboutView from "../../resources/views/About.vue"

/**
 * Routes array
 */
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            middlewares: [ExampleMiddleware],
        },
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
]
export default routes
