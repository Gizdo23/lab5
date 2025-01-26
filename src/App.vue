<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useBookStore } from './stores/bookstore'
import Navbar from './components/navbar.vue'
import Center from './components/center.vue'

const router = useRouter()
const route = useRoute()

const bookStore = useBookStore()
const books = ref([])

const handleNavigation = (routeName) => {
  router.push({ name: routeName })
}
onMounted(async () => {
  await bookStore.fetchBooks()
  books.value = bookStore.books
})
</script>

<template>
  <div id="app">
    <Navbar @navigate="handleNavigation" />
    <router-view :books="books"></router-view>
  </div>
</template>
