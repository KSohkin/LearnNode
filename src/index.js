import './style.scss';
import { createApp } from 'vue';
import { createWebHashHistory, createWebHistory, createMemoryHistory, createRouter } from 'vue-router';


import App from './App.vue';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import Chuck from './pages/Chuck.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import CookieClicker from './pages/CookieClicker.vue';
import WebApis from './pages/WebApis.vue';
import Leaflet from './pages/Leaflet.vue';
import Chat from './pages/Chat.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/chuck', component: Chuck, name: 'Chuck Norris' },
  { path: '/rickandmorty', component: RickAndMorty, name: 'Rick And Morty' },
  { path: '/cookieclicker', component: CookieClicker, name: 'Cookie Clicker', meta: { container: false } },
  { path: '/webapis', component: WebApis, name: 'WebApis' },
  { path: '/leaflet', component: Leaflet, name: 'Leaflet', meta: { container: false } },
  { path: '/chat', component: Chat, name: 'Chat' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount('#app');