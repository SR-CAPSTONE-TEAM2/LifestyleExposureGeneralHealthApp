import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'

// We check if we are in a browser environment to avoid the "window is not defined" error
const isBrowser = typeof window !== 'undefined'

const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl ?? ""
const supabasePubKey = Constants.expoConfig?.extra?.supabasePubKey ?? ""

export const supabase = createClient(supabaseUrl, supabasePubKey, {
  auth: {
    // If browser, use localStorage. If server, use nothing.
    storage: isBrowser ? window.localStorage : undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})