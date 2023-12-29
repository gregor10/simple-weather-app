import { useQuery as useTanStackQuery } from 'react-query'
import { getUrl } from '@/utils/url'

export interface UseQueryHookProps<T> {
  cacheKey: string[]
  path: string
  q?: Record<string, string | number | null | undefined>
  options: Parameters<typeof useTanStackQuery<T>>[2]
}

export function useQuery<T>({ cacheKey, path, q, options }: UseQueryHookProps<T>) {
  const url = getUrl({ path, q })

  return useTanStackQuery<T>(cacheKey, () => fetch(url).then(res => res.json()) as Promise<T>, options)
}
