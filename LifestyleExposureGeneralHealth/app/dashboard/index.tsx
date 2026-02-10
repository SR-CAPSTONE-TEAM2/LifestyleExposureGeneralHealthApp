import { useEffect, useState } from 'react'
import {supabase} from '../../lib/supabase'

export default function Dashboard() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        window.location.href = '/login'
        return
      }

      const { data } = await supabase
        .from('profiles')
        .select('*')
        .single()

      setProfile(data)
    }

    loadProfile()
  }, [])

  if (!profile) return <p>Loading…</p>

  return (
    <div>
      <h1>Welcome</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  )
}
