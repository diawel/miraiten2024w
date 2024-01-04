// import * as styles from './index.css'
import InitPage from '../../components/InitPage'
import { useLoaderData } from 'react-router-dom'
import { AsobiArticlesLoaderData } from './loader'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import ArticleList from '../../components/ArticleList'
import Footer from '../../components/Footer'
import { color } from '../../utils/constants'

const CrowdfundingArticles: React.FC = () => {
  const { articles } = useLoaderData() as AsobiArticlesLoaderData
  return (
    <div>
      <InitPage />
      <ResponsiveFrame
        abstractSection={<Abstract />}
        detailSection={
          <ArticleList
            articles={articles.map((article) => ({
              id: article.id,
              title: article.title,
              description: article.shortDescription,
              thumbnail: article.thumbnail,
            }))}
            api="crowdfunding"
          />
        }
      />
      <Footer themeColor={color.green} />
    </div>
  )
}

export default CrowdfundingArticles
