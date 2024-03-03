import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <p className="l-header__logo">
          <Link href="/" className="l-header__logo-link">
            <Image
              src="/images/common/img_logo.png"
              alt="blog ommlet"
              width="110"
              height="80"
              className="l-header__logo-img"
            />
          </Link>
        </p>
        <nav className="l-header__nav">
          <ul className="l-header__nav-list">
            <li className="l-header__nav-item">
              <Link href="/blog/" className="l-header__nav-link">
                BLOG
              </Link>
            </li>
            <li className="l-header__nav-item">
              <Link href="/works/" className="l-header__nav-link">
                WORKS
              </Link>
            </li>
            <li className="l-header__nav-item">
              <Link href="/blog/" className="l-header__nav-link">
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}