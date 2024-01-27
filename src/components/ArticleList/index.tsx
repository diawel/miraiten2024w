import ArticleCard from '../ArticleCard'
import * as styles from './index.css'
import PageLink from '../PageLink'

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

const ArticleList: React.FC<ArticleListProps> = ({ articles, api }) => {
  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <PageLink href={`/${api}/${article.id}`} key={article.id} animate>
          <ArticleCard {...article} />
        </PageLink>
      ))}
    </div>
  )
}

export default ArticleList
