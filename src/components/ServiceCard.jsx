import React from 'react';

export default function ServiceCard({ service, onBook, isDetailed = false }) {
  return (
    <article className={`service-card ${isDetailed ? 'service-card-detailed' : ''}`}>
      <div className="service-image-box">
        <img src={service.image} alt={service.name} loading="lazy" />
        <span className="service-badge">{service.badge}</span>
      </div>
      <div className="service-content">
        <h3 className="service-title">{service.name}</h3>
        <p className="service-tagline">&ldquo;{service.tagline}&rdquo;</p>
        <p className="service-desc">{service.description}</p>

        {isDetailed && (
          <div className="service-details-box">
            {service.included && service.included.length > 0 && (
              <div className="service-included-section">
                <h5 className="service-included-title">What is Included:</h5>
                <ul className="service-included-list">
                  {service.included.map((inc, idx) => (
                    <li key={idx}>
                      <span className="bullet-check">&bull;</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.idealFor && (
              <div className="service-ideal-for">
                <strong>Ideal For:</strong> {service.idealFor}
              </div>
            )}
          </div>
        )}

        <div className="service-card-footer">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => onBook(service.name)}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </article>
  );
}
