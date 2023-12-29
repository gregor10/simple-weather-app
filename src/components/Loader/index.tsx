import React from 'react'
import { Loader2Icon } from 'lucide-react'

export const Loader: React.FC = () => {
  return <div className='w-full flex justify-center'>
    <Loader2Icon className='w-12 h-12 p-1 animate-spin' />
  </div>
}
