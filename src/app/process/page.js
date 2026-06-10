import React from "react";
import PageHero from "../components/sections/pageHero/PageHero";

const processHeroConfig = {
	eyebrow: null, // optional label above heading e.g. "Our Services"
	heading: "Process",
	subheading:
		"A brief description of what this page covers. Keep it clear and welcoming.",
	image: null,
	// Optional image example:
	// image: {
	// 	src: "/page-hero.webp",
	// 	alt: "Descriptive alt text",
	// 	width: 600,
	// 	height: 400,
	// },
	align: "left", // "left" or "center"
};

function ProcessPage() {
	return (
		<main id="main-content" className="process__page">
			<PageHero pageHeroConfig={processHeroConfig} />
		</main>
	);
}

export default ProcessPage;
