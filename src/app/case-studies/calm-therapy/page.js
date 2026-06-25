import PageHero from "@/app/components/sections/pageHero/PageHero";
import { generateMeta } from "../../../../config/metadata";
import ChipNav from "@/app/components/ui/chipNav/ChipNav";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import Steps from "@/app/components/sections/steps/Steps";
import StatGrid from "@/app/components/sections/statGrid/StatGrid";
import TrendChart from "@/app/components/sections/trendChart/TrendChart";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import TrendUp from "@/app/components/illustrations/TrendUp";

export const metadata = generateMeta({
	title: "Case Study: CALM Therapy — Binswar",
	description:
		"How a therapy practice's website went from invisible to consistently found on Google, with the real Search Console data behind it.",
	path: "/case-studies/calm-therapy",
});

const pageHeroConfig = {
	eyebrow: "Case Study",
	heading: "Building a digital foundation for long-term growth.",
	subheading:
		"This case study follows the development of an East Coast-based therapy practice whose website was built from the ground up, including design, content strategy, technical SEO, accessibility, analytics, and ongoing search optimization. What began as a new website evolved into a long-term digital asset that continues to generate visibility, attract prospective clients, and support the growth of the practice.",
	align: "left",
	illustration: <TrendUp />,
};

const chipNavConfig = {
	label: "Jump to section",
	chips: [
		{ id: "starting-point", label: "The Challenge" },
		{ id: "what-changed", label: "What Changed" },
		{ id: "results", label: "Results" },
		{ id: "still-going", label: "Still Going" },
	],
};

const startingPointConfig = {
	id: "starting-point",
	eyebrow: "The challenge",
	heading: "Visibility.",
	paragraphs: [
		"The website provided a strong foundation for the practice. It looked professional, clearly communicated the services being offered, and reflected the therapist's approach and values.",
		"However, like many new websites, visibility was limited in the beginning. Technical SEO was minimal, page titles and meta descriptions had not been fully optimized, and there was little content for search engines to index beyond the core service pages. Blog content was being published on a third-party platform, which meant every piece of writing was driving readers elsewhere instead of building authority on the practice's own domain.",
		"This highlighted a challenge many therapy practices face: a website can look great and still struggle to attract visitors if it isn't supported by a broader search and content strategy.",
	],
	classNames: "blockTint",
};

const whatChangedConfig = {
	heading: "What changed",
	subheading:
		"The site's growth came from a series of intentional improvements informed by performance data, search visibility, and ongoing analysis rather than any single change.",
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Content stayed on the site",
			description:
				"The practice had already been producing thoughtful, high-quality content, but it was being published on a third-party platform. By migrating that content onto the site through a dedicated blog and CMS, the site was able to build authority and capture the value of that traffic directly. One article alone generated more than 11,000 impressions and became the highest-performing page on the entire site, outperforming even the homepage.",
		},
		{
			id: "step-2",
			title: "Technical foundations were strengthened",
			description:
				"Page titles, meta descriptions, internal linking, canonical tags, and other on-page SEO elements were reviewed and optimized. While these details are often invisible to visitors, they help search engines better understand, index, and rank website content.",
		},
		{
			id: "step-3",
			title: "The content footprint expanded",
			description:
				"Additional specialty pages and targeted content were added to better reflect the breadth of services being offered. This created more opportunities for both search engines and prospective clients to discover the practice through relevant searches.",
		},
		{
			id: "step-4",
			title: "The site was rebuilt",
			description:
				"A full visual and structural redesign with performance and mobile optimization built in. The site now ranks meaningfully better on mobile than desktop, average position 7.6 versus 15.2, which matters since most people searching for a therapist are doing it from their phone.",
		},
	],
};

const statGridConfig = {
	id: "results",
	heading: "The results",
	subheading:
		"Averages across full months. Pulled directly from Google Search Console.",
	stats: [
		{
			id: "stat-position",
			label: "Average search position",
			before: "~32",
			after: "~10",
			note: "Lower is better. Moved from page 3+ to consistently page one.",
		},
		{
			id: "stat-impressions",
			label: "Monthly impressions (avg)",
			before: "~160",
			after: "~3,250",
			note: "First 3 months of 2025 vs. most recent 4 full months.",
		},
		{
			id: "stat-clicks",
			label: "Monthly clicks (avg)",
			before: "~4",
			after: "~35",
			note: "First 3 months of 2025 vs. most recent 4 full months.",
		},
	],
	footnote:
		"Source: Google Search Console. Before = Feb–Apr 2025 average. After = Feb–May 2026 average.",
	classNames: "blockTint",
};

