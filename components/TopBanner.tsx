// Top contact + emergency banner (shown on every page).
export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="container">
        <div className="contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +64 21 712 912
        </div>
        <div className="emergency-text">In any emergency such as fire or theft, please call 111</div>
        <div className="contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          rajiv@rentworx.co.nz
        </div>
      </div>
    </div>
  );
}
