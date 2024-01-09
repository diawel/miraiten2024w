import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import * as styles from './index.css'

const GlobalLayout: React.FC = () => {
  return (
    <div>
      <div className={styles.frameBorder.top} />
      <Outlet />
      <div className={styles.frameBorder.bottom} />
      <Footer />
    </div>
  )
}

export default GlobalLayout
