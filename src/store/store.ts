import { create } from 'zustand'

interface ToughState {
  cart: productsPropsWithReviews | productsPropsWithoutReviews
  addToCart: (params: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray) => void
  removeFromCart: (params: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray) => void
  emptyCart: () => void
  addAllToCart: (params: any) => void
}

const useStore = create<ToughState>((set) => ({
  cart: [],
  addToCart: (params) => {
    const newProduct = params
    set((state) => {
      const newCart = [...state.cart, newProduct]
      return {
        ...state,
        cart: newCart
      }
    })
  },
  removeFromCart: (params) => {
    const newProduct = params
    set((state) => {
      const newCart = [...state.cart.filter((item) => (item.id !== newProduct.id))]
      return {
        ...state,
        cart: newCart
      }
    })
  },
  emptyCart: () => {
    set((state) => {
      return {
        ...state,
        cart: []
      }
    })
  },
  addAllToCart: (params) => {
    set((state) => {
      const newCart = [...state.cart, ...params]
      return {
        ...state,
        cart: newCart
      }
    })
  }
}))

export default useStore
