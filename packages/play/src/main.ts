import { createApp } from 'vue'
import './style.css'
//@ts-ignore
import App from './App.vue'
import ZkpElement from 'zkp-element'
createApp(App).use(ZkpElement).mount('#app')
