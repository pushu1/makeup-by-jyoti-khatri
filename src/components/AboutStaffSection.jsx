import React, { useState, useEffect, useRef } from 'react';

export default function AboutStaffSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const staffList = [
    {
      id: "s1",
      name: "Priyanka A Goindani",
      role: "Makeup Artist",
      image: "/images/Post1.jpg",
      alt: "Priyanka A Goindani - Makeup Artist",
      cornerClass: "staff-curve-left",
      staggerClass: "staff-item-1"
    },
    {
      id: "s2",
      name: "Deepika Bhati",
      role: "Makeup Artist",
      image: "/images/Post3.jpg",
      alt: "Deepika Bhati - Makeup Artist",
      cornerClass: "staff-curve-right",
      staggerClass: "staff-item-2"
    },
    {
      id: "s3",
      name: "Pooja Khatri",
      role: "Senior Hair Stylist",
      image: "/images/Post5.png",
      alt: "Pooja Khatri - Senior Hair Stylist",
      cornerClass: "staff-curve-left",
      staggerClass: "staff-item-3"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`about-staff-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        {/* HEADER */}
        <div className="staff-header">
          <span className="eyebrow">THE TEAM</span>
          <h2 className="staff-heading">Professional Staff</h2>
          <p className="staff-subtitle">
            Our team of skilled and certified professionals brings experience, creativity and attention to detail to every makeup experience.
          </p>
          <div className="heading-gold-line">
            <span></span>
          </div>
        </div>

        {/* ASYMMETRIC STAFF PORTRAITS GRID */}
        <div className="staff-editorial-grid">
          {staffList.map((member) => (
            <div key={member.id} className={`staff-card ${member.staggerClass}`}>
              <div className={`staff-img-wrapper ${member.cornerClass}`}>
                <img src={member.image} alt={member.alt} loading="lazy" />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">{member.name}</h3>
                <div className="staff-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
