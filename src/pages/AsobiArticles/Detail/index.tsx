import ArticleList, { ArticleAbstract } from '../../../components/ArticleList'
import PageLink from '../../../components/PageLink'
import * as styles from './index.css'
import voteButton from '../../../assets/voteButton.svg'

export type DetailProps = {
  articles: ArticleAbstract[]
}

const Detail: React.FC<DetailProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <h2>作品一覧</h2>
      <ArticleList {...{ articles }} api="asobi" />
      <PageLink href="https://docs.google.com/forms" newTab>
        <img src={voteButton} />
      </PageLink>
    </div>
  )
}

export default Detail
