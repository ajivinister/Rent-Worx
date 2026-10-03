// Reusable parallax page banner with a glass text box (used on inner pages).
export default function PageBanner({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="page-banner" style={{ backgroundImage: `url('${image}')` }}>
      <div className="glass-text-box">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
