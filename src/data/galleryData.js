/* ==========================================================================
   STUNNING TRANSFORMATION GALLERY DATA
   To add new images, simply append an object to the `galleryImages` array below.
   Each object requires:
     - src: Image URL or imported asset path
     - category: One of the category IDs (e.g. 'bridal', 'light-party', 'sangeet', etc.)
     - alt: Description of the makeup look
   ========================================================================== */

export const galleryCategories = [
  { id: 'all', label: 'ALL' },
  { id: 'light-party', label: 'LIGHT PARTY MAKEUP' },
  { id: 'brides-light', label: "BRIDE'S LIGHT MAKEUP (HALDI, MEHNDI, CARNIVAL)" },
  { id: 'sangeet', label: 'SANGEET MAKEUP' },
  { id: 'bridal', label: 'BRIDAL MAKEUP' },
  { id: 'reception', label: 'RECEPTION MAKEUP' },
  { id: 'airbrush', label: 'AIR BRUSH MAKEUP' },
  { id: 'engagement', label: 'ENGAGEMENT MAKEUP' },
  { id: 'pre-wedding', label: 'PRE-WEDDING MAKEUP' },
  { id: 'hd-makeup', label: 'HD MAKEUP' },
  { id: 'editorial', label: 'EDITORIAL MAKEUP' }
];

export const galleryImages = [
  // BRIDAL MAKEUP
  {
    id: 1,
    src: "/images/jyotikhatri1.png",
    category: "bridal",
    alt: "Royal Traditional Indian Bridal Makeup with Gold Kundan & Nath"
  },
  {
    id: 2,
    src: "/images/jyotikhatri222222.png",
    category: "bridal",
    alt: "Classic Crimson Bridal Glamour Portrait"
  },
  {
    id: 3,
    src: "/images/jyotikhatri6.png",
    category: "bridal",
    alt: "Opulent Red Bridal Transformation"
  },

  // BRIDE'S LIGHT MAKEUP (HALDI, MEHNDI, CARNIVAL)
  {
    id: 4,
    src: "/images/Post5.png",
    category: "brides-light",
    alt: "Radiant Haldi Ceremony Soft Yellow & Floral Look"
  },
  {
    id: 5,
    src: "/images/jyotikhatri1111.png",
    category: "brides-light",
    alt: "Vibrant Mehndi Celebration Pastel Makeup"
  },
  {
    id: 6,
    src: "/images/Post2.jpg",
    category: "brides-light",
    alt: "Pre-Wedding Carnival Dewy Natural Glow"
  },

  // SANGEET MAKEUP
  {
    id: 7,
    src: "/images/jyotikhatri5.png",
    category: "sangeet",
    alt: "Glamorous Sangeet Night Smokey Eye & Shimmer"
  },
  {
    id: 8,
    src: "/images/jyotikhatri111111.png",
    category: "sangeet",
    alt: "Sparkling Sangeet Celebration Makeover"
  },

  // RECEPTION MAKEUP
  {
    id: 9,
    src: "/images/jyotikhatri3.png",
    category: "reception",
    alt: "Grand Reception Cocktail Gown Elegance"
  },
  {
    id: 10,
    src: "/images/makeup%20by%20jyoti%20khatri%204.png",
    category: "reception",
    alt: "Modern Velvet Reception Look"
  },

  // AIR BRUSH MAKEUP
  {
    id: 11,
    src: "/images/Post1.jpg",
    category: "airbrush",
    alt: "Flawless HD Airbrush Porcelain Skin Finish"
  },
  {
    id: 12,
    src: "/images/jyotikhatri7.png",
    category: "airbrush",
    alt: "Seamless Long-Wearing Airbrush Artistry"
  },

  // LIGHT PARTY MAKEUP
  {
    id: 13,
    src: "/images/Post3.jpg",
    category: "light-party",
    alt: "Soft Nude Party Glamour"
  },
  {
    id: 14,
    src: "/images/makeup%20by%20jyoti%20khatri%202.png",
    category: "light-party",
    alt: "Subtle Rose Gold Party Look"
  },

  // ENGAGEMENT MAKEUP
  {
    id: 15,
    src: "/images/Post2.jpg",
    category: "engagement",
    alt: "Romantic Soft Pink Engagement Look"
  },
  {
    id: 16,
    src: "/images/jyotikhatri2222.png",
    category: "engagement",
    alt: "Chic Pastel Engagement Transformation"
  },

  // PRE-WEDDING MAKEUP
  {
    id: 17,
    src: "/images/jyotikhatri111.png",
    category: "pre-wedding",
    alt: "Editorial Outdoor Pre-Wedding Shoot Glam"
  },
  {
    id: 18,
    src: "/images/makeup%20by%20jyoti%20khatri1%20copy%202.png",
    category: "pre-wedding",
    alt: "Sun-Kissed Natural Pre-Wedding Portrait"
  },

  // HD MAKEUP
  {
    id: 19,
    src: "/images/Post1.jpg",
    category: "hd-makeup",
    alt: "High-Definition 4K Precision Makeup"
  },
  {
    id: 20,
    src: "/images/jyotikhatri222.png",
    category: "hd-makeup",
    alt: "Ultra HD Sculpted Contour and Highlight"
  },

  // EDITORIAL MAKEUP
  {
    id: 21,
    src: "/images/jyotikhatri3.png",
    category: "editorial",
    alt: "High-Fashion Editorial Beauty Concept"
  },
  {
    id: 22,
    src: "/images/jyotikhatri7777.png",
    category: "editorial",
    alt: "Avant-Garde Magazine Editorial Makeup"
  }
];
