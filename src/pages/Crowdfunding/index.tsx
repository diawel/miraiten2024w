import { useLoaderData } from 'react-router-dom'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Footer from '../../components/Footer'
import Error from '../Error'
import { CrowdfundingLoaderData } from './loader'
import ArticleAbstract from '../../components/ArticleAbstract'
import ArticleDetail from '../../components/ArticleDetail'

const Crowdfunding: React.FC = () => {
  const { article } = useLoaderData() as CrowdfundingLoaderData

  if (!article) return <Error />
  return (
    <div>
      <InitPage pageTitle={article.title} />
      <ResponsiveFrame
        abstractSection={<ArticleAbstract {...article} />}
        detailSection={<ArticleDetail {...article} />}
      />
      <Footer />
    </div>
  )
}

export default Crowdfunding
