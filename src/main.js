import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
// import Navigator from 'nativescript-vue-navigator'

import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue';

Vue.use(CardViewPlugin);


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

import {store} from './store'
import { routes } from './routes'
// Vue.use(Navigator, { routes })

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  // render: h => h('frame', [h(App)])
  render: h => h(App),
}).$start()
