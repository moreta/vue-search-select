import { createApp } from "vue"
import "./assets/app.scss"
import "vue-search-select/dist/VueSearchSelect.css"
import App from "./App.vue"
import { router } from "./router"

const app = createApp(App)
app.use(router)
app.mount("#app")
