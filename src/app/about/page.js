import React from "react";
import PageHero from "../components/sections/pageHero/PageHero";
import ProseSection from "../components/sections/proseSection/ProseSection";
import CTABanner from "../components/sections/ctaBanner/CTABanner";

const aboutHeroConfig = {
	eyebrow: "About Binswar",
	heading: "Mazen Alswar",
	subheading:
		"Founder, Binswar — building digital presence for therapists who deserve to be found.",
	align: "left",
	image: {
		src: "/hero/variant-abd.jpg",
		alt: "Mazen Alswar",
		width: 400,
		height: 400,
	},
};
const storyConfig = {
	heading:
		"I've watched up close what it takes to have a meaningful online presence.",
	paragraphs: [
		"My wife opened her own private practice a couple of years ago. She's a brilliant clinician. I figured I'd handle the website and the business side, and that would be that. I'd built plenty of websites before, just never one that actually had to work, with real people deciding whether to trust it enough to book a first session.",
		"That part humbled me fast. A website isn't really about how it looks. It's about whether people find it, whether they stay, whether they understand what you do and feel safe enough to reach out. Performance, accessibility, search visibility, the actual language and imagery that build trust with a stranger, none of it was something I understood until we needed it, one problem at a time.",
		"That practice, CALM Therapy, now shows up in search and brings in real clients, starting from nothing. Everything I learned building it is what I bring to this work now.",
	],
	align: "left",
};

const backgroundConfig = {
	heading: "Background",
	paragraphs: [
		"Before any of this, I spent years in communications and diplomacy, including representing Bahrain at the United Nations, where I helped draft official statements on issues including Palestine. In my last two years there, I built and led a training curriculum for incoming diplomats, lectures, debate groups, graded assignments, teaching political philosophy and critical thinking to people just starting their careers. I later spent a year doing the same kind of work in a different field, teaching software engineering to career-changers at a coding bootcamp.",
		"Different rooms, same instinct: take something complicated and make it usable by someone who's never had to think about it before.",
	],
	align: "left",
};
const ctaBannerConfig = {
	heading: "Let's get your practice found.",
	subheading:
		"Book a free consultation and we'll talk through what your site actually needs.",
	variant: "brand",
	cta: {
		text: "Book a free consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: {
		text: "See our services",
		href: "/services",
		variant: "secondary",
	},
};

function AboutPage() {
	return (
		<main id="main-content" className="about__page">
			<PageHero pageHeroConfig={aboutHeroConfig} />
			<ProseSection proseSectionConfig={storyConfig} />
			<ProseSection proseSectionConfig={backgroundConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default AboutPage;
