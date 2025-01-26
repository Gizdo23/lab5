import { createRouter, createWebHistory } from 'vue-router'
import BookList from '../components/booklist.vue'
import Center from '../components/center.vue'
import SearchBooks from '../components/booksearch.vue'
import notfoundpage from '@/views/notfoundpage.vue'

const routes = [
  {
    path: '/',
    name: 'Center',
    component: Center,
  },
  {
    path: '/booklist',
    name: 'BookList',
    component: BookList,
    props: (route) => ({ books: JSON.parse(route.query.books || '[]') }),
  },
  {
    path: '/searchbooks',
    name: 'SearchBooks',
    component: SearchBooks,
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfoundpage',
    component: notfoundpage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
