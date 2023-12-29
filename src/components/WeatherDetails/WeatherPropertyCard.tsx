import React from 'react'
import { Card } from '@/components/Card'

interface WeatherPropertyCardProps {
  Icon: React.ElementType
  title: string
  value?: string | number
}

export const WeatherPropertyCard: React.FC<WeatherPropertyCardProps> = ({ title, Icon, value }) => {
  return <Card className='bg-blue-300 shadow-md'>
    <div className='flex gap-2'>
      <Icon className='w-4 h-4' />
      <p className='text-xs uppercase font-medium'>{title}</p>
    </div>
    <div className='mt-2'>
      <p className='text-2xl font-light'>{value || 'n/a'}</p>
    </div>
  </Card>
}
