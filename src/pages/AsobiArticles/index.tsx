import * as styles from './index.css'
import logo from '../../assets/logo.svg'
import PageLink from '../../components/PageLink'
import InitPage from '../../components/InitPage'
import { useLoaderData } from 'react-router-dom'
import { AsobiArticlesLoaderData } from './loader'

const AsobiArticles: React.FC = () => {
  const { articles } = useLoaderData() as AsobiArticlesLoaderData
  console.log(articles)
  return (
    <div className={styles.container}>
      <InitPage />
      はこだて未来展2024
      <img src={logo} className={styles.logo} alt="logo" />
      Coming Soon
      <PageLink href="https://twitter.com/miraiten2024" newTab>
        最新情報はXで公開中
      </PageLink>
    </div>
  )
}

export default AsobiArticles
