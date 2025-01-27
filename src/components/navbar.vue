<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <a href="#">Magical bookstore</a>
      </div>
      <ul class="nav-links">
        <button @click="goToCenter">Home</button>
        <button @click="goToBookList">Book List</button>
        <button @click="goToSearchBooks">Search Books</button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToCenter() {
      this.$emit('navigate', 'Center')
    },
    goToBookList() {
      this.$emit('navigate', 'BookList')
    },
    goToSearchBooks() {
      this.$emit('navigate', 'SearchBooks')
    },
  },
}
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #00bcd4;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
