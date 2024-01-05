import * as styles from './index.css'

export type MobileOnlyProps = {
  children: React.ReactNode
}

const MobileOnly: React.FC<MobileOnlyProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default MobileOnly
