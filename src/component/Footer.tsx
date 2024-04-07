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
                <Link href="#" className="l-footer__category-link">フロントエンド</Link>
              </li>
              <li className="l-footer__category-item">
                <Link href="#" className="l-footer__category-link">デザイン</Link>
              </li>
              <li className="l-footer__category-item">
                <Link href="#" className="l-footer__category-link">クリエイティブコーダー</Link>
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
          </ul>
          <p className="l-footer__copyright"><small className="l-footer__copyright-text">Copyright &copy; 2024 All Rights Reserved.</small></p>
        </div>
      </div>
    </footer>
  );
}