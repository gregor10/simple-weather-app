import queryString from 'query-string'

interface Props {
  path: string
  q?: Record<string, string | number | null | undefined>
}

export const getUrl = ({ path, q }: Props) => {
  let url = path

  if (q && Object.keys(q).length > 0) {
    url += `?${queryString.stringify(q)}`
  }

  return url
}
