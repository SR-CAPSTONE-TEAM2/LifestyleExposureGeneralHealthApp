import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// We check if we are in a browser environment to avoid the "window is not defined" error
//const isBrowser = typeof window !== 'undefined'

const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl ?? ""
const supabasePubKey = Constants.expoConfig?.extra?.supabasePubKey ?? ""

const authStorage =
  Platform.OS === 'web'
    ? (typeof window !== 'undefined' ? window.localStorage : undefined)
    : AsyncStorage

export const supabase = createClient(supabaseUrl, supabasePubKey, {
  auth: {
    storage: authStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
})