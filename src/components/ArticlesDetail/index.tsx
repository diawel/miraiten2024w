import { orderArticles } from '../../utils/article'
import { articleOrder, formUrl } from '../../utils/constants'
import ArticleList, { ArticleAbstract } from '../ArticleList'
import PageLink from '../PageLink'
import * as styles from './index.css'
import voteButton from '../../assets/voteButton.svg'

export type ArticlesDetailProps = {
  articles: (ArticleAbstract & { team: number })[]
  api: 'asobi' | 'crowdfunding'
}

const ArticlesDetail: React.FC<ArticlesDetailProps> = ({ articles, api }) => {
  return (
    <div className={styles.container}>
      <h2>作品一覧</h2>
      <ArticleList
        articles={orderArticles(articles, articleOrder[api])}
        {...{ api }}
      />
      <PageLink href={formUrl[api]} newTab>
        <img src={voteButton} />
      </PageLink>
    </div>
  )
}

export default ArticlesDetail
