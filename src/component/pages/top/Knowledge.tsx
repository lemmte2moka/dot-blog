import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import KnowledgeItems from './KnowledgeItems';
export default async function Knowledge() {
  return (
    <section className='p-top-knowledge'>
      <div className='l-container'>
        <h2 className='p-top-knowledge__heading l-heading'>
          <span className='l-heading--en'>KNOWLEDGE</span>
          <span className='l-heading--ja'>ナレッジ</span>
        </h2>
        <div className='p-top-knowledge__contents'>
          <div className='p-top-knowledge__aside'>
            <Text {...{ text:'様々なソースから得た知見をナレッジとして蓄積させてます。<br>主にフロントエンドやデザインがメインで、趣味などの情報も掲載してます。', color:'normal', align:'left', props:'normal', pcSize:16, spSize:15 }} />
            <Button {...{href: '/knowledge/', subText:'MORE', text: 'KNOWLEDGE', position: 'left', specialClass: 'p-top-knowledge__button' }} />
          </div>
          <div className='p-top-knowledge__item'>
            <KnowledgeItems />
          </div>
        </div>
      </div>
    </section>
  )
}