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
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const PageLink: React.FC<PageLinkProps> = ({
  href,
  children,
  newTab,
  underline,
  forceReload,
  animate,
  onClick,
}) => {
  const commonProps = {
    className: styles.link,
    style: {
      textDecoration: underline ? undefined : 'none',
    },
    onClick,
  }

  const modifiedHref = href.startsWith('/')
    ? import.meta.env.BASE_URL + href
    : href
  const animateTo = useContext(PagingAnimationContext)

  const linkInner = <div className={styles.linkInner}>{children}</div>
  if (newTab)
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={modifiedHref}
        {...commonProps}
      >
        {linkInner}
      </a>
    )
  if (forceReload)
    return (
      <a href={modifiedHref} {...commonProps}>
        {linkInner}
      </a>
    )
  if (animate)
    return (
      <a
        href={modifiedHref}
        {...commonProps}
        onClick={(e) => {
          e.preventDefault()
          animateTo(href)
        }}
      >
        {linkInner}
      </a>
    )
  return (
    <Link {...commonProps} {...{ to: href }}>
      {linkInner}
    </Link>
  )
}

export default PageLink
