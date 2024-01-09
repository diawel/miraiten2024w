import { useEffect } from 'react'
import { ScrollRestoration, useLocation } from 'react-router-dom'

export type InitPageProps = {
  notFound?: boolean
  pageTitle?: string
}

const InitPage: React.FC<InitPageProps> = ({ notFound, pageTitle }) => {
  const location = useLocation()

  useEffect(() => {
    const title = document.querySelector('head title')
    if (title)
      title.textContent = pageTitle
        ? `${pageTitle} | FUN!tasista!`
        : 'はこだて未来展2024 FUN!tasista!'
  }, [pageTitle])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)

    if (!notFound && searchParams.get('not_found')) {
      searchParams.delete('not_found')

      window.location.replace(
        buildRelativeUrl(
          location.pathname,
          searchParams.toString(),
          location.hash
        )
      )
    } else if (notFound && searchParams.get('not_found') != '1') {
      searchParams.append('not_found', '1')

      window.location.replace(
        buildRelativeUrl(
          location.pathname,
          searchParams.toString(),
          location.hash
        )
      )
    }
  }, [notFound, location])

  return <ScrollRestoration />
}

const buildRelativeUrl = (
  pathname: string,
  searchParams: string,
  hash: string
) =>
  import.meta.env.BASE_URL +
  pathname +
  (searchParams ? '?' + searchParams : '') +
  hash

export default InitPage
