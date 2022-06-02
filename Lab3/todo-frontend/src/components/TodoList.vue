<template>
  <div>
    <ul class="list-group " style="margin: 30px 550px">
      <li class="list-group-item" style="" 
        v-for="(todo) in todoItems" :key="todo.todo">
        {{ todo.todo }}
        <button type="button" class="btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y" 
        style="margin: 0 10px 0 0; --bs-btn-padding-y: .30rem; --bs-btn-font-size: .75rem;"
         @click="deleteTodo(todo)">Del</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todoItems'],
  data() {
    return {
    }
  },
  methods: {
    deleteTodo(index) {
      this.$emit('deleteTodo', index)

    }
  }
  
}
</script>

<style scoped>

</style>