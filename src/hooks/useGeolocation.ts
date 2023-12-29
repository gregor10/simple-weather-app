import { useEffect, useState } from 'react'
import { NumberParam, useQueryParams } from 'use-query-params'

export const useGeolocation = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()

  const [location, setLocation] = useQueryParams({
    latitude: NumberParam,
    longitude: NumberParam
  })


  useEffect(() => {
    if (!navigator.geolocation || (location.latitude && location.longitude)) {
      return
    }

    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLocation({ latitude, longitude })
        setLoading(false)
      },
      (err) => {
        console.warn('Error getting current position', err)

        setError('Cannot determine location automatically. Please use input to search for desired location.')
        setLoading(false)
      }
    )
  }, [])

  return {
    loading,
    error
  }
}
