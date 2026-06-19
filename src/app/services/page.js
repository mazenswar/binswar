import React from "react";
import PageHero from "../components/sections/pageHero/PageHero";
import CardGrid from "../components/sections/cardGrid/CardGrid";
import CloudNetwork from "../components/illustrations/CloudNetwork";

const pageHeroConfig = {
	eyebrow: "Services",
	heading: "Two ways to work together.",
	subheading:
		"Whether you're starting from nothing or trying to figure out why your current site isn't working, there's a clear place to start.",
	align: "left",
	illustration: <CloudNetwork />,
};

const cardGridConfig = {
	heading: "What we offer",
	subheading: "Pick the one that matches where you are.",
	classNames: "blockTint",
	cards: [
		{
			title: "New Website",
			description:
				"A fully custom website built from the ground up, designed and optimized specifically for your practice. Accessible, fast, and built to bring the right clients to you.",
			href: "/websites",
			cta: "See what's included",
		},
		{
			title: "Website Audit",
			description:
				"Already have a site but not sure why it isn't working? We'll review your design, performance, SEO, and accessibility, and tell you exactly what's holding you back.",
			href: "/audit",
			cta: "Get an audit",
		},
	],
	// cta: {
	// 	text: "Not sure which one you need? Let's talk",
	// 	href: "/contact",
	// 	variant: "secondary",
	// },
};
function Services() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<CardGrid cardGridConfig={cardGridConfig} />
		</main>
	);
}

export default Services;
