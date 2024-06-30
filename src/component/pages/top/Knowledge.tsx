import Text from '../../atoms/Text';
export default async function Knowledge() {
  return (
    <section className='p-top-knowledge'>
      <div className='l-container'>
        <h2 className='p-top-knowledge__heading l-heading'>
          <span className='l-heading--en'>KNOWLEDGE</span>
          <span className='l-heading--ja'>ナレッジ</span>
        </h2>
        <Text {...{ text:'様々なソースから得た知見をナレッジとして蓄積させてます。<br>主にフロントエンドやデザインがメインですが、趣味などの情報もあるのでぜひご覧ください。', color:'normal', align:'left', props:'' }} />
      </div>
    </section>
  )
}