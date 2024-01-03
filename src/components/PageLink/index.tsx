import { Link } from 'react-router-dom'
import * as styles from './index.css'

export type PageLinkProps = {
  href: string
  children: React.ReactNode
  newTab?: boolean
}

const PageLink: React.FC<PageLinkProps> = ({ href, children, newTab }) => {
  if (newTab)
    return (
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        {...{
          href,
        }}
      >
        {children}
      </a>
    )
  return (
    <Link className={styles.link} {...{ to: href }}>
      {children}
    </Link>
  )
}

export default PageLink
