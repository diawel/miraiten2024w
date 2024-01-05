import { Link } from 'react-router-dom'
import ArticleCard from '../ArticleCard'
import * as styles from './index.css'

export type ArticleListProps = {
  articles: {
    id: string
    title: string
    shortDescription: string
    thumbnail: string
  }[]
  api: 'asobi' | 'crowdfunding'
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, api }) => {
  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <Link to={`/${api}/${article.id}`} key={article.id}>
          <ArticleCard {...article} />
        </Link>
      ))}
    </div>
  )
}

export default ArticleList
