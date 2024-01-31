import { SlideType } from '..'
import * as styles from './index.css'

const typeList: SlideType = ['発表資料', '紹介スライド']

export type SlideTypeIndicatorProps = {
  slideType: SlideType
}

const SlideTypeIndicator: React.FC<SlideTypeIndicatorProps> = ({
  slideType,
}) => {
  return (
    <div className={styles.container}>
      {typeList.map((type) => (
        <div
          className={
            slideType.includes(type)
              ? styles.type.enabled
              : styles.type.disabled
          }
        >
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.54545L6.67568 11L16 1.5"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          {type}
        </div>
      ))}
    </div>
  )
}

export default SlideTypeIndicator
