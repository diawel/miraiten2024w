// import * as styles from './index.css'
import InitPage from '../../components/InitPage'
import { useLoaderData } from 'react-router-dom'
import { AsobiArticlesLoaderData } from './loader'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import ArticleList from '../../components/ArticleList'
import Footer from '../../components/Footer'

const CrowdfundingArticles: React.FC = () => {
  const { articles } = useLoaderData() as AsobiArticlesLoaderData
  return (
    <div>
      <InitPage pageTitle="人に寄り添うサービス・アイテムの提案" />
      <ResponsiveFrame
        abstractSection={<Abstract />}
        detailSection={<ArticleList {...{ articles }} api="crowdfunding" />}
      />
      <Footer />
    </div>
  )
}

export default CrowdfundingArticles
