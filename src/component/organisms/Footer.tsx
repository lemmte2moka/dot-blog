import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-footer__top">
        <div className="l-footer__inner">
          <p className="l-footer__title">BLOG CATEGORY</p>
            <ul className="l-footer__category-list">
              <li className="l-footer__category-item">
                <Link href="/blog/?category=frontend" className="l-footer__category-link">フロントエンド</Link>
              </li>
              <li className="l-footer__category-item">
                <Link href="/blog/?category=design" className="l-footer__category-link">デザイン</Link>
              </li>
              <li className="l-footer__category-item">
                <Link href="/blog/?category=creativecoder" className="l-footer__category-link">クリエイティブコーダー</Link>
              </li>
            </ul>
        </div>
      </div>
      <div className="l-footer__bottom">
        <div className="l-footer__inner">
          <ul className="l-footer__nav-list">
            <li className="l-footer__nav-item">
              <Link href="/blog/" className="l-footer__nav-link">BLOG</Link>
            </li>
            <li className="l-footer__nav-item">
              <Link href="/about/" className="l-footer__nav-link">ABOUT</Link>
            </li>
            <li className="l-footer__nav-item">
              <Link href="/knowledge/" className="l-footer__nav-link">KNOWLEDGE</Link>
            </li>
          </ul>
          <p className="l-footer__copyright"><small className="l-footer__copyright-text">Copyright &copy; 2024 All Rights Reserved.</small></p>
        </div>
      </div>
    </footer>
  );
}