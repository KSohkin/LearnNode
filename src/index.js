import './style.scss';
import { createApp } from 'vue';
import { createWebHashHistory, createWebHistory, createMemoryHistory, createRouter } from 'vue-router';


import App from './App.vue';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');