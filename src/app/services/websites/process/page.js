import React from "react";
import PageHero from "../../../components/sections/pageHero/PageHero";
import ProcessTimeline from "../../../components/sections/processTimeline/ProcessTimeline";
import CTABanner from "../../../components/sections/ctaBanner/CTABanner";
import ProcessRoute from "../../../components/illustrations/ProcessRoute";

import { generateMeta } from "../../../../../config/metadata";

export const metadata = generateMeta({
	title: "Our Process",
	description:
		"A clear four-phase process from first call to launch, so you always know what's happening and what we need from you.",
	path: "/services/websites/process",
});
const processHeroConfig = {
	eyebrow: "How we work",
	heading: "A clear path from first call to launch.",
	subheading:
		"No guesswork, no surprises. Here's exactly what happens at each stage, and what we'll need from you along the way.",
	image: null,
	illustration: <ProcessRoute />,
	align: "left",
};

const processConfig = {
	eyebrow: "How it works",
	classNames: "blockTint",
	heading: "From first conversation to launch.",
	subheading:
		"Four phases, clearly defined, so you always know what's happening and what we need from you.",
	phases: [
		{
			id: "phase-1",
			number: "01",
			title: "Getting Started",
			description:
				"A 30-minute call to make sure we're a good fit. Once we agree on a package, you'll sign the agreement, submit a deposit, and complete a comprehensive questionnaire so we have everything we need to begin.",
			tasks: [
				"Book a free 30-minute call",
				"Sign the agreement and submit your deposit",
				"Complete the discovery questionnaire",
				// "Send a few photos of you or your practice",
			],
		},
		{
			id: "phase-2",
			number: "02",
			title: "Foundation",
			description:
				"We write your site's copy and set up a private preview, built specifically for you. On a short call, you'll see your actual content rendered live, and choose the color palette, fonts, and overall style that feel right. Whatever you choose is locked in and confirmed in writing before we build anything further.",
			tasks: [
				"Review your copy",
				"Join a 30–45 minute design session",
				"Choose your palette, fonts, and site style",
			],
		},
		{
			id: "phase-3",
			number: "03",
			title: "Build & Feedback",
			description:
				"With your design direction locked in, we build the complete site, fully responsive, optimized, and accessible. You'll get two rounds of consolidated feedback, one submission per round covering everything from copy to layout. A third round, if needed, is available at $75/hour with a quote upfront.",
			tasks: [
				"Review your preview site",
				"Submit two consolidated round of feedback",
				"Review the updated site and confirm sign-off",
			],
		},
		{
			id: "phase-4",
			number: "04",
			title: "Launch & Support",
			description:
				"Once you've signed off, we connect your domain, verify everything is live. We also set up a dedicated, non-clinical email used only for your site's web tools, like analytics and search console, which we manage during the support period and fully transfer to you at the end. For 90 days after launch, we monitor and fix any functional or technical issues at no extra cost.",
			tasks: [
				"Confirm your domain is ready",
				"Approve the live site",
				"Receive full account access at the end of the 90-day support period",
			],
		},
	],
};

const ctaBannerConfig = {
	heading: "Ready for the next step?",
	subheading:
		"Book a free consultation, or take a look at our website packages to find the right fit.",
	variant: "brand",
	cta: {
		text: "Book a free consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: {
		text: "View our services",
		href: "/services",
		variant: "secondary",
	},
};

function ProcessPage() {
	return (
		<main id="main-content" className="process__page">
			<PageHero pageHeroConfig={processHeroConfig} />
			<ProcessTimeline processConfig={processConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default ProcessPage;
