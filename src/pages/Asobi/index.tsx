import { useLoaderData } from 'react-router-dom'
import { AsobiLoaderData } from './loader'
import InitPage from '../../components/InitPage'
import ResponsiveFrame from '../../components/ResponsiveFrame'
import Abstract from './Abstract'
import Detail from './Detail'

const Asobi: React.FC = () => {
  const { article } = useLoaderData() as AsobiLoaderData
  return (
    <>
      <InitPage />
      <ResponsiveFrame
        abstractSection={<Abstract {...article} />}
        detailSection={<Detail {...article} />}
      />
    </>
  )
}

export default Asobi
