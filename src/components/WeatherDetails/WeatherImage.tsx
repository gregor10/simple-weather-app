import Image from 'next/image'
import React from 'react'

interface WeatherImageProps {
  iconCode?: string
}

export const WeatherImage: React.FC<WeatherImageProps> = ({ iconCode }) => {
  if (!iconCode) {
    return
  }

  return <Image
    src={`/weather-icons/${iconCode}.svg`}
    width={200}
    height={200}
    alt={iconCode} />
}
