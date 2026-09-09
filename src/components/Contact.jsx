import React, { useState } from 'react';
import { contentConfig } from '../data/contentConfig';
import { sendLeadEmail } from '../services/emailService';

export default function Contact({ onSubmitSuccess }) {
  const { contact, services } = contentConfig;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    event_date: '',
    event_type: '',
    service: '',
    venue: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const brideName = formData.name.trim() || 'Bride';

    const result = await sendLeadEmail({
      clientName: formData.name,
      phone: formData.phone,
      email: formData.email,
      eventDate: formData.event_date,
      serviceOrEventType: `${formData.event_type || 'Event'} — ${formData.service || 'Bridal Makeup'}`,
      venueOrCity: formData.venue,
      notesOrMessage: formData.message,
      source: 'Home Contact Section Form'
    });

    setIsSubmitting(false);

    if (result.success) {
      if (onSubmitSuccess) {
        onSubmitSuccess(brideName);
      }
      setFormData({
        name: '',
        phone: '',
        email: '',
        event_date: '',
        event_type: '',
        service: '',
        venue: '',
        message: ''
      });
    } else {
      setSubmitError(result.error || 'Failed to send enquiry. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title">Let's Create Your Look</h2>
          <p className="section-subtitle">
            Share your celebration details below and our team will get in touch to customize your bridal journey.
          </p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Information Placeholders */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Studio &amp; Inquiries</h3>
            <p className="contact-info-subtitle">
              Available for bridal celebrations, destination weddings, and masterclasses across India and globally.
            </p>

            <div className="contact-details-list">
              {/* WhatsApp */}
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h5>WhatsApp</h5>
                  <p>
                    <a href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {contact.whatsappDisplay}
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h5>Phone</h5>
                  <p>
                    <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}>
                      {contact.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h5>Email</h5>
                  <p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h5>Location</h5>
                  <p>{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="placeholder-note">
              <strong>Notice:</strong> All contact details and statistics above can be updated at any time in <code>src/data/contentConfig.js</code>.
            </div>
          </div>

          {/* Right Column: Premium Booking Enquiry Form */}
          <div className="enquiry-form-card">
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

            <form id="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enquiry-name">Your Full Name *</label>
                  <input
                    type="text"
                    id="enquiry-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enquiry-phone">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="096641 45983"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enquiry-email">Email Address *</label>
                  <input
                    type="email"
                    id="enquiry-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enquiry-date">Event Date *</label>
                  <input
                    type="date"
                    id="enquiry-date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enquiry-type">Event Type *</label>
                  <select
                    id="enquiry-type"
                    name="event_type"
                    value={formData.event_type}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>
                      Select Celebration Type
                    </option>
                    <option value="Wedding / Pheras">Wedding / Pheras</option>
                    <option value="Engagement / Roka">Engagement / Roka</option>
                    <option value="Reception">Reception</option>
                    <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                    <option value="Multi-Day Bridal Package">Multi-Day Bridal Package</option>
                    <option value="Party / Guest Makeover">Party / Guest Makeover</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="enquiry-service">Preferred Service *</label>
                  <select
                    id="enquiry-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>
                      Select Makeup Technique
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-venue">Venue / City *</label>
                <input
                  type="text"
                  id="enquiry-venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="e.g. The Leela Palace, Udaipur"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-message">Tell Us About Your Vision &amp; Requirements</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please mention your outfit colors, time of the event (day/evening), or any specific hair/draping preferences..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
