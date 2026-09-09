import React, { useState, useEffect, useRef } from 'react';

export default function HomeTestimonialsSection({ onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  // 3 Editorial Testimonial Slides with 3-image collages
  const slides = [
    {
      id: 1,
      quote: "It was one of my best experience. My all the looks were very different and amazing. Everybody liked my looks and makeover. I would definitely suggest Jyoti if you want some different and best makeovers.",
      author: "Kajal Dhoot",
      images: {
        img1: "/images/jyotikhatri5.png", // Dominant portrait
        img2: "/images/jyotikhatri7777.png", // Upper-right portrait
        img3: "/images/jyotikhatri7.png",  // Lower wide landscape
      }
    },
    {
      id: 2,
      quote: "Jyoti made me feel like the most confident version of myself on my wedding day. My makeup looked like real glowing skin even after 14 hours of pheras and emotional moments.",
      author: "Ananya Sharma",
      images: {
        img1: "/images/jyotikhatri1111.png",
        img2: "/images/jyotikhatri11.png",
        img3: "/images/jyotikhatri111.png",
      }
    },
    {
      id: 3,
      quote: "Booking for all 3 events was the best decision of my wedding planning. From my pastel engagement look to my high-glam reception gown, she created three completely distinct, breathtaking avatars.",
      author: "Rhea Kapoor",
      images: {
        img1: "/images/jyotikhatri2222.png",
        img2: "/images/jyotikhatri222.png",
        img3: "/images/jyotikhatri22.png",
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="editorial-testimonials"
      className={`home-testimonials-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="testimonials-grid">
          {/* LEFT SIDE: 3-IMAGE OVERLAPPING EDITORIAL PHOTO COLLAGE */}
          <div className="testimonials-collage">
            {/* IMAGE 01 — DOMINANT PORTRAIT (TOP-LEFT) */}
            <div className="testimonial-image-wrapper collage-frame frame-1">
              <img
                src={currentSlide.images.img1}
                alt="Client Bridal Transformation"
                loading="lazy"
              />
            </div>

            {/* IMAGE 02 — SMALL UPPER-RIGHT PORTRAIT */}
            <div className="testimonial-image-wrapper collage-frame frame-2">
              <img
                src={currentSlide.images.img2}
                alt="Client Detail Close-Up"
                loading="lazy"
              />
            </div>

            {/* IMAGE 03 — LOWER OVERLAPPING LANDSCAPE */}
            <div className="testimonial-image-wrapper collage-frame frame-3">
              <img
                src={currentSlide.images.img3}
                alt="Client Celebration Makeover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT SIDE: OPEN EDITORIAL TESTIMONIAL TYPOGRAPHY & SLIDER CONTROLS */}
          <div className="testimonials-content-wrapper">
            {/* ORGANIC HAND-DRAWN CURVED SVG LINE BEHIND TESTIMONIAL CONTENT */}
            <svg className="testimonials-organic-svg" viewBox="0 0 240 380" fill="none">
              <path
                d="M 220 20 C 120 80, 20 180, 140 280 C 200 330, 230 360, 220 370"
                stroke="#C5A059"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.45"
              />
            </svg>

            <div className="testimonials-content">
              <h2 className="testimonials-heading">
                Client Testimonials
              </h2>
              
              <div className="testimonials-gold-divider">
                <span></span>
              </div>

              {/* SLIDE QUOTE & AUTHOR */}
              <div className="testimonial-slide-body">
                <blockquote className="testimonial-quote">
                  "{currentSlide.quote}"
                </blockquote>

                <div className="testimonial-author">
                  {currentSlide.author}
                </div>
              </div>

              {/* MINIMAL LUXURY SLIDER CONTROLS */}
              <div className="testimonial-controls">
                <button
                  type="button"
                  className="control-arrow control-prev"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  &#8249;
                </button>

                <span className="control-counter">
                  0{currentIndex + 1} &nbsp;/&nbsp; 0{slides.length}
                </span>

                <button
                  type="button"
                  className="control-arrow control-next"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
