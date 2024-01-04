import { useLoaderData } from 'react-router-dom'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import Detail from './Detail'
import Footer from '../../components/Footer'
import { color } from '../../utils/constants'
import Error from '../Error'
import { CrowdfundingLoaderData } from './loader'

const Crowdfunding: React.FC = () => {
  const { article } = useLoaderData() as CrowdfundingLoaderData

  if (!article) return <Error />
  return (
    <div>
      <InitPage />
      <ResponsiveFrame
        abstractSection={<Abstract {...article} />}
        detailSection={<Detail {...article} />}
      />
      <Footer themeColor={color.green} />
    </div>
  )
}

export default Crowdfunding
