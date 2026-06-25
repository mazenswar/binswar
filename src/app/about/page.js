import React from "react";
import PageHero from "../components/sections/pageHero/PageHero";
import ProseSection from "../components/sections/proseSection/ProseSection";
import CTABanner from "../components/sections/ctaBanner/CTABanner";

import { generateMeta } from "../../../config/metadata";

export const metadata = generateMeta({
	title: "About",
	description:
		"Mazen Alswar, founder of Binswar, builds digital presence for therapists who deserve to be found — drawing on experience launching CALM Therapy from the ground up.",
	path: "/about",
});

const aboutHeroConfig = {
	eyebrow: "About Binswar",
	heading: "Mazen Alswar",
	subheading:
		"Founder, Binswar — building digital presence for therapists who deserve to be found.",
	align: "left",
	image: {
		src: "/images/about/mazen-a.webp",
		alt: "Mazen Alswar",
		width: 400,
		height: 400,
	},
};
const storyConfig = {
	id: "story",
	heading:
		"I've watched up close what it takes to have a meaningful online presence.",
	paragraphs: [
		"When my wife opened her private practice, I was happy to help with the website. I had built websites before, and I assumed I understood what the work involved.",
		"What I didn't expect was how different a therapist's website is from almost every other kind of website. It isn't just a business website. It has to help someone take a risk. It has to help a stranger decide whether they feel safe enough to share the most difficult parts of their life with another person. Every detail matters: the words, the structure, the imagery, the accessibility, the way someone finds the site in the first place.",
		"Over time, I watched CALM Therapy grow into something that consistently connected the right people with the right therapist. It wasn't just generating traffic. It was helping people find support. That experience shaped the direction of Binswar.",
		"It also gave me a clearer view of something I hadn't fully appreciated before. Therapists spend years learning how to help people, yet most are left to figure out marketing, search visibility, and digital presence entirely on their own. Graduate school teaches clinical skills. It doesn't usually teach how to build a sustainable practice in an increasingly competitive online landscape.",
		"My goal is to help therapists build an online presence that reflects the quality of their work, helps the right clients find them, and supports the long-term growth of their practice. I see my role as a partner in a part of private practice that most clinicians were never formally taught but are nevertheless expected to navigate.",
	],
	align: "left",
};

const backgroundConfig = {
	id: "background",
	heading: "Background",
	paragraphs: [
		"Before any of this, I spent years in communications and diplomacy, including representing Bahrain at the United Nations, where I drafted and delivered official statements in the UN Human Rights Council and the UN General Assembly. In my last two years as a diplomat, I built and led a training curriculum for incoming diplomats, lectures, debate groups, graded assignments, teaching political philosophy and critical thinking to people just starting their careers. I later spent a year doing the same kind of work in a different field, teaching software engineering to career-changers at a coding bootcamp.",
		"Different rooms, same instinct: contributing to something meaningful, helping people develop skills and confidence, and supporting work that extends beyond any one individual. What has always been most rewarding is empowering people who go on to make an impact in their own communities. That commitment continues to guide the work I do today.",
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
