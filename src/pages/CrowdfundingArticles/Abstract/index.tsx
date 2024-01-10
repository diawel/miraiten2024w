import ArticlesAbstractContainer from '../../../components/ArticlesAbstractContainer'
import FlowSlider from '../../../components/FlowSlider'
import StepCard from '../../../components/FlowSlider/StepCard'

const Abstract: React.FC = () => {
  return (
    <ArticlesAbstractContainer
      title="人に寄り添うサービス・アイテムの提案"
      subtitle="5年以内に実現可能な新しいアイデア"
      flowSlider={
        <FlowSlider>
          <StepCard
            image={import.meta.env.BASE_URL + '/assets/sample.png'}
            number={1}
            text="実際にグループメンバーと一緒にあそんで分析"
          />
          <StepCard
            image={import.meta.env.BASE_URL + '/assets/sample.png'}
            number={2}
            text="ゲームの試作品を制作"
          />
          <StepCard
            image={import.meta.env.BASE_URL + '/assets/sample.png'}
            number={3}
            text="完成"
          />
        </FlowSlider>
      }
    />
  )
}

export default Abstract
