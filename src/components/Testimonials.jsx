import React, { useState, useEffect, useRef } from 'react';
import { contentConfig } from '../data/contentConfig';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { testimonials } = contentConfig;
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, [isPaused, testimonials.length]);

  return (
    <section id="reviews" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Love Notes</span>
          <h2 className="section-title">Words From Our Brides</h2>
          <p className="section-subtitle">Real experiences and cherished memories from our brides.</p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        <div
          className="testimonial-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonial-track">
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className={`testimonial-slide ${idx === currentIndex ? 'active' : ''}`}
              >
                <div className="stars-row" aria-label={`${item.rating} stars rating`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={item.avatar} alt={item.name} loading="lazy" />
                  </div>
                  <div className="author-info">
                    <div className="author-name">{item.name}</div>
                    <div className="author-event">{item.eventType}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls: Arrows & Dots */}
          <div className="slider-controls">
            <button className="slider-btn slider-prev" onClick={prevSlide} aria-label="Previous review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="slider-dots">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                ></div>
              ))}
            </div>
            <button className="slider-btn slider-next" onClick={nextSlide} aria-label="Next review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
