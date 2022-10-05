<template>
  <div>
    <input type="text" v-model="todoItem" @keypress.enter="addTodo">
    <button class="btn btn-warning" style="margin: 0 10px 7px 2px;"
     @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItem: '',

    }
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.todoItem);
      this.clearInput()
    },
    clearInput() {
      this.todoItem = '';
    }
  }

}
</script>

<style scoped>
input {
    border-radius: 8px;
    height: 50px;
    border: none;
    background: #f6f4f4;
    border-bottom: 2px solid #e5e5e5;
    width: 24%;
    font-size: 30px;
    color: #696969;
    padding: 10px 10px;
}
</style>