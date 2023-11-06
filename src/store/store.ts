import { create } from 'zustand'

interface ToughState {
  cart: productsPropsWithReviews | productsPropsWithoutReviews
  addToCart: (params: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray) => void
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
  }
}))

export default useStore
