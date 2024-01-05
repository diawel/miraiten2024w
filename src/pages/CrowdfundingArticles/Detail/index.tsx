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
      <ArticleList {...{ articles }} api="crowdfunding" />
      <div className={styles.buttonContainer}>
        <PageLink href="https://docs.google.com/forms" newTab>
          <img src={voteButton} />
        </PageLink>
      </div>
    </div>
  )
}

export default Detail
