import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../../components/Footer'
import * as styles from './index.css'
import Menu from '../../components/Menu'

const GlobalLayout: React.FC = () => {
  return (
    <>
      <div className={styles.frameBorder.top} />
      <Outlet />
      <div className={styles.frameBorder.bottom} />
      <Footer />
      <Menu />
      <ScrollRestoration />
    </>
  )
}

export default GlobalLayout
