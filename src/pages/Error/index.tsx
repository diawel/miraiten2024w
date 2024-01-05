import InitPage from '../../components/InitPage'
import PageLink from '../../components/PageLink'
import * as styles from './index.css'

const Error: React.FC = () => {
  return (
    <div className={styles.container}>
      <InitPage notFound={true} pageTitle="404 Not Found" />
      <div>404 Not Found</div>
      <div>お探しのページは見つかりませんでした。</div>
      <PageLink href="/" underline>
        トップページに戻る
      </PageLink>
    </div>
  )
}

export default Error
