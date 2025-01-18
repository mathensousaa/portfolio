import { QueryClient } from '@tanstack/react-query'
import type { QueryKey } from '@tanstack/react-query'
import { api } from '@core/lib/axios'
import type { RawResponse } from '@core/entities'
import { queryKeyToUrl, parseResponseData } from '@core/utils/helpers'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryFn: defaultQueryFn,
			retry: false,
			refetchOnWindowFocus: false,
			refetchOnMount: true,
			staleTime: 30 * 1000,
		},
	},
})

async function defaultQueryFn<T>({ queryKey }: { queryKey: QueryKey }) {
	const url = queryKeyToUrl(queryKey)
	const response = await api.get<RawResponse<T>>(url)

	return parseResponseData<T>(response)
}

export { queryClient, defaultQueryFn }