const FALLBACK_API_URL = 'https://api.massapefascinante.com.br/api'

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, '') || FALLBACK_API_URL
