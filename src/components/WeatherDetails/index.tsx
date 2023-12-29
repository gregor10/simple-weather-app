import React from 'react'
import { WeatherApiResponse } from '@/types/weather'
import { formatTemperature } from '@/utils/number'
import { DropletsIcon, EyeIcon, ThermometerSunIcon, WavesIcon, WindIcon } from 'lucide-react'
import { WeatherPropertyCard } from '@/components/WeatherDetails/WeatherPropertyCard'
import { WeatherHeading } from '@/components/WeatherDetails/WeatherHeading'

interface WeatherDetailsProps {
  data?: WeatherApiResponse
}

const getWeatherProperties = (weatherData: WeatherApiResponse) => [
  {
    title: 'Feels like',
    value: formatTemperature(weatherData?.main?.feels_like),
    Icon: ThermometerSunIcon
  },
  {
    title: 'Humidity',
    value: `${weatherData?.main?.humidity}%`,
    Icon: DropletsIcon
  },
  {
    title: 'Sea level',
    value: weatherData?.main?.sea_level && `${weatherData?.main?.sea_level}hPa`,
    Icon: WavesIcon
  },
  {
    title: 'Wind speed',
    value: `${(weatherData?.wind?.speed)?.toFixed(1)}m/s`,
    Icon: WindIcon
  },
  {
    title: 'Visibility',
    value: `${((weatherData?.visibility || 0) * 0.001).toFixed(1)}km`,
    Icon: EyeIcon
  }
]

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  if (!data) {
    return
  }

  const weatherProperties = getWeatherProperties(data)

  return <div>
    <WeatherHeading data={data} />

    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {weatherProperties.map(weatherProperty => (
        <WeatherPropertyCard key={weatherProperty.title} {...weatherProperty} />
      ))}
    </div>
  </div>
}
