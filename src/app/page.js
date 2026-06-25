import Image from "next/image";
import Hero from "./components/sections/hero/Hero";
import CardGrid from "./components/sections/cardGrid/CardGrid";
import TwoColumn from "./components/sections/twoColumn/TwoColumn";
import Steps from "./components/sections/steps/Steps";
import BookingCTA from "./components/sections/bookingCTA/BookingCTA";
import FeatureGrid from "./components/sections/featureGrid/FeatureGrid";
import AudienceSection from "./components/sections/audienceSection/AudienceSection";
import CTABanner from "./components/sections/ctaBanner/CTABanner";
import AuditCTA from "./components/sections/auditCTA/AuditCTA";

import { generateMeta } from "../../config/metadata";

export const metadata = generateMeta({
	title: "Custom Websites for Therapists & Private Practices",
	description:
		"We help therapists and small practices build a web presence that reflects the quality of their work, with custom design, SEO, accessibility, and HIPAA-aware support.",
	path: "/",
});

const heroConfig = {
	variant: "background-hero",
	eyebrow: "",
	heading: "The meaningful web presence your practice deserves",
	subheading:
		"We help therapists and small practices build a web presence that reflects the quality of their work and helps the right clients find them.",
	cta: {
		text: "Book a free consultation",
		href: "/contact",
		variant: "primary",
	},
	// ctaSecondary: {
	// 	text: "Already have a website? Request an audit",
	// 	href: "/services",
	// 	variant: "secondary",
	// },
	images: {
		background: {
			src: "/hero/city.webp",
			alt: "Mazen Alswar, Binswar Founder",
		},
	},
	caption: {
		name: "Mazen Alswar",
		title: "Founder",
	},
};

/////////////////////
// FEATURE GRID CONFIG

const featureGridConfig = {
	heading: "Everything your practice needs online, in one place.",
	subheading: null,
	variant: "card",
	classNames: "blockTint",
	cta: {
		text: "See our services",
		href: "/services/websites",
		variant: "secondary",
	},
	features: [
		{
			id: "design",
			title: "Custom Design",
			description:
				"No templates, no shortcuts. We build every site around your practice, your voice, and the clients you want to reach, so your online presence feels like you from the first visit.",
			icon: "design",
		},
		{
			id: "search",
			title: "Built to Be Found",
			description:
				"A beautiful website does not help if nobody sees it. We build every site with SEO best practices, metadata, Google Search Console, and search visibility in mind so the right clients can actually find you.",
			icon: "search",
		},
		{
			id: "accessibility",
			title: "Accessible to Everyone",
			description:
				"Your website should work for everyone who needs it. Every site is built to WCAG 2.1 AA standards so it works for visitors with visual, motor, or cognitive differences, regardless of how they access the web.",
			icon: "accessibility",
		},
		{
			id: "chart",
			title: "Real Data, Real Insight",
			description:
				"Know what is working instead of guessing. We set up Google Analytics on every project so you have a clear picture of how visitors find your site, what they are reading, and how your presence is performing over time.",
			icon: "chart",
		},
	],
};

///////////
// Audience Section Config

const audienceConfig = {
	id: "audience",
	heading: "Built for therapists and small practices.",
	body: "As more clients begin their search for therapy online, a strong digital presence is no longer optional. Whether you are launching a private practice or looking to grow an established one, your website should help you stand out, communicate your expertise, and connect with the right clients. We build websites specifically for therapists, combining thoughtful design with the tools, integrations, and standards a modern practice needs.",
	variant: "split",
	items: [
		{
			id: "a1",
			text: "HIPAA-conscious guidance on how client information is handled on your site",
		},
		{
			id: "a2",
			text: "Accessibility standards relevant to healthcare providers",
		},

		{
			id: "a3",
			text: "Fully custom design, not template-driven limitations",
		},
		{
			id: "a4",

			text: "Designed specifically around how therapy clients search for and choose providers",
		},
	],
	cta: null,
};

// STEPS

const stepsConfig = {
	heading: "How It Works",
	subheading:
		"Five steps from first conversation to a site that works for your practice.",
	classNames: "blockTint",
	steps: [
		{
			id: "step-1",
			title: "We talk",
			description:
				"A free 30-minute call to understand your practice and your goals. If it is a good fit, we send a proposal outlining what is included, the timeline, and the cost.",
		},
		{
			id: "step-2",
			title: "We listen",
			description:
				"We send you a comprehensive questionnaire covering everything we need to know about your practice, your audience, and your preferences. This is where we gather the full picture before we touch anything.",
		},
		{
			id: "step-3",
			title: "We build",
			description:
				"We write all the copy, set up a live preview of your site in real design directions, and get on a call to lock in the look together. Then we build the full site. You review it in two rounds of consolidated feedback and sign off before anything goes live.",
		},
		{
			id: "step-4",
			title: "We launch",
			description:
				"We connect your domain, confirm everything is live and working across desktop and mobile, set up your analytics, and submit your site to Google.",
		},
		{
			id: "step-5",
			title: "We monitor",
			description:
				"For 90 days after launch we monitor your analytics, track how Google is indexing your site, and handle anything that needs attention. We will make sure your practice has the solid web presence it deserves.",
		},
	],
};
// audit

const auditCtaConfig = {
	id: "audit-cta",
	eyebrow: null,
	heading: "Already have a website?",
	body: "There is more to a digital presence than a beautiful design. The right technical foundation is what makes your practice visible in search, and what ensures your site meets the accessibility and HIPAA standards expected of healthcare providers.",
	items: [
		{ id: "a1", text: "Technical and indexing issues" },
		{ id: "a2", text: "SEO and metadata gaps" },
		{ id: "a3", text: "Accessibility and compliance flags" },
		{ id: "a4", text: "Performance and mobile issues" },
		{ id: "a5", text: "HIPAA risk assessment" },
	],
	card: {
		label: "Website Audit",
		price: "$50",
		description: "A detailed report plus a 30-min walkthrough call.",
		cta: {
			text: "Learn more",
			href: "/services/audit",
			variant: "primary",
			external: false,
		},
	},
	classNames: "",
};

//  CTA Banner
const ctaBannerConfig = {
	heading: "Ready to get started?",
	classNames: "blockTint",
	subheading:
		"The first step is a conversation. Everything else follows from there.",
	variant: "brand",
	cta: {
		text: "Book a free consultation",
		href: "https://calendly.com/mazen-binswar/30min",
		variant: "primary",
		external: true,
	},
	secondaryCta: null,
};

export default function Home() {
	return (
		<main id="main-content" className="home__page">
			<Hero heroConfig={heroConfig} />
			<FeatureGrid featureGridConfig={featureGridConfig} />
			<AudienceSection audienceConfig={audienceConfig} />
			<Steps stepsConfig={stepsConfig} />
			<AuditCTA auditCtaConfig={auditCtaConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
