import { backgroundloginpage } from '@/assets/image'
import { CardEventPageAdministrative } from '@/dto/event/data-card-event-DTO'
import { API_URL } from '@/config/api'

export function BaseUrl(photoURL: string, props: CardEventPageAdministrative) {
  const photoUrl =
    props.photos.length > 0
      ? `${API_URL}/uploads/${photoURL}`
      : backgroundloginpage

  return photoUrl
}
