// import * as styles from './index.css'
import InitPage from '../../components/InitPage'
import { useLoaderData } from 'react-router-dom'
import { AsobiArticlesLoaderData } from './loader'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import ArticleList from '../../components/ArticleList'
import Footer from '../../components/Footer'
import { color } from '../../utils/constants'

const AsobiArticles: React.FC = () => {
  const { articles } = useLoaderData() as AsobiArticlesLoaderData
  return (
    <div>
      <InitPage />
      <ResponsiveFrame
        abstractSection={<Abstract />}
        detailSection={<ArticleList {...{ articles }} api="asobi" />}
      />
      <Footer themeColor={color.pink} />
    </div>
  )
}

export default AsobiArticles
