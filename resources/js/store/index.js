import { createStore } from "vuex";

export default createStore({
    state: {
        list: [
            { title: "Menyapu Rumah", status: false },
            { title: "Mengepel Lantai", status: false },
            { title: "Melap Kaca", status: false },
        ],
    },
    getters: {
        getToDo(state) {
            return state.list;
        },
    },
    actions: {
        addList(context, payload) {
            context.commit("ADD_TODO", payload);
        },
    },
    mutations: {
        ADD_TODO(state, payload) {
            state.list.push(payload);
        },
    },
});
