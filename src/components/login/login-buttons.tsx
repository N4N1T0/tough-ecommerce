'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export const LoginBtn = ({ children, provider }: { children: React.ReactNode, provider: 'google' | 'facebook' }) => {
  const supabase = createClientComponentClient<Database>()

  const handleSign = async () => {
    const width = 500
    const height = 600
    const left = window.innerWidth / 2 - width / 2 + window.screenX
    const top = window.innerHeight / 2 - height / 2 + window.screenY
    const options = `width=${width},height=${height},left=${left},top=${top},status=no,scrollbars=no,resizable=no`

    const popup = window.open('', '_blank', options)

    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })

    popup?.close()
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
