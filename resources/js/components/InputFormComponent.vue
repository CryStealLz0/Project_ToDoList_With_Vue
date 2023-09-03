<template>
    <div class="form">
        <input type="text" v-model="inputform" />
        <button-form @emit-click="reset" text="Reset" color="blue" />
        <button-form @emit-click="addList" text="Submit" />
    </div>
</template>

<script>
export default {
    emits: ["emit-submit"],
    data() {
        return {
            inputform: "",
        };
    },
    methods: {
        addList() {
            this.$emit("emit-submit", this.inputform);
            this.inputform = "";
        },
        reset() {
            this.inputform = "";
        },
    },
};
</script>
