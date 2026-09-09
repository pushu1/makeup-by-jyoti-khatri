import React, { useState, useEffect, useRef } from 'react';

export default function ServicesTestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "I stressed over a lot of decisions I had to make for my wedding but Booking Jyoti Govindani Makeovers for my wedding makeup was certainly not one of them. I booked her for all events and every look was different and beautiful in its own way. Best thing about her makeup is she enhanced my features rather than giving the same look to every bride. I really felt flawless on my big day and not just made-up.",
      author: "Manisha Choudhary",
      images: {
        img1: "/images/jyotikhatri222222.png",
        img2: "/images/jyotikhatri1.png",
        img3: "/images/Post2.jpg"
      }
    },
    {
      id: 2,
      quote: "It was one of my best experiences. All my looks were very different and amazing. Everybody liked my looks and makeover. I would definitely suggest Jyoti if you want some different and best makeovers.",
      author: "Kajal Dhoot",
      images: {
        img1: "/images/jyotikhatri5.png",
        img2: "/images/jyotikhatri6.png",
        img3: "/images/Post3.jpg"
      }
    },
    {
      id: 3,
      quote: "Jyoti made me feel like the most confident version of myself on my wedding day. My makeup looked like real glowing skin even after 14 hours of pheras and emotional moments.",
      author: "Ananya Sharma",
      images: {
        img1: "/images/jyotikhatri7.png",
        img2: "/images/jyotikhatri11.png",
        img3: "/images/jyotikhatri111.png"
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
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className={`services-second-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="services-testimonial-container">
        <div className="services-testimonial-grid">
          {/* LEFT OVERLAPPING 3-IMAGE COLLAGE */}
          <div className="services-testimonial-collage">
            {/* IMAGE 01 — LARGE DOMINANT PORTRAIT */}
            <div className="services-collage-frame frame-main">
              <img
                src={current.images.img1}
                alt="Client Bridal Portrait"
                loading="lazy"
              />
            </div>

            {/* IMAGE 02 — SMALL UPPER-RIGHT PORTRAIT */}
            <div className="services-collage-frame frame-small">
              <img
                src={current.images.img2}
                alt="Client Makeup Detail"
                loading="lazy"
              />
            </div>

            {/* IMAGE 03 — WIDE OVERLAPPING LOWER IMAGE */}
            <div className="services-collage-frame frame-wide">
              <img
                src={current.images.img3}
                alt="Client Celebration Moment"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT TESTIMONIAL CONTENT */}
          <div className="services-testimonial-content-wrapper">
            {/* ORGANIC CURVED SVG LINE ART BEHIND TESTIMONIAL */}
            <svg
              className="services-testimonial-organic-svg"
              viewBox="0 0 240 380"
              fill="none"
            >
              <path
                d="M 220 20 C 120 80, 20 180, 140 280 C 200 330, 230 360, 220 370"
                stroke="#C5A059"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.4"
              />
            </svg>

            <div className="services-testimonial-content">
              <h2 className="services-testimonial-heading">
                Client Testimonials
              </h2>

              <blockquote className="services-testimonial-quote">
                "{current.quote}"
              </blockquote>

              <div className="services-testimonial-author">
                {current.author}
              </div>

              {/* MINIMAL SLIDER CONTROLS */}
              {testimonials.length > 1 && (
                <div className="services-testimonial-controls">
                  <button
                    type="button"
                    className="services-control-btn"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                  >
                    &#8249;
                  </button>

                  <span className="services-control-counter">
                    0{currentIndex + 1} &nbsp;/&nbsp; 0{testimonials.length}
                  </span>

                  <button
                    type="button"
                    className="services-control-btn"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                  >
                    &#8250;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
