'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export const LoginBtn = ({ children, provider }: { children: React.ReactNode, provider: 'google' | 'facebook' }) => {
  const supabase = createClientComponentClient<Database>()

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

export const LogoutBtn = ({ className }: { className?: string }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

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
