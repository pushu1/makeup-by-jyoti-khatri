import React, { useEffect } from 'react';

export default function Lightbox({ isOpen, currentIndex, onClose, onNext, onPrev, items }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || currentIndex === null || !items || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];
  const formattedCounter = `${String(currentIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;

  return (
    <div
      id="lightbox-modal"
      className="lightbox-modal active"
      role="dialog"
      aria-modal="true"
      aria-label="Digital Lookbook Viewer"
      onClick={(e) => {
        if (e.target.id === 'lightbox-modal') onClose();
      }}
    >
      <div className="lightbox-lookbook-container">
        {/* Close Action Button */}
        <button
          className="lightbox-lookbook-close"
          onClick={onClose}
          aria-label="Close lookbook viewer"
        >
          <span>&times;</span>
          <span className="close-text">CLOSE</span>
        </button>

        <div className="lightbox-lookbook-grid">
          {/* LEFT PANEL: Large Image Display */}
          <div className="lightbox-lookbook-img-col">
            <div className="lightbox-img-stage">
              <img
                src={currentItem.image}
                alt={currentItem.title || "Lookbook Image"}
                className="lightbox-main-img"
              />
            </div>
          </div>

          {/* RIGHT PANEL: Editorial Meta & Navigation */}
          <div className="lightbox-lookbook-meta-col">
            <div className="lightbox-meta-header">
              <div className="lightbox-counter">{formattedCounter}</div>
              {currentItem.category && (
                <span className="lightbox-category-tag">
                  {currentItem.category.toUpperCase()}
                </span>
              )}
            </div>

            <div className="lightbox-meta-body">
              {currentItem.title && (
                <h3 className="lightbox-look-title">{currentItem.title}</h3>
              )}
              {currentItem.location && (
                <div className="lightbox-look-loc">LOCATION • {currentItem.location}</div>
              )}
              {currentItem.subtitle && (
                <p className="lightbox-look-sub">{currentItem.subtitle}</p>
              )}
              {currentItem.description && (
                <p className="lightbox-look-desc">{currentItem.description}</p>
              )}
            </div>

            <div className="lightbox-meta-footer">
              <button
                type="button"
                className="btn-lightbox-nav prev"
                onClick={onPrev}
                aria-label="Previous look"
              >
                <span>← PREVIOUS</span>
              </button>

              <button
                type="button"
                className="btn-lightbox-nav next"
                onClick={onNext}
                aria-label="Next look"
              >
                <span>NEXT →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


