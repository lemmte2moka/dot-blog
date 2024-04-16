import Link from "next/link";

interface ButtonLink {
  href: string;
  text: string;
  position: string;
}

const Button: React.FC<ButtonLink> = ({ href, text, position }) => {
  return (
    <div className="l-button">
      <p className={`l-button__wrapper is-${position}`}>
        <Link href={href} className="l-button__link">
          <span className="l-button__more-text">MORE</span>
          <span className="l-button__label">{text}</span>
        </Link>
      </p>
    </div>
  );
}

export default Button;