import React, { useState, useEffect, useRef } from 'react';
import { contentConfig } from '../data/contentConfig';
import StatItem from './StatItem';

export default function Stats() {
  const { stats } = contentConfig;
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    const failsafe = setTimeout(() => {
      setIsStatsVisible(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      ref={statsRef}
      className={`about-stats-section stats-section ${isStatsVisible ? 'is-visible' : ''}`}
      aria-label="Key Milestones and Statistics"
    >
      <div className="container">
        <div className="about-stats-minimal-grid stats-grid">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              numberStr={stat.number}
              labelStr={stat.label}
              index={idx}
              isSectionVisible={isStatsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
