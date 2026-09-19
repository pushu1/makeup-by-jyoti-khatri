import React, { useState } from 'react';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Portfolio({ onOpenBooking, onOpenLightbox }) {
  const { seo, portfolio, social } = contentConfig;
  useDocumentTitle(seo.portfolio.title, seo.portfolio.description);

  // State management
  const [activeMood, setActiveMood] = useState('all');
  const [activeFaceDetail, setActiveFaceDetail] = useState('eyes');
  const [activeScrollStoryIndex, setActiveScrollStoryIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const pData = portfolio || {};
  const hero = pData.hero || {};
  const moods = pData.moods || [];
  const featured = pData.featuredLook || {};
  const scrollStories = pData.scrollStories || {};
  const faceDetails = pData.faceDetails || {};
  const beforeAfter = pData.transformations || {};
  const bridalCollection = pData.bridalCollection || {};
  const detailStudy = pData.detailStudy || {};
  const editorialQuote = pData.editorialQuote || {};
  const categories = pData.categories || [];
  const allItems = pData.items || [];
  const instagram = pData.instagram || {};
  const finalCTA = pData.finalCTA || {};

  // Filter items by Mood or Category
  const filteredItems =
    activeMood === 'all'
      ? allItems
      : allItems.filter(
          (item) => item.mood === activeMood || item.category === activeMood
        );

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleInstagramClick = () => {
    window.open(social.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = () => {
    window.open(social.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const storiesList = scrollStories.stories || [];
  const currentScrollStory = storiesList[activeScrollStoryIndex] || {};

  return (
    <div className="portfolio-page-redesign">
      {/* SECTION 1: CINEMATIC OPENING */}
      <section className="portfolio-hero-fullviewport">
        <div className="portfolio-hero-bg-container">
          <img
            src={hero.backgroundImage}
            alt="The Jyoti Khatri Lookbook"
            className="portfolio-hero-bg-img"
          />
          <div className="portfolio-hero-overlay"></div>
        </div>

        <div className="portfolio-hero-content">
          <span className="portfolio-hero-eyebrow">{hero.eyebrow}</span>
          <h1 className="portfolio-hero-title">
            Beauty,
            <br />
            Captured.
          </h1>
          <p className="portfolio-hero-subtitle">{hero.subtitle}</p>

          <div className="portfolio-hero-scroll-btn">
            <a href="#signature-moods" className="scroll-indicator-link">
              <span>{hero.scrollText}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="animated-arrow"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="portfolio-hero-counter">{hero.counter}</div>
        <div className="portfolio-hero-side-label">{hero.sideLabel}</div>
      </section>

      {/* SECTION 2: FIND YOUR SIGNATURE LOOK (INTERACTIVE MOOD SELECTOR) */}
      <section className="portfolio-moods-section" id="signature-moods">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">CURATED MOODS</span>
            <h2 className="editorial-title">Find Your Signature Look</h2>
            <p className="editorial-subtitle">
              Which version of beautiful feels most like you?
            </p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="moods-selector-grid">
            <div
              className={`mood-tile ${activeMood === 'all' ? 'active' : ''}`}
              onClick={() => setActiveMood('all')}
            >
              <div className="mood-tile-bg">
               <img src="/images/jyotikhatri1.png" alt="All Looks" />
                <div className="mood-tile-overlay"></div>
              </div>
              <div className="mood-tile-content">
                <span className="mood-tile-num">00</span>
                <h3 className="mood-tile-title">ALL SIGNATURE LOOKS</h3>
                <p className="mood-tile-desc">Explore the full lookbook collection</p>
              </div>
              <div className="mood-tile-border"></div>
            </div>

            {moods.map((m) => (
              <div
                key={m.id}
                className={`mood-tile ${activeMood === m.id ? 'active' : ''}`}
                onClick={() => setActiveMood(m.id)}
              >
                <div className="mood-tile-bg">
                  <img src={m.image || "/images/jyotikhatri11.png"} alt={m.label || m.id} />
                  <div className="mood-tile-overlay"></div>
                </div>
                <div className="mood-tile-content">
                  <span className="mood-tile-num">{m.num}</span>
                  <h3 className="mood-tile-title">{m.label}</h3>
                  <p className="mood-tile-desc">{m.desc}</p>
                </div>
                <div className="mood-tile-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED LOOK */}
      <section className="portfolio-featured-section">
        <div className="container">
          <div className="featured-asymmetric-composition">
            <div className="featured-visual-cluster">
              <div className="featured-main-image-frame">
                <img src={featured.mainImage || "/images/jyotikhatri5.png"} alt={featured.title} />
              </div>
              <div className="featured-overlap-image-frame">
                <img src={featured.overlapImage} alt="Bridal Detail" />
              </div>
              <div className="featured-crop-image-frame">
                <img src={featured.cropImage} alt="Eye Artistry Crop" />
              </div>
            </div>

            <div className="featured-editorial-info">
              <span className="editorial-eyebrow">{featured.eyebrow}</span>
              <div className="featured-look-number">{featured.num}</div>
              <h2 className="featured-look-title">{featured.title}</h2>
              <div className="featured-look-tag">
                {featured.category} • {featured.location}
              </div>
              <p className="featured-look-description">{featured.description}</p>

              <div className="featured-action">
                <button
                  type="button"
                  className="btn btn-outline-gold"
                  onClick={() => onOpenLightbox(0)}
                >
                  <span>VIEW THIS LOOK →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERED GALLERY GRID (Category Index & Intentionally Irregular Masonry) */}
      <section className="portfolio-gallery-section">
        <div className="container">
          <div className="editorial-index-nav">
            <span className="editorial-index-label">INDEX CATEGORIES:</span>
            <div className="editorial-index-buttons">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`editorial-index-btn ${
                    activeMood === cat.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveMood(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="editorial-gallery-grid mt-4">
            {filteredItems.map((item) => {
              const originalIndex = allItems.findIndex((i) => i.id === item.id);
              return (
                <div
                  key={item.id}
                  className={`editorial-gallery-item ${
                    item.gridClass || 'grid-span-medium'
                  }`}
                  onClick={() => onOpenLightbox(originalIndex)}
                >
                  <div className="editorial-item-img-wrapper">
                    <img src={item.image} alt={item.title} />
                    <div className="editorial-item-overlay">
                      <div className="editorial-item-info">
                        <span className="editorial-item-cat">
                          {item.category.toUpperCase()}
                        </span>
                        <h3 className="editorial-item-title">{item.title}</h3>
                        <p className="editorial-item-sub">{item.subtitle}</p>
                        <span className="editorial-item-link">VIEW LOOK →</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CINEMATIC SCROLL STORY */}
      <section className="portfolio-scroll-story-section">
        <div className="container">
          <div className="scroll-story-grid">
            {/* Sticky Visual Image Left */}
            <div className="scroll-story-sticky-visual">
              <div className="scroll-story-img-frame">
                <img
                  src={currentScrollStory.image}
                  alt={currentScrollStory.title}
                  className="scroll-story-img"
                />
              </div>
            </div>

            {/* Scrollable Story Content Right */}
            <div className="scroll-story-content-list">
              <div className="mb-4">
                <span className="editorial-eyebrow">EDITORIAL STORIES</span>
                <h2 className="editorial-title">The Lookbook Journal</h2>
                <div className="gold-divider-left"></div>
              </div>

              {storiesList.map((storyItem, idx) => (
                <div
                  key={storyItem.num}
                  className={`scroll-story-item ${
                    activeScrollStoryIndex === idx ? 'active' : ''
                  }`}
                  onClick={() => setActiveScrollStoryIndex(idx)}
                  onMouseEnter={() => setActiveScrollStoryIndex(idx)}
                >
                  <span className="story-item-num">{storyItem.num}</span>
                  <h3 className="story-item-title">{storyItem.title}</h3>
                  <span className="story-item-cat">{storyItem.category}</span>
                  <p className="story-item-desc">{storyItem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE FACE BEHIND THE LOOK */}
      <section className="portfolio-face-details-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">PRECISION ARTISTRY</span>
            <h2 className="editorial-title">{faceDetails.heading}</h2>
            <p className="editorial-subtitle">{faceDetails.subheading}</p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="face-details-interactive-container">
            <div className="face-details-img-frame">
              <img src={faceDetails.mainImage} alt="Attention To Every Detail" />

              {/* HOTSPOT PINS OVERLAYING IMAGE */}
              {faceDetails.labels &&
                faceDetails.labels.map((lbl) => (
                  <div
                    key={lbl.id}
                    className={`hotspot-pin pin-${lbl.id} align-${lbl.align || 'right'} ${
                      activeFaceDetail === lbl.id ? 'active' : ''
                    }`}
                    style={{ top: lbl.y, left: lbl.x }}
                    onClick={() => setActiveFaceDetail(lbl.id)}
                    onMouseEnter={() => setActiveFaceDetail(lbl.id)}
                  >
                    <div className="pin-dot">
                      <span className="dot-center"></span>
                      <span className="dot-ring"></span>
                      <span className="dot-pulse"></span>
                    </div>
                    <span className="pin-label">{lbl.title}</span>
                  </div>
                ))}

              {/* ACTIVE HOTSPOT CARD OVERLAY IN BOTTOM-LEFT CORNER */}
              {activeFaceDetail && (() => {
                const activeObj = faceDetails.labels?.find((l) => l.id === activeFaceDetail);
                if (!activeObj) return null;
                return (
                  <div className="hotspot-info-card">
                    <span className="info-tag">{activeObj.title}</span>
                    <h4>{activeObj.title}</h4>
                    <p>{activeObj.detail}</p>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BEFORE / AFTER TRANSFORMATION */}
      <section className="portfolio-before-after-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">REVEAL THE ARTISTRY</span>
            <h2 className="editorial-title">{beforeAfter.heading}</h2>
            <p className="editorial-subtitle">{beforeAfter.subheading}</p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="before-after-slider-card">
            <div
              className="before-after-container"
              onMouseMove={handleSliderMove}
              onTouchMove={(e) => {
                if (e.touches[0]) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(
                    0,
                    Math.min(e.touches[0].clientX - rect.left, rect.width)
                  );
                  setSliderPos((x / rect.width) * 100);
                }
              }}
            >
              {/* After Layer (Base) */}
              <div className="ba-layer ba-after">
                <img src={beforeAfter.afterImage} alt="After Transformation" />
                <span className="ba-label right">AFTER</span>
              </div>

              {/* Before Layer (Clipped Top) */}
              <div
                className="ba-layer ba-before"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img src={beforeAfter.beforeImage} alt="Before Transformation" />
                <span className="ba-label left">BEFORE</span>
              </div>

              {/* Draggable Divider Line */}
              <div
                className="ba-divider-line"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="ba-handle-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1F1714"
                    strokeWidth="2"
                  >
                    <polyline points="15 18 9 12 15 6" />
                    <polyline points="9 18 15 12 9 6" strokeWidth="0" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1F1714"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE BRIDAL COLLECTION (OVERSIZED CHAPTERS) */}
      <section className="portfolio-bridal-collection-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">CHRONICLES OF BEAUTY</span>
            <h2 className="editorial-title">{bridalCollection.heading}</h2>
            <p className="editorial-subtitle">{bridalCollection.subtitle}</p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="bridal-chapters-grid">
            {bridalCollection.chapters &&
              bridalCollection.chapters.map((ch, idx) => (
                <div
                  key={ch.id}
                  className="bridal-chapter-card"
                  onClick={() => onOpenLightbox(idx % allItems.length)}
                >
                  <div className="bridal-chapter-img-wrapper">
                    <img src={ch.image} alt={ch.title} />
                    <div className="bridal-chapter-overlay">
                      <div className="bridal-chapter-content">
                        <span className="chapter-num">CHAPTER 0{idx + 1}</span>
                        <h3 className="chapter-title">{ch.title}</h3>
                        <p className="chapter-desc">{ch.desc}</p>
                        <span className="chapter-link">EXPLORE LOOK →</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: DETAIL STUDY (MACRO DETAIL STRIP) */}
      <section className="portfolio-detail-study-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-5">
            <span className="editorial-eyebrow">ARTISTRY FOCUS</span>
            <h2 className="editorial-title">{detailStudy.heading}</h2>
            <p className="editorial-subtitle">{detailStudy.subtitle}</p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="detail-study-grid">
            {detailStudy.items &&
              detailStudy.items.map((item, idx) => (
                <div key={idx} className="detail-study-card">
                  <div className="detail-study-img-frame">
                    <img src={item.image} alt={item.title} />
                    <span className="detail-study-badge">{item.label}</span>
                    <div className="detail-study-hover-bar"></div>
                  </div>
                  <div className="detail-study-caption">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: EDITORIAL QUOTE */}
      <section className="portfolio-editorial-quote-section">
        <div className="container text-center">
          <blockquote className="editorial-statement-quote">
            "{editorialQuote.quote}"
          </blockquote>
          <cite className="editorial-statement-author">
            {editorialQuote.author}
          </cite>
        </div>
      </section>

      {/* SECTION 12: INSTAGRAM / SOCIAL EDIT */}
      <section className="portfolio-instagram-section">
        <div className="container">
          <div className="section-header-editorial text-center mb-4">
            <span className="editorial-eyebrow">INSTAGRAM EDIT</span>
            <h2 className="editorial-title">{instagram.heading}</h2>
            <p className="editorial-subtitle">{instagram.subtitle}</p>
            <div className="gold-divider-center"></div>
          </div>

          <div className="instagram-irregular-grid">
            {instagram.images &&
              instagram.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`instagram-irregular-card item-${idx + 1}`}
                  onClick={handleInstagramClick}
                >
                  <img src={img} alt={`Instagram ${idx + 1}`} />
                  <div className="instagram-card-overlay">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-5">
            <button
              className="btn btn-outline-gold"
              onClick={handleInstagramClick}
            >
              {instagram.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="portfolio-final-cta-section">
        <div className="portfolio-final-cta-container">
          <div className="portfolio-final-cta-overlay"></div>
          {finalCTA.image && (
            <img
              src={finalCTA.image}
              alt="Makeup by Jyoti Khatri"
              className="portfolio-final-cta-bg-img"
            />
          )}

          <div className="portfolio-final-cta-content text-center">
            <span className="editorial-eyebrow gold">RESERVE YOUR MOMENT</span>
            <h2 className="portfolio-final-cta-title">
              Your Look
              <br />
              Could Be Next.
            </h2>
            <p className="portfolio-final-cta-subtitle">{finalCTA.text}</p>

            <div className="portfolio-final-cta-buttons">
              <button
                className="btn btn-primary"
                onClick={() => onOpenBooking('Portfolio Lookbook Enquiry')}
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


