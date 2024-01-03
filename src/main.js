import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';

import 'vuetify/styles'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

import ToegewezenRaportages from './components/ToegewezenRaportages.vue'
import UitgevoerdeRaportages from './components/UitgevoerdeRaportages.vue'
import KennisBase from './components/KennisBase.vue'
import InstellingenComponent from './components/InstellingenComponent.vue'
// import Inspecties from './components/inspectiesComponent.vue';
// import json from './json/db.json'; // Import your JSON data

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/toegewezen-raportages', component: ToegewezenRaportages },
    { path: '/uitgevoerde-raportages', component: UitgevoerdeRaportages },
    { path: '/Kennisbase', component: KennisBase },
    { path: '/instellingen', component: InstellingenComponent },
    // { path: '/data-display', name: 'Inspecties', component: Inspecties, props: { myJson: json } },
  ],
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
