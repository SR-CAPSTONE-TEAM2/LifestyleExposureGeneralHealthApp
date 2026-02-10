import { useEffect } from 'react'
import {supabase} from '../../../lib/supabase'

export default function AuthCallback() {
  useEffect(() => {
    const finishAuth = async () => {
      const { data } = await supabase.auth.getSession()

      if (!data.session) {
        window.location.href = '/login'
        return
      }

      // profile already exists thanks to trigger
      window.location.href = '/dashboard'
    }

    finishAuth()
  }, [])

  return <p>Signing you in…</p>
}
