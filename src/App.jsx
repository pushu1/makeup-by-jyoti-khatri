import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import Lightbox from './components/Lightbox';
import WhatsAppButton from './components/WhatsAppButton';
import { contentConfig } from './data/contentConfig';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Bridal from './pages/Bridal';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preferredService, setPreferredService] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenBooking = (serviceName = '') => {
    setPreferredService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreferredService('');
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    const total = contentConfig.portfolio.items.length;
    setLightboxIndex((prev) => (prev + 1) % total);
  };

  const handlePrevLightbox = () => {
    const total = contentConfig.portfolio.items.length;
    setLightboxIndex((prev) => (prev - 1 + total) % total);
  };

  const showToast = (brideName) => {
    setToastMessage(
      `Thank you, ${brideName}! Your bridal consultation enquiry has been sent. Jyoti's team will contact you shortly.`
    );
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <>
      <ScrollToTop />
      <Header onOpenBooking={handleOpenBooking} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenBooking={handleOpenBooking}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/about"
            element={<About onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/services"
            element={<Services onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/bridal"
            element={
              <Bridal
                onOpenBooking={handleOpenBooking}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                onOpenBooking={handleOpenBooking}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/reviews"
            element={<Reviews onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/contact"
            element={<Contact onSubmitSuccess={showToast} onOpenBooking={handleOpenBooking} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preferredService={preferredService}
        onSubmitSuccess={showToast}
      />

      {/* Global Lightbox Viewer */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        items={contentConfig.portfolio.items}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Real-time Feedback Toast */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C5A059"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
}
