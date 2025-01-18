import type { QueryKey } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { RawResponse } from '@core/entities'

export const queryKeyToUrl = (queryKey: QueryKey): string => {
	if (!Array.isArray(queryKey)) {
		throw new Error('queryKey deve ser um array')
	}

	const pathParts: string[] = []
	const queryParams: string[] = []

	for (const key of queryKey) {
		const isQueryParam = typeof key === 'string' && key.includes('=')

		if (isQueryParam) {
			queryParams.push(key)
		} else {
			pathParts.push(encodeURIComponent(key.toString()))
		}
	}

	const path = pathParts.join('/')
	const query = queryParams.join('&')

	return query ? `/${path}/?${query}` : `/${path}/`
}

export function parseResponseData<T>(
	response: AxiosResponse<RawResponse<T>> | AxiosResponse<T> | any,
): T {
	if (typeof response.data === 'object' && 'data' in response.data && !response.data?.ct) {
		return response.data.data
	}
	return response.data
}
