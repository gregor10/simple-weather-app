import { WEATHER_API_URL, WEATHER_APP_ID } from '@/utils/settings'
import { AutocompleteResponse } from '@/types/weather'
import { getUrl } from '@/utils/url'

export const getLocationCoordinates = (query: string) => {
  const path = `${WEATHER_API_URL}/geo/1.0/direct`
  const limit = 5

  return fetch(getUrl({ path, q: { appid: WEATHER_APP_ID, q: query, limit } }))
    .then(res => res.json() as Promise<AutocompleteResponse>)
    .then(results => results.map(coordinates => ({
      label: `${coordinates.name} (${coordinates.country})`,
      value: coordinates
    })))
}
