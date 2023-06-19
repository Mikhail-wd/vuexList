import {createRouter, createWebHashHistory} from 'vue-router';
import list from './components/list.vue';
import main from './components/main.vue';


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/',component: main},
        {path: '/list',component: list}
    ]
})