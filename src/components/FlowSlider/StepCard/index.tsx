import * as styles from './index.css'

export type StepCardProps = {
  image: string
  number: number
  text: string
}

const StepCard: React.FC<StepCardProps> = ({ image, number, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <div className={styles.description}>
        <div className={styles.descriptionInner}>
          <div className={styles.number}>
            {('0' + number.toString()).slice(-2)}
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default StepCard
