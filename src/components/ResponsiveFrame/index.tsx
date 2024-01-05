import * as styles from './index.css'

export type ResponsiveFrameProps = {
  abstractSection?: React.ReactNode
  detailSection?: React.ReactNode
}

const ResponsiveFrame: React.FC<ResponsiveFrameProps> = ({
  abstractSection,
  detailSection,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.abstractSection}>
        <div className={styles.abstractSectionInner}>{abstractSection}</div>
      </div>
      <div className={styles.detailSection}>
        <div className={styles.detailSectionInner}>{detailSection}</div>
      </div>
    </div>
  )
}

export default ResponsiveFrame
