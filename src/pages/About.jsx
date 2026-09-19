import React, { useState, useEffect, useRef } from 'react';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import StatItem from '../components/StatItem';

export default function About({ onOpenBooking }) {
  const { seo, aboutPage, social } = contentConfig;
  useDocumentTitle(seo.about.title, seo.about.description);

  const aData = aboutPage || {};
  const hero = aData.hero || {};
  const moreThanMakeup = aData.moreThanMakeup || {};
  const principles = aData.principles || [];
  const signatureSec = aData.signatureSection || {};
  const behindBrushes = aData.behindBrushes || {};
  const stats = aData.stats || [];
  const finalCTA = aData.finalCTA || {};

  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    const failsafe = setTimeout(() => {
      setIsStatsVisible(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const [isSignatureVisible, setIsSignatureVisible] = useState(false);
  const signatureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSignatureVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    );

    if (signatureRef.current) {
      observer.observe(signatureRef.current);
    }

    const failsafe = setTimeout(() => {
      setIsSignatureVisible(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    const failsafe = setTimeout(() => {
      setIsCtaVisible(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open(social.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToStory = (e) => {
    e.preventDefault();
    const elem = document.getElementById('my-story');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page-redesign">
      {/* 2. ABOUT HERO (55% IMAGE + 45% CONTENT SPLIT EDITORIAL) */}
      <section className="about-editorial-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            {/* LEFT: 55% Image Cluster */}
            <div className="about-hero-visual-col">
              <div className="about-hero-main-frame">
                <img src={hero.mainImage} alt={hero.title} className="about-hero-main-img" />
                <div className="about-hero-gold-border"></div>
                <div className="about-hero-circle-accent"></div>
              </div>
              <div className="about-hero-detail-frame">
                <img src={hero.detailImage} alt="Artistry detail" />
              </div>
              <div className="about-hero-vertical-label">{hero.sideLabel}</div>
            </div>

            {/* RIGHT: 45% Content Column */}
            <div className="about-hero-content-col">
              <span className="editorial-eyebrow gold">{hero.eyebrow}</span>
              <h1 className="about-hero-title">{hero.title}</h1>
              <h2 className="about-hero-subtitle">{hero.subtitle}</h2>
              <p className="about-hero-desc">{hero.description}</p>
              
              <div className="about-hero-signature-row">
                <span className="signature-text-accent">{hero.signature}</span>
                <div className="gold-divider-small"></div>
              </div>

              <div className="about-hero-action">
                <a href="#my-story" onClick={handleScrollToStory} className="about-hero-cta-btn">
                  <span>{hero.ctaText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MORE THAN MAKEUP SECTION (#my-story) */}
      <section className="about-more-than-makeup-section" id="my-story">
        <div className="container">
          <div className="more-than-makeup-grid">
            <div className="more-than-makeup-text-col">
              <span className="editorial-eyebrow">{moreThanMakeup.label}</span>
              <div className="heading-with-marker">
                <span className="section-number-marker">{moreThanMakeup.num}</span>
                <h2 className="editorial-title">{moreThanMakeup.title}</h2>
              </div>
              <div className="gold-divider-left mb-4"></div>

              {moreThanMakeup.paragraphs && moreThanMakeup.paragraphs.map((p, idx) => (
                <p key={idx} className="more-than-makeup-paragraph">{p}</p>
              ))}
            </div>

            <div className="more-than-makeup-img-col">
              <div className="more-than-makeup-img-frame">
                <img src={moreThanMakeup.image} alt={moreThanMakeup.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE JYOTI APPROACH SECTION (4 HORIZONTAL PRINCIPLES) */}
      <section className="about-principles-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">PHILOSOPHY</span>
            <h2 className="editorial-title">The Jyoti Khatri Approach</h2>
            <div className="gold-divider-center"></div>
          </div>

          <div className="principles-horizontal-list">
            {principles.map((pr) => (
              <div key={pr.num} className="principle-row-item">
                <div className="principle-num">{pr.num}</div>
                <div className="principle-title-col">
                  <h3 className="principle-title">{pr.title}</h3>
                </div>
                <div className="principle-desc-col">
                  <p className="principle-desc">{pr.description}</p>
                </div>
                <div className="principle-hover-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MY SIGNATURE SECTION (DARK ESPRESSO BACKGROUND - FULLY CENTERED WITH SEQUENTIAL SCROLL ANIMATION) */}
      <section
        ref={signatureRef}
        className={`about-signature-section ${isSignatureVisible ? 'is-visible' : ''}`}
      >
        <div className="container text-center">
          <span className="editorial-eyebrow gold sig-anim-eyebrow">OUR ESSENCE</span>
          <h2 className="about-signature-heading sig-anim-heading">{signatureSec.heading}</h2>
          
          <div className="about-signature-words-row">
            {signatureSec.words && signatureSec.words.map((word, idx) => (
              <React.Fragment key={word}>
                <span className={`signature-word sig-anim-word-${idx + 1}`}>{word}</span>
                {idx < signatureSec.words.length - 1 && (
                  <span className={`word-dot sig-anim-dot-${idx + 1}`}>•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="about-signature-description sig-anim-desc">{signatureSec.description}</p>
        </div>
      </section>

      {/* 7. BEHIND THE BRUSHES SECTION */}
      <section className="about-behind-brushes-section">
        <div className="container">
          <div className="behind-brushes-grid">
            <div className="behind-brushes-img-col">
              <div className="behind-brushes-img-frame">
                <img src={behindBrushes.image} alt={behindBrushes.heading} />
                {behindBrushes.microLabel && (
                  <span className="micro-label-badge">{behindBrushes.microLabel}</span>
                )}
              </div>
            </div>

            <div className="behind-brushes-text-col">
              <span className="editorial-eyebrow">BEHIND THE BRUSHES</span>
              <h2 className="editorial-title">{behindBrushes.heading}</h2>
              <div className="gold-divider-left mb-4"></div>

              {behindBrushes.paragraphs && behindBrushes.paragraphs.map((p, idx) => (
                <p key={idx} className="behind-brushes-paragraph">{p}</p>
              ))}

              <div className="behind-brushes-signature">
                <span className="signature-text-gold">{behindBrushes.signature}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STATS SECTION */}
      <section
        ref={statsRef}
        className={`about-stats-section ${isStatsVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <div className="about-stats-minimal-grid">
            {stats.map((st, idx) => (
              <StatItem
                key={idx}
                numberStr={st.number}
                labelStr={st.label}
                index={idx}
                isSectionVisible={isStatsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION (PERFECTLY CENTERED WITH SEQUENTIAL SCROLL ANIMATION & BUTTON HOVER) */}
      <section
        ref={ctaRef}
        className={`about-final-cta-section ${isCtaVisible ? 'is-visible' : ''}`}
      >
        <div className="container text-center">
          <span className="editorial-eyebrow gold cta-anim-eyebrow">RESERVE YOUR MOMENT</span>
          <h2 className="about-final-cta-title cta-anim-title">{finalCTA.title}</h2>
          <p className="about-final-cta-subtitle cta-anim-subtitle">{finalCTA.subtitle}</p>

          <div className="about-final-cta-buttons cta-anim-buttons">
            <button
              className="btn btn-primary cta-btn-book"
              onClick={() => onOpenBooking && onOpenBooking('About Page Appointment')}
            >
              {finalCTA.buttonText}
            </button>
            <button
              className="btn btn-whatsapp cta-btn-whatsapp"
              onClick={handleWhatsAppClick}
            >
              START A CONVERSATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
