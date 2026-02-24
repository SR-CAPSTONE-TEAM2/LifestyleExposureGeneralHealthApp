import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { router } from 'expo-router'

const styles = {
  container: { padding: '20px', fontFamily: 'sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  code: { 
    display: 'block', 
    backgroundColor: '#f4f4f4', 
    padding: '10px', 
    borderRadius: '5px',
    overflowX: 'auto' as 'auto'
  }
}
  
export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null)
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(true)

  console.log("Dashboard Rendering...");
  console.log("Session State:", session);

  useEffect(() => {

    

    
    // 1. Initial Session Check
    const checkUser = async () => {
      const { data: { session: initialSession } } = await supabase.auth.getSession()
      setSession(initialSession)
      
      // If we already have a session, fetch the profile
      if (initialSession) {
        await fetchProfile(initialSession.user.id)
      }
      
      setInitializing(false)
    }

    checkUser()

    // 2. Listen for Auth Changes (Sign-in/Sign-out)
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession)
      
      if (currentSession) {
        await fetchProfile(currentSession.user.id)
      } else {
        setProfile(null)
      }
      
      setInitializing(false)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  // Helper function to fetch user data
  const fetchProfile = async (userId: string) => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle() 

      if (error) throw error
      setProfile(data)
    } catch (error) {
      console.error('Detailed Profile Error:', error)
    } finally {
      setLoading(false)
      setInitializing(false) // Ensure this hits even if profile fails
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.replace('/login')
  }

  // --- RENDER LOGIC ---

  // 1. Still checking if the user is even logged in
  if (initializing) {
    return (
      <div style={styles.container}>
        <p>Verifying session...</p>
      </div>
    )
  }

  // 2. Verified: No session exists
  if (!session) {
    return (
      <div style={styles.container}>
        <h2>Access Denied</h2>
        <p>You are not logged in.</p>
        <button onClick={() => router.replace('/login')}>
          Go to Login
        </button>
      </div>
    )
  }

  // 3. Verified: Session exists, showing profile
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Dashboard</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </header>

      <section>
        <h3>User Session:</h3>
        <code style={styles.code}>{session.user.email}</code>

        <h3>Database Profile:</h3>
        {loading ? (
          <p>Loading profile data...</p>
        ) : profile ? (
          <pre style={styles.code}>{JSON.stringify(profile, null, 2)}</pre>
        ) : (
          <p>No profile record found in the "profiles" table.</p>
        )}
      </section>
    </div>
  )
}
  

  