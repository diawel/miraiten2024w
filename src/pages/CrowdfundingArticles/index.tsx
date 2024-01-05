import InitPage from '../../components/InitPage'
import { useLoaderData } from 'react-router-dom'
import { AsobiArticlesLoaderData } from './loader'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import Detail from './Detail'

const CrowdfundingArticles: React.FC = () => {
  const { articles } = useLoaderData() as AsobiArticlesLoaderData
  return (
    <>
      <InitPage pageTitle="人に寄り添うサービス・アイテムの提案" />
      <ResponsiveFrame
        abstractSection={<Abstract />}
        detailSection={<Detail {...{ articles }} />}
      />
    </>
  )
}

export default CrowdfundingArticles
