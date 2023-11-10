import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ToughState {
  cart: productsPropsWithReviews | productsPropsWithoutReviews
  recentlyViewed: productsPropsWithReviews
  addToCart: (params: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray) => void
  removeFromCart: (params: productsPropsWithReviewsNoArray | productsPropsWithoutReviewsNoArray) => void
  emptyCart: () => void
  addAllToCart: (params: any) => void
  addToRecentlyViewed: (params: productsPropsWithReviewsNoArray) => void
}

const useStore = create(
  persist<ToughState>(
  (set) => ({
  cart: [],
  recentlyViewed: [],
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
  },
  addToRecentlyViewed: (params) => {
    const newProduct = params
     set((state) => {
      if (state.recentlyViewed.some((item) => item.id === newProduct.id)) {
        return {
          ...state
        }
      } else {
        const newRecentlyViewed = [newProduct, ...state.recentlyViewed]
        return {
          ...state,
          recentlyViewed: newRecentlyViewed
        }
      }
    })
  }
}),
    {
      name: 'Tough-Cart'
    }
)
)

export default useStore
