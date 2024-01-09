import FlowSlider from '../FlowSlider'
import * as styles from './index.css'

export type ArticlesAbstractContainerProps = {
  title: string
  subtitle: string
  flowSlider: React.ReactElement<typeof FlowSlider>
}

const ArticlesAbstractContainer: React.FC<ArticlesAbstractContainerProps> = ({
  title,
  subtitle,
  flowSlider,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
      </div>
      <div className={styles.flowSection}>
        <h2>授業の流れ</h2>
        {flowSlider}
      </div>
    </div>
  )
}

export default ArticlesAbstractContainer
