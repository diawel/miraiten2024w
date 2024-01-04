import { useLoaderData } from 'react-router-dom'
import { AsobiLoaderData } from './loader'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import Detail from './Detail'
import Footer from '../../components/Footer'
import { color } from '../../utils/constants'
import Error from '../Error'

const Asobi: React.FC = () => {
  const { article } = useLoaderData() as AsobiLoaderData

  if (!article) return <Error />
  return (
    <div>
      <InitPage />
      <ResponsiveFrame
        abstractSection={<Abstract {...article} />}
        detailSection={<Detail {...article} />}
      />
      <Footer themeColor={color.pink} />
    </div>
  )
}

export default Asobi
