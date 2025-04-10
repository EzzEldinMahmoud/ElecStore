import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
type productItem = {
  id: number
  title: string
  price: number
  description: string
  image: string
  quantity: number
  rating: {
    rate: number
    count: number
  }
  category: string
}

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      productList: [] as productItem[],
      currentProduct: {} as productItem,
      currentPage: 1,
      itemsPerPage: 10,
      totalPages: 0,
    }
  },
  actions: {
    async getProducts() {
      return fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          this.productList = data.map((item: productItem) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            image: item.image,
            rating: item.rating,
            category: item.category,
            quantity: 1, // Initialize quantity to 1 for each product
          }))
          this.totalPages = Math.ceil(this.productList.length / this.itemsPerPage)
          this.currentPage = 1 // Reset current page to 1 after fetching products
        })
    },
    async getProductDetail(id: string) {
      return fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          const product = data as productItem
          console.log('Product Detail:', product)

          // Check if the product exists in the productList
          if (product) {
            this.currentProduct = {
              id: product.id,
              title: product.title,
              price: product.price,
              description: product.description,
              image: product.image,
              rating: product.rating,
              category: product.category,
              quantity: 1,
            }
            // Initialize quantity to 1 for the current product
          } else {
            throw new Error('Product not found')
          }
        })
    },
    setCurrentPage(page: number) {
      this.currentPage = page
    },
  },
  getters: {
    products: (state) =>
      [...state.productList].slice(
        state.currentPage * state.itemsPerPage - state.itemsPerPage,
        state.currentPage * state.itemsPerPage,
      ),
    getcurrentPage: (state) => state.currentPage,
    gettotalPages: (state) => Math.ceil(state.productList.length / state.itemsPerPage),
    getproductAll: (state) => state.productList,
    getcurrentProduct: (state) => state.currentProduct,
  },
})

//**
// get products from api and set to productList
//
//
//  */
