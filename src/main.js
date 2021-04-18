import { createApp } from 'vue'

import router from './router'
import store from '@/state/store'

import App from '@/App.vue'
import AppLayout from '@/layouts/AppLayout.vue'

/**
 * Css ( +TailwindCss )
 */
import '@/assets/css/index.css'

/**
 * Plugins
 */
import KProgress from 'k-progress-v3';

/**
 * Mixins
 */
import titleMixin from '@/common/mixins/titleMixin'
 
/**
 * Vue Application 
 * Use Many Plugins
 */

createApp(App)
    .use(store)
    .use(router)
    .mixin(titleMixin)
    .component('k-progress', KProgress)
    .component('AppLayout', AppLayout)
    .mount('#app')