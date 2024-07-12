import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import KnowledgeItems from './KnowledgeItems';
import FadeIn from '../../atoms/FadeIn';
import TextShuffle from '../../atoms/TextShuffle';
export default async function Knowledge() {
  return (
    <section className='p-top-knowledge'>
      <div className='l-container'>
        <FadeIn>
          <h2 className='p-top-knowledge__heading l-heading'>
            <span className='l-heading--en'><TextShuffle>KNOWLEDGE</TextShuffle></span>
            <span className='l-heading--ja'><TextShuffle delay="0.5s">ナレッジ</TextShuffle></span>
          </h2>
        </FadeIn>
        <div className='p-top-knowledge__contents'>
          <div className='p-top-knowledge__aside'>
          <FadeIn delay="1s"><Text {...{ text:'様々なソースから得た知見をナレッジとして蓄積させてます。<br>主にフロントエンドやデザインがメインで、趣味などの情報も掲載してます。', color:'normal', align:'left', props:'normal', pcSize:16, spSize:15 }} /></FadeIn>
            <FadeIn delay="1.2s"><Button {...{href: '/knowledge/', subText:'MORE', text: 'KNOWLEDGE', position: 'left', specialClass: 'p-top-knowledge__button' }} /></FadeIn>
          </div>
          <div className='p-top-knowledge__item'>
          <FadeIn delay="1.5s">
              <KnowledgeItems />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}