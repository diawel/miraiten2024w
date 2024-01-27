import ArticleList, { ArticleAbstract } from '../../../components/ArticleList'
import * as styles from './index.css'
import voteButton from '../../../assets/voteButton.svg'
import Disabled from '../../../components/Disabled'
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
      <Disabled>
        <img src={voteButton} />
      </Disabled>
    </div>
  )
}

export default Detail
