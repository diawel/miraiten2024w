import { Link } from 'react-router-dom'
import * as styles from './index.css'
import { useContext } from 'react'
import { PagingAnimationContext } from '../../pages/GlobalLayout'

export type PageLinkProps = {
  href: string
  children: React.ReactNode
  newTab?: boolean
  underline?: boolean
  forceReload?: boolean
  animate?: boolean
}

const PageLink: React.FC<PageLinkProps> = ({
  href,
  children,
  newTab,
  underline,
  forceReload,
  animate,
}) => {
  const commonProps = {
    className: styles.link,
    style: {
      textDecoration: underline ? undefined : 'none',
    },
  }
  const animateTo = useContext(PagingAnimationContext)
  if (newTab)
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
        {...{
          href,
        }}
      >
        {children}
      </a>
    )
  if (forceReload)
    return (
      <a
        {...commonProps}
        {...{
          href,
        }}
      >
        {children}
      </a>
    )
  if (animate)
    return (
      <a
        {...commonProps}
        {...{
          href,
        }}
        onClick={(e) => {
          e.preventDefault()
          animateTo(href)
        }}
      >
        {children}
      </a>
    )
  return (
    <Link {...commonProps} {...{ to: href }}>
      {children}
    </Link>
  )
}

export default PageLink
