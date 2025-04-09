import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
type cartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
type refCartList = {
  value: cartItem[];
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
        existingItem.quantity += item.quantity;
      } else {
        this.cartList.push({ id: item.id, name: item.name, price: item.price, quantity: item.quantity ?? 1 });
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
    cartList: (state) => state.cartList,
    totalPrice: (state) => {
      return state.cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  } ,
  persist: true,

  })




