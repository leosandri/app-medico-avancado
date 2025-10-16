import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Função para validar URL
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return url.startsWith('http://') || url.startsWith('https://')
  } catch {
    return false
  }
}

// Verificar se as variáveis de ambiente estão configuradas e válidas
const isConfigured = supabaseUrl && 
                    supabaseAnonKey && 
                    isValidUrl(supabaseUrl) &&
                    supabaseUrl !== 'your_supabase_url_here' && 
                    supabaseAnonKey !== 'your_supabase_anon_key_here'

if (!isConfigured) {
  console.warn('Supabase não configurado corretamente. Configure suas variáveis de ambiente.')
}

// Criar cliente apenas se as variáveis estão válidas
export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Função helper para verificar se o Supabase está configurado
export const isSupabaseConfigured = () => {
  return supabase !== null
}

// Cliente mock para desenvolvimento (quando Supabase não está configurado)
export const createMockClient = () => ({
  auth: {
    signUp: async () => ({ data: null, error: { message: 'Supabase não configurado' } }),
    signInWithPassword: async () => ({ data: null, error: { message: 'Supabase não configurado' } }),
    signOut: async () => ({ error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  }
})

// Exportar cliente seguro
export const getSupabaseClient = () => {
  return supabase || createMockClient()
}