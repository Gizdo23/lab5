import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
  }),
  actions: {
    async fetchBooks() {
      try {
        const response = await fetch('http://localhost:8000/books')
        this.books = await response.json()
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    },
  },
})
