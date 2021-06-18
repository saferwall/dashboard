import { createApp } from 'vue'

import router from './router'
import store from '@/state/store'

import App from '@/App.vue'
import AppLayout from '@/layouts/AppLayout.vue'

/**
 * Css ( +TailwindCss )
 */
import '@/assets/css/index.css'
import 'mosha-vue-toastify/dist/style.css'

/**
 * Plugins
 */
import KProgress from 'k-progress-v3';
import moshaToast from 'mosha-vue-toastify'

/**
 * Mixins
 */
import titleMixin from '@/common/mixins/titleMixin'

/**
 * Vue Application 
 * Use Many Plugins
 */

createApp(App)
    .mixin(titleMixin)
    .use(store)
    .use(router)
    .use(moshaToast)
    .component('k-progress', KProgress)
    .component('AppLayout', AppLayout)
    .mount('#app')