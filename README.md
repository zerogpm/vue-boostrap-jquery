# bootstrap-vue-jquery

## Project setup
```
npm install

```

## Install Jquery and Boostrap4
```
npm i jquery

npm i bootstrap

```

## Change file in main.js

```
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
let popper = require('popper.js')
let Boostrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

```

### be sure to use $nextTick in mounted function

```

mounted () {
    this.$nextTick(() => {
      $('.hello').hide()
      $('.hello').fadeIn('slow')
    })
  }

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
