<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li v-for="book in books" :key="book.title">
        <h2>{{ book.title }}</h2>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p>{{ book.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useBookStore } from '../stores/bookstore'
import { computed } from 'vue'

export default {
  name: 'BookList',
  setup() {
    const bookStore = useBookStore()

    const books = computed(() => bookStore.books)

    return {
      books,
    }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
