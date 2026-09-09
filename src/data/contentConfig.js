/**
 * MAKEUP BY JYOTI KHATRI - Centralized Website Content Configuration
 * Multi-Page Data Architecture supporting: Home, About, Services, Bridal,
 * Portfolio, Reviews, Contact, and NotFound pages.
 */

export const contentConfig = {
  seo: {
    home: {
      title: "Makeup by Jyoti Khatri | Luxury Bridal Makeup Artist",
      description: "Enhancing Your Beauty, Creating Your Signature Look. Luxury Indian bridal, engagement, and celebration makeovers by Jyoti Khatri."
    },
    about: {
      title: "About Jyoti Khatri | Makeup by Jyoti Khatri",
      description: "Meet Jyoti Khatri. Explore her artistry philosophy, 7+ years of bridal experience, and personalized approach to timeless beauty."
    },
    services: {
      title: "Makeup Services | Makeup by Jyoti Khatri",
      description: "Signature makeup services thoughtfully designed for Indian weddings: Bridal, Engagement, Reception, Party, HD, and Airbrush artistry."
    },
    bridal: {
      title: "Bridal Makeup Experience | Makeup by Jyoti Khatri",
      description: "Your Bridal Look, Your Story. A bespoke luxury bridal makeup journey from skin consultation to flawless wedding day execution."
    },
    portfolio: {
      title: "Bridal Makeup Portfolio | Makeup by Jyoti Khatri",
      description: "A glimpse into our bridal, engagement, and reception transformations. Browse high-resolution beauty and hair artistry."
    },
    reviews: {
      title: "Bridal Makeup Reviews | Makeup by Jyoti Khatri",
      description: "Words from our brides. Read genuine experiences, testimonials, and love notes from real wedding celebrations."
    },
    contact: {
      title: "Contact & Booking | Makeup by Jyoti Khatri",
      description: "Reserve your wedding date with Jyoti Khatri. Enquire for studio appointments, destination weddings, and bridal consultations."
    },
    notFound: {
      title: "Page Not Found | Makeup by Jyoti Khatri",
      description: "The page you are looking for does not exist. Return to Makeup by Jyoti Khatri."
    }
  },

  brand: {
    name: "Makeup by Jyoti Khatri",
    shortName: "Jyoti Khatri",
    logo: "/assets/logo.png",
    tagline: "Bridal & Beauty Makeup Artist",
    subTagline: "Bridal • Beauty • Artistry",
    establishedYear: "2019",
    heroHeading: "Makeup by Jyoti Khatri",
    heroStatement: "Enhancing Your Beauty,\nCreating Your Signature Look.",
    heroDescription: "Luxury bridal, engagement and occasion makeup crafted to make you feel confident, radiant and completely yourself.",
    circularBadgeText: "MAKEUP • BEAUTY • BRIDAL • JYOTI KHATRI • "
  },

  hero: {
    slides: [
      {
        id: 1,
        layoutVariant: "fullbleed",
        eyebrow: "BRIDAL & BEAUTY MAKEUP ARTIST",
        title: "Makeup by Jyoti Khatri",
        tagline: "Enhancing Your Beauty, Creating Your Signature Look.",
        description: "Luxury bridal, engagement and occasion makeup crafted to make you feel confident, radiant and completely yourself.",
        primaryBtnText: "BOOK YOUR APPOINTMENT",
        secondaryBtnText: "VIEW PORTFOLIO",
        secondaryBtnLink: "/portfolio",
        image: "/assets/images/hero/hero-slide-1.jpg",
        imagePosition: "78% 30%",
        alt: "Full Bleed Bridal Makeup by Jyoti Khatri"
      },
      {
        id: 2,
        layoutVariant: "fullbleed",
        eyebrow: "TIMELESS BRIDAL BEAUTY",
        title: "Elegance, Designed Around You.",
        tagline: "Refined artistry for the woman you are.",
        description: "Every detail is thoughtfully created to complement your features, your outfit and your celebration.",
        primaryBtnText: "EXPLORE BRIDAL",
        primaryBtnLink: "/bridal",
        secondaryBtnText: "BOOK YOUR APPOINTMENT",
        image: "/assets/images/hero/hero-slide-2.jpg",
        imagePosition: "center 25%",
        alt: "Full Bleed Editorial Beauty by Jyoti Khatri"
      },
      {
        id: 3,
        layoutVariant: "asymmetric",
        eyebrow: "THE ART OF BRIDAL BEAUTY",
        title: "Soft. Refined. Unforgettable.",
        tagline: "Made to feel like you.",
        description: "Makeup artistry that enhances your natural beauty while creating a look made for your most unforgettable moments.",
        primaryBtnText: "VIEW PORTFOLIO",
        primaryBtnLink: "/portfolio",
        secondaryBtnText: "BOOK YOUR APPOINTMENT",
        image: "/assets/images/hero/hero-slide-3.jpg",
        imagePosition: "center 20%",
        alt: "Asymmetric Luxury Fashion Editorial by Jyoti Khatri"
      }
    ]
  },

  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Bridal", path: "/bridal" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact", path: "/contact" }
  ],

  contact: {
    phone: "096641 45983",
    phoneDisplay: "096641 45983",
    phoneRaw: "+919664145983",
    whatsapp: "096641 45983",
    whatsappDisplay: "096641 45983",
    whatsappRaw: "919664145983",
    email: "enquiry@makeupbyjyotikhatri.com",
    address: "Hari Nagar, Katariya Choukha, Jodhpur, Rajasthan 342014",
    location: "Hari Nagar, Katariya Choukha, Jodhpur, Rajasthan 342014",
    city: "Jodhpur, Rajasthan 342014",
    workingHours: "By Appointment Only • Mon - Sun: 09:00 AM - 07:00 PM"
  },

  social: {
    instagramHandle: "@makeupbyjyotikhatri",
    instagramUrl: "https://instagram.com/makeupbyjyotikhatri",
    facebookUrl: "https://facebook.com/makeupbyjyotikhatri",
    whatsappUrl: "https://wa.me/919664145983?text=Hello%20Jyoti%2C%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup%20services."
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
    intro: "With over seven years of dedicated experience in high-end bridal, fashion, and red-carpet styling, Jyoti Khatri has emerged as a trusted name for brides seeking contemporary sophistication rooted in timeless grace.",
    story: "Jyoti's journey began with an innate appreciation for classical Indian aesthetics and couture fashion. Over the years, she has trained with master international beauty educators and refined a signature style that focuses on radiant skin textures, delicate eye enhancement, and seamless harmony with bridal jewelry and attire.",
    philosophyTitle: "Our Beauty Philosophy",
    philosophyText: "We believe a bride should never feel like a stranger in the mirror. True bridal makeup should preserve the bride's natural individuality while giving her that transcendent, ethereal glow that lasts through emotional rituals and stage spotlights.",
    approachTitle: "The Signature Difference",
    approachPoints: [
      {
        title: "Bespoke Skin Mapping",
        desc: "Custom preparation tailored to your skin undertone, hydration levels, and climate conditions."
      },
      {
        title: "Weightless Precision",
        desc: "Ultra-fine layers that photograph beautifully in 4K without ever feeling cakey or heavy."
      },
      {
        title: "Holistic Styling",
        desc: "Seamless integration between makeup, hair ornamentation, mathapatti alignment, and dupatta draping."
      },
      {
        title: "Serene Bridal Suite Presence",
        desc: "A calm, punctual, and comforting energy on your wedding morning so you can cherish every second."
      }
    ],
    signature: "With love, Jyoti",
    image: "/images/jyotikhatri22.png",
    imageAlt: "Jyoti Khatri - Luxury Bridal Makeup Artist"
  },

  contactPage: {
    hero: {
      eyebrow: "LET'S BEGIN",
      title: "Let's Create Your Look.",
      subtitle: "Your wedding day deserves a beauty experience that feels completely yours.",
      paragraph: "Tell me a little about your celebration, your vision and the look you have in mind. I'll get back to you with the next steps for your bridal experience.",
      enquiriesLabel: "BOOKINGS & BRIDAL ENQUIRIES",
      sideLabel: "YOUR BEAUTY JOURNEY",
      image: "/images/jyotikhatri222.png"
    },
    enquiryForm: {
      heading: "Tell Me About Your Day",
      text: "I'd love to know what you're planning so I can understand how to make your experience feel personal from the very beginning.",
      editorialNote: "EVERY DETAIL MATTERS."
    },
    note: {
      eyebrow: "A NOTE FROM JYOTI",
      heading: "Your wedding look should feel like you.",
      paragraph: "Every bride brings her own unique energy, personal style, and wedding vision. My role is to listen closely, respect your comfort zone, and apply refined techniques so you look breathtaking while feeling effortlessly like yourself.",
      signature: "Jyoti",
      image: "/images/jyotikhatri11.png"
    },
    faqs: {
      heading: "Before You Enquire",
      questions: [
        {
          q: "How far in advance should I book my wedding date?",
          a: "We recommend booking 4 to 8 months in advance, especially for prime wedding dates in Rajasthan and major metropolitan dates."
        },
        {
          q: "Do you travel for destination weddings?",
          a: "Yes, Jyoti Khatri and her team travel across India and internationally for destination weddings and multi-day celebrations."
        },
        {
          q: "Can we discuss my preferred makeup style before booking?",
          a: "Absolutely! After your initial enquiry, we connect to discuss your vision, outfit colors, lighting, and preferred skin finish."
        },
        {
          q: "Do you offer makeup for multiple wedding functions?",
          a: "Yes, multi-event bridal packages (Engagement, Sangeet, Wedding, Reception) are customized with distinct looks for each occasion."
        },
        {
          q: "What happens after I submit an enquiry?",
          a: "We review your date availability and respond within 24 hours with package details, scheduling, and next consultation steps."
        },
        {
          q: "How do I secure my wedding date?",
          a: "Dates are reserved officially upon receipt of an advance deposit and signed booking confirmation."
        }
      ]
    },
    finalCTA: {
      eyebrow: "YOUR DATE • YOUR STORY • YOUR LOOK",
      heading: "Let's Make Your Wedding Moment Unforgettable.",
      subtitle: "Ready to begin?",
      buttonText: "BOOK YOUR DATE →"
    }
  },

  aboutPage: {
    hero: {
      eyebrow: "THE ARTIST BEHIND THE BRUSHES",
      title: "Meet Jyoti Khatri",
      subtitle: "Creating beauty that still feels like you.",
      description: "Every bride deserves to feel confident, comfortable and completely herself. My approach to makeup is rooted in thoughtful artistry, refined details and an experience that feels as beautiful as the final look.",
      signature: "Jyoti Khatri",
      sideLabel: "MAKEUP • ARTISTRY • STORIES",
      ctaText: "MY STORY  →",
      mainImage: "/images/jyotikhatri22.png",
      detailImage: "/images/jyotikhatri7777.png"
    },
    moreThanMakeup: {
      num: "01",
      label: "MY APPROACH",
      title: "More Than Makeup",
      paragraphs: [
        "To me, makeup is never about changing who you are or painting on a mask. It is about understanding your features, your skin, your undertones, and the emotion you want to express on your special day.",
        "Whether it is an intimate morning ceremony or a grand evening reception, my focus is to craft a look that enhances your true facial structure while remaining comfortable, radiant, and camera-ready through hours of emotional rituals.",
        "Your wedding morning should feel like a sanctuary — a calm, serene space where every detail is taken care of with warmth and precision."
      ],
      image: "/images/jyotikhatri222.png",
    },
    principles: [
      {
        num: "01",
        title: "UNDERSTANDING YOU",
        description: "Taking time to understand your skin undertone, attire colors, personal comfort zone, and personal vision."
      },
      {
        num: "02",
        title: "REFINED ARTISTRY",
        description: "Micro-fine HD base application, zero-flashback formulation, and hand-finished eye styling designed for 4K lenses."
      },
      {
        num: "03",
        title: "TIMELESS BEAUTY",
        description: "Creating a classic, graceful aesthetic that looks sophisticated today and in your family albums for decades to come."
      },
      {
        num: "04",
        title: "A CALM EXPERIENCE",
        description: "A punctual, peaceful, and reassuring presence on your wedding morning so you can relax and savor your moment."
      }
    ],
    signatureSection: {
      heading: "My Signature",
      words: ["SOFT", "REFINED", "TIMELESS"],
      description: "A delicate balance between skin luminosity, structural contour, and timeless elegance that never looks heavy or mask-like."
    },
    behindBrushes: {
      heading: "The woman behind the artistry.",
      microLabel: "EST. JODHPUR",
      paragraphs: [
        "Based in Jodhpur and traveling across India for destination weddings, my passion lies in creating individual beauty narratives for every bride.",
        "From selecting international luxury products (Dior, Charlotte Tilbury, NARS, MAC) to precision mathapatti alignment and dupatta veil draping, every element is curated with devotion."
      ],
      signature: "Jyoti",
      image: "/images/jyotikhatri111.png"
    },
    stats: [
      { number: "500+", label: "Brides Transformed" },
      { number: "5.0", label: "Average Rating" },
      { number: "100%", label: "Bespoke Artistry" }
    ],
    finalCTA: {
      title: "Let's Create Your Signature Look.",
      subtitle: "Your wedding beauty should feel personal, effortless and unforgettable.",
      buttonText: "BOOK YOUR DATE"
    }
  },

  services: [
    {
      id: "bridal",
      name: "Bridal Makeup",
      tagline: "Your wedding look, thoughtfully designed around you.",
      description: "A complete couture experience covering extensive pre-wedding skin consultation, premium waterproof HD/Airbrush base, intricate dupatta draping, jewelry setting, and signature bridal glow.",
      included: [
        "In-depth skin and vision consultation",
        "Full luxury waterproof HD or Airbrush base",
        "Custom eye styling & premium faux mink lashes",
        "Artisanal bridal hair styling & fresh flora integration",
        "Dupatta draping, veil pinning & jewelry setting",
        "Personalized touch-up kit for pheras"
      ],
      idealFor: "Main Wedding Ceremony, Pheras, Grand Mandap Rituals",
      image: "/images/jyotikhatri222222.png",
      badge: "Signature"
    },
    {
      id: "engagement",
      name: "Engagement Makeup",
      tagline: "Soft, radiant and effortlessly elegant.",
      description: "Dewy, romantic pastel tones and luminous skin textures customized to complement contemporary ring-ceremony lehengas, evening gowns, and daylight celebrations.",
      included: [
        "Pre-event skin prep & hydration boost",
        "Luminous dewy or soft-matte complexion",
        "Romantic pastel eye makeup & fluttery lashes",
        "Textured floral braided hairstyles or soft waves",
        "Outfit draping assistance"
      ],
      idealFor: "Engagement Ceremony, Roka, Daylight Garden Functions",
      image: "/images/Post2.jpg",
      badge: "Romantic"
    },
    {
      id: "reception",
      name: "Reception Makeup",
      tagline: "Glamorous, sophisticated and camera-ready.",
      description: "High-definition evening glamour with sculpted profiles, dramatic or shimmering eye artistry, and customized lip shades crafted for grand stage appearances.",
      included: [
        "Camera-ready stage lighting skin formulation",
        "Signature smokey or gilded shimmer eye artistry",
        "Sculpted cheekbones & dimensional highlighter",
        "Sleek hollywood waves or contemporary updo",
        "Gown or contemporary saree draping"
      ],
      idealFor: "Wedding Reception, Cocktail Night, After-Party",
      image: "/images/jyotikhatri5.png",
      badge: "High Glam"
    },
    {
      id: "party",
      name: "Party & Occasion Makeup",
      tagline: "Beautiful looks for every special celebration.",
      description: "Exquisite makeovers for bridesmaids, mothers, cocktail parties, sangeet nights, and milestones with long-wearing comfort and refined elegance.",
      included: [
        "Radiant long-wear base application",
        "Custom eyeshadow to complement attire",
        "Lash application & definition",
        "Hair styling (curls, braids, or textured buns)",
        "Dupatta or saree pin-up"
      ],
      idealFor: "Sangeet, Mehendi, Bridesmaids, Wedding Guests",
      image: "/images/jyotikhatri111111.png",
      badge: "Celebration"
    },
    {
      id: "hd-makeup",
      name: "HD Makeup",
      tagline: "Flawless finish designed for photography and long celebrations.",
      description: "Micro-fine pigments that mimic natural skin without any cakey texture, ensuring zero flashback and pristine longevity through emotional moments.",
      included: [
        "Camera-optimized silicone/mineral prep",
        "High-definition non-flashback foundation",
        "Targeted micro-concealing",
        "Featherlight translucent setting",
        "Sweat and tear-resistant seal"
      ],
      idealFor: "Ultra HD 4K Cinematography, Studio Shoots, Weddings",
      image: "/images/Post1.jpg",
      badge: "Camera Ready"
    },
    {
      id: "airbrush",
      name: "Airbrush Makeup",
      tagline: "Lightweight, smooth and long-lasting perfection.",
      description: "State-of-the-art mist application providing a weightless, silicone-infused velvet veil that resists humidity, sweat, tears, and extended dancing hours.",
      included: [
        "Micro-mist airgun application",
        "Non-transferable waterproof formula",
        "Pore-blurring velvet finish",
        "18+ hours staying power",
        "Weightless, breathable feel"
      ],
      idealFor: "Destination Weddings, Humid Climates, All-Day Rituals",
      image: "/images/jyotikhatri7.png",
      badge: "Waterproof"
    }
  ],

  servicesPage: {
    hero: {
      eyebrow: "MAKEUP • HAIR • BRIDAL • BEAUTY",
      title: "Signature Beauty Services",
      subtitle: "Thoughtfully designed beauty experiences for weddings, celebrations and every moment worth remembering.",
      sideTag: "MAKEUP BY JYOTI KHATRI",
      image: "/images/jyotikhatri3.png"
    },
    occasions: [
      {
        num: "01",
        id: "bridal",
        title: "BRIDAL",
        description: "For the bride who wants her signature wedding look.",
        image: "/images/jyotikhatri222222.png",
      },
      {
        num: "02",
        id: "engagement",
        title: "ENGAGEMENT",
        description: "Elegant, radiant and camera-ready.",
        image: "/images/Post2.jpg",
      },
      {
        num: "03",
        id: "reception",
        title: "RECEPTION",
        description: "Glamorous looks designed for your evening celebration.",
        image: "/images/jyotikhatri5.png",
      },
      {
        num: "04",
        id: "party",
        title: "PARTY & OCCASION",
        description: "Effortless beauty for every special event.",
        image: "/images/jyotikhatri111111.png",
      }
    ],
    signatureServices: [
      {
        id: "bridal",
        num: "01",
        title: "BRIDAL MAKEUP",
        quote: "Your wedding day deserves more than a makeup look. It deserves an experience designed around you.",
        description: "A complete couture makeover featuring deep skin prep, 16-hour waterproof base, custom eye styling, dupatta veil draping, mathapatti alignment, and phera touch-up kit.",
        highlights: ["MAKEUP", "HAIR", "DRAPING", "LASHES", "FINAL TOUCHES"],
        ctaText: "ENQUIRE FOR BRIDAL",
        image: "/images/jyotikhatri222222.png",
        imagePosition: "left"
      },
      {
        id: "engagement",
        num: "02",
        title: "ENGAGEMENT MAKEUP",
        quote: "Soft, romantic pastel tones and luminous skin textures designed to captivate.",
        description: "Dewy ring-ceremony glamour tailored to complement contemporary evening gowns, pastel lehengas, and daylight garden celebrations.",
        highlights: ["MAKEUP", "DEWY BASE", "PASTEL EYES", "FLORAL HAIR", "DRAPING"],
        ctaText: "ENQUIRE FOR ENGAGEMENT",
        image: "/images/Post2.jpg",
        imagePosition: "right"
      },
      {
        id: "reception",
        num: "03",
        title: "RECEPTION MAKEUP",
        quote: "High-definition stage lighting formulation for grand evening celebrations.",
        description: "Sculpted profiles, dramatic or shimmering eye artistry, and customized lip shades crafted for high-impact photography and stage spotlights.",
        highlights: ["HD BASE", "SMOKEY EYES", "CONTOUR", "HOLLYWOOD WAVES", "GOWN DRAPING"],
        ctaText: "ENQUIRE FOR RECEPTION",
        image: "/images/jyotikhatri5.png",
        imagePosition: "left"
      },
      {
        id: "party",
        num: "04",
        title: "PARTY & OCCASION",
        quote: "Effortless elegance and long-wearing comfort for every milestone celebration.",
        description: "Exquisite makeovers for bridesmaids, mothers, cocktail parties, and sangeet nights, ensuring you look polished and feel confident.",
        highlights: ["LONG-WEAR BASE", "CUSTOM EYES", "HAIR STYLING", "LASHES", "SAREE PIN-UP"],
        ctaText: "ENQUIRE FOR PARTY",
        image: "/images/jyotikhatri111111.png",
        imagePosition: "right"
      },
      {
        id: "hd-makeup",
        num: "05",
        title: "HD MAKEUP",
        quote: "Micro-fine pigments that mimic skin without flashback under 4K camera lenses.",
        description: "Designed for high-definition cinematography and photography, creating a flawless, natural-looking finish that withstands emotional wedding rituals.",
        highlights: ["4K READY", "NON-FLASHBACK", "MICRO-CONCEAL", "SILICONE PREP", "TEAR RESISTANT"],
        ctaText: "ENQUIRE FOR HD MAKEUP",
        image: "/images/Post1.jpg",
        imagePosition: "left"
      },
      {
        id: "airbrush",
        num: "06",
        title: "AIRBRUSH MAKEUP",
        quote: "State-of-the-art micro-mist application providing a weightless velvet veil.",
        description: "Ultra-smooth, humidity-proof mist base providing 18+ hours of transfer-resistant perfection. Ideal for destination weddings and long celebrations.",
        highlights: ["MICRO-MIST", "18+ HR HOLD", "WATERPROOF", "VELVET FINISH", "WEIGHTLESS"],
        ctaText: "ENQUIRE FOR AIRBRUSH",
        image: "/images/Post1.jpg",
        imagePosition: "right"
      }
    ],
    finishComparison: {
      heading: "Find Your Perfect Finish",
      subtext: "Not sure whether HD or Airbrush makeup is right for your celebration?",
      hd: {
        title: "HD MAKEUP",
        tagline: "High-definition camera precision with buildable coverage.",
        points: [
          "Natural-looking finish",
          "Camera friendly under 4K lenses",
          "Buildable coverage for customizable intensity",
          "Ideal for photography & emotional moments",
          "Comfortable long-wear feel"
        ]
      },
      airbrush: {
        title: "AIRBRUSH MAKEUP",
        tagline: "Weightless micro-mist veil for humidity & sweat resistance.",
        points: [
          "Lightweight, breathable feel",
          "Ultra-smooth velvet porcelain finish",
          "Long-lasting 18+ hours staying power",
          "Great for humid conditions & destination venues",
          "Photography & stage lighting friendly"
        ]
      },
      ctaQuestion: "Not sure which one is right for you?",
      ctaBtnText: "LET'S DISCUSS YOUR LOOK"
    },
    packages: {
      heading: "Choose Your Experience",
      subtitle: "Bespoke beauty collections designed for every event scale.",
      list: [
        {
          id: "essential",
          name: "THE ESSENTIAL",
          tagline: "For elegant, beautifully effortless occasions.",
          priceLabel: "PRICE ON CONSULTATION",
          featured: false,
          includes: [
            "Makeup Application",
            "Lashes & Eyebrow Definition",
            "Basic Hair Styling",
            "Finishing Touches"
          ]
        },
        {
          id: "signature",
          name: "THE SIGNATURE",
          tagline: "Our most requested makeover experience.",
          priceLabel: "PRICE ON CONSULTATION",
          featured: true,
          badge: "MOST REQUESTED",
          includes: [
            "HD or Airbrush Base Application",
            "Advanced Hair Styling",
            "Premium Mink Lashes",
            "Dupatta or Saree Draping",
            "Personalized Look Planning",
            "Final Touch-Up Kit"
          ]
        },
        {
          id: "royal",
          name: "THE ROYAL EXPERIENCE",
          tagline: "For complete bridal & luxury celebrations.",
          priceLabel: "PRICE ON CONSULTATION",
          featured: false,
          includes: [
            "Premium HD / Airbrush Bridal Base",
            "Artisanal Hair Artistry & Floral Setting",
            "Dupatta Pinning & Jewelry Adjustment",
            "Custom Eye Styling & Premium Lashes",
            "Look Consultation & Pre-Event Skin Prep",
            "Personalized Styling & Touch-Up Support"
          ]
        }
      ]
    },
    serviceJourney: {
      heading: "More Than Makeup",
      subtitle: "A seamless 5-step journey to ensure your beauty experience is calm and camera-ready.",
      steps: [
        {
          num: "01",
          title: "CONSULTATION",
          desc: "Understanding your features, outfit and desired look."
        },
        {
          num: "02",
          title: "LOOK DESIGN",
          desc: "Planning makeup, hair and finishing details."
        },
        {
          num: "03",
          title: "THE APPLICATION",
          desc: "Professional makeup application tailored to your occasion."
        },
        {
          num: "04",
          title: "FINAL FINISH",
          desc: "Hair, lashes, draping and final detailing."
        },
        {
          num: "05",
          title: "READY FOR YOUR MOMENT",
          desc: "A polished, camera-ready final look."
        }
      ]
    },
    customSection: {
      heading: "Need Something More Personal?",
      description: "Every celebration is different. Your service can be tailored around your event, schedule and beauty requirements.",
      ctaText: "CUSTOMISE MY EXPERIENCE"
    },
    faqs: [
      {
        q: "Which makeup style is best for my event?",
        a: "During your consultation, we evaluate your event timing (daylight vs evening), lighting, attire color, and skin type to recommend the ideal look."
      },
      {
        q: "What is the difference between HD and Airbrush makeup?",
        a: "HD makeup uses micro-fine pigments applied manually for buildable 4K precision. Airbrush uses a micro-mist gun to spray a silicone-based, waterproof veil that lasts 18+ hours."
      },
      {
        q: "Can I customise my service?",
        a: "Yes! All services and packages can be customized to include specific hair styles, family add-ons, or event touch-ups."
      },
      {
        q: "Do you provide hair styling?",
        a: "Yes, complete hair styling—from romantic floral braids to textured buns and Hollywood waves—is included in our signature services."
      },
      {
        q: "Do you provide draping?",
        a: "Yes, dupatta pinning, saree draping, veil setting, and mathapatti adjustment are included with our makeover bookings."
      },
      {
        q: "Can I book makeup for family members?",
        a: "Yes, party and guest makeovers for mothers, sisters, and bridesmaids can be added to your booking subject to schedule availability."
      },
      {
        q: "How far in advance should I book?",
        a: "For weddings and major celebrations, we recommend booking 3 to 6 months in advance as dates are reserved on a first-come, first-served basis."
      },
      {
        q: "Is a trial available?",
        a: "Yes, in-studio trial consultations can be scheduled to test foundation undertones, eye styles, and hair concepts before your event."
      }
    ],
    finalCTA: {
      heading: "Let's Create Your Look.",
      subtitle: "Tell us about your occasion and we'll help you find the right beauty experience.",
      primaryBtnText: "BOOK AN APPOINTMENT",
      secondaryBtnText: "CHAT ON WHATSAPP",
      image: "/images/jyotikhatri3.png"
    }
  },

  bridal: {
    hero: {
      smallText: "THE BRIDAL EXPERIENCE",
      heading: "Your Day.\nYour Story.\nYour Signature Look.",
      handwritten: "Made beautifully yours.",
      scrollText: "SCROLL TO DISCOVER",
      sideTag: "MAKEUP BY JYOTI KHATRI",
      backgroundImage: "/images/jyotikhatri5.png",
    },
    statement: {
      quote: "Your bridal makeup should never hide you.\nIt should reveal the most beautiful version of you.",
      subtitle: "Every bride is different. Every story deserves a look created specifically for her."
    },
    signature: {
      number: "01",
      heading: "The Jyoti Bridal Signature",
      description: "A bridal look created around your features, your personality, your outfit and the feeling you want to carry into every photograph.",
      points: [
        { num: "01", title: "UNDERSTAND", desc: "We begin by understanding your vision." },
        { num: "02", title: "DESIGN", desc: "We shape the look around you." },
        { num: "03", title: "PERFECT", desc: "Every detail is refined before the final touch." }
      ],
      images: {
        main: "/images/jyotikhatri5.png",
        overlap: "/images/jyotikhatri7777.png",
        vertical: "/images/jyotikhatri3.png",
      }
    },
    journey: {
      heading: "From First Consultation\nto Final Touch",
      stages: [
        {
          num: "01",
          title: "THE CONSULTATION",
          desc: "Understanding your wedding, outfit, jewellery and personal style."
        },
        {
          num: "02",
          title: "THE TRIAL",
          desc: "Exploring the perfect complexion, eyes, lips and overall finish."
        },
        {
          num: "03",
          title: "THE WEDDING MORNING",
          desc: "A calm, carefully planned beauty experience."
        },
        {
          num: "04",
          title: "THE FINAL TRANSFORMATION",
          desc: "Every final detail brought together before you step into your moment."
        }
      ]
    },
    preparation: {
      heading: "Before the Brushes Begin",
      image: "/images/Post6.png",
      checklist: [
        "In-depth skin preparation & hydration mapping",
        "Personalized moodboard & undertone consultation",
        "Comprehensive makeup & hair trial option",
        "Harmonious outfit & dupatta color coordination",
        "Mathapatti & heritage jewellery alignment",
        "Artisanal fresh floral hair styling planning",
        "Tailored timeline for your wedding morning"
      ],
      ctaText: "PLAN YOUR BRIDAL LOOK"
    },
    transformation: {
      heading: "The Transformation",
      subtext: "Not a different woman. Just her, beautifully revealed.",
      beforeImage: "/images/Post5.png",
      beforeLabel: "BEFORE",
      afterImage: "/images/jyotikhatri222222.png",
      afterLabel: "AFTER"
    },
    bridalLooks: {
      heading: "Find Your Bridal Mood",
      ctaText: "EXPLORE BRIDAL PORTFOLIO",
      moods: [
        {
          id: "soft",
          title: "SOFT & TIMELESS",
          desc: "Dewy skin, gentle rose tones, and classic romantic hair styling.",
          image: "/images/Post2.jpg",
        },
        {
          id: "royal",
          title: "ROYAL & GLAMOROUS",
          desc: "Opulent crimson lips, gilded eyes, and majestic mathapatti setting.",
          image: "/images/jyotikhatri6.png",
        },
        {
          id: "minimal",
          title: "MODERN & MINIMAL",
          desc: "Fresh porcelain base, subtle nude tones, and sleek contemporary waves.",
          image: "/images/jyotikhatri111111.png",
        },
        {
          id: "traditional",
          title: "TRADITIONAL & ELEGANT",
          desc: "Heritage kundan aesthetics, defined eyes, and classic floral bun.",
          image: "/images/jyotikhatri222222.png",
        }
      ]
    },
    packages: {
      heading: "Bridal Collections",
      subtitle: "Bespoke bridal packages designed around your celebration scale.",
      ctaText: "ENQUIRE FOR YOUR DATE",
      list: [
        {
          id: "essential",
          name: "THE ESSENTIAL BRIDE",
          tagline: "For intimate wedding ceremonies & classic elegance.",
          priceLabel: "PRICE ON CONSULTATION",
          featured: false,
          includes: [
            "Complete Waterproof HD Bridal Base",
            "Custom Eye Styling & Premium Mink Lashes",
            "Artisanal Hair Styling & Floral Placement",
            "Dupatta Draping & Jewellery Pinning",
            "Personalized Phera Touch-up Kit"
          ]
        },
        {
          id: "signature",
          name: "THE SIGNATURE BRIDE",
          tagline: "Our hallmark multi-event bridal makeover experience.",
          priceLabel: "PRICE ON CONSULTATION",
          featured: true,
          badge: "MOST POPULAR",
          includes: [
            "Choice of Airbrush or Ultra HD Foundation",
            "Pre-Wedding Skin Mapping & Hydration Prep",
            "Full Bridal Trial Session & Hair Preview",
            "Dual Dupatta Draping & Saree Pleating",
            "On-Location Suite Touch-ups for Photoshoot",
            "Deluxe Bridal Touch-up Vanity Kit"
          ]
        },
        {
          id: "royal",
          name: "THE ROYAL BRIDE",
          tagline: "Complete suite coverage for grand multi-day weddings.",
          priceLabel: "PRICE ON CONSULTATION",
          featured: false,
          includes: [
            "Wedding & Reception Makeovers Included",
            "Complementary Makeover for Mother of Bride",
            "Dedicated On-Site Artist Presence for Rituals",
            "Pre-Bridal Skincare Consultation & Roadmap",
            "Priority Wedding Calendar Date Reservation"
          ]
        }
      ]
    },
    details: {
      heading: "Attention To Every Detail",
      subtitle: "Explore the elements crafted with precision for your wedding look.",
      image: "/images/jyotikhatri222.png",
      hotspots: [
        {
          id: "eyes",
          label: "THE EYES",
          top: "32%",
          left: "48%",
          title: "Intricate Eye Artistry",
          desc: "Smudge-proof 16-hour eyeshadow, seamless blending, and lightweight mink lashes."
        },
        {
          id: "skin",
          label: "THE SKIN",
          top: "46%",
          left: "38%",
          title: "Porcelain 4K Skin",
          desc: "Hydration barrier preparation, weightless micro-concealing, and Zero Flashback HD base."
        },
        {
          id: "lips",
          label: "THE LIPS",
          top: "58%",
          left: "46%",
          title: "Custom Lip Palette",
          desc: "Long-wearing non-transfer lip contouring customized to your attire and undertone."
        },
        {
          id: "hair",
          label: "THE HAIR",
          top: "22%",
          left: "62%",
          title: "Artisanal Hair Draping",
          desc: "Sculpted braids or buns adorned with fresh flora, mathapatti, and secure veil pinning."
        },
        {
          id: "finish",
          label: "THE FINISH",
          top: "70%",
          left: "58%",
          title: "Camera-Ready Glow",
          desc: "Targeted dimensional highlight capturing 4K lens clarity from every angle."
        }
      ]
    },
    brideStories: {
      heading: "Real Brides.\nReal Moments.",
      stories: [
        {
          id: 1,
          name: "Manisha Choudhary",
          location: "Udaipur Palace Wedding",
          event: "Bridal Ceremony",
          quote: "Booking Jyoti Khatri for my wedding makeup was the single best decision I made. Every look was different and enhanced my natural features rather than giving me a generic face. I felt radiant and serene all day.",
          image: "/images/jyotikhatri222222.png",
        },
        {
          id: 2,
          name: "Kajal Dhoot",
          location: "Mumbai Grand Convention",
          event: "Sangeet & Wedding",
          quote: "Jyoti made me feel like the most confident version of myself on my wedding day. My makeup looked like real glowing skin even after 14 hours of pheras and emotional moments.",
          image: "/images/jyotikhatri1.png",
        },
        {
          id: 3,
          name: "Ananya Sharma",
          location: "Jaipur Heritage Fort",
          event: "Multi-Day Destination",
          quote: "Booking for all 3 events was pure perfection. From my pastel engagement look to my high-glam reception gown, she created three distinct, breathtaking avatars.",
          image: "/images/Post2.jpg",
        }
      ]
    },
    faqs: [
      {
        q: "How far in advance should I book my bridal makeup?",
        a: "We recommend booking 4 to 8 months in advance, especially during the prime Indian wedding season (October to March) as dates are reserved on a first-come, first-served basis."
      },
      {
        q: "Is a makeup trial available?",
        a: "Yes! In-studio bridal trial sessions are available where we test foundation undertones, eye styles, and hair draping to finalize your moodboard."
      },
      {
        q: "How should I prepare my skin before the wedding?",
        a: "Maintain daily hydration, gentleness, and sun protection. Avoid new invasive peels or treatments within 3 weeks of your wedding date."
      },
      {
        q: "Can my bridal look be fully customized?",
        a: "Absolutely. Every look is built from scratch based on your facial structure, undertones, lehenga color, jewelry, and personal aesthetic."
      },
      {
        q: "Do you provide hair styling and dupatta setting?",
        a: "Yes, all bridal packages include complete artisanal hair styling, dupatta veil pinning, mathapatti alignment, and jewelry setting."
      },
      {
        q: "Can I book makeup for my family members and bridesmaids?",
        a: "Yes, party and guest makeovers for mothers, sisters, and bridesmaids can be bundled with your booking subject to team availability."
      },
      {
        q: "Do you travel outstation or to destination weddings?",
        a: "Yes, Jyoti Khatri and her senior team travel across India and internationally for destination weddings."
      },
      {
        q: "What should I bring for the trial appointment?",
        a: "Bring photos of your bridal outfit, jewelry reference images, and any specific makeup looks you feel drawn to."
      }
    ],
    finalCTA: {
      heading: "Your Bridal Story\nStarts Here.",
      subtitle: "Let's create a look that feels beautifully, unmistakably you.",
      primaryBtnText: "RESERVE YOUR DATE",
      secondaryBtnText: "CHAT ON WHATSAPP",
      image: "/images/jyotikhatri5.png",
    }
  },

  portfolio: {
    hero: {
      eyebrow: "THE JYOTI KHATRI LOOKBOOK",
      heading: "Beauty,\nCaptured.",
      subtitle: "An editorial collection of bridal transformations, signature makeup looks and unforgettable moments.",
      sideLabel: "MAKEUP • HAIR • BRIDAL",
      scrollText: "SCROLL TO EXPLORE",
      counter: "01 / 24",
      backgroundImage: "/images/jyotikhatri111.png",
    },
    moods: [
      {
        id: "soft",
        num: "01",
        label: "SOFT & TIMELESS",
        desc: "Gentle rose hues & dewy skin",
        image: "/images/Post2.jpg"
      },
      {
        id: "royal",
        num: "02",
        label: "ROYAL & REGAL",
        desc: "Crimson lips & gilded eyes",
        image: "/images/jyotikhatri6.png"
      },
      {
        id: "modern",
        num: "03",
        label: "MODERN & MINIMAL",
        desc: "Clean porcelain base & nude tones",
        image: "/images/jyotikhatri111111.png"
      },
      {
        id: "glam",
        num: "04",
        label: "GLAMOROUS",
        desc: "Smokey eyes & sculpted contour",
        image: "/images/jyotikhatri5.png"
      },
      {
        id: "traditional",
        num: "05",
        label: "TRADITIONAL & ELEGANT",
        desc: "Kundan symmetry & heritage flora",
        image: "/images/jyotikhatri222222.png"
      },
      {
        id: "editorial",
        num: "06",
        label: "EDITORIAL",
        desc: "High-definition camera precision",
        image: "/images/jyotikhatri3.png"
      }
    ],
    featuredLook: {
      eyebrow: "FEATURED LOOK",
      num: "01",
      title: "THE ROYAL BRIDE",
      category: "BRIDAL",
      location: "JODHPUR",
      description: "Softly sculpted skin, defined eyes and timeless bridal detailing.",
      mainImage: "/images/jyotikhatri5.png",
      overlapImage: "/images/jyotikhatri3.png",
      cropImage: "/images/jyotikhatri5.png",
    },
    makeupJourney: {
      heading: "Behind The Transformation",
      subheading: "Every beautiful finish begins with the details.",
      stages: [
        {
          num: "01",
          title: "BARE SKIN",
          subtitle: "Hydration Barrier & Undertone Prep",
          desc: "Targeted skin hydration mapping and soothing botanical primer creating a supple, velvet foundation base.",
          image: "/images/Post5.png"
        },
        {
          num: "02",
          title: "THE BASE",
          subtitle: "Micro-Fine HD / Airbrush Application",
          desc: "Silicone-infused micro-pigments providing weightless, 4K camera-ready porcelain coverage with zero flashback.",
          image: "/images/Post1.jpg"
        },
        {
          num: "03",
          title: "THE EYES",
          subtitle: "Defined Sculpt & Mink Lashes",
          desc: "Waterproof 16-hour eyeshadow blending, smudged kohl precision, and featherlight mink lash enhancement.",
          image: "/images/jyotikhatri7.png"
        },
        {
          num: "04",
          title: "THE LIPS",
          subtitle: "Custom Palette Contouring",
          desc: "Custom-mixed non-transfer lip shades tailored precisely to outfit silk undertones and skin radiance.",
          image: "/images/Post3.jpg"
        },
        {
          num: "05",
          title: "THE HAIR",
          subtitle: "Artisanal Flora & Dupatta Pinning",
          desc: "Handcrafted baby's breath and fresh jasmine braiding with mathematical mathapatti and veil balance.",
          image: "/images/jyotikhatri7777.png"
        },
        {
          num: "06",
          title: "THE FINAL LOOK",
          subtitle: "Polished Camera-Ready Avatars",
          desc: "A harmonious, radiant bridal avatar crafted to captivate under spotlights and emotional rituals.",
          image: "/images/jyotikhatri222222.png"
        }
      ]
    },
    scrollStories: {
      heading: "Editorial Stories",
      stories: [
        {
          num: "01",
          title: "THE SOFT BRIDE",
          category: "BRIDAL",
          desc: "Fresh, luminous and effortlessly elegant.",
          image: "/images/Post2.jpg"
        },
        {
          num: "02",
          title: "THE ROYAL BRIDE",
          category: "BRIDAL",
          desc: "Defined eyes, sculpted features and regal detailing.",
          image: "/images/jyotikhatri6.png"
        },
        {
          num: "03",
          title: "THE MODERN BRIDE",
          category: "BRIDAL",
          desc: "Contemporary beauty with a timeless finish.",
          image: "/images/jyotikhatri111111.png"
        },
        {
          num: "04",
          title: "THE GLAM EDIT",
          category: "RECEPTION",
          desc: "Statement eyes and polished evening glamour.",
          image: "/images/jyotikhatri5.png"
        }
      ]
    },
    faceDetails: {
      heading: "The Face Behind The Look",
      subheading: "An interactive breakdown of artistry precision.",
      mainImage: "/images/jyotikhatri1.png",
      labels: [
        { id: "eyes", title: "THE EYES", detail: "Soft Definition & Mink Lashes", x: "48%", y: "32%" },
        { id: "skin", title: "THE SKIN", detail: "Luminous Porcelain Base", x: "38%", y: "46%" },
        { id: "lips", title: "THE LIPS", detail: "Rose Nude Velvet Palette", x: "46%", y: "58%" },
        { id: "hair", title: "THE HAIR", detail: "Classic Flora Updo", x: "64%", y: "22%" },
        { id: "details", title: "THE DETAILS", detail: "Hand-finished Mathapatti", x: "60%", y: "68%" }
      ]
    },
    transformations: {
      heading: "The Transformation",
      subheading: "Not a different woman.\nJust her, beautifully revealed.",
      beforeImage: "/images/Post5.png",
      afterImage: "/images/jyotikhatri222222.png"
    },
    bridalCollection: {
      heading: "The Bridal Collection",
      subtitle: "Four distinct aesthetic chapters created for royal Indian weddings.",
      chapters: [
        {
          id: "c1",
          title: "THE SOFT BRIDE",
          desc: "Ethereal pastel tones & luminous skin",
          image: "/images/Post2.jpg"
        },
        {
          id: "c2",
          title: "THE ROYAL BRIDE",
          desc: "Heritage crimson lips & opulent Kundan symmetry",
          image: "/images/jyotikhatri6.png"
        },
        {
          id: "c3",
          title: "THE MODERN BRIDE",
          desc: "Minimalist porcelain canvas & subtle nude lips",
          image: "/images/jyotikhatri111111.png"
        },
        {
          id: "c4",
          title: "THE TIMELESS BRIDE",
          desc: "Classic North Indian bridal elegance",
          image: "/images/jyotikhatri1.png"
        }
      ]
    },
    detailStudy: {
      heading: "Details Matter",
      subtitle: "Macro photography capturing precision in skin, eyes, and hair ornamentation.",
      items: [
        { label: "EYES", title: "16-Hour Smudgeproof Eyeshadow", image: "/images/jyotikhatri7.png" },
        { label: "SKIN", title: "Zero Flashback 4K Complexion", image: "/images/Post1.jpg" },
        { label: "LIPS", title: "Custom Hydrating Contour Palette", image: "/images/Post3.jpg" },
        { label: "HAIR", title: "Hand-braided Jasmine Flora", image: "/images/jyotikhatri7777.png" },
        { label: "JEWELLERY", title: "Mathapatti & Nath Alignment", image: "/images/jyotikhatri1.png" },
        { label: "DRAPING", title: "Veil & Saree Pinning Precision", image: "/images/jyotikhatri222222.png" }
      ]
    },
    editorialQuote: {
      quote: "Beauty isn't about becoming someone else.\nIt's about becoming unmistakably you.",
      author: "— Makeup by Jyoti Khatri"
    },
    categories: [
      { id: "all", label: "01 ALL" },
      { id: "bridal", label: "02 BRIDAL" },
      { id: "engagement", label: "03 ENGAGEMENT" },
      { id: "reception", label: "04 RECEPTION" },
      { id: "party", label: "05 PARTY" },
      { id: "hair", label: "06 HAIR" },
      { id: "hd", label: "07 HD" },
      { id: "airbrush", label: "08 AIRBRUSH" }
    ],
    items: [
      {
        id: "g1",
        category: "bridal",
        mood: "royal",
        title: "Royal Crimson Heritage Bride",
        subtitle: "Traditional North Indian Bridal Styling",
        description: "Regal crimson tones with gilded eyes and symmetrical mathapatti placement.",
        location: "JODHPUR",
        image: "/images/jyotikhatri1.png",
        gridClass: "grid-span-tall"
      },
      {
        id: "g2",
        category: "engagement",
        mood: "soft",
        title: "Pastel Dewy Engagement",
        subtitle: "Soft Rose Gold Radiance",
        description: "Luminous skin texture and gentle pastel tones perfect for daylight ring ceremonies.",
        location: "UDAIPUR",
        image: "/images/Post2.jpg",
        gridClass: "grid-span-medium"
      },
      {
        id: "g3",
        category: "reception",
        mood: "glam",
        title: "Champagne Velvet Glamour",
        subtitle: "Sculpted Evening Look with Statement Eyes",
        description: "High-definition evening contour and gilded bronze eyes for stage spotlights.",
        location: "MUMBAI",
        image: "/images/jyotikhatri5.png",
        gridClass: "grid-span-medium"
      },
      {
        id: "g4",
        category: "bridal",
        mood: "modern",
        title: "Contemporary Ivory & Gold Bride",
        subtitle: "Luminous Skin & Antique Kundan Accents",
        description: "A fresh porcelain base paired with nude lips and antique gold draping.",
        location: "JAIPUR",
        image: "/images/jyotikhatri222222.png",
        gridClass: "grid-span-wide"
      },
      {
        id: "g5",
        category: "party",
        mood: "glam",
        title: "Sangeet Night Radiance",
        subtitle: "High-Shine Gloss & Smudged Kohl Eyes",
        description: "Vibrant celebration look designed to stay flawless through hours of dancing.",
        location: "GOA",
        image: "/images/jyotikhatri111111.png",
        gridClass: "grid-span-medium"
      },
      {
        id: "g6",
        category: "hair",
        mood: "traditional",
        title: "Textured Floral Braid",
        subtitle: "Handcrafted Baby's Breath & Jasmine Styling",
        description: "Intricate floral braiding with securely pinned fresh flora.",
        location: "DELHI",
        image: "/images/jyotikhatri7777.png",
        gridClass: "grid-span-tall"
      },
      {
        id: "g7",
        category: "hd",
        mood: "editorial",
        title: "Ultra HD Porcelain Canvas",
        subtitle: "Camera-Ready 4K Zero Flashback Complexion",
        description: "Micro-concealed base optimized for 4K photography and film lenses.",
        location: "MUMBAI",
        image: "/images/Post1.jpg",
        gridClass: "grid-span-medium"
      },
      {
        id: "g8",
        category: "airbrush",
        mood: "modern",
        title: "Micro-Mist Velvet Finish",
        subtitle: "Waterproof 18+ Hour Destination Base",
        description: "Silicone-infused weightless mist base that resists humidity and tears.",
        location: "UDAIPUR",
        image: "/images/jyotikhatri7.png",
        gridClass: "grid-span-medium"
      },
      {
        id: "g9",
        category: "bridal",
        mood: "royal",
        title: "Traditional Mathapatti Perfection",
        subtitle: "Flawless HD Airbrush Bridal Canvas",
        description: "Majestic bridal styling harmonizing dupatta veil pinning and heritage Kundan.",
        location: "JAIPUR",
        image: "/images/jyotikhatri6.png",
        gridClass: "grid-span-full"
      }
    ],
    instagram: {
      heading: "More Beauty. More Stories.",
      subtitle: "@makeupbyjyotikhatri",
      buttonText: "FOLLOW THE JOURNEY",
      images: [
        "/images/jyotikhatri1.png",
        "/images/Post2.jpg",
        "/images/jyotikhatri5.png",
        "/images/jyotikhatri6.png",
        "/images/jyotikhatri111111.png",
        "/images/jyotikhatri222222.png"
      ]
    },
    finalCTA: {
      heading: "Your Look\nCould Be Next.",
      text: "Ready to create something unforgettable?",
      primaryBtnText: "BOOK YOUR APPOINTMENT",
      secondaryBtnText: "START A CONVERSATION",
      image: "/images/jyotikhatri3.png"
    }
  },

  whyChooseUs: [
    {
      number: "01",
      title: "Personalized Approach",
      description: "Every look is designed around your features, outfit and personality. No cookie-cutter molds — only bespoke harmony."
    },
    {
      number: "02",
      title: "Premium Products",
      description: "Professional-quality products selected for a flawless finish. We exclusively curate Charlotte Tilbury, Dior, MAC, Huda Beauty, and NARS."
    },
    {
      number: "03",
      title: "Flawless Finish",
      description: "Long-lasting makeup designed for real celebrations, heat, tear-filled emotional moments, and 4K high-resolution photography."
    },
    {
      number: "04",
      title: "Attention to Detail",
      description: "Every detail matters, from skin prep and contouring to symmetrical jewelry alignment, dupatta draping, and final touch-ups."
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Ananya Sharma",
      eventType: "Bridal Ceremony • New Delhi",
      quote: "Jyoti made me feel like the most confident version of myself on my wedding day. My makeup looked like real glowing skin even after 14 hours of pheras and emotional moments. Everyone couldn't stop praising the natural radiance!",
      avatar: "/images/jyotikhatri222222.png",
      rating: 5,
      featured: true
    },
    {
      id: "t2",
      name: "Rhea Kapoor",
      eventType: "Destination Wedding & Reception • Udaipur",
      quote: "Booking Jyoti for all 3 events was the best decision of my wedding planning. From my pastel engagement look to my high-glam reception gown, she created three completely distinct, breathtaking avatars without ever looking overdone.",
      avatar: "/images/Post2.jpg",
      rating: 5,
      featured: true
    },
    {
      id: "t3",
      name: "Tanvi Mehta",
      eventType: "Bridal & Sangeet Makeup • Mumbai",
      quote: "Her calmness and punctuality in the bridal suite kept me completely relaxed. The dupatta draping and hair styling were as flawless as the makeup. I would choose Makeup by Jyoti Khatri again in a heartbeat!",
      avatar: "/images/jyotikhatri1.png",
      rating: 5,
      featured: true
    },
    {
      id: "t4",
      name: "Kavya Singhania",
      eventType: "Royal Palace Wedding • Jaipur",
      quote: "Finding an artist who understands how to balance heavy traditional Kundan jewelry with modern, featherlight makeup is rare. Jyoti exceeded every expectation. My photography looks straight out of an editorial magazine.",
      avatar: "/images/jyotikhatri6.png",
      rating: 5,
      featured: false
    },
    {
      id: "t5",
      name: "Simran Oberoi",
      eventType: "Sunset Beach Wedding • Goa",
      quote: "The airbrush makeup survived the humid Goa breeze, beach moisture, and hours of dancing without a single crack or smudge. Jyoti's professionalism and warmth are unmatched!",
      avatar: "/images/jyotikhatri5.png",
      rating: 5,
      featured: false
    },
    {
      id: "t6",
      name: "Isha Deshmukh",
      eventType: "Reception Gala • Bangalore",
      quote: "Her eye for symmetry and color harmonies is extraordinary. My smoky emerald eye look complemented my velvet lehenga to perfection. Thank you Jyoti for making my wedding week unforgettable!",
      avatar: "/images/jyotikhatri111111.png",
      rating: 5,
      featured: false
    }
  ],

  instagramGrid: [
    {
      image: "/images/jyotikhatri1.png",
      alt: "Bridal Glamour Reel"
    },
    {
      image: "/images/jyotikhatri6.png",
      alt: "Behind the Scenes Bridal Prep"
    },
    {
      image: "/images/Post2.jpg",
      alt: "Dewy Engagement Glow"
    },
    {
      image: "/images/jyotikhatri7777.png",
      alt: "Bridal Floral Hair Artistry"
    },
    {
      image: "/images/Post6.png",
      alt: "Luxury Vanity & Kit Essentials"
    },
    {
      image: "/images/jyotikhatri222222.png",
      alt: "The Signature Bridal Reveal"
    }
  ],

  finalCta: {
    eyebrow: "Reserve Your Date",
    heading: "Your Dream Look Starts Here.",
    text: "Ready to create a look that feels beautifully, unmistakably you? Dates for the upcoming wedding season fill up quickly. Connect with us to check availability.",
    image: "/images/jyotikhatri3.png"
  },

  reviewsPage: {
    hero: {
      eyebrow: "THE BRIDE STORIES",
      heading: "More Than\na Makeup Look.",
      subtitle: "It's the feeling you remember.",
      bottomLabel: "REAL BRIDES • REAL MOMENTS",
      backgroundImage: "/images/jyotikhatri111.png"
    },
    featured: {
      quote: "She didn't just make me feel beautiful. She made me feel like myself.",
      name: "Ananya Sharma",
      eventType: "BRIDAL MAKEUP",
      location: "JAIPUR",
      rating: 5,
      tag: "BRIDE REVIEW",
      image: "/images/jyotikhatri222222.png"
    },
    stories: [
      {
        num: "01",
        id: "soft",
        title: "THE SOFT BRIDE",
        name: "Rhea Kapoor",
        eventType: "Engagement & Sangeet",
        location: "Udaipur Palace",
        rating: 5,
        review: "Booking Jyoti for my multi-day wedding was pure perfection. She understood my vision of soft romantic rose tones that didn't hide my natural skin. I felt weightless and radiant from dawn to midnight.",
        detail: "14-Hour Dewy Base • Rose Gold Eyes",
        image: "/images/Post2.jpg"
      },
      {
        num: "02",
        id: "royal",
        title: "THE ROYAL BRIDE",
        name: "Manisha Choudhary",
        eventType: "Traditional Bridal Pheras",
        location: "Jaipur Heritage Fort",
        rating: 5,
        review: "Finding an artist who balances heavy heirloom Kundan jewelry with modern, featherlight makeup is rare. My crimson lip and mathapatti setting were regal yet effortless.",
        detail: "HD Airbrush Base • Kundan Veil Pinning",
        image: "/images/jyotikhatri6.png"
      },
      {
        num: "03",
        id: "modern",
        title: "THE MODERN BRIDE",
        name: "Kajal Dhoot",
        eventType: "Contemporary Reception",
        location: "Mumbai Convention",
        rating: 5,
        review: "My reception look was sleek, modern, and camera-ready under 4K spotlights. The skin finish was glass-like without a single shine or flashback under heavy venue lights.",
        detail: "4K Non-Flashback Base • Hollywood Waves",
        image: "/images/jyotikhatri111111.png"
      },
      {
        num: "04",
        id: "glam",
        title: "THE GLAM BRIDE",
        name: "Simran Oberoi",
        eventType: "Sangeet Gala Night",
        location: "Goa Resort",
        rating: 5,
        review: "The airbrush base survived high humidity, sea breeze, and 6 hours of continuous dancing! Jyoti's calm energy in the dressing suite was the highlight of my wedding morning.",
        detail: "Waterproof Airbrush • Smoky Emerald Eyes",
        image: "/images/jyotikhatri5.png"
      },
      {
        num: "05",
        id: "timeless",
        title: "THE TIMELESS BRIDE",
        name: "Kavya Singhania",
        eventType: "Sunset Garden Ceremony",
        location: "Delhi Lawns",
        rating: 5,
        review: "Every photograph looks like it belongs in a luxury bridal magazine. The attention to skin prep and custom lip blending made me feel undeniably like myself.",
        detail: "Custom Lip Blend • Floral Hair Setting",
        image: "/images/jyotikhatri1.png"
      }
    ],
    slider: [
      {
        num: "01 / 05",
        name: "Ananya Sharma",
        eventType: "BRIDAL MAKEUP",
        location: "JAIPUR",
        rating: 5,
        quote: "Jyoti made me feel like the most confident version of myself on my wedding day. My makeup looked like real glowing skin even after 14 hours of pheras and emotional moments.",
        image: "/images/jyotikhatri222222.png"
      },
      {
        num: "02 / 05",
        name: "Rhea Kapoor",
        eventType: "DESTINATION WEDDING",
        location: "UDAIPUR",
        rating: 5,
        quote: "From my pastel engagement look to my high-glam reception gown, she created three completely distinct, breathtaking avatars without ever looking overdone.",
        image: "/images/Post2.jpg"
      },
      {
        num: "03 / 05",
        name: "Tanvi Mehta",
        eventType: "SANGEET & BRIDAL",
        location: "MUMBAI",
        rating: 5,
        quote: "Her calmness and punctuality in the bridal suite kept me completely relaxed. The dupatta draping and hair styling were as flawless as the makeup.",
        image: "/images/jyotikhatri1.png"
      },
      {
        num: "04 / 05",
        name: "Kavya Singhania",
        eventType: "HERITAGE WEDDING",
        location: "JODHPUR",
        rating: 5,
        quote: "Finding an artist who understands how to balance heavy traditional Kundan jewelry with modern, featherlight makeup is rare. Jyoti exceeded every expectation.",
        image: "/images/jyotikhatri6.png"
      },
      {
        num: "05 / 05",
        name: "Simran Oberoi",
        eventType: "BEACH WEDDING",
        location: "GOA",
        rating: 5,
        quote: "The airbrush makeup survived humid coastal weather and hours of dancing without a single crack or smudge. Jyoti's professionalism and warmth are unmatched!",
        image: "/images/jyotikhatri5.png"
      }
    ],
    remembers: [
      {
        word: "CALM",
        quote: "The whole morning felt so peaceful. Jyoti made everything feel effortless.",
        bride: "Ananya S. • Jaipur Bride",
        image: "/images/jyotikhatri1.png"
      },
      {
        word: "CONFIDENCE",
        quote: "I felt completely confident walking into every photograph and spotlight.",
        bride: "Rhea K. • Udaipur Bride",
        image: "/images/Post2.jpg"
      },
      {
        word: "CARE",
        quote: "Every little detail was noticed — from skin prep to dupatta alignment.",
        bride: "Tanvi M. • Mumbai Bride",
        image: "/images/jyotikhatri222222.png"
      },
      {
        word: "TRANSFORMATION",
        quote: "I still cannot believe it was me. Natural, luminous, and unmistakable.",
        bride: "Kajal D. • Delhi Bride",
        image: "/images/jyotikhatri6.png"
      }
    ],
    highlights: [
      { rating: 5, quote: "Makeup was absolutely beautiful." },
      { rating: 5, quote: "She understood exactly what I wanted." },
      { rating: 5, quote: "I felt so confident." },
      { rating: 5, quote: "Lasted 16+ hours through pheras & tears." }
    ],
    letters: [
      {
        id: 1,
        brideName: "Ananya Sharma",
        event: "Bridal Ceremony • Jaipur",
        review: "Booking you for my wedding makeup was the single best decision I made. You made me feel so calm during the busy wedding morning and created a look that enhanced my natural skin so beautifully.",
        rotation: "-2deg"
      },
      {
        id: 2,
        brideName: "Rhea Kapoor",
        event: "Destination Wedding • Udaipur",
        review: "Thank you for making all 3 of my wedding events so unforgettable! From my pastel sangeet look to my regal wedding ceremony, everyone praised the radiance and skin texture.",
        rotation: "1.5deg"
      },
      {
        id: 3,
        brideName: "Kavya Singhania",
        event: "Royal Palace Wedding • Jodhpur",
        review: "Your eye for detail, dupatta draping, and mathapatti setting made me feel like royalty. My wedding photos look straight out of a luxury fashion editorial.",
        rotation: "-1.8deg"
      }
    ],
    statistics: [
      { number: "500+", label: "Brides" },
      { number: "5.0", label: "Average Rating" },
      { number: "100%", label: "Personalized Experience" }
    ],
    shareCTA: {
      heading: "Had Your Moment With Jyoti?",
      subtitle: "Your words may become part of another bride's inspiration.",
      btnText: "SHARE YOUR EXPERIENCE"
    },
    finalCTA: {
      heading: "Your Story\nCould Be Next.",
      subtitle: "Let's create a moment you'll remember forever.",
      primaryBtnText: "BOOK YOUR APPOINTMENT",
      secondaryBtnText: "START A CONVERSATION",
      image: "/images/jyotikhatri3.png"
    }
  }
};
