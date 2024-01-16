import { useLoaderData } from 'react-router-dom'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Detail from './Detail'
import Kv from './Kv'
import { HomeLoaderData } from './loader'

const Home: React.FC = () => {
  const { crowdfundingArticles, asobiArticles } =
    useLoaderData() as HomeLoaderData
  return (
    <>
      <InitPage />
      <ResponsiveFrame
        abstractSection={<Kv />}
        detailSection={
          <Detail
            asobiThumbnails={asobiArticles.map((article) => article.thumbnail)}
            crowdfundingThumbnails={crowdfundingArticles.map(
              (article) => article.thumbnail
            )}
          />
        }
      />
    </>
  )
}

export default Home
