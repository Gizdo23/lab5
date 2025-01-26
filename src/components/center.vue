<template>
  <div class="center">
    <h1>Welcome</h1>
    <h2>Book recomentadions:</h2>
    <ul>
      <li v-for="book in randomBooks" :key="book.title">
        <h3>{{ book.title }}</h3>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p>{{ book.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useBookStore } from '../stores/bookstore'
import { onMounted, computed } from 'vue'

export default {
  name: 'Center',

  setup() {
    const bookStore = useBookStore()

    onMounted(() => {
      bookStore.fetchBooks()
    })

    const randomBooks = computed(() => {
      const shuffled = bookStore.books.sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 3)
    })

    return {
      randomBooks,
    }
  },
}
</script>

<style scoped>
.center {
  background-color: #ffeb3b; /* Yellow background */
  width: 100%; /* Full width of the viewport */
  min-height: calc(100vh - 60px); /* Full height minus navbar */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Space out boxes evenly */
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box; /* Include padding in width/height calculation */
}
h1,
h2 {
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
