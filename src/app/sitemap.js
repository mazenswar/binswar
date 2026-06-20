import site from "../../config/site";
import { getAllPostSlugs } from "../../lib/sanity/queries";

const staticRoutes = [
	{ path: "/", priority: 1.0, changeFrequency: "weekly" },
	{ path: "/services", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/services/websites", priority: 0.8, changeFrequency: "monthly" },
	{
		path: "/services/websites/process",
		priority: 0.6,
		changeFrequency: "monthly",
	},
	{ path: "/services/audit", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/about", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/blog", priority: 0.8, changeFrequency: "weekly" },
	{
		path: "/case-studies/calm-therapy",
		priority: 0.7,
		changeFrequency: "monthly",
	},
	{ path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default async function sitemap() {
	const now = new Date();

	const staticEntries = staticRoutes.map((route) => ({
		url: `${site.url}${route.path}`,
		lastModified: now,
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));

	let blogEntries = [];
	try {
		const slugs = await getAllPostSlugs();
		blogEntries = slugs.map((slug) => ({
			url: `${site.url}/blog/${slug}`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.6,
		}));
	} catch {
		// If Sanity is unreachable at build time, fall back to static routes only
		blogEntries = [];
	}

	return [...staticEntries, ...blogEntries];
}
