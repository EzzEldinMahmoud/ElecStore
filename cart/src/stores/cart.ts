
import { defineStore } from 'pinia'
type cartItem = {
  id: number;
  image:string;
  description: string;
  title: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state :()=>{
    return {
      cartList: [] as cartItem[],
    }
  }, actions:{
    addToCart(item: cartItem) {
      const existingItem = this.cartList.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartList.push({ id: item.id, title: item.title, price: item.price, quantity: item.quantity ?? 1, image: item.image, description: item.description });
      }
    },
    removeFromCart(itemId: number) {
      const itemIndex = this.cartList.findIndex(cartItem => cartItem.id === itemId);
      if (itemIndex !== -1 && this.cartList[itemIndex].quantity > 1) {
        this.cartList[itemIndex].quantity--;
      } else {
        this.cartList = [...this.cartList].filter(cartItem => cartItem.id !== itemId);
      }
    },
    clearCart() {
      this.cartList = [];
    },
    updateItemQuantity(itemId: number, quantity: number) {
      const item = this.cartList.find(cartItem => cartItem.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
  , getters: {
    getcart: (state) => state.cartList,
    gettotalPrice: (state) => {
      return state.cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    getitemCount: (state) => {
      return state.cartList.reduce((total, item) => total + item.quantity, 0);;
    },
  } ,
  persist: true,

  })




