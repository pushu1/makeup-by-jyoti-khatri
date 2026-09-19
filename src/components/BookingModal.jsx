import React, { useState, useEffect } from 'react';
import { contentConfig } from '../data/contentConfig';
import { sendLeadEmail } from '../services/emailService';

export default function BookingModal({ isOpen, onClose, preferredService, onSubmitSuccess }) {
  const { services } = contentConfig;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: preferredService || 'Bridal Makeup',
    city: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (preferredService) {
      setFormData((prev) => ({ ...prev, service: preferredService }));
    }
  }, [preferredService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
      eventDate: formData.date,
      serviceOrEventType: formData.service,
      venueOrCity: formData.city,
      notesOrMessage: formData.notes,
      source: 'Booking Modal (Priority Reservation)'
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
        date: '',
        service: preferredService || 'Bridal Makeup',
        city: '',
        notes: ''
      });
      onClose();
    } else {
      setSubmitError(result.error || 'Something went wrong while sending your enquiry. Please try again or contact us directly.');
    }
  };

  return (
    <div
      id="booking-modal"
      className="booking-modal active"
      role="dialog"
      aria-modal="true"
      aria-label="Book Bridal Consultation"
      onClick={(e) => {
        if (e.target.id === 'booking-modal') onClose();
      }}
    >
      <div className="booking-modal-box">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close booking modal">
          &times;
        </button>

        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="eyebrow">Priority Reservation</span>
          <h2 className="section-title" style={{ fontSize: '2.25rem' }}>
            Book Your Appointment
          </h2>
          <p className="section-subtitle">Reserve Jyoti Khatri for your special date.</p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

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

        <form id="modal-booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="modal-name">Bride's Name *</label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="modal-phone">Phone / WhatsApp *</label>
              <input
                type="tel"
                id="modal-phone"
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
              <label htmlFor="modal-email">Email Address *</label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourname@gmail.com"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="modal-date">Event Date *</label>
              <input
                type="date"
                id="modal-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="modal-service">Select Service *</label>
              <select
                id="modal-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                {services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="modal-city">City / Destination *</label>
              <input
                type="text"
                id="modal-city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Mumbai / Jaipur"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="modal-notes">Additional Notes</label>
            <textarea
              id="modal-notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Number of functions, timings, or styling preferences..."
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-gold"
            style={{
              width: '100%',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Enquiry...' : 'Submit Booking Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
