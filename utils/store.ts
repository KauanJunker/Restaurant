import { ActionTypes, CartType } from "@/types/types"
import { create } from "zustand"


const INITAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
}

export const useCartStore = create<CartType & ActionTypes>((set, get)=> ({
  products:INITAL_STATE.products,
  totalItems:INITAL_STATE.totalItems,
  totalPrice:INITAL_STATE.totalPrice,
  addtoCart(item) {
      set((state)=>({
        products:[...state.products, item],
        totalItems: state.totalItems+item.quantity,
        totalPrice: state.totalPrice+item.price  
      }))
  },
  removeFromCart(item) {
      set((state)=>({
        products: state.products.filter(product=>product.id !== item.id),
        totalItems: state.totalItems-item.quantity,
        totalPrice: state.totalPrice-item.price
      }))
  },
}))