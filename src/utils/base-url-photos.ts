import { API_URL } from '@/config/api'

export function baseUrlPhoto(
  type: 'city' | 'event' | 'place' | 'taxiDrivers' | 'room' | 'news' | 'thumbnails',
  photoName: string | undefined | null,
) {
  if (!photoName) return undefined

  if (photoName.startsWith('http')) return photoName

  return `${API_URL}/uploads/${type}/${photoName}`
}
