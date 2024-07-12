import Image from "next/image";
import Link from "next/link";
import Button from "../../atoms/Button";
import FadeIn from '../../atoms/FadeIn';
import TextShuffle from '../../atoms/TextShuffle';

const About = () => {
  return(
    <section className="p-top-about">
      <div className="l-container">
        <FadeIn>
          <h2 className='p-top-about__heading l-heading'>
            <span className='l-heading--en'><TextShuffle>ABOUT</TextShuffle></span>
            <span className='l-heading--ja'><TextShuffle delay="0.5s">私について</TextShuffle></span>
          </h2>
        </FadeIn>
        <div className="p-top-about__contents">
          <div className="p-top-about__description">
            <p className="p-top-about__text"><TextShuffle delay="1s">サッカー観戦とキャンプと服とゲームが好きなWEBのエンジニアです。<br />たまにフロントエンドについて書いたり、趣味について書いたりしてます。</TextShuffle></p>
            <FadeIn delay="1s"><Button {...{href: '/about/', subText:'MORE', text: 'ABOUT', position: 'left', specialClass: 'p-top-about__button' }} /></FadeIn>
          </div>
          <div className="p-top-about__images">
            <p className="p-top-about__media is-first">
              <Image
                src="/images/top/img_football.svg"
                alt=""
                width="300"
                height="300"
                className="p-top-about__media-img"
                priority
              >
              </Image>
            </p>
            <p className="p-top-about__media is-second">
              <Image
                src="/images/top/img_game.svg"
                alt=""
                width="300"
                height="300"
                className="p-top-about__media-img"
                priority
              >
              </Image>
            </p>
            <p className="p-top-about__media is-third">
              <Image
                src="/images/top/img_fashion.svg"
                alt=""
                width="300"
                height="300"
                className="p-top-about__media-img is-first"
                priority
              >
              </Image>
            </p>
            <p className="p-top-about__media is-fourth">
              <Image
                src="/images/top/img_engineer.svg"
                alt=""
                width="300"
                height="300"
                className="p-top-about__media-img is-first"
                priority
              >
              </Image>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;