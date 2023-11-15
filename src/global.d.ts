export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

declare global {
  interface Database {
  public: {
    Tables: {
      address: {
        Row: {
          apartment: string | null
          city: string
          country: string
          default: boolean
          id: number
          state_province: string
          street: string
          user_id: string
          zip_code: string
        }
        Insert: {
          apartment?: string | null
          city: string
          country: string
          default: boolean
          id?: number
          state_province: string
          street: string
          user_id?: string
          zip_code: string
        }
        Update: {
          apartment?: string | null
          city?: string
          country?: string
          default?: boolean
          id?: number
          state_province?: string
          street?: string
          user_id?: string
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: 'address_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          }
        ]
      }
      orders: {
        Row: {
          created_at: string
          id: number
          order_id: string | null
          products_id: number[] | null
          total: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          order_id?: string | null
          products_id?: number[] | null
          total?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          order_id?: string | null
          products_id?: number[] | null
          total?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          collection: string | null
          created_at: string
          description: string
          equipment_type: string
          id: number
          image: string
          name: string
          new: boolean
          price: number
          sale: number | null
          sports: string[]
          stripe_id: string
        }
        Insert: {
          collection?: string | null
          created_at?: string
          description: string
          equipment_type: string
          id?: number
          image: string
          name: string
          new?: boolean
          price: number
          sale?: number | null
          sports: string[]
          stripe_id: string
        }
        Update: {
          collection?: string | null
          created_at?: string
          description?: string
          equipment_type?: string
          id?: number
          image?: string
          name?: string
          new?: boolean
          price?: number
          sale?: number | null
          sports?: string[]
          stripe_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          email: string | null
          email_sign_up: boolean
          future_deals_signup: boolean
          id: string
          name: string | null
          nasm: boolean
          new_products_alerts_signup: boolean
          password: string
          phone: string | null
          provider: string
        }
        Insert: {
          email?: string | null
          email_sign_up?: boolean
          future_deals_signup?: boolean
          id: string
          name?: string | null
          nasm?: boolean
          new_products_alerts_signup?: boolean
          password?: string
          phone?: string | null
          provider?: string
        }
        Update: {
          email?: string | null
          email_sign_up?: boolean
          future_deals_signup?: boolean
          id?: string
          name?: string | null
          nasm?: boolean
          new_products_alerts_signup?: boolean
          password?: string
          phone?: string | null
          provider?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      reviews: {
        Row: {
          created_at: string
          id: number
          product_id: number
          score: number
          text: string
          user: string
        }
        Insert: {
          created_at?: string
          id?: number
          product_id: number
          score: number
          text: string
          user: string
        }
        Update: {
          created_at?: string
          id?: number
          product_id?: number
          score?: number
          text?: string
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: 'reviews_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          }
        ]
      }
      wishlist: {
        Row: {
          created_at: string
          id: number
          product_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          product_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          product_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'wishlist_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'wishlist_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          }
        ]
      }
      wrappers_fdw_stats: {
        Row: {
          bytes_in: number | null
          bytes_out: number | null
          create_times: number | null
          created_at: string
          fdw_name: string
          metadata: Json | null
          rows_in: number | null
          rows_out: number | null
          updated_at: string
        }
        Insert: {
          bytes_in?: number | null
          bytes_out?: number | null
          create_times?: number | null
          created_at?: string
          fdw_name: string
          metadata?: Json | null
          rows_in?: number | null
          rows_out?: number | null
          updated_at?: string
        }
        Update: {
          bytes_in?: number | null
          bytes_out?: number | null
          create_times?: number | null
          created_at?: string
          fdw_name?: string
          metadata?: Json | null
          rows_in?: number | null
          rows_out?: number | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      airtable_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      airtable_fdw_meta: {
        Args: Record<PropertyKey, never>
        Returns: Array<{
          name: string
          version: string
          author: string
          website: string
        }>
      }
      airtable_fdw_validator: {
        Args: {
          options: string[]
          catalog: unknown
        }
        Returns: undefined
      }
      big_query_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      big_query_fdw_meta: {
        Args: Record<PropertyKey, never>
        Returns: Array<{
          name: string
          version: string
          author: string
          website: string
        }>
      }
      big_query_fdw_validator: {
        Args: {
          options: string[]
          catalog: unknown
        }
        Returns: undefined
      }
      click_house_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      click_house_fdw_meta: {
        Args: Record<PropertyKey, never>
        Returns: Array<{
          name: string
          version: string
          author: string
          website: string
        }>
      }
      click_house_fdw_validator: {
        Args: {
          options: string[]
          catalog: unknown
        }
        Returns: undefined
      }
      firebase_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      firebase_fdw_meta: {
        Args: Record<PropertyKey, never>
        Returns: Array<{
          name: string
          version: string
          author: string
          website: string
        }>
      }
      firebase_fdw_validator: {
        Args: {
          options: string[]
          catalog: unknown
        }
        Returns: undefined
      }
      logflare_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      logflare_fdw_meta: {
        Args: Record<PropertyKey, never>
        Returns: Array<{
          name: string
          version: string
          author: string
          website: string
        }>
      }
      logflare_fdw_validator: {
        Args: {
          options: string[]
          catalog: unknown
        }
        Returns: undefined
      }
      s3_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      s3_fdw_meta: {
        Args: Record<PropertyKey, never>
        Returns: Array<{
          name: string
          version: string
          author: string
          website: string
        }>
      }
      s3_fdw_validator: {
        Args: {
          options: string[]
          catalog: unknown
        }
        Returns: undefined
      }
      stripe_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      stripe_fdw_meta: {
        Args: Record<PropertyKey, never>
        Returns: Array<{
          name: string
          version: string
          author: string
          website: string
        }>
      }
      stripe_fdw_validator: {
        Args: {
          options: string[]
          catalog: unknown
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
}

declare global {
  type productsPropsWithReviews = Array<{
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string
  reviews: Array<{
    created_at: string
    id: number
    product_id: number
    score: number
    text: string
    user: string
  }>
}>
}

declare global {
  type productsPropsWithoutReviews = Array<{
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string
}>
}

declare global {
  interface productsPropsWithoutReviewsNoArray {
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string
}
}

declare global {
  interface productsPropsWithReviewsNoArray {
  collection: string | null
  created_at: string
  description: string
  equipment_type: string
  id: number
  image: string
  name: string
  new: boolean
  price: number
  sale: number | null
  sports: string[] | null
  stripe_id: string
  reviews: Array<{
    created_at: string
    id: number
    product_id: number
    score: number
    text: string
    user: string
  }>
}
}
