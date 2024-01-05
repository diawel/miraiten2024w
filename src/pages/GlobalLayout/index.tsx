import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import * as styles from './index.css'

const GlobalLayout: React.FC = () => {
  return (
    <div>
      <div className={styles.topBorder} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default GlobalLayout
