import * as Vuex from 'vuex';
import * as Vue from 'vue';


export default new Vuex.Store({
    actions: {
        srtArray(ctx) {
            if(localStorage.getItem("listArray") == null){
                return
            } else {
            const arrayStore = JSON.parse(localStorage.getItem("listArray"));            
            ctx.commit('updateArray', arrayStore)
            }
        }
    },
    mutations: {
        updateArray(state, data) {
            state.todos = data;
        }
    },
    state: {
        todos: []
    },
    getters: {
        getTodos(state) {
            return state.todos
        }
    },
})
