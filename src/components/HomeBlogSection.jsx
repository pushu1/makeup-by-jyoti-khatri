import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HomeBlogSection({ onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Exactly two featured editorial blog posts as specified
  const blogPosts = [
    {
      id: "b1",
      title: "Top 12 Lipstick Trends You Must Try This Winter",
      excerpt: "Top 12 Lipstick Trends You Must Try This Winter Winter is here and the time has come to spruce up...",
      image: "/images/Post3.jpg",
      alt: "Top 12 Lipstick Trends You Must Try This Winter"
    },
    {
      id: "b2",
      title: "How To Do A Natural Glowy Makeup Look in 7 Easy Steps?",
      excerpt: "How To Do A Natural Glowy Makeup Look in 7 Easy Steps? Introduction The no-makeup glow makeup look...",
      image: "/images/Post5.png",
      alt: "How To Do A Natural Glowy Makeup Look in 7 Easy Steps?"
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

  return (
    <section
      ref={sectionRef}
      id="editorial-blog"
      className={`home-blog-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        {/* CENTERED SECTION HEADER */}
        <div className="blog-header">
          <h2 className="blog-heading">
            Beauty Tips, Trends, and Insights – Our Blog
          </h2>

          <p className="blog-description">
            Stay updated with the latest in beauty, makeup tips, bridal trends, and expert advice. Explore our blog for inspiration, tutorials, and insider secrets from the world of makeovers and beauty training.
          </p>

          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        {/* TWO-COLUMN EDITORIAL BLOG GRID */}
        <div className="blog-editorial-grid">
          {/* BLOG POST 01 */}
          <article className="blog-post-card blog-post-1">
            <Link to="/services" className="blog-img-wrapper">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].alt}
                loading="lazy"
              />
            </Link>
            <div className="blog-post-content">
              <h3 className="blog-post-title">
                <Link to="/services">{blogPosts[0].title}</Link>
              </h3>
              <p className="blog-post-excerpt">
                {blogPosts[0].excerpt}
              </p>
              <Link to="/services" className="blog-editorial-link">
                READ ARTICLE <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </article>

          {/* BLOG POST 02 */}
          <article className="blog-post-card blog-post-2">
            <Link to="/services" className="blog-img-wrapper">
              <img
                src={blogPosts[1].image}
                alt={blogPosts[1].alt}
                loading="lazy"
              />
            </Link>
            <div className="blog-post-content">
              <h3 className="blog-post-title">
                <Link to="/services">{blogPosts[1].title}</Link>
              </h3>
              <p className="blog-post-excerpt">
                {blogPosts[1].excerpt}
              </p>
              <Link to="/services" className="blog-editorial-link">
                READ ARTICLE <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
