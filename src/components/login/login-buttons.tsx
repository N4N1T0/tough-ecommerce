'use client'

// Next.js Imports
import { useRouter } from 'next/navigation'

// Supabase Imports
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Utils Imports
import { cn } from '@/lib/utils'

export const LoginBtn = ({ children, provider }: { children: React.ReactNode, provider: 'google' | 'facebook' }) => {
  // Supabase Client
  const supabase = createClientComponentClient<Database>()

  // Handle Social Media Login
  const handleSign = async () => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  return (
    <button onClick={handleSign}>
      {children}
    </button>
  )
}

// Logout button
export const LogoutBtn = ({ className }: { className?: string }) => {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

  // Handle SignOut for the user
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button className={cn(
      '',
      className
    )} onClick={handleSignOut}>
      Logout
    </button>
  )
}
