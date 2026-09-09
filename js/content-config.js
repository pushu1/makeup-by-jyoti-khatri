/**
 * MAKEUP BY JYOTI KHATRI - Centralized Website Content Configuration
 * 
 * All website texts, placeholder statistics, contact info, services, 
 * testimonials, and gallery items are defined here for effortless customization.
 * Modify any field below to immediately update the website.
 */

const SITE_CONFIG = {
  brand: {
    name: "Makeup by Jyoti Khatri",
    shortName: "Jyoti Khatri",
    tagline: "BRIDAL & BEAUTY MAKEUP ARTIST",
    subTagline: "Bridal Makeup • Beauty • Artistry",
    establishedYear: "2019",
    heroHeading: "Makeup by Jyoti Khatri",
    heroStatement: "Enhancing Your Beauty,\nCreating Your Signature Look.",
    heroDescription: "Luxury bridal, engagement and occasion makeup crafted to make you feel confident, radiant and completely yourself.",
    circularBadgeText: "MAKEUP • BEAUTY • BRIDAL • JYOTI KHATRI • "
  },

  contact: {
    phone: "+91 98765 43210", // Placeholder
    phoneDisplay: "+91 98765 43210 (Placeholder)",
    whatsapp: "+919876543210", // Placeholder
    whatsappDisplay: "+91 98765 43210 (Placeholder)",
    email: "enquiry@makeupbyjyotikhatri.com", // Placeholder
    location: "Studio & On-Location (India & Worldwide)",
    city: "Mumbai / Available Worldwide",
    workingHours: "By Appointment Only • Mon - Sun: 09:00 AM - 07:00 PM"
  },

  social: {
    instagramHandle: "@makeupbyjyotikhatri",
    instagramUrl: "https://instagram.com/makeupbyjyotikhatri",
    facebookUrl: "https://facebook.com/makeupbyjyotikhatri",
    whatsappUrl: "https://wa.me/919876543210?text=Hello%20Jyoti%2C%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup%20services."
  },

  stats: [
    {
      number: "500+",
      label: "Happy Brides",
      subtext: "Personalized Wedding Looks"
    },
    {
      number: "7+",
      label: "Years of Experience",
      subtext: "Mastering Bridal Artistry"
    },
    {
      number: "1000+",
      label: "Makeovers",
      subtext: "Celebrations & Editorial"
    },
    {
      number: "100%",
      label: "Personalized Looks",
      subtext: "Tailored to Your Features"
    }
  ],

  about: {
    heading: "Meet Jyoti Khatri",
    subheading: "Where artistry meets individuality.",
    quote: "Makeup is not about changing who you are. It is about enhancing the features that make you uniquely beautiful.",
    paragraphs: [
      "With over seven years of dedicated experience in high-end bridal, fashion, and red-carpet styling, Jyoti Khatri has emerged as a sought-after name for brides seeking contemporary sophistication rooted in timeless grace.",
      "Every bride carries an individual story and distinct aesthetic. Jyoti's signature approach blends precision skin-prep, featherlight HD application, and customized hair artistry to ensure you feel luminous from the morning rituals to the late-night celebrations."
    ],
    signature: "With love, Jyoti",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Jyoti Khatri - Luxury Bridal Makeup Artist"
  },

  services: [
    {
      id: "bridal",
      name: "Bridal Makeup",
      tagline: "Your wedding look, thoughtfully designed around you.",
      description: "A complete couture experience covering extensive skin consultation, premium waterproof HD/Airbrush base, intricate dupatta draping, jewelry styling, and signature bridal glow.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
      badge: "Signature"
    },
    {
      id: "engagement",
      name: "Engagement Makeup",
      tagline: "Soft, radiant and effortlessly elegant.",
      description: "Dewy, romantic pastel tones and luminous skin textures customized to complement contemporary lehengas, evening gowns, and daylight celebrations.",
      image: "https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1000&auto=format&fit=crop",
      badge: "Romantic"
    },
    {
      id: "reception",
      name: "Reception Makeup",
      tagline: "Glamorous, sophisticated and camera-ready.",
      description: "High-definition evening glamour with sculpted cheekbones, sultry eyes, or bold lips designed to shine effortlessly under stage lights and high-resolution cameras.",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
      badge: "High Glam"
    },
    {
      id: "party",
      name: "Party & Occasion Makeup",
      tagline: "Beautiful looks for every special celebration.",
      description: "Exquisite makeovers for bridesmaids, mothers, cocktail parties, sangeet nights, and milestones with long-wearing comfort and refined elegance.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
      badge: "Celebration"
    },
    {
      id: "hd-makeup",
      name: "HD Makeup",
      tagline: "Flawless finish designed for photography and long celebrations.",
      description: "Micro-fine pigments that mimic natural skin without any cakey texture, ensuring zero flashback and pristine longevity through emotional moments.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
      badge: "Camera Ready"
    },
    {
      id: "airbrush",
      name: "Airbrush Makeup",
      tagline: "Lightweight, smooth and long-lasting perfection.",
      description: "State-of-the-art mist application providing a weightless, silicone-infused velvet veil that resists humidity, sweat, tears, and extended dancing hours.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop",
      badge: "Waterproof"
    }
  ],

  bridalExperience: {
    heading: "Your Bridal Look,\nYour Story.",
    description: "From the first consultation to the final touch, every detail is thoughtfully planned to create a bridal look that feels unmistakably yours.",
    stages: [
      {
        number: "01",
        title: "CONSULTATION",
        subtitle: "Vision & Skin Analysis",
        description: "We discuss your wedding theme, outfit palettes, jewelry arrangements, lighting conditions, and custom skin prep regime well before the big day."
      },
      {
        number: "02",
        title: "PERSONALIZED LOOK",
        subtitle: "Custom Harmony & Moodboards",
        description: "We design a moodboard harmonizing your hairstyle, veil/dupatta placement, and makeup undertones to complement your individual facial architecture."
      },
      {
        number: "03",
        title: "THE FINAL TRANSFORMATION",
        subtitle: "Calm, Flawless Execution",
        description: "On your wedding day, enjoy a serene, punctual luxury experience using top-tier international brands that last impeccably through every ritual."
      }
    ],
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"
  },

  gallery: [
    {
      id: "g1",
      category: "bridal",
      title: "Royal Crimson Heritage Bride",
      subtitle: "Traditional North Indian Bridal Styling",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait"
    },
    {
      id: "g2",
      category: "engagement",
      title: "Pastel Dewy Engagement",
      subtitle: "Soft Rose Gold Radiance",
      image: "https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait"
    },
    {
      id: "g3",
      category: "reception",
      title: "Champagne Velvet Glamour",
      subtitle: "Sculpted Evening Look with Statement Eyes",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop",
      aspect: "square"
    },
    {
      id: "g4",
      category: "bridal",
      title: "Contemporary Ivory & Gold Bride",
      subtitle: "Luminous Skin & Antique Kundan Accents",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait"
    },
    {
      id: "g5",
      category: "party",
      title: "Sangeet Night Radiance",
      subtitle: "High-Shine Gloss & Smudged Kohl Eyes",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
      aspect: "square"
    },
    {
      id: "g6",
      category: "hair",
      title: "Textured Floral Braid",
      subtitle: "Handcrafted Baby's Breath & Jasmine Styling",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait"
    },
    {
      id: "g7",
      category: "hair",
      title: "Classic Low Bun with Real Flora",
      subtitle: "Architectural Dupatta Pinning & Clean Hairlines",
      image: "https://images.unsplash.com/photo-1522337094346-297ff59a00d6?q=80&w=1200&auto=format&fit=crop",
      aspect: "square"
    },
    {
      id: "g8",
      category: "bridal",
      title: "Traditional Mathapatti Perfection",
      subtitle: "Flawless HD Airbrush Bridal Canvas",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      aspect: "portrait"
    }
  ],

  whyChooseUs: [
    {
      number: "01",
      title: "PERSONALIZED APPROACH",
      description: "Every look is designed around your features, outfit and personality. No cookie-cutter molds — only bespoke harmony."
    },
    {
      number: "02",
      title: "PREMIUM PRODUCTS",
      description: "Professional-quality luxury products (Charlotte Tilbury, Dior, MAC, Huda, NARS, Chanel) selected for skin safety and a flawless finish."
    },
    {
      number: "03",
      title: "FLAWLESS FINISH",
      description: "Long-lasting makeup designed specifically for real Indian wedding celebrations, heat, tear-filled rituals, and 4K photography."
    },
    {
      number: "04",
      title: "ATTENTION TO DETAIL",
      description: "Every detail matters, from comprehensive skin prep and brow shaping to symmetric jewelry pinning and final veil touch-ups."
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Ananya Sharma",
      eventType: "Bridal Makeup • New Delhi",
      quote: "Jyoti made me feel like the most confident version of myself on my wedding day. My makeup looked like real glowing skin even after 14 hours of pheras and emotional moments. Everyone couldn't stop praising the natural radiance!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      id: "t2",
      name: "Rhea Kapoor",
      eventType: "Destination Wedding & Reception • Udaipur",
      quote: "Booking Jyoti for all 3 events was the best decision of my wedding planning. From my pastel engagement look to my high-glam reception gown, she created three completely distinct, breathtaking avatars without ever looking overdone.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      id: "t3",
      name: "Tanvi Mehta",
      eventType: "Bridal & Sangeet Makeup • Mumbai",
      quote: "Her calmness and punctuality in the bridal suite kept me completely relaxed. The dupatta draping and hair styling were as flawless as the makeup. I would choose Makeup by Jyoti Khatri again in a heartbeat!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rating: 5
    }
  ],

  instagramGrid: [
    {
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=600&auto=format&fit=crop",
      alt: "Bridal Glamour Reel"
    },
    {
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
      alt: "Behind The Scenes Bridal Prep"
    },
    {
      image: "https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=600&auto=format&fit=crop",
      alt: "Dewy Engagement Glow"
    },
    {
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
      alt: "Bridal Floral Hair Artistry"
    },
    {
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
      alt: "Luxury Vanity & Kit Essentials"
    },
    {
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
      alt: "The Signature Bridal Reveal"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
