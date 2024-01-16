import ArticleList, { ArticleAbstract } from '../../../components/ArticleList'
import * as styles from './index.css'
import voteButton from '../../../assets/voteButton.svg'
import Disabled from '../../../components/Disabled'

export type DetailProps = {
  articles: ArticleAbstract[]
}

const Detail: React.FC<DetailProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <h2>作品一覧</h2>
      <ArticleList {...{ articles }} api="asobi" />
      <Disabled>
        <img src={voteButton} />
      </Disabled>
    </div>
  )
}

export default Detail
