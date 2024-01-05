import { Link } from 'react-router-dom'
import * as styles from './index.css'

export type PageLinkProps = {
  href: string
  children: React.ReactNode
  newTab?: boolean
  underline?: boolean
}

const PageLink: React.FC<PageLinkProps> = ({
  href,
  children,
  newTab,
  underline,
}) => {
  const commonProps = {
    className: styles.link,
    style: {
      textDecoration: underline ? 'underline' : 'none',
    },
  }
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
  return (
    <Link {...commonProps} {...{ to: href }}>
      {children}
    </Link>
  )
}

export default PageLink
