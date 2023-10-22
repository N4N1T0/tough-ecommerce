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
      Products: {
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
      Profiles: {
        Row: {
          adress: string
          email: string
          email_sign_up: boolean
          id: string
          name: string
          nasm: boolean
          orders: string
          phone: string
          returns: string
          wish_list: string
        }
        Insert: {
          adress?: string
          email: string
          email_sign_up?: boolean
          id: string
          name: string
          nasm?: boolean
          orders?: string
          phone?: string
          returns?: string
          wish_list?: string
        }
        Update: {
          adress?: string
          email?: string
          email_sign_up?: boolean
          id?: string
          name?: string
          nasm?: boolean
          orders?: string
          phone?: string
          returns?: string
          wish_list?: string
        }
        Relationships: [
          {
            foreignKeyName: "Profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Reviews: {
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
