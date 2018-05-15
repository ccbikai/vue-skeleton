import Vue from 'vue'
import app from './index.vue'

setTimeout(function () {
  return new Vue({
    el: '#root',
    render: h => h(app)
  })
}, 1000 * 2)