const positionTrendConfig = {
	id: "trend-position",
	heading: "Average position over time",
	subheading:
		"The goal was not a short-term traffic spike but sustained improvement over time. While rankings naturally fluctuate, the long-term trend reflects steady gains as content expanded, technical improvements accumulated, and the site's authority grew.",
	unitLabel: "Average position",
	invert: true,
	points: [
		{ label: "Feb '25", value: 31.2 },
		{ label: "Apr '25", value: 34.6 },
		{ label: "Jun '25", value: 40.6 },
		{ label: "Aug '25", value: 21.5 },
		{ label: "Oct '25", value: 6.1 },
		{ label: "Dec '25", value: 8.0 },
		{ label: "Feb '26", value: 9.7 },
		{ label: "Apr '26", value: 9.9 },
	],
	footnote:
		"Source: Google Search Console, sampled every other month, Feb 2025 – Apr 2026.",
};

const impressionsTrendConfig = {
	id: "trend-impressions",
	heading: "Monthly impressions over time",
	subheading:
		"As the site's visibility increased, it began appearing more frequently in relevant search results, creating more opportunities for prospective clients to discover the practice. The growth below reflects a steady expansion in the site's search presence over time.",
	unitLabel: "Impressions",
	invert: false,
	points: [
		{ label: "Feb '25", value: 65 },
		{ label: "Apr '25", value: 211 },
		{ label: "Jun '25", value: 593 },
		{ label: "Aug '25", value: 779 },
		{ label: "Oct '25", value: 1217 },
		{ label: "Dec '25", value: 1017 },
		{ label: "Feb '26", value: 4367 },
		{ label: "Apr '26", value: 3123 },
	],
	footnote:
		"Source: Google Search Console, sampled every other month, Feb 2025 – Apr 2026.",
	classNames: "blockTint",
};

const stillGoingConfig = {
	id: "still-going",
	eyebrow: "SEO is an ongoing process",
	heading: "This isn't a finished story.",
	paragraphs: [
		"One of the most common misconceptions about SEO is that it's something you set up once and forget. In reality, search visibility develops over time. Search engines continually evaluate content, user behavior, site structure, and relevance, which means rankings naturally change as websites grow and evolve.",
		"The results shown here were not the product of a single change. They emerged from a combination of strong technical foundations, thoughtful content, expanded site structure, and ongoing improvements that helped the website become more useful to both visitors and search engines.",
		"Some pages still aren't pulling their weight. The fees and insurance page, for example, gets real impressions but almost no clicks. That's worth digging into rather than ignoring, and it's a good example of the kind of ongoing analysis that keeps a site moving in the right direction.",
	],
};

const ctaBannerConfig = {
	heading: "Want to see what this looks like for your practice?",
	subheading:
		"Every site starts somewhere. Let's talk about where yours could go.",
	// variant: "brand",
	classNames: "blockTint",
	cta: {
		text: "Book a free consultation",
		href: "https://calendly.com/mazen-binswar/30min",
		variant: "primary",
		external: true,
	},
	secondaryCta: {
		text: "See our services",
		href: "/services",
		variant: "secondary",
	},
};

export default function CalmCaseStudyPage() {
	return (
		<>
			<PageHero pageHeroConfig={pageHeroConfig} />
			<ChipNav chipNavConfig={chipNavConfig} />
			<TwoColumn twoColumnConfig={startingPointConfig} />
			<Steps stepsConfig={whatChangedConfig} />
			<StatGrid statGridConfig={statGridConfig} />
			<TrendChart trendChartConfig={positionTrendConfig} />
			<TrendChart trendChartConfig={impressionsTrendConfig} />
			<TwoColumn twoColumnConfig={stillGoingConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</>
	);
}
