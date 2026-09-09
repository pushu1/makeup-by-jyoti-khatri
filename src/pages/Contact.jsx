import React, { useState } from 'react';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { sendLeadEmail } from '../services/emailService';

export default function Contact({ onSubmitSuccess, onOpenBooking }) {
  const { seo, contactPage, services, social, contact } = contentConfig;
  useDocumentTitle(seo.contact.title, seo.contact.description);

  const cData = contactPage || {};
  const note = cData.note || {};
  const faqs = cData.faqs || {};
  const finalCTA = cData.finalCTA || {};

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_date: '',
    venue: '',
    service: '',
    functions_count: '1',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Accordion State
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
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
      serviceOrEventType: formData.service,
      venueOrCity: formData.venue,
      functionsCount: formData.functions_count,
      notesOrMessage: formData.message,
      source: 'Contact Page Studio Form'
    });

    setIsSubmitting(false);

    if (result.success) {
      if (onSubmitSuccess) {
        onSubmitSuccess(brideName);
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_date: '',
        venue: '',
        service: '',
        functions_count: '1',
        message: ''
      });
    } else {
      setSubmitError(result.error || 'Failed to send enquiry. Please try again.');
    }
  };

  const handleWhatsAppClick = () => {
    window.open(social.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleFaq = (index) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="contact-page-redesign">
      {/* TWO-COLUMN STUDIO CONTACT SECTION */}
      <section className="contact-studio-section" id="enquiry-form-section">
        <div className="container">
          <div className="contact-studio-grid">
            
            {/* LEFT COLUMN: Get In Touch & Contact Information (~40%) */}
            <div className="contact-info-card">
              <span className="editorial-eyebrow gold">RESERVATIONS</span>
              <h1 className="info-card-title">Get In Touch</h1>
              <p className="info-card-subtitle">
                I’d love to hear from you. Tell me about your wedding day, your vision and the beauty experience you’re looking for.
              </p>

              <div className="contact-vertical-list">
                <div className="list-vertical-accent"></div>

                {/* 1. Address */}
                <div className="info-item-row">
                  <div className="info-icon-wrapper">
                    <svg className="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">ADDRESS</span>
                    <span className="info-value">{contact.location}</span>
                  </div>
                </div>

                {/* 2. Phone */}
                <div className="info-item-row">
                  <div className="info-icon-wrapper">
                    <svg className="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">PHONE / WHATSAPP</span>
                    <a href="tel:+919664145983" className="info-value info-link">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* 3. Email */}
                <div className="info-item-row">
                  <div className="info-icon-wrapper">
                    <svg className="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">EMAIL</span>
                    <a href={`mailto:${contact.email}`} className="info-value info-link">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* 4. Instagram */}
                <div className="info-item-row">
                  <div className="info-icon-wrapper">
                    <svg className="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div className="info-text-group">
                    <span className="info-label">INSTAGRAM</span>
                    <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer" className="info-value info-link">
                      {social.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-card-footer-tag">
                BRIDAL • OCCASION • DESTINATION
              </div>
            </div>

            {/* RIGHT COLUMN: Send Us A Message Form (~60%) */}
            <div className="contact-form-card">
              <span className="editorial-eyebrow gold">ENQUIRY FORM</span>
              <h2 className="form-card-title">Send Us A Message</h2>
              <p className="form-card-subtitle">
                Share a few details about your celebration and I’ll get back to you shortly.
              </p>

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

              <form onSubmit={handleFormSubmit} className="studio-contact-form">
                {/* Row 1: Full Name & Email */}
                <div className="studio-row-2col">
                  <div className="studio-input-group">
                    <label htmlFor="studio-name" className="studio-label">FULL NAME *</label>
                    <input
                      type="text"
                      id="studio-name"
                      name="name"
                      className="studio-input"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Ananya Sharma"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="studio-input-group">
                    <label htmlFor="studio-email" className="studio-label">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      id="studio-email"
                      name="email"
                      className="studio-input"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="ananya@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Wedding Date */}
                <div className="studio-row-2col">
                  <div className="studio-input-group">
                    <label htmlFor="studio-phone" className="studio-label">PHONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      id="studio-phone"
                      name="phone"
                      className="studio-input"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="096641 45983"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="studio-input-group">
                    <label htmlFor="studio-date" className="studio-label">WEDDING DATE *</label>
                    <input
                      type="date"
                      id="studio-date"
                      name="event_date"
                      className="studio-input"
                      value={formData.event_date}
                      onChange={handleFormChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Row 3: Wedding Location & Service Required */}
                <div className="studio-row-2col">
                  <div className="studio-input-group">
                    <label htmlFor="studio-venue" className="studio-label">WEDDING LOCATION *</label>
                    <input
                      type="text"
                      id="studio-venue"
                      name="venue"
                      className="studio-input"
                      value={formData.venue}
                      onChange={handleFormChange}
                      placeholder="e.g. Udaipur / The Leela Palace"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="studio-input-group">
                    <label htmlFor="studio-service" className="studio-label">SERVICE REQUIRED *</label>
                    <select
                      id="studio-service"
                      name="service"
                      className="studio-select"
                      value={formData.service}
                      onChange={handleFormChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>Select Makeup Service</option>
                      {services && services.map((s) => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Number of Functions */}
                <div className="studio-row-full">
                  <div className="studio-input-group">
                    <label htmlFor="studio-functions" className="studio-label">NUMBER OF FUNCTIONS *</label>
                    <select
                      id="studio-functions"
                      name="functions_count"
                      className="studio-select"
                      value={formData.functions_count}
                      onChange={handleFormChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="1">1 Function (Wedding Only)</option>
                      <option value="2">2 Functions (Wedding &amp; Reception)</option>
                      <option value="3">3 Functions (Multi-Day Destination)</option>
                      <option value="4+">4+ Functions (Complete Bridal Suite)</option>
                    </select>
                  </div>
                </div>

                {/* Full Width: Message / Vision */}
                <div className="studio-row-full">
                  <div className="studio-input-group">
                    <label htmlFor="studio-message" className="studio-label">YOUR VISION / MESSAGE</label>
                    <textarea
                      id="studio-message"
                      name="message"
                      rows="4"
                      className="studio-textarea"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Describe your outfit shades, preferred skin finish, jewellery, or wedding morning vision..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-studio-submit"
                  style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING ENQUIRY...' : 'SEND ENQUIRY →'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* CONSULTATION / PERSONAL NOTE FROM JYOTI */}
      <section className="contact-note-section">
        <div className="container">
          <div className="contact-note-grid">
            <div className="contact-note-img-col">
              <div className="contact-note-img-frame">
                <img src={note.image} alt={note.heading} />
              </div>
            </div>

            <div className="contact-note-text-col">
              <span className="editorial-eyebrow">{note.eyebrow}</span>
              <h2 className="editorial-title">{note.heading}</h2>
              <div className="gold-divider-left mb-4"></div>
              <p className="contact-note-paragraph">{note.paragraph}</p>
              
              <div className="contact-note-signature">
                <span className="signature-text-gold">{note.signature}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL LUXURY TWO-COLUMN EDITORIAL CONTACT FAQ */}
      <section className="contact-faq-editorial-section">
        <div className="container">
          <div className="faq-editorial-grid">
            {/* LEFT COLUMN: Typography intro & action (~35%) */}
            <div className="faq-editorial-left-col">
              <span className="editorial-eyebrow gold">CLEAR ANSWERS</span>
              <h2 className="faq-editorial-heading">
                Before You<br />Enquire
              </h2>
              <p className="faq-editorial-desc">
                Here are a few answers to the questions brides ask most often. If you still need help, I’m always happy to hear from you.
              </p>

              <div className="faq-left-gold-line"></div>

              <div className="faq-left-action-group">
                <span className="faq-left-subtext">Still have a question?</span>
                <button
                  type="button"
                  className="btn-faq-left-message"
                  onClick={(e) => {
                    e.preventDefault();
                    const elem = document.getElementById('enquiry-form-section');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  SEND A MESSAGE →
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Compact vertical editorial row list (~65%) */}
            <div className="faq-editorial-right-col">
              <div className="faq-editorial-list">
                {faqs.questions && faqs.questions.map((faqItem, idx) => {
                  const isOpen = activeFaqIndex === idx;
                  const faqId = `contact-faq-answer-${idx}`;
                  return (
                    <div
                      key={idx}
                      className={`faq-editorial-row ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-editorial-row-btn"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        aria-controls={faqId}
                      >
                        <span className="faq-row-num">0{idx + 1}</span>
                        <h3 className="faq-row-question">{faqItem.q}</h3>
                        <span className="faq-row-toggle-icon">{isOpen ? '×' : '+'}</span>
                      </button>

                      {isOpen && (
                        <div id={faqId} className="faq-editorial-answer-body animate-fade-in">
                          <div className="faq-answer-accent-line"></div>
                          <p className="faq-answer-text">{faqItem.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL DARK CTA */}
      <section className="contact-final-cta-section">
        <div className="container text-center">
          <span className="editorial-eyebrow gold">{finalCTA.eyebrow}</span>
          <h2 className="contact-final-cta-title">{finalCTA.heading}</h2>
          <p className="contact-final-cta-subtitle">{finalCTA.subtitle}</p>

          <div className="contact-final-cta-buttons">
            <button
              className="btn btn-primary"
              onClick={() => onOpenBooking ? onOpenBooking('Contact Final CTA') : handleWhatsAppClick()}
            >
              {finalCTA.buttonText}
            </button>
            <button className="btn btn-whatsapp" onClick={handleWhatsAppClick}>
              START A CONVERSATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
