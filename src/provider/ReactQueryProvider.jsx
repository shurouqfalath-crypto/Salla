import React from 'react'
import {QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools }from '@tanstack/react-query-devtools'

export default function ReactQueryProvider({children}) {
    const queryClient = new QueryClient()
  return (
    <div>
 <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </div>
  )
}
