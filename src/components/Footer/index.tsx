import * as styles from './index.css'
import logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'

export type FooterProps = {
  themeColor: string
}

const Footer: React.FC<FooterProps> = ({ themeColor }) => {
  return (
    <footer
      className={styles.container}
      style={{ backgroundColor: themeColor }}
    >
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
    </footer>
  )
}

export default Footer
