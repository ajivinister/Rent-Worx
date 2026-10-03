// Auto-scrolling testimonials marquee (CSS-animated, pauses on hover).
// Content is duplicated so the scroll loops seamlessly (matches Aji's build).
const testimonials = [
  {
    text: "Thank you, Rajiv(Rent Worx) for finding us such lovely tenants. We also really appreciated the way you looked after the small teething issues and sorted them out quickly and gracefully. It made the whole process easy and stress-free.",
    author: "- MK (Landlord)",
  },
  {
    text: "Rent Worx - Rajiv has immense knowledge of the real estate industry. He made the whole process smooth and straightforward, and we were very happy with the outcome. His advice and guidance were greatly appreciated. Highly recommended for his professional and reliable service.",
    author: "- D Brannigan (Landlord)",
  },
  {
    text: "Rajiv helped us rent our house in Papakura in a very short time. He guided us through the whole process and also gave us helpful advice about Healthy Homes requirements. We really appreciated his help and straightforward advice.",
    author: "- Mr Sharma (Landlord)",
  },
  {
    text: "Really happy with the service from Rent Worx. They are responsive, thorough, and always professional. Nothing is ever too much trouble, and they make managing the property good.",
    author: "- Na Hui (Landlord)",
  },
];

export default function TestimonialsMarquee() {
  const loop = [...testimonials, ...testimonials];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {loop.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-text">{t.text}</p>
            <p className="testimonial-author">{t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
