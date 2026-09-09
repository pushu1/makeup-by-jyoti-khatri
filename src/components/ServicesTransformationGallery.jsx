import React, { useState, useEffect, useRef } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';

export default function ServicesTransformationGallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFiltering, setIsFiltering] = useState(false);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCategoryChange = (catId) => {
    if (catId === activeCategory) return;
    setIsFiltering(true);
    setTimeout(() => {
      setActiveCategory(catId);
      setIsFiltering(false);
    }, 200);
  };

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className={`transformation-gallery-section ${isVisible ? 'is-visible' : ''}`}
    >
      {/* SECTION HEADER CONTAINER */}
      <div className="gallery-header-container">
        <h2 className="transformation-title">Stunning Transformation</h2>
        <p className="transformation-subtitle">
          Explore our gallery featuring exquisite makeup looks, from bridal elegance to party glam, showcasing artistry tailored for every occasion.
        </p>

        {/* CATEGORY TEXT NAVIGATION */}
        <nav className="transformation-category-nav" aria-label="Gallery Categories">
          <div className="category-scroll-wrapper">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* FULL WIDTH IMAGE GRID */}
      <div className="gallery-grid-fullwidth">
        <div className={`gallery-image-grid ${isFiltering ? 'is-filtering' : ''}`}>
          {filteredImages.map((img, idx) => (
            <div
              key={`${img.id}-${img.category}`}
              className="gallery-image-item"
              style={{ transitionDelay: `${(idx % 6) * 60}ms` }}
              onClick={() => onOpenLightbox && onOpenLightbox(img.src, img.alt)}
            >
              <div className="gallery-image-frame">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
