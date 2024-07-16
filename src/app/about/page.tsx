import Image from 'next/image';
import type { Metadata } from 'next';
import Mv from '../../component/templates/Mv';
import Text from '../../component/atoms/Text';

export const metadata: Metadata = {
  title: 'About',
  description: '私について',
}

export default function About() {
  return (
    <main className="p-knowledge">
      <Mv title={'KNOWLEDGE'} />
      <section className='l-section--lv2'>
          <div className='l-container'>
            <h2 className='l-heading--h2'>私について</h2>
            <Text {...{ text:'鋭意作成中です。', color:'normal', align:'center', props:'normal', pcSize:16, spSize:15 }} />
          </div>
        </section>
    </main>
  )
}