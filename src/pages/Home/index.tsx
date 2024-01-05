import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Detail from './Detail'
import Kv from './Kv'

const Home: React.FC = () => {
  return (
    <>
      <InitPage />
      <ResponsiveFrame abstractSection={<Kv />} detailSection={<Detail />} />
    </>
  )
}

export default Home
