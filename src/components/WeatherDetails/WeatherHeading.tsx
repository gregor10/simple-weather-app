import React from 'react'
import { WeatherImage } from '@/components/WeatherDetails/WeatherImage'
import { formatTemperature } from '@/utils/number'
import { WeatherApiResponse } from '@/types/weather'

interface WeatherHeadingProps {
  data: WeatherApiResponse
}

export const WeatherHeading: React.FC<WeatherHeadingProps> = ({ data }) => {
  const { name, weather, main } = data

  const weatherCondition = weather[0]?.main
  const weatherDescription = weather[0]?.description
  const currentTemperature = main?.temp

  return <div className='flex flex-col md:flex-row items-center justify-between mb-3'>
    {weather && <div>
      <WeatherImage iconCode={weather[0]?.icon} />
    </div>}

    <div className='text-center md:text-left pr-5'>
      {weather && <p className='text-sm'>{weatherCondition} - {weatherDescription}</p>}
      <p className='text-6xl font-extralight my-2'>{formatTemperature(currentTemperature)}</p>
      <p className='text-xl'>{name}</p>
    </div>
  </div>
}
