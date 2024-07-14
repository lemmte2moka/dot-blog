import Bubble from './Bubble';
import TextShuffle from '../atoms/TextShuffle';
interface Title {
  title: string;
}
const Mv: React.FC<Title> = ({ title }) => {
  const setBubble = {mainColor:'blue',subColor:'light-blue',topPc:'-450',topSp:'-200',bottomPc:'',bottomSp:''}
  return (
    <section className='l-mv'>
      <Bubble {...setBubble} />
      <div className='l-container'>
        <div className='l-mv__heading'>
          <h1 className='l-heading--h1'><TextShuffle delay="0.8s">{title}</TextShuffle></h1>
        </div>
      </div>
    </section>
  )
}

export default Mv;