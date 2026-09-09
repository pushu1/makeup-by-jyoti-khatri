import React from 'react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-grid-card">
      <div className="stars-row" aria-label={`${testimonial.rating} stars rating`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </div>
      <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
        </div>
        <div className="author-info">
          <div className="author-name">{testimonial.name}</div>
          <div className="author-event">{testimonial.eventType}</div>
        </div>
      </div>
    </div>
  );
}
