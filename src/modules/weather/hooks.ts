import { useQuery, UseQueryHookProps } from '@/hooks/useQuery'
import { WeatherApiResponse } from '@/types/weather'
import { WEATHER_API_URL } from '@/utils/settings'

export const useCurrentWeather = (params: UseQueryHookProps<WeatherApiResponse>['q'] = {}) =>
  useQuery<WeatherApiResponse>({
    cacheKey: ['weather', ...Object.values(params) as string[]],
    path: `${WEATHER_API_URL}/data/2.5/weather`,
    q: params,
    options: {
      enabled: Boolean(params.lat && params.lon)
    }
  })
