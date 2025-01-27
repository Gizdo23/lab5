<template>
  <div class="center">
    <h1>Welcome</h1>
    <h2>Book recommendations:</h2>
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
import { computed } from 'vue'

export default {
  name: 'Center',
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const randomBooks = computed(() => {
      const shuffled = props.books.sort(() => 0.5 - Math.random())
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
  background-color: #ffeb3b;
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  color: black;
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
