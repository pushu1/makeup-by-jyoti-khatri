import React, { useState, useEffect } from 'react';

export default function StatItem({ numberStr, labelStr, index, isSectionVisible }) {
  const [displayValue, setDisplayValue] = useState(() => {
    if (numberStr.includes('.')) return '0.0';
    return '0';
  });

  useEffect(() => {
    if (!isSectionVisible) return;

    // Accessibility check: reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(numberStr);
      return;
    }

    const isFloat = numberStr.includes('.');
    const hasPercent = numberStr.includes('%');
    const numericTarget = parseFloat(numberStr.replace(/[^0-9.]/g, '')) || 0;

    const staggerDelay = index * 150; // 0ms, 150ms, 300ms
    const duration = 2000; // 2000ms duration
    let animationFrameId;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < staggerDelay) {
        animationFrameId = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min((elapsed - staggerDelay) / duration, 1);
      // Ease-out quart timing curve: starts fast, decelerates smoothly
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = numericTarget * eased;

      if (progress < 1) {
        if (isFloat) {
          setDisplayValue(current.toFixed(1));
        } else if (hasPercent) {
          setDisplayValue(`${Math.floor(current)}`);
        } else {
          setDisplayValue(`${Math.floor(current)}`);
        }
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Guaranteed exact finish: "200+", "5.0", "100%"
        setDisplayValue(numberStr);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isSectionVisible, numberStr, index]);

  // Stagger delays for CSS entrance transitions
  const numDelay = `${index * 150}ms`;
  const labelDelay = `${index * 150 + 150}ms`;

  return (
    <div className={`about-stat-item stat-item-stagger-${index + 1}`}>
      <span
        className="stat-number"
        style={{ transitionDelay: numDelay }}
      >
        {displayValue}
      </span>
      <span
        className="stat-label"
        style={{ transitionDelay: labelDelay }}
      >
        {labelStr}
      </span>
    </div>
  );
}
