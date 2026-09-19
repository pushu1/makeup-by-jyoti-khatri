import React, { useState, useEffect, useRef } from 'react';

export default function HomeWhyChooseSection({ onOpenBooking }) {
  const [visible, setVisible] = useState(false);
  const [parallax, setParallax] = useState({ b1Y: 0, b2Y: 0, b3Y: 0, b4Y: 0 });
  const sectionRef = useRef(null);

  // High-resolution beauty & makeup assets
  const blockImages = {
    block1: "/images/jyotikhatri11.png", // Certified artists team
    block2: "/images/jyotikhatri6.png",  // Bridal makeover expertise
    block3: "/images/Post6.png",        // Luxury makeup products
    block4: "/images/jyotikhatri2222.png" // Occasion makeup glam
  };

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(element);

    // Safe fallback (Requirement 14): force visibility after 1.5s if observer fails or hasn't fired
    const fallbackTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  // Subtle Parallax Scroll Displacement for Desktop Viewports
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth < 1024) {
        setParallax({ b1Y: 0, b2Y: 0, b3Y: 0, b4Y: 0 });
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const delta = Math.max(-1, Math.min(1, (viewportCenter - sectionCenter) / (windowHeight * 0.8)));

        setParallax({
          b1Y: delta * -12,
          b2Y: delta * 6,
          b3Y: delta * 10,
          b4Y: delta * -6
        });
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose-editorial"
      className={`home-why-choose-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="container">
        {/* CENTERED SECTION HEADER */}
        <div className="why-choose-header">
          <h2 className="why-choose-title">
            Why Choose Jyoti Khatri for Your Transformation?
          </h2>
          <div className="heading-gold-line">
            <span></span>
          </div>
          <p className="why-choose-subtitle">
            Trusted by hundreds in Jodhpur, we specialize in personalized makeovers and expert beauty training to bring out your best self. With a passion for detail and innovation, we redefine beauty with every brushstroke.
          </p>
        </div>

        {/* MAIN EDITORIAL MASONRY COMPOSITION */}
        <div className="why-choose-editorial-wrapper">
          {/* CONTINUOUS ORGANIC FLOWING SVG LINE PATH BEHIND CONTENT */}
          <svg className="why-choose-connecting-line" viewBox="0 0 1200 420" fill="none" preserveAspectRatio="none">
            <path
              d="M 120 120 C 280 30, 340 320, 480 200 C 620 80, 760 350, 1020 160 C 1100 80, 1160 220, 1190 280"
              stroke="#C5A059"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.45"
            />
          </svg>

          {/* DECORATIVE GOLD STAR ACCENTS */}
          <div className="why-choose-gold-accent accent-star-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#C5A059">
              <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 20.5 12 16 5.5 20.5 7.5 13.5 2 9 9 9 12 2"></polygon>
            </svg>
          </div>
          <div className="why-choose-gold-accent accent-star-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C5A059">
              <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 20.5 12 16 5.5 20.5 7.5 13.5 2 9 9 9 12 2"></polygon>
            </svg>
          </div>

          {/* 4 EDITORIAL COLUMNS / BLOCKS */}
          <div className="why-choose-editorial-grid">
            {/* BLOCK 01 — LEFT (Card 1) */}
            <div
              className={`editorial-block block-1 ${visible ? 'editorial-block-visible' : ''}`}
              style={{ '--parallax-y': `${parallax.b1Y}px` }}
            >
              <div className="editorial-img-frame frame-1">
                <img
                  src={blockImages.block1}
                  alt="Trained and Certified Makeup Artists"
                  loading="lazy"
                />
              </div>
              <div className="editorial-text-box">
                <h3 className="editorial-title">
                  Trained and Certified Makeup Artists
                </h3>
                <p className="editorial-desc">
                  Led by Jyoti Khatri, a certified luxury bridal makeup artist, our team stays updated with trending makeup techniques to ensure your look is always in style.
                </p>
              </div>
            </div>

            {/* BLOCK 02 — CENTER LEFT */}
            <div
              className={`editorial-block block-2 ${visible ? 'editorial-block-visible' : ''}`}
              style={{ '--parallax-y': `${parallax.b2Y}px` }}
            >
              <div className="editorial-text-box">
                <h3 className="editorial-title">
                  Expertise Backed by Experience
                </h3>
                <p className="editorial-desc">
                  Renowned for bridal makeup in Jodhpur, we specialize in creating flawless, personalized looks for weddings, engagements, and special events, ensuring you shine on your big day.
                </p>
              </div>
              <div className="editorial-img-frame frame-2">
                <img
                  src={blockImages.block2}
                  alt="Expertise Backed by Experience"
                  loading="lazy"
                />
              </div>
            </div>

            {/* BLOCK 03 — CENTER RIGHT (Card 2) */}
            <div
              className={`editorial-block block-3 ${visible ? 'editorial-block-visible' : ''}`}
              style={{ '--parallax-y': `${parallax.b3Y}px` }}
            >
              <div className="editorial-img-frame frame-3">
                <img
                  src={blockImages.block3}
                  alt="Luxury Makeup Services with Top Brands"
                  loading="lazy"
                />
              </div>
              <div className="editorial-text-box">
                <h3 className="editorial-title">
                  Luxury Makeup Services with Top Brands
                </h3>
                <p className="editorial-desc">
                  We use only premium, high-end makeup products to deliver flawless makeup looks that last all day. From HD makeup to airbrush techniques, we bring the latest trends to life.
                </p>
              </div>
            </div>

            {/* BLOCK 04 — RIGHT */}
            <div
              className={`editorial-block block-4 ${visible ? 'editorial-block-visible' : ''}`}
              style={{ '--parallax-y': `${parallax.b4Y}px` }}
            >
              <div className="editorial-text-box">
                <h3 className="editorial-title">
                  Customized Solution For Each Occasion
                </h3>
                <p className="editorial-desc">
                  Whether it's your wedding, engagement, or a party, we offer customized makeup packages tailored to your skin type, style, and preferences.
                </p>
              </div>
              <div className="editorial-img-frame frame-4">
                <img
                  src={blockImages.block4}
                  alt="Customized Solution For Each Occasion"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
