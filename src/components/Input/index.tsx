import React from 'react'
import AsyncSelect, { AsyncProps } from 'react-select/async'
import { GroupBase } from 'react-select'

export interface Option {
  label: string;
  value: unknown;
}

export type InputProps = AsyncProps<Option, false, GroupBase<Option>>

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <AsyncSelect cacheOptions {...rest} />
}
