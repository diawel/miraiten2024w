// import * as styles from './index.css'
import InitPage from '../../components/InitPage'
import { useLoaderData } from 'react-router-dom'
import { AsobiArticlesLoaderData } from './loader'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import ArticleList from '../../components/ArticleList'
import Footer from '../../components/Footer'

const AsobiArticles: React.FC = () => {
  const { articles } = useLoaderData() as AsobiArticlesLoaderData
  return (
    <div>
      <InitPage pageTitle="新しい遊びの提案" />
      <ResponsiveFrame
        abstractSection={<Abstract />}
        detailSection={<ArticleList {...{ articles }} api="asobi" />}
      />
      <Footer />
    </div>
  )
}

export default AsobiArticles
