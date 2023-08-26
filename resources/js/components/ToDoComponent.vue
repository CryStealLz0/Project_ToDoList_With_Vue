<template>
    <div class="container">
        <h1 class="title">To-Do</h1>
        <form class="form" @submit.prevent="addList">
            <input type="text" v-model="input" />
            <button type="submit">Submit</button>
        </form>
        <ul class="list">
            <li v-for="(item, index) in list" :key="index">
                <div>
                    <input
                        v-if="!item.checked"
                        type="text"
                        v-model="item.title"
                        @change="onUpdateTitle"
                    />
                    <span v-else style="text-decoration: line-through">{{
                        item.title
                    }}</span>
                </div>
                <input
                    type="checkbox"
                    v-model="item.checked"
                    @change="onUpdateTitle"
                />
                <span class="delete" @click="deleteList(index)">Hapus</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            list: [],
            input: "",
        };
    },
    methods: {
        addList() {
            let newList = {
                title: this.input,
                checked: false,
            };
            this.list.push(newList);
            localStorage.setItem("todoList", JSON.stringify(this.list));
            this.input = "";
        },
        onUpdateTitle() {
            localStorage.setItem("todoList", JSON.stringify(this.list));
        },
        deleteList(index) {
            const confirmDelete = confirm("apakah anda yakin ingin mendelete");
            if (confirmDelete) {
                this.list.splice(index, 1);
                localStorage.setItem("todoList", JSON.stringify(this.list));
            } else {
                alert("Kintil");
            }
        },
    },
    watch: {},
    mounted() {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        console.log(todoList);

        if (!todoList) {
            localStorage.setItem(
                "todoList",
                JSON.stringify([{ title: "mantul", checked: true }])
            );
        }

        this.list = todoList;

        console.log("Component mounted.");
    },
};
</script>
