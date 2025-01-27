import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
  }),
  actions: {
    async fetchBooks() {
      try {
        const response = await fetch('https://run.mocky.io/v3/3caa400d-5316-4b7c-8e82-23b871c0a420')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        this.books = data.books
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    },
  },
})
