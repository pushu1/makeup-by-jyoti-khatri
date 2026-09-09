import React, { useState, useEffect, useRef } from 'react';

export default function MainServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-first-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="services-exact-container">
        <div className="services-exact-composition">
          {/* LEFT 5 SERVICE PANELS */}
          <div className="services-exact-left-grid">
            {/* CARD 01 */}
            <div className="services-exact-card card-exact-1">
              <h3 className="card-exact-title">Bride’s Light Makeover</h3>
              <p className="card-exact-desc">
                Perfect for intimate ceremonies or pre-wedding shoots, our Bride’s Light Makeover enhances natural beauty with a soft and radiant look tailored to your style.
              </p>
            </div>

            {/* CARD 02 */}
            <div className="services-exact-card card-exact-2">
              <h3 className="card-exact-title">Bridal Makeover</h3>
              <p className="card-exact-desc">
                Create unforgettable memories with a flawless bridal look. Our Bridal Makeover is customized to match your personality, outfit, and wedding theme, ensuring a picture-perfect moment.
              </p>
            </div>

            {/* CARD 03 (FULL WIDTH SPAN) */}
            <div className="services-exact-card card-exact-3 card-exact-wide">
              <h3 className="card-exact-title">Air Brush</h3>
              <p className="card-exact-desc">
                Experience the magic of airbrush makeup for a flawless, lightweight, and long-lasting finish. Perfect for weddings, special events, and photoshoots, our advanced airbrush technique ensures a smooth, natural look that stays fresh all day.
              </p>
            </div>

            {/* CARD 04 */}
            <div className="services-exact-card card-exact-4">
              <h3 className="card-exact-title">Reception / Sangeet Makeover</h3>
              <p className="card-exact-desc">
                Shine at your reception or sangeet with a glamorous makeover that complements your outfit and the event’s vibe. Let us create a stunning look that turns heads.
              </p>
            </div>

            {/* CARD 05 */}
            <div className="services-exact-card card-exact-5">
              <h3 className="card-exact-title">Light or Party Makeover</h3>
              <p className="card-exact-desc">
                Be party-ready with our Light or Party Makeover. From subtle elegance to bold statements, we craft looks that make you feel confident and beautiful for every celebration.
              </p>
            </div>
          </div>

          {/* RIGHT TALL VERTICAL BEAUTY IMAGE */}
          <div className="services-exact-right-image">
            <div className="services-exact-image-wrapper">
              <img
                src="/images/jyotikhatri222222.png"
                alt="Bridal Makeup Portrait"
                className="services-exact-portrait-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
