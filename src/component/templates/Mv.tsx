import Bubble from './Bubble';
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
          <h1 className='l-heading--h1'>{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default Mv;