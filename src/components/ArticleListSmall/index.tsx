import * as styles from './index.css'
import PageLink from '../PageLink'
import ArticleCardSmall from '../ArticleCardSmall'
import { ArticleAbstract } from '../ArticleList'

export type ArticleListSmallProps = {
  articles: ArticleAbstract[]
  api: 'asobi' | 'crowdfunding'
}

const ArticleListSmall: React.FC<ArticleListSmallProps> = ({
  articles,
  api,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>他の作品を見る</h3>
      {articles.map((article) => (
        <PageLink href={`/${api}/${article.id}`} key={article.id}>
          <ArticleCardSmall {...article} />
        </PageLink>
      ))}
    </div>
  )
}

export default ArticleListSmall
