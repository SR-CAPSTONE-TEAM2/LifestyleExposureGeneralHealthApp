import {supabase} from '../../lib/supabase'

export default function Login() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/callback'
      }
    })
  }

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}
