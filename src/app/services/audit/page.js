import React from "react";
import PageHero from "../../components/sections/pageHero/PageHero";
import AuditIcon from "../../components/illustrations/AuditIcon";
import FeatureGrid from "../../components/sections/featureGrid/FeatureGrid";
import Steps from "../../components/sections/steps/Steps";
import PricingCards from "../../components/sections/pricingCard/PricingCard";
import CTABanner from "../../components/sections/ctaBanner/CTABanner";
import { generateMeta } from "../../../../config/metadata";

export const metadata = generateMeta({
	title: "Website Audit",
	description:
		"A $50 audit covering technical SEO, accessibility, performance, and HIPAA risk on your existing site. Delivered as a clear report with a 30-minute walkthrough call.",
	path: "/services/audit",
});

const auditHeroConfig = {
	eyebrow: "Website Audit",
	heading: "Find out what is holding your site back.",
	subheading:
		"A detailed audit of your existing website covering SEO, accessibility, performance, and HIPAA compliance. Delivered as a clear report with a 30-minute walkthrough call.",
	image: null,
	// Optional image example:
	// image: {
	// 	src: "/assets/services/services-hero.svg",
	// 	alt: "geometric network illustration",
	// 	width: 600,
	// 	height: 600,
	// },
	illustration: <AuditIcon />,
	align: "left", // "left" or "center"
};
// auditcover
const auditCoverageConfig = {
	id: "coverage",
	heading: "What the audit covers.",
	subheading: null,
	variant: "accent",
	classNames: "blockTint",
	cta: null,
	features: [
		{
			id: "technical",
			title: "Technical Foundation",
			description:
				"A strong technical foundation helps search engines find, understand, and display your website in results. We review indexing status, HTTPS configuration, sitemap submission, crawl errors, and redirect chains to identify anything that may be limiting your visibility.",
			icon: "settings",
		},
		{
			id: "seo",
			title: "On-Page SEO",
			description:
				"Search engines need clear signals about who you help, what services you offer, and where you practice. We review page titles, meta descriptions, heading structure, image alt text, keyword relevance, and internal linking to make sure your site communicates that information effectively.",
			icon: "search",
		},
		{
			id: "accessibility",
			title: "Accessibility",
			description:
				"Not everyone experiences the web the same way. We evaluate your site against WCAG 2.1 AA standards, including color contrast, keyboard navigation, form labels, focus states, and screen reader compatibility, to make sure it works for all visitors.",
			icon: "accessibility",
		},
		{
			id: "performance",
			title: "Performance",
			description:
				"Visitors expect pages to load quickly and work reliably across devices. We review Lighthouse scores, Core Web Vitals, image optimization, and mobile responsiveness across iOS Safari and Android Chrome to identify opportunities for improvement.",
			icon: "chart",
		},
		{
			id: "hipaa",
			title: "HIPAA Risk Assessment",
			description:
				"Many therapists are unaware of the privacy risks that can exist on a website. We review contact forms, booking workflows, and platform configurations to identify areas where protected health information may be collected or transmitted without appropriate safeguards.",
			icon: "shield",
		},
	],
};
// steps
const auditStepsConfig = {
	id: "audit-steps",
	heading: "How it works.",
	subheading: "Three steps from booking to report.",
	classNames: "",
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Book a call",
			description:
				"Schedule a free 15-minute intake call. We confirm what you need, answer any questions, and send you an invoice.",
		},
		{
			id: "step-2",
			title: "Pay and share access",
			description:
				"Pay the $50 invoice and add us to your Google Search Console. We begin the audit once both are confirmed.",
		},
		{
			id: "step-3",
			title: "Report and walkthrough",
			description:
				"We deliver a detailed PDF report within 5 business days and walk through the findings together on a 30-minute call.",
		},
	],
};
// pricing card
const auditPricingConfig = {
	id: "audit-pricing",
	classNames: "blockTint",
	eyebrow: "Pricing",
	heading: "One flat fee. No surprises.",
	subheading: null,
	classNames: "blockTint",
	packages: [
		{
			id: "audit",
			name: "Website Audit",
			description:
				"A comprehensive review of your existing site with a detailed report and a 30-minute walkthrough call.",
			price: "$50",
			paymentStructure: "One-time flat fee",
			delivery: "Report delivered within 5 business days of intake call",
			inclusions: [
				"Technical foundation review",
				"On-page SEO assessment",
				"Accessibility audit against WCAG 2.1 AA",
				"Performance and Core Web Vitals check",
				"HIPAA risk assessment",
				"Prioritized action plan",
				"30-minute walkthrough call",
			],
		},
	],
};
// cta banner
const ctaBannerConfig = {
	heading: "Ready to find out where you stand?",
	subheading: "Book a free 15-minute call and we will take it from there.",
	variant: "brand",
	cta: {
		text: "Book a free consultation",
		href: "https://calendly.com/mazen-binswar/30min",
		variant: "secondary",
		external: true,
	},
	secondaryCta: null,
};
function Audit() {
	return (
		<main id="main-content" className="audit__page">
			<PageHero pageHeroConfig={auditHeroConfig} />
			<FeatureGrid featureGridConfig={auditCoverageConfig} />
			<Steps stepsConfig={auditStepsConfig} />
			<PricingCards pricingConfig={auditPricingConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default Audit;
