import * as styles from './index.css'

export type ArticleCardProps = {
  title: string
  description: string
  thumbnail: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  thumbnail,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={thumbnail} />
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ArticleCard
