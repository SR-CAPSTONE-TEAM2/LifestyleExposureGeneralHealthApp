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
    <div>
      <h2>Magic Link</h2>

      <p>Follow this link to login:</p>
      <p><a href="{{ .ConfirmationURL }}">Log In</a></p>
    </div>
    
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}
