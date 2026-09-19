import React, { useState, useEffect, useRef } from 'react';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Services({ onOpenBooking }) {
  const { seo, servicesPage, social } = contentConfig;
  useDocumentTitle(seo.services.title, seo.services.description);

  // Accordion state for FAQs (First FAQ open by default)
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOccasionClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(social.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const sp = servicesPage || {};
  const hero = sp.hero || {};
  const occasions = sp.occasions || [];
  const signatureServices = sp.signatureServices || [];
  const finishComp = sp.finishComparison || {};
  const pkgs = sp.packages || {};
  const journey = sp.serviceJourney || {};
  const custom = sp.customSection || {};
  const faqs = sp.faqs || [];
  const finalCTA = sp.finalCTA || {};

  // Section 4 Complexion Guide Editorial Reveal
  const [isFinishVisible, setIsFinishVisible] = useState(false);
  const finishSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFinishVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    if (finishSectionRef.current) {
      observer.observe(finishSectionRef.current);
    }

    const failsafe = setTimeout(() => {
      setIsFinishVisible(true);
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  // Section 6 Our Process Scroll-Driven Story Progression
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const journeyOuterRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const updateJourneyScroll = () => {
      if (!journeyOuterRef.current) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const rect = journeyOuterRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDistance = rect.height - windowHeight;

      if (totalDistance <= 0) return;

      const scrolled = -rect.top;
      let progress = scrolled / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      const stepIndex = Math.min(4, Math.floor(progress * 5));
      setActiveStepIndex(stepIndex);
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(updateJourneyScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateJourneyScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Cinematic CTA IntersectionObserver logic
  const [isCustomCtaVisible, setIsCustomCtaVisible] = useState(false);
  const customCtaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCustomCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (customCtaRef.current) {
      observer.observe(customCtaRef.current);
    }

    const failsafe = setTimeout(() => {
      setIsCustomCtaVisible(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const headingWords = (custom.heading || 'Need Something More Personal?').split(' ');

  // Section 9 Final CTA Cinematic Reveal & Parallax
  const [isFinalCtaVisible, setIsFinalCtaVisible] = useState(false);
  const finalCtaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFinalCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (finalCtaRef.current) {
      observer.observe(finalCtaRef.current);
    }

    const failsafe = setTimeout(() => {
      setIsFinalCtaVisible(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const [parallaxPos, setParallaxPos] = useState({ x: 0, y: 0 });

  const handleCtaMouseMove = (e) => {
    if (!finalCtaRef.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = finalCtaRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const moveY = ((e.clientY - centerY) / (rect.height / 2)) * 5;
    setParallaxPos({ x: moveX, y: moveY });
  };

  const handleCtaMouseLeave = () => {
    setParallaxPos({ x: 0, y: 0 });
  };

  const finalHeadingWords = (finalCTA.heading || "Let's Create Your Look.").split(' ');

  return (
    <div className="services-page-redesign">
      {/* SECTION 1: SERVICES HERO */}
      <section className="services-hero-section">
        <div className="services-hero-container">
          <div className="services-hero-content">
            <span className="services-hero-eyebrow">{hero.eyebrow}</span>
            <h1 className="services-hero-title">{hero.title}</h1>
            <p className="services-hero-subtitle">{hero.subtitle}</p>
            <div className="services-hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => onOpenBooking('General Service Enquiry')}
              >
                BOOK YOUR EXPERIENCE
              </button>
            </div>
          </div>
          <div className="services-hero-visual">
            <div className="services-hero-img-wrapper">
              <img
                src={hero.image}
                alt="Signature Beauty Services by Jyoti Khatri"
                className="services-hero-img"
              />
            </div>
            <div className="services-hero-vertical-tag">{hero.sideTag}</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHOOSE YOUR OCCASION */}
      <section className="services-occasions-section">
        <div className="container">
          <div className="section-header-editorial text-center">
            <span className="editorial-eyebrow">CURATED SELECTION</span>
            <h2 className="editorial-title">Choose Your Occasion</h2>
            <div className="gold-divider-center"></div>
          </div>

          <div className="occasions-grid">
            {occasions.map((occ) => (
              <div
                key={occ.id}
                className="occasion-tile"
                onClick={() => handleOccasionClick(occ.id)}
              >
                <div className="occasion-tile-bg">
                  <img src={occ.image} alt={occ.title} />
                  <div className="occasion-tile-overlay"></div>
                </div>
                <div className="occasion-tile-content">
                  <span className="occasion-tile-num">{occ.num}</span>
                  <h3 className="occasion-tile-title">{occ.title}</h3>
                  <p className="occasion-tile-desc">{occ.description}</p>
                  <span className="occasion-tile-link">
                    EXPLORE LOOK
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="occasion-tile-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE SERVICES */}
      <section className="services-signature-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">EXPERT ARTISTRY</span>
            <h2 className="editorial-title">The Art of the Look</h2>
            <p className="editorial-subtitle">
              Distinctive beauty makeovers customized to your features, skin undertone, and wardrobe aesthetics.
            </p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="signature-services-list">
            {signatureServices.map((service) => {
              const isRight = service.imagePosition === 'right';
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`signature-service-block ${
                    isRight ? 'image-right' : 'image-left'
                  }`}
                >
                  <div className="signature-service-img-col">
                    <div className="signature-service-img-frame">
                      <img src={service.image} alt={service.title} />
                      <span className="signature-service-num">{service.num}</span>
                    </div>
                  </div>

                  <div className="signature-service-text-col">
                    <span className="signature-service-eyebrow">
                      SERVICE {service.num}
                    </span>
                    <h3 className="signature-service-title">{service.title}</h3>

                    <blockquote className="signature-service-quote">
                      "{service.quote}"
                    </blockquote>

                    <p className="signature-service-desc">{service.description}</p>

                    <div className="signature-service-highlights">
                      <span className="highlights-label">INCLUDED HIGHLIGHTS:</span>
                      <div className="highlights-chips">
                        {service.highlights.map((item, i) => (
                          <span key={i} className="highlight-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="signature-service-action">
                      <button
                        className="btn btn-outline-gold"
                        onClick={() => onOpenBooking(service.title)}
                      >
                        {service.ctaText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FIND YOUR FINISH */}
      <section
        ref={finishSectionRef}
        className={`services-finish-section ${isFinishVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <div className="section-header-editorial text-center">
            <span className="editorial-eyebrow">COMPLEXION GUIDE</span>
            <h2 className="editorial-title">{finishComp.heading}</h2>
            <p className="editorial-subtitle">{finishComp.subtext}</p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="finish-comparison-grid">
            {/* HD MAKEUP */}
            {finishComp.hd && (
              <div className="finish-card finish-card-hd">
                <div className="finish-card-header">
                  <span className="finish-badge">HIGH DEFINITION</span>
                  <h3 className="finish-title">{finishComp.hd.title}</h3>
                  <p className="finish-tagline">{finishComp.hd.tagline}</p>
                </div>
                <ul className="finish-points">
                  {finishComp.hd.points.map((pt, i) => (
                    <li key={i} className="finish-point-row">
                      <svg
                        className="check-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C5A059"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="point-text">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* AIRBRUSH MAKEUP */}
            {finishComp.airbrush && (
              <div className="finish-card finish-card-airbrush finish-card-highlighted">
                <div className="finish-card-header">
                  <span className="finish-badge gold">MICRO-MIST VEIL</span>
                  <h3 className="finish-title">{finishComp.airbrush.title}</h3>
                  <p className="finish-tagline">{finishComp.airbrush.tagline}</p>
                </div>
                <ul className="finish-points">
                  {finishComp.airbrush.points.map((pt, i) => (
                    <li key={i} className="finish-point-row">
                      <svg
                        className="check-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C5A059"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="point-text">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="finish-cta-box text-center mt-5">
            <p className="finish-cta-question">{finishComp.ctaQuestion}</p>
            <button
              className="btn btn-primary"
              onClick={() => onOpenBooking('HD / Airbrush Consultation')}
            >
              {finishComp.ctaBtnText}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: LUXURY PACKAGES */}
      <section className="services-packages-section">
        <div className="container">
          <div className="section-header-editorial text-center">
            <span className="editorial-eyebrow">BEAUTY COLLECTIONS</span>
            <h2 className="editorial-title">{pkgs.heading}</h2>
            <p className="editorial-subtitle">{pkgs.subtitle}</p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="packages-grid">
            {pkgs.list &&
              pkgs.list.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`package-card ${pkg.featured ? 'featured' : ''}`}
                >
                  {pkg.badge && <div className="package-badge">{pkg.badge}</div>}

                  <div className="package-header">
                    <h3 className="package-name">{pkg.name}</h3>
                    <p className="package-tagline">{pkg.tagline}</p>
                    <div className="package-price">{pkg.priceLabel}</div>
                  </div>

                  <div className="package-divider"></div>

                  <ul className="package-includes">
                    {pkg.includes.map((inc, idx) => (
                      <li key={idx}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C5A059"
                          strokeWidth="2"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="package-footer">
                    <button
                      className={`btn ${
                        pkg.featured ? 'btn-primary' : 'btn-outline-gold'
                      } full-width`}
                      onClick={() => onOpenBooking(pkg.name)}
                    >
                      ENQUIRE
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT'S INCLUDED (SERVICE JOURNEY - SCROLL-DRIVEN TIMELINE) */}
      <div ref={journeyOuterRef} className="services-journey-outer-container">
        <section className="services-journey-sticky-viewport">
          <div className="container">
            <div className="section-header-editorial text-center">
              <span className="editorial-eyebrow">OUR PROCESS</span>
              <h2 className="editorial-title">{journey.heading}</h2>
              <p className="editorial-subtitle">{journey.subtitle}</p>
              <div className="gold-divider-center"></div>
            </div>

            <div className="journey-interactive-wrapper">
              {/* Horizontal Timeline Bar with 5 Nodes & Progress Line */}
              <div className="journey-horizontal-timeline">
                <div className="journey-track-base"></div>
                <div
                  className="journey-track-progress"
                  style={{ width: `${(activeStepIndex / 4) * 100}%` }}
                ></div>

                <div className="journey-nodes-row">
                  {journey.steps &&
                    journey.steps.map((step, idx) => {
                      const isActive = idx === activeStepIndex;
                      const isCompleted = idx < activeStepIndex;

                      return (
                        <button
                          key={step.num}
                          type="button"
                          className={`journey-node-btn ${isActive ? 'active' : ''} ${
                            isCompleted ? 'completed' : ''
                          }`}
                          onClick={() => setActiveStepIndex(idx)}
                          aria-label={`Step ${step.num}: ${step.title}`}
                        >
                          <span className="node-num">{step.num}</span>
                          <span className="node-halo"></span>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Active Step Content Display Card */}
              <div className="journey-content-card-viewport">
                {journey.steps &&
                  journey.steps.map((step, idx) => {
                    const isActive = idx === activeStepIndex;

                    return (
                      <div
                        key={step.num}
                        className={`journey-step-card ${isActive ? 'active' : ''}`}
                        aria-hidden={!isActive}
                      >
                        <span className="step-card-num">0{idx + 1}</span>
                        <h3 className="step-card-title">{step.title}</h3>
                        <p className="step-card-desc">{step.desc}</p>
                      </div>
                    );
                  })}
              </div>

              {/* Mobile Vertical Timeline Stack */}
              <div className="journey-mobile-vertical-timeline">
                <div className="mobile-track-line"></div>
                <div
                  className="mobile-track-progress"
                  style={{ height: `${(activeStepIndex / 4) * 100}%` }}
                ></div>
                {journey.steps &&
                  journey.steps.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    const isCompleted = idx < activeStepIndex;

                    return (
                      <div
                        key={step.num}
                        className={`mobile-step-item ${isActive ? 'active' : ''} ${
                          isCompleted ? 'completed' : ''
                        }`}
                        onClick={() => setActiveStepIndex(idx)}
                      >
                        <div className="mobile-step-node">
                          <span>{step.num}</span>
                        </div>
                        <div className="mobile-step-content">
                          <h3 className="mobile-step-title">{step.title}</h3>
                          <p className="mobile-step-desc">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 7: CUSTOM PACKAGES */}
      <section className="services-custom-section" ref={customCtaRef}>
        <div className="container">
          <div className={`custom-experience-card text-center ${isCustomCtaVisible ? 'is-revealed' : ''}`}>
            {/* Gold Border Sweep Accent */}
            <div className="custom-card-border-sweep" aria-hidden="true"></div>

            <span className="editorial-eyebrow gold custom-cta-eyebrow">TAILORED BEAUTY</span>
            
            <h2 className="custom-title custom-cta-heading">
              {headingWords.map((word, idx) => (
                <span key={idx} className="custom-cta-word-mask">
                  <span
                    className="custom-cta-word"
                    style={{ animationDelay: `${350 + idx * 120}ms` }}
                  >
                    {word}{idx < headingWords.length - 1 ? '\u00A0' : ''}
                  </span>
                </span>
              ))}
            </h2>

            <p className="custom-desc custom-cta-desc">{custom.description}</p>

            <button
              className="btn btn-primary btn-large custom-cta-btn"
              onClick={() => onOpenBooking('Custom Bespoke Experience')}
            >
              <span className="btn-text">{custom.ctaText}</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE FAQ (LUXURY EDITORIAL MAGAZINE REDESIGN) */}
      <section className="services-faq-section-editorial" id="faq-section">
        {/* Subtle Watermark Typography */}
        <div className="faq-watermark-bg" aria-hidden="true">
          QUESTIONS
        </div>

        <div className="container relative-z">
          <div className="faq-editorial-grid">
            {/* LEFT COLUMN: Editorial Intro + Bridal Image + CTA */}
            <div className="faq-editorial-left">
              <div className="faq-sticky-wrapper">
                <div className="faq-eyebrow-container">
                  <span className="faq-eyebrow-line"></span>
                  <span className="editorial-eyebrow">CLEAR ANSWERS</span>
                  <span className="faq-eyebrow-line"></span>
                </div>

                <h2 className="faq-editorial-heading">
                  Everything You
                  <br />
                  <span className="gold-text">to Know</span>
                </h2>

                <div className="faq-gold-divider-line"></div>

                <p className="faq-editorial-intro-text">
                  From choosing the right makeup finish to preparing for your special occasion, here are the answers to the questions our clients ask most.
                </p>

                <div className="faq-cta-block">
                  <p className="faq-script-subtitle">Still have questions?</p>
                  <button
                    type="button"
                    className="btn-faq-cta"
                    onClick={() => onOpenBooking('FAQ Consultation')}
                  >
                    <span>LET'S TALK</span>
                    <span className="btn-circle-arrow" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Vertical Editorial Bridal Image Frame with Botanical Line-Art & Rotating Badge */}
                <div className="faq-bridal-image-wrapper">
                  {/* Subtle Botanical SVG Art */}
                  <svg
                    className="faq-botanical-art"
                    viewBox="0 0 200 200"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="1"
                    opacity="0.25"
                    aria-hidden="true"
                  >
                    <path d="M100 10 Q140 60 100 110 Q60 160 100 200 M100 50 Q160 80 100 110 M100 90 Q40 120 100 150" />
                  </svg>

                  {/* Circular Rotating Badge Text */}
                  <div className="faq-circular-badge" aria-hidden="true">
                    <svg viewBox="0 0 100 100" width="110" height="110">
                      <path
                        id="faqCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text font-size="8" letter-spacing="2.2" fill="#C5A059">
                        <textPath href="#faqCirclePath">
                          BEAUTY • BRIDAL • MAKEUP • CONFIDENCE •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  <div className="faq-bridal-img-frame">
                    <img
                      src="/images/jyotikhatr11111.png"
                      alt="Luxury Bridal Beauty by Jyoti Khatri"
                      className="faq-bridal-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Card-based Accordion */}
            <div className="faq-editorial-right">
              <div className="faq-right-header-label">
                FREQUENTLY ASKED QUESTIONS
              </div>

              <div className="faq-cards-stack">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  const itemNumber = String(index + 1).padStart(2, '0');
                  const questionText = faq.q || faq.question;
                  const answerText = faq.a || faq.answer;
                  const faqId = `faq-card-${index}`;
                  const answerId = `faq-card-answer-${index}`;

                  return (
                    <div
                      key={index}
                      className={`faq-editorial-card ${
                        isOpen ? 'active-faq-card' : ''
                      }`}
                    >
                      <button
                        type="button"
                        id={faqId}
                        className="faq-card-header-btn"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                      >
                        <span className="faq-card-number">{itemNumber}</span>

                        <h3 className="faq-card-question-text">
                          {questionText}
                        </h3>

                        <span
                          className="faq-card-circle-toggle"
                          aria-hidden="true"
                        >
                          <span className="faq-toggle-symbol">
                            {isOpen ? '×' : '+'}
                          </span>
                        </span>
                      </button>

                      <div
                        id={answerId}
                        role="region"
                        aria-labelledby={faqId}
                        className={`faq-card-answer-panel ${
                          isOpen ? 'expanded' : ''
                        }`}
                      >
                        <div className="faq-card-answer-content">
                          <div className="faq-vertical-accent-line"></div>
                          <p className="faq-card-answer-text">{answerText}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Footer Statement */}
              <div className="faq-decorative-footer text-center mt-5">
                <span className="faq-footer-line"></span>
                <span className="faq-footer-star">✦</span>
                <span className="faq-footer-text">
                  BEAUTY BEGINS WITH A CONVERSATION
                </span>
                <span className="faq-footer-star">✦</span>
                <span className="faq-footer-line"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section
        className={`services-final-cta-section ${isFinalCtaVisible ? 'is-revealed' : ''}`}
        ref={finalCtaRef}
        onMouseMove={handleCtaMouseMove}
        onMouseLeave={handleCtaMouseLeave}
      >
        {/* Animated Gold Top Border */}
        <div className="services-final-cta-top-border" aria-hidden="true"></div>

        <div className="services-final-cta-container">
          <div className="services-final-cta-overlay"></div>
          {finalCTA.image && (
            <img
              src={finalCTA.image}
              alt="Jyoti Khatri Makeup"
              className="services-final-cta-bg-img"
              style={{
                transform: `scale(${isFinalCtaVisible ? 1 : 1.06}) translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px)`
              }}
            />
          )}

          <div className="services-final-cta-content text-center">
            <span className="editorial-eyebrow gold services-final-cta-eyebrow">
              RESERVE YOUR DATE
            </span>

            <h2 className="services-final-cta-title">
              {finalHeadingWords.map((word, idx) => (
                <span key={idx} className="final-cta-word-mask">
                  <span
                    className="final-cta-word"
                    style={{ animationDelay: `${350 + idx * 120}ms` }}
                  >
                    {word}{idx < finalHeadingWords.length - 1 ? '\u00A0' : ''}
                  </span>
                </span>
              ))}
            </h2>

            <p className="services-final-cta-subtitle">{finalCTA.subtitle}</p>

            <div className="services-final-cta-buttons">
              <button
                className="btn btn-primary services-cta-btn-book"
                onClick={() => onOpenBooking('Appointment Reservation')}
              >
                <span className="btn-text">{finalCTA.primaryBtnText}</span>
              </button>

              <button
                className="btn btn-whatsapp services-cta-btn-whatsapp"
                onClick={handleWhatsAppClick}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="whatsapp-icon"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                <span>{finalCTA.secondaryBtnText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



