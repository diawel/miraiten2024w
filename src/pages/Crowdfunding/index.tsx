import { useLoaderData } from 'react-router-dom'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Error from '../Error'
import { CrowdfundingLoaderData } from './loader'
import ArticleAbstract from '../../components/ArticleAbstract'
import ArticleDetail from '../../components/ArticleDetail'

const Crowdfunding: React.FC = () => {
  const { article, articles } = useLoaderData() as CrowdfundingLoaderData

  if (!article) return <Error forceNotFound />
  return (
    <>
      <InitPage pageTitle={article.title} />
      <ResponsiveFrame
        abstractSection={<ArticleAbstract {...article} />}
        detailSection={
          <ArticleDetail api="crowdfunding" {...{ ...article, articles }} />
        }
      />
    </>
  )
}

export default Crowdfunding
