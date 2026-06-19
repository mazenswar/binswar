import React from "react";
import PageHero from "../components/sections/pageHero/PageHero";

const pageHeroConfig = {
	heading: "Work",
	align: "left",
};

function Work() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
		</main>
	);
}

export default Work;
