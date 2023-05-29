// v3
import { createApp } from 'vue'
// import Oruga from '@oruga-ui/oruga-next'

import './index.css'
import App from './App.vue'

const app = createApp(App)

// app.use(Oruga, {
//   modal: {
//     animation: 'o-modal-animation',
//     scroll: 'clip',
//   },
// })

app.mount('#app-ui-core')
