import Link from "next/link";

// Reusable call-to-action parallax banner. The button is either an internal
// route link or an external link (e.g. WhatsApp).
export default function CtaBanner({
  image,
  title,
  text,
  button,
}: {
  image: string;
  title: string;
  text: string;
  button?: { href: string; label: string; external?: boolean };
}) {
  return (
    <div className="cta-banner" style={{ backgroundImage: `url('${image}')` }}>
      <div className="glass-text-box">
        <h2>{title}</h2>
        <p>{text}</p>
        {button &&
          (button.external ? (
            <a href={button.href} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: "1rem" }}>
              {button.label}
            </a>
          ) : (
            <Link href={button.href} className="btn-primary">
              {button.label}
            </Link>
          ))}
      </div>
    </div>
  );
}
