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
      <div className={styles.section}>{abstractSection}</div>
      <div className={styles.section}>{detailSection}</div>
    </div>
  )
}

export default ResponsiveFrame
