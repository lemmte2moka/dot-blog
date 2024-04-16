import Image from "next/image";
import Link from "next/link";
import Button from "../../component/Button";

const About = () => {
  return(
    <section className="p-top-about">
      <div className="l-container">
        <h2 className='p-top-about__heading l-heading'>
          <span className='l-heading--en'>ABOUT</span>
          <span className='l-heading--ja'>私について</span>
        </h2>
        <div className="p-top-about__contents">
          <div className="p-top-about__description">
            <p className="">サッカー観戦とキャンプと服とゲームが好きなWEBのエンジニアです。<br />たまにフロントエンドについて書いたり、趣味について書いたりしてます。</p>
            <Button {...{href: '/about/', text: 'ABOUT', position: 'left'}} />
          </div>
          <div className="p-top-about__images">

          </div>
        </div>
      </div>
    </section>
  )
}

export default About;