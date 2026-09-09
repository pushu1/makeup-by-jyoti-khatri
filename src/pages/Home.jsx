import React from 'react';
import Hero from '../components/Hero';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeServicesSection from '../components/HomeServicesSection';
import HomeAcademySection from '../components/HomeAcademySection';
import HomeWhyChooseSection from '../components/HomeWhyChooseSection';
import HomeTestimonialsSection from '../components/HomeTestimonialsSection';
import HomeBlogSection from '../components/HomeBlogSection';
import { contentConfig } from '../data/contentConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home({ onOpenBooking, onOpenLightbox }) {
  const { seo } = contentConfig;
  useDocumentTitle(seo.home.title, seo.home.description);

  return (
    <div className="page-transition">
      {/* 1. Full Screen Hero */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Redesigned Editorial Second Section */}
      <HomeAboutSection onOpenBooking={onOpenBooking} />

      {/* 3. Redesigned Makeover Services Composition */}
      <HomeServicesSection onOpenBooking={onOpenBooking} />

      {/* 4. Beauty Academy CTA Section */}
      <HomeAcademySection onOpenBooking={onOpenBooking} />

      {/* 5. Asymmetric Editorial Feature — Why Choose Us */}
      <HomeWhyChooseSection onOpenBooking={onOpenBooking} />

      {/* 6. Editorial Client Testimonials */}
      <HomeTestimonialsSection onOpenBooking={onOpenBooking} />

      {/* 7. Editorial Beauty Blog */}
      <HomeBlogSection onOpenBooking={onOpenBooking} />
    </div>
  );
}

