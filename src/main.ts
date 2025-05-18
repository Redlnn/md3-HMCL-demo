import 'mdui/mdui.css'
import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const main = () => {
  const app = createApp(App)

  app.use(router)

  app.mount('#app')
}

// import { getColorFromImage } from 'mdui/functions/getColorFromImage.js'
// import { setColorScheme } from 'mdui/functions/setColorScheme.js'
// const image = new Image()
// image.src = '/2017-01-19_22.25.40.png'
// const load = () => {
//   getColorFromImage(image)
//     .then((color) => setColorScheme(color))
//     .then(main)
// }
// image.onload = load

main()
