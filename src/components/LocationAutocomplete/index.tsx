import { Input, InputProps } from '@/components/Input'
import React, { useCallback } from 'react'
import { debounce } from 'lodash'
import { getLocationCoordinates } from '@/modules/weather/api'

type LoadOptionsCallbackType = Parameters<Required<InputProps>['loadOptions']>[1]

export const LocationAutocomplete: React.FC<Pick<InputProps, 'onChange'>> = ({ onChange }) => {
  const fetchFn = (query: string, callback: LoadOptionsCallbackType) => {
    getLocationCoordinates(query)
      .then(res => callback(res))
  }

  const onLoadOptions = useCallback(debounce(fetchFn, 500), [])

  return <Input
    placeholder='Type city/country here'
    loadOptions={onLoadOptions}
    onChange={onChange} />
}
