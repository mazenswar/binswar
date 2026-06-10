// components/sections/FeatureGrid/FeatureGridIcons.js

function IconDesign() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M3 21h4L17 10l-4-4L3 21z" />
			<path d="M14.5 6.5l3-3 3 3-3 3-3-3z" />
		</svg>
	);
}

function IconSearch() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			<circle cx="10.5" cy="10.5" r="6.5" />
			<path d="M15.5 15.5L21 21" />
			<path d="M10.5 7.5v6M7.5 10.5h6" />
		</svg>
	);
}

function IconAccessibility() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			<circle cx="12" cy="5" r="2" />
			<path d="M5 9h14" />
			<path d="M12 9v5l-3 7" />
			<path d="M12 14l3 7" />
		</svg>
	);
}

function IconChart() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M3 20h18" />
			<path d="M5 20V12" />
			<path d="M9 20V8" />
			<path d="M13 20V14" />
			<path d="M17 20V4" />
		</svg>
	);
}

export function FeatureIcon({ name }) {
	if (name === "design") return <IconDesign />;
	if (name === "search") return <IconSearch />;
	if (name === "accessibility") return <IconAccessibility />;
	if (name === "chart") return <IconChart />;
	return null;
}
