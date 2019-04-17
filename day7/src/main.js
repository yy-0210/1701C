import App from './App';
import Vue from 'vue';
console.log(App);

console.log('index.js');


new Vue({
    el:'#app',
    template: '<App />',
    components: {
        App
    }
});