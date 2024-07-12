import Bubble from '../../templates/Bubble';
import TextShuffle from '../../atoms/TextShuffle';
export default async function Mv() {
  const setBubble = {mainColor:'blue',subColor:'light-blue',topPc:'-450',topSp:'-270',bottomPc:'',bottomSp:''}
  return (
    <section className='p-top-mv'>
      <Bubble {...setBubble} />
      <div className='l-container'>
        <hgroup>
          <h1 className='p-top-mv__heading'>
            <span className="p-top-mv__heading-main">
              <TextShuffle delay="1s">
                <span>.BLOG</span>
              </TextShuffle>
            </span>
          </h1>
          <div className='p-top-mv__lead--en'>
            <TextShuffle delay="1s">
              <span>Blog for frontend engineer.</span>
            </TextShuffle>
          </div>
          <div className='p-top-mv__lead--ja'>
            <TextShuffle delay="1s">
              <span>フロントエンドエンジニアの</span>
            </TextShuffle>
            <br className="is-sp" />
            <TextShuffle delay="1s">
              <span>つぶやき</span>
            </TextShuffle>
          </div>
        </hgroup>
      </div>
    </section>
  )
}