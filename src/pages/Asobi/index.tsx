import { useLoaderData } from 'react-router-dom'
import { AsobiLoaderData } from './loader'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Error from '../Error'
import ArticleAbstract from '../../components/ArticleAbstract'
import ArticleDetail from '../../components/ArticleDetail'

const Asobi: React.FC = () => {
  const { article } = useLoaderData() as AsobiLoaderData

  if (!article) return <Error forceNotFound />
  return (
    <>
      <InitPage pageTitle={article.title} />
      <ResponsiveFrame
        abstractSection={<ArticleAbstract {...article} />}
        detailSection={<ArticleDetail {...article} />}
      />
    </>
  )
}

export default Asobi
