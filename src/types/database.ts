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
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          collection: string
          created_at: string
          description: string
          id: number
          image: string
          price: number
          review: string
          type: string
        }
        Insert: {
          collection: string
          created_at?: string
          description: string
          id?: number
          image: string
          price: number
          review: string
          type: string
        }
        Update: {
          collection?: string
          created_at?: string
          description?: string
          id?: number
          image?: string
          price?: number
          review?: string
          type?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          email: string
          email_sign_up: boolean
          future_deals_signup: boolean
          id: string
          name: string
          nasm: boolean
          new_products_alerts_signup: boolean
          password: string
          phone: string | null
          provider: string
        }
        Insert: {
          email: string
          email_sign_up?: boolean
          future_deals_signup?: boolean
          id: string
          name: string
          nasm?: boolean
          new_products_alerts_signup?: boolean
          password?: string
          phone?: string | null
          provider?: string
        }
        Update: {
          email?: string
          email_sign_up?: boolean
          future_deals_signup?: boolean
          id?: string
          name?: string
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
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reviews: {
        Row: {
          created_at: string
          id: number
          text: string
          user: string
        }
        Insert: {
          created_at?: string
          id?: number
          text: string
          user: string
        }
        Update: {
          created_at?: string
          id?: number
          text?: string
          user?: string
        }
        Relationships: []
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
