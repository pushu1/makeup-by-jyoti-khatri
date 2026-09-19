import React, { useState, useEffect } from 'react';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { sendLeadEmail } from '../services/emailService';

export default function Reviews({ onOpenBooking, onOpenLightbox }) {
  const { seo, reviewsPage, social } = contentConfig;
  useDocumentTitle(seo.reviews.title, seo.reviews.description);

  const rData = reviewsPage || {};
  const hero = rData.hero || {};
  const featured = rData.featured || {};
  const stories = rData.stories || [];
  const slider = rData.slider || [];
  const remembers = rData.remembers || [];
  const highlights = rData.highlights || [];
  const letters = rData.letters || [];
  const statistics = rData.statistics || [];
  const shareCTA = rData.shareCTA || {};
  const finalCTA = rData.finalCTA || {};

  // Interactive States
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isSliderAutoplay, setIsSliderAutoplay] = useState(true);
  const [activeRememberIndex, setActiveRememberIndex] = useState(0);

  // Review Submission Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    rating: '5',
    review: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-play slider every 6 seconds
  useEffect(() => {
    if (!isSliderAutoplay || slider.length === 0) return;
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % slider.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isSliderAutoplay, slider.length]);

  // Modal Escape key support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handlePrevSlider = () => {
    setIsSliderAutoplay(false);
    setSliderIndex((prev) => (prev - 1 + slider.length) % slider.length);
  };

  const handleNextSlider = () => {
    setIsSliderAutoplay(false);
    setSliderIndex((prev) => (prev + 1) % slider.length);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await sendLeadEmail({
      clientName: formData.name,
      serviceOrEventType: formData.eventType,
      rating: `${formData.rating} Stars`,
      notesOrMessage: formData.review,
      source: 'Review Submission Modal'
    });

    setIsSubmitting(false);

    if (result.success) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setIsModalOpen(false);
        setFormData({ name: '', eventType: '', rating: '5', review: '' });
      }, 3500);
    } else {
      setSubmitError(result.error || 'Something went wrong while sending your enquiry. Please try again or contact us directly.');
    }
  };

  const handleWhatsAppClick = () => {
    window.open(social.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const currentStory = stories[activeStoryIndex] || {};
  const currentSliderItem = slider[sliderIndex] || {};
  const currentRememberItem = remembers[activeRememberIndex] || {};

  return (
    <div className="reviews-page-redesign">
      {/* SECTION 1 — EMOTIONAL HERO */}
      <section className="reviews-hero-fullviewport">
        <div className="reviews-hero-bg-container">
          <img
            src={hero.backgroundImage}
            alt="The Bride Stories - Makeup by Jyoti Khatri"
            className="reviews-hero-bg-img"
          />
          <div className="reviews-hero-overlay"></div>
        </div>

        <div className="reviews-hero-content text-center">
          <span className="editorial-eyebrow gold">{hero.eyebrow}</span>
          <h1 className="reviews-hero-title">
            More Than
            <br />a Makeup Look.
          </h1>
          <p className="reviews-hero-subtitle">{hero.subtitle}</p>
          <div className="gold-divider-center"></div>
        </div>

        <div className="reviews-hero-bottom-label">{hero.bottomLabel}</div>
      </section>

      {/* SECTION 2 — THE LOVE LETTER (FEATURED REVIEW) */}
      <section className="reviews-love-letter-section">
        <div className="container">
          <div className="love-letter-grid">
            {/* Left: Large Quote */}
            <div className="love-letter-quote-col">
              <span className="giant-quote-mark">&ldquo;</span>
              <blockquote className="featured-serif-quote">
                "{featured.quote}"
              </blockquote>
              <div className="gold-divider-left"></div>
            </div>

            {/* Right: Bride Portrait & Meta */}
            <div className="love-letter-portrait-col">
              <div className="love-letter-img-frame">
                <img src={featured.image} alt={featured.name} />
                <div className="love-letter-badge">{featured.tag}</div>
              </div>
              <div className="love-letter-meta">
                <h3 className="bride-name">{featured.name}</h3>
                <div className="bride-event">
                  {featured.eventType} • {featured.location}
                </div>
                <div className="bride-stars">
                  {[...Array(featured.rating || 5)].map((_, i) => (
                    <span key={i} className="star-gold">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BRIDE STORIES INDEX */}
      <section className="reviews-stories-index-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">WEDDING MEMORIES</span>
            <h2 className="editorial-title">Stories From Our Brides</h2>
            <div className="gold-divider-center"></div>
          </div>

          <div className="stories-index-grid">
            {/* Left: Numbered Story List */}
            <div className="stories-list-col">
              {stories.map((s, idx) => (
                <div
                  key={s.id}
                  className={`story-list-item ${
                    activeStoryIndex === idx ? 'active' : ''
                  }`}
                  onClick={() => setActiveStoryIndex(idx)}
                >
                  <span className="story-num">{s.num}</span>
                  <div className="story-title-group">
                    <h3 className="story-title">{s.title}</h3>
                    <span className="story-name-sub">{s.name} • {s.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Selected Story Display */}
            <div className="story-display-col">
              <div className="story-display-card">
                <div className="story-display-img-frame">
                  <img src={currentStory.image} alt={currentStory.name} />
                </div>
                <div className="story-display-content">
                  <div className="story-display-header">
                    <span className="story-tag">{currentStory.eventType}</span>
                    <div className="story-stars">
                      {[...Array(currentStory.rating || 5)].map((_, i) => (
                        <span key={i} className="star-gold">★</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="story-display-name">{currentStory.name}</h3>
                  <div className="story-display-loc">{currentStory.location}</div>
                  <blockquote className="story-display-quote">
                    "{currentStory.review}"
                  </blockquote>
                  <div className="story-display-detail">
                    <span>SIGNATURE DETAIL:</span> {currentStory.detail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE REVIEW EXPERIENCE (TESTIMONIAL SLIDER) */}
      <section
        className="reviews-slider-section"
        onMouseEnter={() => setIsSliderAutoplay(false)}
        onMouseLeave={() => setIsSliderAutoplay(true)}
      >
        <div className="container">
          <div className="review-slider-card">
            <div className="review-slider-grid">
              {/* Left Image */}
              <div className="slider-img-col">
                <div className="slider-img-frame">
                  <img
                    src={currentSliderItem.image}
                    alt={currentSliderItem.name}
                    className="slider-img"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="slider-content-col">
                <div className="slider-meta-header">
                  <span className="slider-counter">{currentSliderItem.num}</span>
                  <div className="slider-stars">
                    {[...Array(currentSliderItem.rating || 5)].map((_, i) => (
                      <span key={i} className="star-gold">★</span>
                    ))}
                  </div>
                </div>

                <blockquote className="slider-quote">
                  "{currentSliderItem.quote}"
                </blockquote>

                <div className="slider-author-info">
                  <h3 className="slider-name">{currentSliderItem.name}</h3>
                  <div className="slider-event">
                    {currentSliderItem.eventType} • {currentSliderItem.location}
                  </div>
                </div>

                <div className="slider-nav-buttons">
                  <button
                    className="btn-slider-nav"
                    onClick={handlePrevSlider}
                    aria-label="Previous review"
                  >
                    ← PREVIOUS
                  </button>
                  <button
                    className="btn-slider-nav"
                    onClick={handleNextSlider}
                    aria-label="Next review"
                  >
                    NEXT →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT BRIDES REMEMBER */}
      <section className="reviews-remembers-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">THE FEELING</span>
            <h2 className="editorial-title">What Brides Remember</h2>
            <div className="gold-divider-center"></div>
          </div>

          <div className="remembers-interactive-grid">
            {/* Left: 4 Large Typography Words */}
            <div className="remembers-words-col">
              {remembers.map((item, idx) => (
                <button
                  key={item.word}
                  className={`remember-word-btn ${
                    activeRememberIndex === idx ? 'active' : ''
                  }`}
                  onClick={() => setActiveRememberIndex(idx)}
                  onMouseEnter={() => setActiveRememberIndex(idx)}
                >
                  <span className="word-text">{item.word}</span>
                  <span className="word-arrow">→</span>
                </button>
              ))}
            </div>

            {/* Right: Corresponding Quote & Image */}
            <div className="remembers-display-col">
              <div className="remember-display-card">
                <div className="remember-img-frame">
                  <img src={currentRememberItem.image} alt={currentRememberItem.word} />
                </div>
                <div className="remember-text-overlay">
                  <span className="remember-word-badge">{currentRememberItem.word}</span>
                  <blockquote className="remember-quote">
                    "{currentRememberItem.quote}"
                  </blockquote>
                  <cite className="remember-bride-name">— {currentRememberItem.bride}</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — REVIEW HIGHLIGHTS */}
      <section className="reviews-highlights-strip-section">
        <div className="container">
          <div className="highlights-horizontal-strip">
            {highlights.map((h, idx) => (
              <div key={idx} className="highlight-strip-item">
                <span className="highlight-quote-mark">&ldquo;</span>
                <div className="highlight-stars">
                  {[...Array(h.rating || 5)].map((_, i) => (
                    <span key={i} className="star-gold">★</span>
                  ))}
                </div>
                <p className="highlight-quote">"{h.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — BRIDE'S WORDS (HANDWRITTEN LOVE LETTERS) */}
      <section className="reviews-letters-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">HANDWRITTEN MEMORIES</span>
            <h2 className="editorial-title">Letters From Our Brides</h2>
            <div className="gold-divider-center"></div>
          </div>

          <div className="letters-paper-grid">
            {letters.map((letObj) => (
              <div
                key={letObj.id}
                className="letter-paper-card"
                style={{ transform: `rotate(${letObj.rotation || '0deg'})` }}
              >
                <div className="letter-paper-inner">
                  <div className="letter-header">
                    <span className="letter-salutation">Dear Jyoti Khatri,</span>
                  </div>
                  <p className="letter-body">{letObj.review}</p>
                  <div className="letter-footer">
                    <span className="letter-valediction">With love,</span>
                    <h4 className="letter-signature">{letObj.brideName}</h4>
                    <span className="letter-event">{letObj.event}</span>
                  </div>
                  <div className="letter-botanical-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — REVIEW STATISTICS */}
      <section className="reviews-statistics-section">
        <div className="container">
          <div className="statistics-minimal-grid">
            {statistics.map((stat, idx) => (
              <div key={idx} className="statistic-item">
                <span className="statistic-number">{stat.number}</span>
                <span className="statistic-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — LEAVE YOUR STORY (SUBMISSION CTA & MODAL) */}
      <section className="reviews-share-cta-section">
        <div className="container text-center">
          <span className="editorial-eyebrow gold">SHARE YOUR JOURNEY</span>
          <h2 className="share-cta-heading">{shareCTA.heading}</h2>
          <p className="share-cta-subtitle">{shareCTA.subtitle}</p>
          <button
            className="btn btn-outline-gold mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            {shareCTA.btnText}
          </button>
        </div>
      </section>

      {/* REVIEW SUBMISSION MODAL */}
      {isModalOpen && (
        <div className="review-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div
            className="review-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Share Your Experience Modal"
          >
            <button
              className="review-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>

            {formSubmitted ? (
              <div className="review-modal-success text-center">
                <div className="success-icon">✓</div>
                <h3 className="success-title">Thank You Dear Bride!</h3>
                <p className="success-text">
                  Your words have been received with love. Thank you for sharing your special moment with Jyoti Khatri.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="review-modal-form">
                <span className="editorial-eyebrow">LOVE LETTERS</span>
                <h3 className="modal-title">Share Your Experience</h3>
                <p className="modal-subtitle">
                  We would be honored to read about your wedding morning experience.
                </p>

                {submitError && (
                  <div
                    className="form-error-alert"
                    style={{
                      padding: '0.75rem 1rem',
                      marginBottom: '1.25rem',
                      borderRadius: '6px',
                      backgroundColor: '#fff1f0',
                      border: '1px solid #ffa39e',
                      color: '#cf1322',
                      fontSize: '0.875rem',
                      lineHeight: '1.4'
                    }}
                  >
                    ⚠️ {submitError}
                  </div>
                )}

                <div className="form-group mb-3">
                  <label htmlFor="bride-name-input" className="form-label">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="bride-name-input"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="e.g. Ananya Sharma"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="event-type-input" className="form-label">
                    EVENT TYPE & LOCATION *
                  </label>
                  <input
                    type="text"
                    id="event-type-input"
                    name="eventType"
                    className="form-input"
                    value={formData.eventType}
                    onChange={handleFormChange}
                    placeholder="e.g. Bridal Ceremony • Jaipur"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="rating-select" className="form-label">
                    YOUR RATING *
                  </label>
                  <select
                    id="rating-select"
                    name="rating"
                    className="form-input"
                    value={formData.rating}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                  >
                    <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                    <option value="4">★★★★☆ (4 Stars - Great)</option>
                    <option value="3">★★★☆☆ (3 Stars - Good)</option>
                  </select>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="review-textarea" className="form-label">
                    YOUR WORDS / MEMORY *
                  </label>
                  <textarea
                    id="review-textarea"
                    name="review"
                    rows="4"
                    className="form-input"
                    value={formData.review}
                    onChange={handleFormChange}
                    placeholder="Tell us about how your makeup felt on your special day..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT YOUR STORY'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* SECTION 11 — FINAL CTA */}
      <section className="reviews-final-cta-section">
        <div className="reviews-final-cta-container">
          <div className="reviews-final-cta-overlay"></div>
          {finalCTA.image && (
            <img
              src={finalCTA.image}
              alt="Makeup by Jyoti Khatri"
              className="reviews-final-cta-bg-img"
            />
          )}

          <div className="reviews-final-cta-content text-center">
            <span className="editorial-eyebrow gold">RESERVE YOUR MOMENT</span>
            <h2 className="reviews-final-cta-title">
              Your Story
              <br />
              Could Be Next.
            </h2>
            <p className="reviews-final-cta-subtitle">{finalCTA.subtitle}</p>

            <div className="reviews-final-cta-buttons">
              <button
                className="btn btn-primary"
                onClick={() => onOpenBooking('Bride Story Enquiry')}
              >
                {finalCTA.primaryBtnText}
              </button>

              <button
                className="btn btn-whatsapp"
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
                {finalCTA.secondaryBtnText}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
