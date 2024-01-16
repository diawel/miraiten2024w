import * as styles from './index.css'
import kv from '../../../assets/kv.svg'
import outlinedKv from '../../../assets/outlinedKv.svg'
import kvText from '../../../assets/kvText.svg'
import kvExclamation from '../../../assets/kvExclamation.svg'
import kvBackground from '../../../assets/kvBackground.svg'
import scroll from '../../../assets/scroll.svg'

const Kv: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.kvContainer}>
        <div className={styles.kvContainerInner}>
          <div className={styles.kvBackgroundContainer}>
            <img className={styles.kvBackground} src={kvBackground} />
          </div>
          <img className={styles.kv} src={outlinedKv} />
          <img className={styles.coleredKv} src={kv} />
          <div className={styles.exclamatoinContainer}>
            <img className={styles.exclamatoin} src={kvExclamation} />
          </div>
        </div>
      </div>
      <img className={styles.textBlock} src={kvText} />
      <img className={styles.scroll} src={scroll} />
    </div>
  )
}

export default Kv
