import ArticleList, { ArticleAbstract } from '../../../components/ArticleList'
import PageLink from '../../../components/PageLink'
import * as styles from './index.css'
import voteButton from '../../../assets/voteButton.svg'
import { asobiOrder } from '../../../utils/constants'
import { orderArticles } from '../../../utils/article'

export type DetailProps = {
  articles: (ArticleAbstract & { team: number })[]
}

const Detail: React.FC<DetailProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <h2>作品一覧</h2>
      <ArticleList articles={orderArticles(articles, asobiOrder)} api="asobi" />
      <PageLink href="https://docs.google.com/forms" newTab>
        <img src={voteButton} />
      </PageLink>
    </div>
  )
}

export default Detail
