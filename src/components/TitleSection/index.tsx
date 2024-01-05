import Paragraph from '../Paragraph'
import * as styles from './index.css'

export type TitleSectionProps = {
  title: string
  shortDescription: string
  description?: string
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  shortDescription,
  description,
}) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <Paragraph text={description ?? shortDescription} />
    </div>
  )
}

export default TitleSection
