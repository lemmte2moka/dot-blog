import Bubble from '../../component/Bubble';
export default async function Mv() {
  const setBubble = {mainColor:'blue',subColor:'light-blue',topPc:'-450',topSp:'-270',bottomPc:'',bottomSp:''}
  return (
    <section className='p-top-mv'>
      <Bubble {...setBubble} />
      <div className='l-container'>
        <h1 className='p-top-mv__heading'>
          <span className="p-top-mv__heading-main">.BLOG</span>
          <span className='p-top-mv__lead--en'>Blog for frontend engineer.</span>
          <span className='p-top-mv__lead--ja'>フロントエンドエンジニアの<br className="is-sp" />つぶやき</span>
        </h1>
      </div>
    </section>
  )
}