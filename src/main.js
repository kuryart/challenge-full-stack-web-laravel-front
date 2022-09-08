import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { loadFonts } from './plugins/webfontloader'

const vuetify = createVuetify({
  components,
  directives,
});

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
