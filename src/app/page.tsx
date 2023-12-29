'use client'

import React from 'react'
import { Card } from '@/components/Card'
import { useGeolocation } from '@/hooks/useGeolocation'
import { LocationAutocomplete } from '@/components/LocationAutocomplete'
import { NumberParam, useQueryParams } from 'use-query-params'
import { AutocompleteItem } from '@/types/weather'
import { InputProps } from '@/components/Input'
import { WEATHER_APP_ID } from '@/utils/settings'
import { useCurrentWeather } from '@/modules/weather/hooks'
import { Loader } from '@/components/Loader'
import { WeatherDetails } from '@/components/WeatherDetails'

const WeatherMain: React.FC = () => {
  const { loading: isGeolocationLoading, error } = useGeolocation()

  const [location, setLocation] = useQueryParams({
    latitude: NumberParam,
    longitude: NumberParam
  })

  const { isLoading: isCurrentWeatherLoading, data: weather } = useCurrentWeather({
    lat: location?.latitude,
    lon: location?.longitude,
    appid: WEATHER_APP_ID,
    units: 'metric'
  })

  const onAutocompleteChange = (result: Parameters<Required<InputProps>['onChange']>[0]) => {
    const coordinates = result?.value as AutocompleteItem

    setLocation({
      latitude: coordinates.lat,
      longitude: coordinates.lon
    })
  }

  const isLoading = isGeolocationLoading || isCurrentWeatherLoading
  const shouldShowError = !isLoading && error && (!location.latitude || !location.longitude)

  return (
    <div className='flex items-center justify-center h-[inherit] px-3'>
      <div className='w-[400px]'>
        <div className='mb-4'>
          <LocationAutocomplete onChange={onAutocompleteChange} />
        </div>

        <Card className='min-h-[400px] bg-gradient-to-bl from-blue-300 to-cyan-300 text-white'>
          {isLoading && <Loader />}
          {shouldShowError && <p className='px-2 text-sm'>{error}</p>}

          <WeatherDetails data={weather} />
        </Card>
      </div>
    </div>
  )
}

export default WeatherMain
