<template>
  <footer>
    <button class="btn btn-warning" @click="removeAll">Clear All</button>
  </footer>
</template>

<script>
export default {
  methods: {
    removeAll() {
      this.$emit('removeAll')
    }
  }
}
</script>

<style scoped>
button {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px
}
</style>