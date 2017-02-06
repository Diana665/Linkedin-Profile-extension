import Vue from 'vue'

import './app.css'
import template from './app.html'

import MenuList from '../MenuList'

const app = Vue.extend({
    components: { 'menu-list': MenuList },
    template
})

export default app
