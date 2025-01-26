<template>
  <div>
    <h1>Book List</h1>
    <h2>Search Books</h2>
    <input v-model="searchQuery" placeholder="Search by title or author" />

    <ul>
      <li v-for="(book, index) in filteredBooks" :key="index" class="book">
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
        <p>{{ book.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchBooks',
  data() {
    return {
      searchQuery: '',
      books: [],
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(
        (book) =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },
  async created() {
    try {
      const response = await fetch('http://localhost:8000/books')
      this.books = await response.json()
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  },
}
</script>

<style scoped>
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
.book {
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
