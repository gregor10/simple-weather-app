'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider } from 'use-query-params'

const queryClient = new QueryClient()

export const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) =>
  <QueryClientProvider client={queryClient}>
    <QueryParamProvider adapter={NextAdapterApp}>
      {children}
    </QueryParamProvider>
  </QueryClientProvider>
