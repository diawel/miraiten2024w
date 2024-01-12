import * as styles from './index.css'
import kv from '../../../assets/kv.svg'
import outlinedKv from '../../../assets/outlinedKv.svg'
import kvText from '../../../assets/kvText.svg'
import kvExclamation from '../../../assets/kvExclamation.svg'
import kvBackground from '../../../assets/kvBackground.svg'

const Kv: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.kvContainer}>
        <div className={styles.kvContainerInner}>
          <img className={styles.kvBackground} src={kvBackground} />
          <img className={styles.kv} src={outlinedKv} />
          <img className={styles.coleredKv} src={kv} />
          <div className={styles.exclamatoinContainer}>
            <img className={styles.exclamatoin} src={kvExclamation} />
          </div>
        </div>
      </div>
      <img className={styles.textBlock} src={kvText} />
    </div>
  )
}

export default Kv
