import { Link } from 'react-router-dom'
import ArticleCard from '../ArticleCard'
import * as styles from './index.css'

export type ArticleListProps = {
  articles: {
    id: string
    title: string
    description: string
    thumbnail: string
  }[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <Link to={`/asobi/${article.id}`} key={article.id}>
          <ArticleCard {...article} />
        </Link>
      ))}
    </div>
  )
}

export default ArticleList
