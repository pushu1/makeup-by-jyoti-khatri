/**
 * Lead Email Notification Service using Web3Forms API
 * 
 * Central Destination Email: Jyotikhatri2326@gmail.com
 * Access Key Configuration: Loaded securely via import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
 */

const DESTINATION_EMAIL = import.meta.env.VITE_DESTINATION_EMAIL || 'Jyotikhatri2326@gmail.com';

/**
 * Sends a structured lead notification email via Web3Forms API.
 * 
 * @param {Object} leadData
 * @returns {Promise<{ success: boolean, error?: string, data?: any }>}
 */
export async function sendLeadEmail(leadData = {}) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Verify access key configuration
  if (!accessKey || accessKey.trim() === '' || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' || accessKey === 'your_web3forms_access_key_here') {
    console.warn('[emailService] Web3Forms access key is not configured in .env file.');
    return {
      success: false,
      error: 'Web3Forms Access Key is missing or not configured. Please add your key to VITE_WEB3FORMS_ACCESS_KEY in the .env file.'
    };
  }

  // Extract common lead properties with flexible fallback aliases
  const clientName = leadData.clientName || leadData.name || leadData.fullName || leadData.brideName || 'Valued Client';
  const email = leadData.email || 'N/A';
  const phone = leadData.phone || leadData.mobile || leadData.contactNumber || 'N/A';
  const whatsapp = leadData.whatsapp || leadData.whatsappNumber || (phone !== 'N/A' ? phone : 'N/A');
  
  const serviceOrEventType = leadData.serviceOrEventType || leadData.service || leadData.eventType || leadData.selectedService || '';
  const selectedPackage = leadData.selectedPackage || leadData.package || '';
  const eventDate = leadData.eventDate || leadData.weddingDate || leadData.date || '';
  const venueOrCity = leadData.venueOrCity || leadData.location || leadData.city || leadData.venue || '';
  const functionsCount = leadData.functionsCount || leadData.numberOfFunctions || '';
  const budget = leadData.budget || leadData.budgetRange || '';
  const rating = leadData.rating || leadData.starRating || '';
  const notesOrMessage = leadData.notesOrMessage || leadData.message || leadData.specialRequirements || leadData.reviewText || '';
  const source = leadData.source || 'Website Lead Form';

  // Determine dynamic subject line
  const isReview = source.toLowerCase().includes('review');
  let subject = '';
  if (isReview) {
    subject = serviceOrEventType 
      ? `New Customer Review — ${clientName} — ${serviceOrEventType}` 
      : `New Customer Review — ${clientName}`;
  } else {
    subject = serviceOrEventType 
      ? `New Makeup Enquiry — ${clientName} — ${serviceOrEventType}` 
      : `New Makeup Enquiry — ${clientName}`;
  }

  // Build complete field payload for Web3Forms (maps all submitted information)
  const payload = {
    access_key: accessKey.trim(),
    subject: subject,
    from_name: `${clientName} (Website Lead)`,
    to_email: DESTINATION_EMAIL,
    botcheck: '',
    
    // Core Customer Details
    "Customer Name": clientName,
    "Email Address": email,
    "Phone Number": phone,
    "WhatsApp Number": whatsapp,

    // Event & Service Details (Included if submitted)
    ...(serviceOrEventType ? { "Service / Event Type": serviceOrEventType } : {}),
    ...(selectedPackage ? { "Selected Package": selectedPackage } : {}),
    ...(eventDate ? { "Event / Wedding Date": eventDate } : {}),
    ...(venueOrCity ? { "Location / Venue / City": venueOrCity } : {}),
    ...(functionsCount ? { "Number of Functions": functionsCount } : {}),
    ...(budget ? { "Estimated Budget": budget } : {}),
    ...(rating ? { "Star Rating": `${rating} Stars` } : {}),

    // Customer Message & Requirements
    "Customer Message": notesOrMessage || 'None provided',

    // System Metadata
    "Website": "https://makeupbyjyotikhatri.in/",
    "Submission Source": source,
    "Submitted At": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  // Include any custom extra key-value pairs from leadData that aren't already mapped
  const mappedKeys = new Set([
    'clientName', 'name', 'fullName', 'brideName', 'email', 'phone', 'mobile', 'contactNumber',
    'whatsapp', 'whatsappNumber', 'serviceOrEventType', 'service', 'eventType', 'selectedService',
    'selectedPackage', 'package', 'eventDate', 'weddingDate', 'date', 'venueOrCity', 'location',
    'city', 'venue', 'functionsCount', 'numberOfFunctions', 'budget', 'budgetRange', 'rating',
    'starRating', 'notesOrMessage', 'message', 'specialRequirements', 'reviewText', 'source'
  ]);

  Object.keys(leadData).forEach((key) => {
    if (!mappedKeys.has(key) && leadData[key] !== undefined && leadData[key] !== null && leadData[key] !== '') {
      // Format camelCase key into Title Case label
      const formattedLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
      payload[formattedLabel] = leadData[key];
    }
  });

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return { success: true, data };
    } else {
      const errorMsg = data.message || 'Failed to dispatch lead email. Please try again.';
      return { success: false, error: errorMsg };
    }
  } catch (err) {
    console.error('[emailService] Network Error:', err);
    return {
      success: false,
      error: 'Network connection error. Please check your internet connection and try again.'
    };
  }
}
