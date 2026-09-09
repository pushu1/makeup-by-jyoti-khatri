import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Premium Mobile & Desktop Scroll Reveal Hook
 * Uses IntersectionObserver to reveal sections and elements smoothly when scrolled into view.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    let observer;
    let failsafeTimer;

    const initTimer = setTimeout(() => {
      if (typeof window === 'undefined') return;

      const selector = [
        'section:not(#hero)',
        '.reveal',
        '.reveal-up',
        '.reveal-left',
        '.reveal-right',
        '.reveal-scale',
        '.reveal-image',
        '.animate-on-scroll',
        '[data-reveal]'
      ].join(', ');

      const elements = Array.from(document.querySelectorAll(selector));
      if (elements.length === 0) return;

      if (!('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -30px 0px',
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });

      failsafeTimer = setTimeout(() => {
        elements.forEach((el) => el.classList.add('is-visible'));
      }, 1500);

    }, 80);

    return () => {
      clearTimeout(initTimer);
      if (failsafeTimer) clearTimeout(failsafeTimer);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);
}
