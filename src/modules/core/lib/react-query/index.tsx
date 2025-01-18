import { useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { Props } from './types'
import { queryClient } from './react-query.config'

export const ReactQueryProvider = ({ children }: Props) => {
	const [qc] = useState(() => queryClient)
	return (
		<QueryClientProvider client={qc}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
