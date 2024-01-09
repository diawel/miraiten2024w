import ArticlesAbstractContainer from '../../../components/ArticlesAbstractContainer'
import FlowSlider from '../../../components/FlowSlider'
import StepCard from '../../../components/FlowSlider/StepCard'

const Abstract: React.FC = () => {
  return (
    <ArticlesAbstractContainer
      title="新しい遊びの提案"
      subtitle="複数人で楽しむ感覚制限ゲーム"
      flowSlider={
        <FlowSlider>
          <StepCard
            image="/assets/sample.png"
            number={1}
            text="実際にグループメンバーと一緒にあそんで分析"
          />
          <StepCard
            image="/assets/sample.png"
            number={2}
            text="ゲームの試作品を制作"
          />
          <StepCard image="/assets/sample.png" number={3} text="完成" />
        </FlowSlider>
      }
    />
  )
}

export default Abstract
