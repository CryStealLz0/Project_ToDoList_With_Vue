<template>
    <div class="container">
        <h1>To-Do</h1>
        <input-form @emit-submit="addList" />
        <list :listdata="list" @emit-delete="deleteList" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data: function () {
        return {};
    },
    computed: {
        ...mapGetters({
            list: "getToDo",
        }),
    },
    methods: {
        addList(datainput) {
            let newList = {
                title: datainput,
            };
            // this.list.push(newList);
            this.$store.dispatch("addList", newList);
        },
        deleteList(index) {
            this.list.splice(index, 1);
        },
    },
    mounted() {
        console.log("Component Mounted");
    },
};
</script>
