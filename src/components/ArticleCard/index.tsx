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
      <img className={styles.thumbnail} src={thumbnail} />
      <h3>{title}</h3>
      <Paragraph text={shortDescription} />
    </div>
  )
}

export default ArticleCard
