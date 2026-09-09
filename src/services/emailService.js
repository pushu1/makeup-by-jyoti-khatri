/**
 * Lead Email Notification Service using Web3Forms API
 * 
 * Destination Email: Jyotikhatri2326@gmail.com
 * Access Key Configuration: Loaded securely via import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
 */

const DESTINATION_EMAIL = import.meta.env.VITE_DESTINATION_EMAIL || 'Jyotikhatri2326@gmail.com';

/**
 * Sends a structured lead notification email via Web3Forms API.
 * 
 * @param {Object} leadData
 * @param {string} leadData.clientName - Full name of the client
 * @param {string} [leadData.phone] - Phone / WhatsApp number
 * @param {string} [leadData.email] - Email address of client
 * @param {string} [leadData.eventDate] - Event date
 * @param {string} [leadData.serviceOrEventType] - Selected service or event type
 * @param {string} [leadData.venueOrCity] - Venue / City / Location
 * @param {string} [leadData.functionsCount] - Number of functions (if applicable)
 * @param {string} [leadData.rating] - Star rating (for reviews)
 * @param {string} [leadData.notesOrMessage] - Additional notes, vision, or review message
 * @param {string} leadData.source - Form source label (e.g. "Booking Modal", "Contact Page Form")
 * 
 * @returns {Promise<{ success: boolean, error?: string, data?: any }>}
 */
export async function sendLeadEmail(leadData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Verify access key configuration
  if (!accessKey || accessKey.trim() === '' || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
    console.warn('[emailService] Web3Forms access key is not configured in .env file.');
    return {
      success: false,
      error: 'Web3Forms Access Key is not configured. Please add your key to VITE_WEB3FORMS_ACCESS_KEY in the .env file.'
    };
  }

  const {
    clientName = 'Valued Client',
    phone = 'N/A',
    email = 'N/A',
    eventDate = 'N/A',
    serviceOrEventType = 'Bridal & Beauty Makeup',
    venueOrCity = 'N/A',
    functionsCount,
    rating,
    notesOrMessage = '',
    source = 'Website Lead Form'
  } = leadData;

  const isReview = source.toLowerCase().includes('review');
  const subject = isReview
    ? `New Review Submission — ${clientName} — ${serviceOrEventType}`
    : `New Makeup Enquiry — ${clientName} — ${serviceOrEventType}`;

  const payload = {
    access_key: accessKey.trim(),
    subject: subject,
    from_name: `${clientName} (Website Lead)`,
    to_email: DESTINATION_EMAIL,
    botcheck: '',
    "Client Name": clientName,
    "Phone / WhatsApp": phone,
    "Email Address": email,
    "Event Date": eventDate,
    "Service / Event Type": serviceOrEventType,
    "City / Location / Venue": venueOrCity,
    ...(functionsCount ? { "Number of Functions": functionsCount } : {}),
    ...(rating ? { "Rating": rating } : {}),
    "Notes / Vision / Message": notesOrMessage || 'None provided',
    "Submission Source": source,
    "Submitted At": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

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
