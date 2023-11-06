export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
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
            foreignKeyName: "address_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
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
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
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
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
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
            foreignKeyName: "wishlist_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wishlist_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
