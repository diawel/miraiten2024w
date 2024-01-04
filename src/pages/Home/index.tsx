import Footer from '../../components/Footer'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import { color } from '../../utils/constants'
import Detail from './Detail'
import Kv from './Kv'

const Home: React.FC = () => {
  return (
    <div>
      <InitPage />
      <ResponsiveFrame abstractSection={<Kv />} detailSection={<Detail />} />
      <Footer themeColor={color.orange} />
    </div>
  )
}

export default Home
