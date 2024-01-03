import * as styles from './index.css'
import logo from '../../assets/logo.svg'
import PageLink from '../../components/PageLink'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      はこだて未来展2024
      <img src={logo} className={styles.logo} alt="logo" />
      Comming Soon
      <PageLink href="https://twitter.com/miraiten2024" newTab>
        最新情報はXで公開中
      </PageLink>
    </div>
  )
}

export default Home
