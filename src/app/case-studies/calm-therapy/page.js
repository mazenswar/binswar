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
	heading: "The first site I ever built end to end, and what it taught me.",
	subheading:
		"CALM Therapy is a New Jersey practice I've worked with since before Binswar existed. I handled the website, the SEO, and everything digital, from a blank page to where it stands today. I didn't start out knowing this work. I learned it by doing it, on a real practice, with real stakes, and that's exactly why I trust what I know now.",
	align: "left",
	illustration: <TrendUp />,
};

const chipNavConfig = {
	label: "Jump to section",
	chips: [
		{ id: "starting-point", label: "Starting Point" },
		{ id: "what-changed", label: "What Changed" },
		{ id: "results", label: "Results" },
		{ id: "still-going", label: "Still Going" },
	],
};

const startingPointConfig = {
	id: "starting-point",
	eyebrow: "Where it began",
	heading: "A site that existed, but wasn't doing much.",
	paragraphs: [
		"Early on, the blog lived on Medium, separate from the site itself, which meant every piece of writing was driving readers somewhere else instead of building anything on CALM's own domain.",
		"On page SEO was bare minimum. Page titles and descriptions were generic, often missing entirely. There was no real keyword strategy behind any of it, no thought given to how someone actually searching for support would phrase what they were going through.",
		"The result was a site that looked fine but stayed largely invisible. Search Console showed it: low single digit clicks some months, average rankings buried past page three.",
	],
	classNames: "blockTint",
};

const whatChangedConfig = {
	heading: "What changed",
	subheading:
		"Not one action but several changes made together. It's difficult to pinpoint what had the most impact, but collectively they changed how the site performed.",
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Brought the blog home",
			description:
				"Migrated writing off Medium and onto the site itself using Sanity as a real CMS, meaning every post now lives on CALM's own domain instead of pointing traffic elsewhere.",
		},
		{
			id: "step-2",
			title: "Fixed the fundamentals",
			description:
				"Titles, meta descriptions, and canonical tags on every page. The unglamorous groundwork that's easy to skip and expensive to skip.",
		},
		{
			id: "step-3",
			title: "Expanded the content",
			description:
				"Added breadth where there wasn't any, including dedicated specialty pages like OCD, giving search engines and real visitors more to actually find.",
		},
		{
			id: "step-4",
			title: "Rebuilt the site itself",
			description:
				"A full visual and structural redesign, with performance and mobile optimization built in alongside everything else. The site now ranks meaningfully better on mobile than desktop, average position 7.6 versus 15.2, which matters since most people searching for a therapist are doing it from their phone.",
		},
	],
};

const statGridConfig = {
	id: "results",
	heading: "The results, plainly",
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
		"Every other month shown for clarity. Position got worse before it got better, then held steady in the page-one range.",
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
	// classNames: "blockTint",
};

const impressionsTrendConfig = {
	id: "trend-impressions",
	heading: "Monthly impressions over time",
	subheading:
		"Every other month shown for clarity. From scattered double digits to a sustained four-figure plateau.",
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
	eyebrow: "Still going",
	heading: "This isn't a finished story.",
	paragraphs: [
		"Some pages on the site still aren't pulling their weight. The fees and insurance page, for example, gets real impressions but almost no clicks, something worth digging into rather than hiding.",
		"That's the nature of SEO. It's not a one-time fix you launch and forget, it's an ongoing effort that keeps responding to what's actually happening in search. CALM's results came from sustained attention over time, not a single redesign.",
	],
	// classNames: "blockTint",
};
const blogProofConfig = {
	id: "blog-proof",
	eyebrow: "One specific result",
	heading:
		"One blog post outperformed every page on the site, including the homepage.",
	paragraphs: [
		"After moving the blog onto the site itself, a single post on compassion and integrity pulled in over 11,000 impressions, more than four times the homepage's total, and became the single best-performing page on the entire site.",
		"That's the clearest evidence that bringing the writing home, rather than leaving it on Medium, actually mattered. One well-written post, sitting on the domain it's meant to support, did more work than the rest of the site combined.",
	],
	classNames: "blockTint",
};

const ctaBannerConfig = {
	heading: "Want to see what this looks like for your practice?",
	subheading:
		"Every site starts somewhere. Let's talk about where yours could go.",
	variant: "brand",
	cta: {
		text: "Book a free consultation",
		href: "https://calendly.com/mazen-binswar/30min",
		variant: "primary",
	},
	secondaryCta: {
		text: "See our services",
		href: "/services",
		variant: "secondary",
	},
	// classNames: "blockTint",
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
			<TwoColumn twoColumnConfig={blogProofConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</>
	);
}
