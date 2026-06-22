// config/site.js

const site = {
	// =========================
	// EDIT THIS PER PROJECT
	// =========================
	name: "Binswar",
	tagline: "A meaningful online presence for your practice",
	description:
		"Binswar builds custom websites for therapists and mental health practitioners. We handle everything from design and copywriting to SEO and analytics so you can focus on your clients.",
	url: "https://binswar.com",
	locale: "en_US",
	// Theme
	// Analytics
	analytics: {
		ga4: null, // or null to disable
		gtm: "GTM-KFSD2RLN", // "GTM-XXXXXXX" or null
	},
	// Contact
	email: "mazen@binswar.com",
	phone: null, // e.g. "+17321234567"
	address: {
		street: "801 Route 1 PMB 1035",
		city: "Edison",
		state: "NJ",
		zip: "08817",
		country: "US",
	},

	// Branding
	logo: {
		src: "/logo/binswar-white-b.png", // place in /public
		width: 200,
		height: 60,
		alt: "Binswar logo",
	},

	// OG image defaults
	og: {
		width: 1200,
		height: 630,
		// Brand colors used in dynamic OG image
		background: "#1c1c24", // dark brand color
		accent: "#5b21b6", // brand-1
		text: "#ffffff",
	},

	// Social
	social: {
		twitter: null, // "@handle"
		instagram: null, // "handle"
		linkedin: null, // "handle"
	},

	// Business type for JSON-LD
	// See: https://schema.org/LocalBusiness subtypes
	// Common: "LocalBusiness" | "MedicalBusiness" | "ProfessionalService"
	businessType: "ProfessionalService",

	// Operating hours for JSON-LD (optional)
	// hours: [
	// 	{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "09:00", close: "17:00" },
	// ],
	hours: null,

	// Price range for JSON-LD (optional)
	// "$" | "$$" | "$$$" | "$$$$"
	// priceRange: "$$",
};

export default site;
