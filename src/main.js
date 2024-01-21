// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { TroisJSVuePlugin } from 'troisjs'
import * as SiIcons from 'oh-vue-icons/icons/si'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoOpen } from 'oh-vue-icons/icons'
import { IoDownload } from 'oh-vue-icons/icons'

const Si = Object.values({ ...SiIcons })
addIcons(...Si, IoOpen, IoDownload)

const app = createApp(App)

app.use(router)
app.use(TroisJSVuePlugin)
app.component('v-icon', OhVueIcon)

app.mount('#app')
