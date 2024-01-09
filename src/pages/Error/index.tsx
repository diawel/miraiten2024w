import { useRouteError } from 'react-router-dom'
import InitPage from '../../components/InitPage'
import PageLink from '../../components/PageLink'
import * as styles from './index.css'

export type ErrorProps = {
  forceNotFound?: boolean
}

const Error: React.FC<ErrorProps> = ({ forceNotFound }) => {
  const error = useRouteError()
  // @ts-expect-error statusがundefinedでもfalseになる
  if (forceNotFound || error.status == 404)
    return (
      <div className={styles.container}>
        <InitPage notFound pageTitle="404 Not Found" />
        <h2>404 Not Found</h2>
        <div>お探しのページは見つかりませんでした。</div>
        <PageLink href="/" underline>
          トップページに戻る
        </PageLink>
      </div>
    )
  return (
    <div className={styles.container}>
      <InitPage pageTitle="エラーが発生しました" />
      <h2>不明なエラーが発生しました</h2>
      <div>ページの読み込み中に予期しないエラーが発生しました。</div>
      <PageLink href="" underline forceReload>
        再読み込み
      </PageLink>
    </div>
  )
}

export default Error
