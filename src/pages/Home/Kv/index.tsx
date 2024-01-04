import * as styles from './index.css'
import kv from '../../../assets/kv.svg'

const Kv: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.kv} src={kv} />
    </div>
  )
}

export default Kv
