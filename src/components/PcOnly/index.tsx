import * as styles from './index.css'

export type PcOnlyProps = {
  children: React.ReactNode
}

const PcOnly: React.FC<PcOnlyProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default PcOnly
