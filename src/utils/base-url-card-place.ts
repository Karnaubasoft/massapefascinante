import { backgroundloginpage } from '@/assets/image'
import { API_URL } from '@/config/api'
import { CardPlacesDTO } from '@/dto/places/data-card-placesDTO'

export function BaseUrlPlaces(photoURL: string, props: CardPlacesDTO) {
  const photoUrl =
    props.photos.length > 0 ? `${API_URL}/uploads/${photoURL}` : backgroundloginpage

  return photoUrl
}
