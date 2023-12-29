import React from 'react'
import { cn } from '@/utils/classes'

interface CardProps extends React.PropsWithChildren {
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn('rounded shadow-lg p-2', className)}>{children}</div>
}
