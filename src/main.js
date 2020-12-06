import Vue from 'nativescript-vue'
import App from './views/App'
import VueDevtools from 'nativescript-vue-devtools'
import Navigator from 'nativescript-vue-navigator'

import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue'
import ButtonPlugin from '@nativescript-community/ui-material-button/vue'
import TextFieldPlugin from '@nativescript-community/ui-material-textfield/vue'
import TextViewPlugin from '@nativescript-community/ui-material-textview/vue'

import RadListView from 'nativescript-ui-listview/vue'
import RadDataForm from 'nativescript-ui-dataform/vue'

import NSVueShadow from 'nativescript-vue-shadow-ns-7'


import store from './store'
import { routes } from './routes'

Vue.use(CardViewPlugin)
Vue.use(RadListView)
Vue.use(ButtonPlugin)
Vue.use(TextFieldPlugin)
Vue.use(TextViewPlugin)

Vue.use(RadDataForm)
Vue.use(NSVueShadow)


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}


Vue.use(Navigator, { routes } )

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  // render: h => h('frame', [h(App)])
  render: h => h(App),
}).$start()
