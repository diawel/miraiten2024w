import ArticleCard from '../ArticleCard'
import * as styles from './index.css'

export type ArticleAbstract = {
  id: string
  title: string
  shortDescription: string
  thumbnail: string
}

export type ArticleListProps = {
  articles: ArticleAbstract[]
  api: 'asobi' | 'crowdfunding'
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <ArticleCard {...article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList
