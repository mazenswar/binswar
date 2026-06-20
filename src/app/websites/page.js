import React from "react";
import PageHero from "../components/sections/pageHero/PageHero";
import ChipNav from "../components/ui/chipNav/ChipNav";
import PricingCards from "../components/sections/pricingCard/PricingCard";
import AddonsGrid from "../components/sections/addonsGrid/AddonsGrid";
import TwoColumn from "../components/sections/twoColumn/TwoColumn";
import OngoingSupport from "../components/sections/ongoingSupport/OngoingSupport";
import GeometricNetwork from "../components/illustrations/GeometricNetwork";
import CTABanner from "../components/sections/ctaBanner/CTABanner";

import { generateMeta } from "../../../config/metadata";

export const metadata = generateMeta({
	title: "Website Packages",
	description:
		"One-page and multi-page website packages for therapists, starting at $2,500 flat fee. Includes SEO, analytics setup, and 90 days of post-launch support.",
	path: "/services/websites",
});

const servicesHeroConfig = {
	eyebrow: null, // optional label above heading e.g. "Our Services"
	heading: "Custom Websites for Therapists and Small Practices",
	subheading: "Everything a practice needs for a meaningful online presence.",
	image: null,
	// Optional image example:
	// image: {
	// 	src: "/assets/services/services-hero.svg",
	// 	alt: "geometric network illustration",
	// 	width: 600,
	// 	height: 600,
	// },
	illustration: <GeometricNetwork />,
	align: "left", // "left" or "center"
};

// Chip nav
const chipNavConfig = {
	label: "Jump to section",
	chips: [
		{ id: "packages", label: "Packages" },
		{ id: "addons", label: "Add-ons" },
		{ id: "support", label: "Post-launch Support" },
		{ id: "ongoing-support", label: "Post-Project Support" },
	],
};

// pricing card

const pricingConfig = {
	id: "packages",
	eyebrow: "Packages",
	heading: "Choose the right foundation for your practice.",
	subheading:
		"Both packages include everything you need to launch. The difference is depth.",
	packages: [
		{
			id: "one-page",
			name: "One-Page Website",
			description:
				"A complete professional presence in one clean, scrollable site.",
			price: "$2,500",
			paymentStructure: "50% deposit, 50% at launch",
			delivery: "2 to 3 weeks from questionnaire completion",
			inclusions: [
				"Custom design, copy, and on-page SEO",
				"Google Analytics and Search Console setup",
				"Dedicated web properties Gmail account",
				"Booking link connected to your HIPAA-compliant platform",
				"Two rounds of consolidated feedback",
				"90 days post-launch support included",
			],
		},
		{
			id: "multi-page",
			name: "Multi-Page Website",
			description:
				"A comprehensive presence with more room to tell the full story of your practice.",
			price: "$3,400",
			paymentStructure: "50% deposit, 50% at launch",
			delivery: "4 to 6 weeks from questionnaire completion",
			inclusions: [
				"Everything in the one-page package",
				"Up to 5 individually designed and optimized pages",
				"Space for a dedicated about, services, rates, and FAQ page",
				"More ways for the right clients to find you online",
				"Individual SEO optimization for every page",
				"Stronger search visibility across multiple topics and specialties",
			],
		},
	],
	// cta: {
	// 	text: "Book a free consultation",
	// 	href: "https://calendly.com/binswar",
	// 	variant: "primary",
	// 	external: true,
	// },
};

// addons config

const addonsConfig = {
	id: "addons",
	classNames: "blockTint",
	eyebrow: "Add-ons",
	heading: "Extend your package with the right tools for your practice.",
	subheading: "Optional extras to help bring your full vision to life.",
	addons: [
		{
			id: "additional-page",
			name: "Additional Page",
			description:
				"A fully designed, written, and SEO optimized page added to your multi-page site.",
			price: "$200 per page",
			compatibility: "Multi-page package only",
		},
		{
			id: "newsletter",
			name: "Newsletter Integration",
			description:
				"Mailchimp or similar platform integrated with a signup form embedded on your site.",
			price: "$200",
			compatibility: "Both packages",
		},
		{
			id: "cms",
			name: "Blog and CMS",
			description:
				"Blog tool integration giving you a clean visual editor to publish content without touching code.",
			price: "$400",
			compatibility: "Multi-page package only",
		},

		{
			id: "content-writing",
			name: "Monthly Blog Post",
			description:
				"One professionally written, SEO-optimized blog post per month published to your site. Available for sites with the Blog and CMS add-on.",
			price: "$150 per post",
			compatibility: "Requires Blog and CMS add-on",
		},
		{
			id: "arabic",
			name: "Arabic and English Page",
			description:
				"A bilingual page for practices serving Arabic-speaking communities, with SEO for both languages.",
			price: "$300",
			compatibility: "Both packages",
		},
	],
};
// support config

const supportConfig = {
	id: "support",
	eyebrow: "Post-Launch Support",
	heading: "We stay until everything is working.",
	subheading: "Included with every package at no extra cost.",
	paragraphs: [
		"Every package includes 90 days of post-launch support at no extra cost. This is not a hotline or a ticket system. It is active monitoring — we watch your analytics, track how Google is indexing your site, and handle any technical issues that arise from the build.",
		"At the end of the support period you receive a full handoff document covering your accounts, your analytics, and everything you need to manage your site going forward.",
	],
	list: [
		"Weekly Google Search Console monitoring",
		"Google Analytics verification and troubleshooting",
		"Technical issue resolution from the build",
		"Full handoff document at the end of the period",
	],
	cta: null,
	image: null,
	imagePosition: "right",
	classNames: "",
};

// ongoing support
const ongoingSupportConfig = {
	id: "ongoing-support",
	eyebrow: "Ongoing Support",
	heading: "Need help after launch? We are here.",
	subheading:
		"Work after the 90-day support period is quoted at $75 per hour. Submit a request and we will provide a written estimate based on the scope before anything begins.",
	items: [
		{ id: "s1", text: "New pages or sections added to your site" },
		{ id: "s2", text: "Content updates, copy changes, and image swaps" },
		{ id: "s3", text: "Design adjustments after the project closes" },
		{
			id: "s4",
			text: "Technical fixes caused by third-party changes or client edits",
		},
		{
			id: "s5",
			text: "One-off consulting calls on SEO, analytics, or site performance",
		},
	],
	// cta: {
	// 	text: "Book a free consultation",
	// 	href: "https://calendly.com/binswar",
	// 	variant: "primary",
	// 	external: true,
	// },
	classNames: "blockTint",
};
// CTA Banner

const ctaBannerConfig = {
	heading: "Ready to get started?",
	subheading:
		"Let us build something great together. Book a free 30-minute consultation to see if this is right for your practice",
	variant: "brand", // "brand" | "dark" | "light"
	cta: {
		text: "Book a consult",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
	// Optional second button example:
	secondaryCta: {
		text: "See how it works",
		href: "/websites/process",
		variant: "secondary",
	},
};
function ServicesPage() {
	return (
		<main id="main-content" className="process__page">
			<PageHero pageHeroConfig={servicesHeroConfig} />
			<ChipNav chipNavConfig={chipNavConfig} />
			<PricingCards pricingConfig={pricingConfig} />
			<AddonsGrid addonsConfig={addonsConfig} />
			<TwoColumn twoColumnConfig={supportConfig} />
			<OngoingSupport ongoingSupportConfig={ongoingSupportConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default ServicesPage;
