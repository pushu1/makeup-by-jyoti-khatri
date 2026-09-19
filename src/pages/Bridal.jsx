import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Bridal({ onOpenBooking }) {
  const { seo, bridal, social } = contentConfig;
  useDocumentTitle(seo.bridal.title, seo.bridal.description);

  // Active States for Interactive Sections
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(bridal.details.hotspots[0]);
  const [storyIndex, setStoryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [heroParallax, setHeroParallax] = useState({ imgX: 0, imgY: 0, textX: 0, textY: 0 });

  // Subtle Mouse Micro-Parallax for Hero (Desktop Only)
  const handleHeroMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const moveX = (clientX / innerWidth - 0.5) * 2;
    const moveY = (clientY / innerHeight - 0.5) * 2;

    setHeroParallax({
      imgX: moveX * 5,
      imgY: moveY * 5,
      textX: -moveX * 2,
      textY: -moveY * 2
    });
  };

  // Section Observer for Entrance Transitions
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = pageRef.current?.querySelectorAll('.bridal-editorial-section');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Before/After Drag Logic
  const handleSliderMove = (clientPosition) => {
    const container = document.querySelector('.transformation-slider-container');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientPosition - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setBeforeAfterPos(percentage);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (isDragging) handleSliderMove(e.clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Story Slider Navigation
  const nextStory = () => {
    setStoryIndex((prev) => (prev === bridal.brideStories.stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setStoryIndex((prev) => (prev === 0 ? bridal.brideStories.stories.length - 1 : prev - 1));
  };

  const currentStory = bridal.brideStories.stories[storyIndex];

  return (
    <div ref={pageRef} className="bridal-editorial-page page-transition">
      {/* --------------------------------------------------------------------------
         SECTION 1 — CINEMATIC BRIDAL HERO
         -------------------------------------------------------------------------- */}
      <section
        className="bridal-hero-fullscreen bridal-editorial-section"
        onMouseMove={handleHeroMouseMove}
      >
        <div className="hero-bg-media">
          <img
            src={bridal.hero.backgroundImage}
            alt="Cinematic Indian Bridal Makeup by Jyoti Khatri"
            className="hero-bg-img"
            style={{
              transform: `scale(1) translate(${heroParallax.imgX}px, ${heroParallax.imgY}px)`
            }}
          />
          <div className="hero-dark-overlay"></div>
        </div>

        <div className="hero-vertical-tag">{bridal.hero.sideTag}</div>

        <div
          className="hero-content-wrapper"
          style={{
            transform: `translate(${heroParallax.textX}px, ${heroParallax.textY}px)`
          }}
        >
          <span className="hero-small-label">{bridal.hero.smallText}</span>

          <h1 className="hero-editorial-title">
            <span className="hero-line-masked hero-line-1">Your Day.</span>
            <span className="hero-line-masked hero-line-2">Your Story.</span>
            <span className="hero-line-signature">Your Signature Look.</span>
          </h1>

          <p className="hero-handwritten">{bridal.hero.handwritten}</p>

          <div className="hero-actions-row">
            <button
              type="button"
              className="btn btn-hero-gold"
              onClick={() => onOpenBooking('Bridal Makeup')}
            >
              <span className="btn-text">BOOK YOUR BRIDAL LOOK</span>
              <span className="btn-shine"></span>
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>{bridal.hero.scrollText}</span>
          <div className="scroll-arrow-down">&#8595;</div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 2 — BRIDE'S STATEMENT
         -------------------------------------------------------------------------- */}
      <section className="bridal-statement-section bridal-editorial-section">
        <div className="container container-narrow text-center">
          <div className="statement-gold-accent"></div>
          <h2 className="statement-quote">
            "{bridal.statement.quote}"
          </h2>
          <p className="statement-subtitle">
            {bridal.statement.subtitle}
          </p>
          <div className="statement-gold-line"></div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 3 — THE JYOTI BRIDAL SIGNATURE
         -------------------------------------------------------------------------- */}
      <section className="bridal-signature-section bridal-editorial-section">
        <div className="container">
          <div className="signature-grid">
            {/* ASYMMETRIC OVERLAPPING IMAGE COLLAGE */}
            <div className="signature-collage-area">
              <div className="signature-bg-badge">{bridal.signature.number}</div>
              <div className="sig-frame sig-frame-main">
                <img src={bridal.signature.images.main} alt="Signature Bridal Look" loading="lazy" />
              </div>
              <div className="sig-frame sig-frame-overlap">
                <img src={bridal.signature.images.overlap} alt="Bridal Detail Close-up" loading="lazy" />
              </div>
              <div className="sig-frame sig-frame-vertical">
                <img src={bridal.signature.images.vertical} alt="Bridal Hair & Jewelry" loading="lazy" />
              </div>
            </div>

            {/* TEXT CONTENT & EDITORIAL POINTS */}
            <div className="signature-content-area">
              <span className="eyebrow">THE PHILOSOPHY</span>
              <h2 className="editorial-heading">{bridal.signature.heading}</h2>
              <p className="editorial-body">{bridal.signature.description}</p>

              <div className="signature-points-list">
                {bridal.signature.points.map((pt) => (
                  <div key={pt.num} className="sig-point-item">
                    <span className="point-num">{pt.num}</span>
                    <div className="point-text">
                      <h4>{pt.title}</h4>
                      <p>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 4 — YOUR BRIDAL JOURNEY (STORYTELLING TIMELINE)
         -------------------------------------------------------------------------- */}
      <section className="bridal-journey-section bridal-editorial-section">
        <div className="container">
          <div className="section-header-center">
            <span className="eyebrow">THE CHRONICLE</span>
            <h2 className="editorial-heading">{bridal.journey.heading}</h2>
          </div>

          <div className="journey-timeline-wrapper">
            <div className="timeline-gold-track"></div>
            <div className="journey-stages-grid">
              {bridal.journey.stages.map((stage) => (
                <div key={stage.num} className="journey-stage-card">
                  <div className="stage-num-badge">{stage.num}</div>
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-desc">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 5 — BEFORE THE BRUSHES BEGIN
         -------------------------------------------------------------------------- */}
      <section className="bridal-prep-section bridal-editorial-section">
        <div className="container">
          <div className="prep-grid">
            <div className="prep-visual-col">
              <div className="prep-image-frame">
                <img src={bridal.preparation.image} alt="Bridal Skincare & Prep" loading="lazy" />
              </div>
            </div>

            <div className="prep-content-col">
              <span className="eyebrow">PRE-BRIDAL ROADMAP</span>
              <h2 className="editorial-heading">{bridal.preparation.heading}</h2>
              <p className="editorial-body">
                Great makeup begins long before the wedding morning. We map out your skin hydration, undertones, and event timing to guarantee a stress-free dressing suite experience.
              </p>

              <div className="prep-checklist">
                {bridal.preparation.checklist.map((item, idx) => (
                  <div key={idx} className="prep-check-item">
                    <span className="check-diamond">&#9670;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="btn btn-outline-gold mt-4"
                onClick={() => onOpenBooking('Bridal Skincare & Prep')}
              >
                {bridal.preparation.ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 6 — THE TRANSFORMATION (INTERACTIVE BEFORE / AFTER SLIDER)
         -------------------------------------------------------------------------- */}
      <section className="bridal-transformation-section bridal-editorial-section">
        <div className="container">
          <div className="section-header-center">
            <span className="eyebrow">REVEAL THE RADIANCE</span>
            <h2 className="editorial-heading">{bridal.transformation.heading}</h2>
            <p className="editorial-subtext">{bridal.transformation.subtext}</p>
          </div>

          <div
            className="transformation-slider-container"
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* AFTER IMAGE (UNDERNEATH BASE) */}
            <div className="slider-img-layer layer-after">
              <img src={bridal.transformation.afterImage} alt="After Bridal Makeup" />
              <span className="layer-label label-after">{bridal.transformation.afterLabel}</span>
            </div>

            {/* BEFORE IMAGE (CLIPPED OVERLAY) */}
            <div
              className="slider-img-layer layer-before"
              style={{ width: `${beforeAfterPos}%` }}
            >
              <img src={bridal.transformation.beforeImage} alt="Before Makeup Prep" />
              <span className="layer-label label-before">{bridal.transformation.beforeLabel}</span>
            </div>

            {/* SLIDER DRAG HANDLE */}
            <div className="slider-handle" style={{ left: `${beforeAfterPos}%` }}>
              <div className="handle-line"></div>
              <div className="handle-button">
                <span>&#8249;&#8250;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 7 — BRIDAL LOOKS (EDITORIAL MOOD PANELS)
         -------------------------------------------------------------------------- */}
      <section className="bridal-moods-section bridal-editorial-section">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="eyebrow">CURATED AESTHETICS</span>
              <h2 className="editorial-heading">{bridal.bridalLooks.heading}</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline-gold">
              {bridal.bridalLooks.ctaText} &rarr;
            </Link>
          </div>

          <div className="moods-panels-grid">
            {bridal.bridalLooks.moods.map((mood) => (
              <div key={mood.id} className="mood-panel-card">
                <div className="mood-panel-img-box">
                  <img src={mood.image} alt={mood.title} loading="lazy" />
                  <div className="mood-panel-overlay"></div>
                </div>
                <div className="mood-panel-info">
                  <h3>{mood.title}</h3>
                  <p>{mood.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 8 — BRIDAL PACKAGES (MINIMAL LUXURY PRICING)
         -------------------------------------------------------------------------- */}
      <section className="bridal-collections-section bridal-editorial-section">
        <div className="container">
          <div className="section-header-center">
            <span className="eyebrow">COUTURE COLLECTIONS</span>
            <h2 className="editorial-heading">{bridal.packages.heading}</h2>
            <p className="editorial-subtext">{bridal.packages.subtitle}</p>
          </div>

          <div className="bridal-collections-grid">
            {bridal.packages.list.map((pkg) => (
              <div
                key={pkg.id}
                className={`collection-card ${pkg.featured ? 'is-featured' : ''}`}
              >
                {pkg.badge && <span className="collection-badge">{pkg.badge}</span>}
                <h3 className="collection-name">{pkg.name}</h3>
                <p className="collection-tagline">{pkg.tagline}</p>
                <div className="collection-price">{pkg.priceLabel}</div>

                <div className="collection-divider"></div>

                <ul className="collection-includes-list">
                  {pkg.includes.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`btn ${pkg.featured ? 'btn-gold' : 'btn-outline-gold'} btn-full`}
                  onClick={() => onOpenBooking(pkg.name)}
                >
                  {bridal.packages.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 9 — BRIDAL DETAILS (INTERACTIVE HOTSPOTS)
         -------------------------------------------------------------------------- */}
      <section className="bridal-details-hotspot-section bridal-editorial-section">
        <div className="container">
          <div className="section-header-center">
            <span className="eyebrow">PRECISION ARTISTRY</span>
            <h2 className="editorial-heading">{bridal.details.heading}</h2>
            <p className="editorial-subtext">{bridal.details.subtitle}</p>
          </div>

          <div className="hotspot-interactive-container">
            <img src={bridal.details.image} alt="Bridal Detail Hotspots" className="hotspot-main-img" />

            {/* HOTSPOT PINS OVERLAYING IMAGE */}
            {bridal.details.hotspots.map((hs) => (
              <div
                key={hs.id}
                className={`hotspot-pin pin-${hs.id} align-${hs.align || 'right'} ${activeHotspot?.id === hs.id ? 'active' : ''}`}
                style={{ top: hs.top, left: hs.left }}
                onClick={() => setActiveHotspot(hs)}
                onMouseEnter={() => setActiveHotspot(hs)}
              >
                <div className="pin-dot">
                  <span className="dot-center"></span>
                  <span className="dot-ring"></span>
                  <span className="dot-pulse"></span>
                </div>
                <span className="pin-label">{hs.label}</span>
              </div>
            ))}

            {/* ACTIVE HOTSPOT CARD OVERLAY */}
            {activeHotspot && (
              <div className="hotspot-info-card">
                <span className="info-tag">{activeHotspot.label}</span>
                <h4>{activeHotspot.title}</h4>
                <p>{activeHotspot.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 10 — BRIDE STORIES (EMOTIONAL SLIDER)
         -------------------------------------------------------------------------- */}
      <section className="bridal-stories-section bridal-editorial-section">
        <div className="container">
          <div className="stories-editorial-grid">
            <div className="stories-visual-col">
              <div className="story-img-frame">
                <img src={currentStory.image} alt={currentStory.name} key={currentStory.id} />
              </div>
            </div>

            <div className="stories-content-col">
              <span className="eyebrow">HEARTFELT MEMORIES</span>
              <h2 className="editorial-heading">Real Brides.<br />Real Moments.</h2>

              <blockquote className="story-quote">
                "{currentStory.quote}"
              </blockquote>

              <div className="story-meta">
                <div className="story-name">{currentStory.name}</div>
                <div className="story-location">{currentStory.location} • {currentStory.event}</div>
              </div>

              <div className="story-nav-controls">
                <button type="button" className="story-arrow-btn" onClick={prevStory} aria-label="Previous story">
                  &#8249;
                </button>
                <span className="story-counter">0{storyIndex + 1} &nbsp;/&nbsp; 0{bridal.brideStories.stories.length}</span>
                <button type="button" className="story-arrow-btn" onClick={nextStory} aria-label="Next story">
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 11 — BRIDAL FAQ (ACCORDION)
         -------------------------------------------------------------------------- */}
      <section className="bridal-faq-section bridal-editorial-section">
        <div className="container container-narrow">
          <div className="section-header-center">
            <span className="eyebrow">CLARITY & ASSURANCE</span>
            <h2 className="editorial-heading">Before Your Big Day</h2>
          </div>

          <div className="faq-editorial-accordion">
            {bridal.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-editorial-item ${openFaq === idx ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-editorial-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle-symbol">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-editorial-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 12 — FINAL BRIDAL CTA (DARK LUXURY ENDING)
         -------------------------------------------------------------------------- */}
      <section className="bridal-dark-cta-section bridal-editorial-section">
        <div className="cta-overlapping-img">
          <img src={bridal.finalCTA.image} alt="Bridal Finale" />
        </div>

        <div className="container">
          <div className="cta-dark-content">
            <span className="eyebrow">{bridal.hero.smallText}</span>
            <h2 className="cta-dark-heading">
              Your Bridal Story<br />
              <span>Starts Here.</span>
            </h2>
            <p className="cta-dark-sub">{bridal.finalCTA.subtitle}</p>

            <div className="cta-dark-buttons">
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => onOpenBooking('Bridal Makeup')}
              >
                {bridal.finalCTA.primaryBtnText}
              </button>

              <a
                href={social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold"
              >
                {bridal.finalCTA.secondaryBtnText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
