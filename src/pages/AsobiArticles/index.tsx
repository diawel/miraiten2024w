import InitPage from '../../components/InitPage'
import { useLoaderData } from 'react-router-dom'
import { AsobiArticlesLoaderData } from './loader'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import ArticlesDetail from '../../components/ArticlesDetail'

const AsobiArticles: React.FC = () => {
  const { articles } = useLoaderData() as AsobiArticlesLoaderData
  return (
    <>
      <InitPage pageTitle="新しい遊びの提案" />
      <ResponsiveFrame
        abstractSection={<Abstract />}
        detailSection={<ArticlesDetail api="asobi" {...{ articles }} />}
      />
    </>
  )
}

export default AsobiArticles
