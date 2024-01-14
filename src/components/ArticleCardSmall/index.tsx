import Paragraph from '../Paragraph'
import * as styles from './index.css'

export type ArticleCardSmallProps = {
  title: string
  shortDescription: string
  thumbnail: string
}

const ArticleCardSmall: React.FC<ArticleCardSmallProps> = ({
  title,
  shortDescription,
  thumbnail,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={thumbnail} />
      <div className={styles.descriptionContainer}>
        <h5>{title}</h5>
        <div className={styles.description}>
          <Paragraph text={shortDescription} />
        </div>
      </div>
    </div>
  )
}

export default ArticleCardSmall
