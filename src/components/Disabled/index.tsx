import * as styles from './index.css'

export type DisabledProps = {
  children: React.ReactNode
}

const Disabled: React.FC<DisabledProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Disabled
