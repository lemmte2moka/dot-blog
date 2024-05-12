import Link from "next/link";

interface ButtonLink {
  href: string;
  subText: string;
  text: string;
  position: string;
  specialClass: string;
}

const Button: React.FC<ButtonLink> = ({ href, subText, text, position, specialClass }) => {
  return (
    <div className={`l-button ${specialClass}`}>
      <p className={`l-button__wrapper is-${position}`}>
        <Link href={href} className="l-button__link">
          <span className="l-button__more-text">{subText}</span>
          <span className="l-button__label">{text}</span>
        </Link>
      </p>
    </div>
  );
}

export default Button;