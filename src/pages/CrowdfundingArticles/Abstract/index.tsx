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
            image={import.meta.env.BASE_URL + '/assets/crowdfunding0.jpg'}
            number={1}
            text="様々なクラウドファンディングの分析"
          />
          <StepCard
            image={import.meta.env.BASE_URL + '/assets/crowdfunding1.jpg'}
            number={2}
            text="サービスの典型的なユーザー像を考える"
          />
          <StepCard
            image={import.meta.env.BASE_URL + '/assets/crowdfunding2.jpg'}
            number={3}
            text="企画案の発表と問題点の改善"
          />
          <StepCard
            image={import.meta.env.BASE_URL + '/assets/crowdfunding3.jpg'}
            number={4}
            text="完成"
          />
        </FlowSlider>
      }
    />
  )
}

export default Abstract
