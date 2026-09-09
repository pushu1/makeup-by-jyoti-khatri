import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { contentConfig } from '../data/contentConfig';

export default function Hero({ onOpenBooking }) {
  const { hero } = contentConfig;
  const slides = hero.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay (5s)
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  if (!slides || slides.length === 0) return null;

  return (
    <section
      id="hero"
      className="hero-multi-banner-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Makeup by Jyoti Khatri Hero Slider"
    >
      {/* Outer Edge Navigation Arrows */}
      <button
        type="button"
        className="hero-banner-arrow hero-banner-arrow-left"
        onClick={prevSlide}
        aria-label="Previous Banner Slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        type="button"
        className="hero-banner-arrow hero-banner-arrow-right"
        onClick={nextSlide}
        aria-label="Next Banner Slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* 4 Unique Banner Layout Views Stacked for Smooth Crossfade */}
      <div className="hero-banner-viewport">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const variant = slide.layoutVariant || 'split';

          return (
            <div
              key={slide.id}
              className={`hero-slide-banner-wrapper slide-variant-${variant} ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* ============================================================
                  SLIDE 01 — SIGNATURE SPLIT BANNER
                  ============================================================ */}
              {variant === 'split' && (
                <div className="banner-split-grid">
                  <div className="banner-split-left">
                    {/* Gold Botanical SVG Overlay */}
                    <div className="banner-botanical-art" aria-hidden="true">
                      <svg viewBox="0 0 200 300" fill="none">
                        <path
                          d="M40 280 C 60 210, 100 160, 150 70 C 130 110, 110 140, 80 170 C 120 180, 160 160, 180 130 M 70 230 C 90 200, 120 190, 140 180 M 110 120 C 130 90, 140 60, 160 30"
                          stroke="#C5A059"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeOpacity="0.3"
                        />
                        <circle cx="160" cy="30" r="3" fill="#C5A059" fillOpacity="0.35" />
                      </svg>
                    </div>

                    <div className="banner-split-text-content">
                      <span className="banner-eyebrow-tag">{slide.eyebrow}</span>
                      <h1 className="banner-split-heading">
                        Makeup by Jyoti<br />Khatri
                      </h1>
                      <p className="banner-split-italic">
                        &ldquo;{slide.tagline}&rdquo;
                      </p>
                      <p className="banner-split-desc">{slide.description}</p>
                      
                      <div className="banner-cta-group">
                        <button
                          className="btn btn-banner-gold"
                          onClick={() => onOpenBooking()}
                        >
                          {slide.primaryBtnText}
                        </button>
                        <Link
                          to={slide.secondaryBtnLink || "/portfolio"}
                          className="btn btn-banner-outline"
                        >
                          {slide.secondaryBtnText}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="banner-split-right">
                    <div className="banner-watermark-overlay">
                      <img src="/assets/logo.png" alt="Jyoti Khatri Watermark" />
                    </div>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="banner-split-img"
                      style={{ objectPosition: slide.imagePosition || 'center 30%' }}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              )}

              {/* ============================================================
                  SLIDE 02 — FULL-BLEED EDITORIAL BANNER WITH INTEGRATED PANEL
                  ============================================================ */}
              {variant === 'fullbleed' && (
                <div className="banner-fullbleed-wrapper">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="banner-fullbleed-bg-img"
                    style={{ objectPosition: slide.imagePosition || 'center 25%' }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="banner-fullbleed-scrim-overlay"></div>

                  <div className="banner-fullbleed-container">
                    <div className="banner-fullbleed-editorial-panel">
                      <div className="banner-panel-gold-line" aria-hidden="true"></div>
                      <span className="banner-eyebrow-tag">{slide.eyebrow}</span>
                      <h2 className="banner-editorial-heading">{slide.title}</h2>
                      <p className="banner-editorial-italic">&ldquo;{slide.tagline}&rdquo;</p>
                      <p className="banner-editorial-desc">{slide.description}</p>
                      
                      <div className="banner-cta-group">
                        {slide.primaryBtnLink ? (
                          <Link to={slide.primaryBtnLink} className="btn btn-banner-gold">
                            {slide.primaryBtnText}
                          </Link>
                        ) : (
                          <button className="btn btn-banner-gold" onClick={() => onOpenBooking()}>
                            {slide.primaryBtnText}
                          </button>
                        )}
                        {slide.secondaryBtnLink ? (
                          <Link to={slide.secondaryBtnLink} className="btn btn-banner-outline-light">
                            {slide.secondaryBtnText}
                          </Link>
                        ) : (
                          <button className="btn btn-banner-outline-light" onClick={() => onOpenBooking()}>
                            {slide.secondaryBtnText}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================
                  SLIDE 03 — ASYMMETRIC LUXURY FASHION EDITORIAL BANNER
                  ============================================================ */}
              {variant === 'asymmetric' && (
                <div className="banner-asymmetric-wrapper">
                  {/* Left Fashion Sidebar */}
                  <div className="banner-asymmetric-sidebar">
                    <span className="banner-side-vertical-text">JYOTI KHATRI BRIDAL ARTISTRY • EST 2019</span>
                    <div className="banner-asymmetric-accent-box"></div>
                  </div>

                  {/* Asymmetric Content Container */}
                  <div className="banner-asymmetric-main">
                    <div className="banner-asymmetric-text-card">
                      <span className="banner-eyebrow-tag">{slide.eyebrow}</span>
                      <h2 className="banner-asymmetric-heading">{slide.title}</h2>
                      <p className="banner-asymmetric-italic">&ldquo;{slide.tagline}&rdquo;</p>
                      <p className="banner-asymmetric-desc">{slide.description}</p>
                      
                      <div className="banner-cta-group">
                        {slide.primaryBtnLink ? (
                          <Link to={slide.primaryBtnLink} className="btn btn-banner-gold">
                            {slide.primaryBtnText} &rarr;
                          </Link>
                        ) : (
                          <button className="btn btn-banner-gold" onClick={() => onOpenBooking()}>
                            {slide.primaryBtnText} &rarr;
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="banner-asymmetric-photo-frame">
                      <div className="banner-photo-gold-border"></div>
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="banner-asymmetric-img"
                        style={{ objectPosition: slide.imagePosition || 'center 20%' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Global Bottom 01 / 02 / 03 / 04 Slide Indicators */}
      <div className="hero-banner-indicators-bar" role="tablist" aria-label="Banner Navigation">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;

          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to banner slide ${idx + 1}`}
              className={`hero-banner-indicator ${isActive ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
            >
              <span className="indicator-num">0{idx + 1}</span>
              <span className="indicator-track">
                <span className="indicator-fill"></span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
