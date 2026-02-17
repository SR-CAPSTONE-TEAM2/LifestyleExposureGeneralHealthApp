import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { router } from 'expo-router'

export default function AuthCallback() {
  useEffect(() => {
    const handleCallback = async () => {
      // getSession will automatically attempt to exchange the URL fragments 
      // if they exist when called.
      const { data, error } = await supabase.auth.getSession();
      
      if (data?.session) {
        router.replace('/dashboard');
      } else {
        // If there's no session, go back to login to try again
        router.replace('/login');
      }
    };

    handleCallback();
  }, []);

  return null;
}
