import Animate from '../Animate'
import Paragraph from '../Paragraph'
import * as styles from './index.css'

export type ArticleCardProps = {
  title: string
  shortDescription: string
  thumbnail: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  shortDescription,
  thumbnail,
}) => {
  return (
    <div className={styles.container}>
      <Animate
        animation={`${styles.showBlock} 0.9s cubic-bezier(0, 0.6, 0.4, 1)`}
      >
        <img className={styles.thumbnail} src={thumbnail} />
      </Animate>
      <h3>{title}</h3>
      <Paragraph text={shortDescription} />
    </div>
  )
}

export default ArticleCard
