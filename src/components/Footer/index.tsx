import * as styles from './index.css'
import logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
    </footer>
  )
}

export default Footer
