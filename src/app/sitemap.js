import site from "../../config/site";

export default function sitemap() {
	return [
		{
			url: site.url,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${site.url}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${site.url}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${site.url}/case-studies/calm-therapy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${site.url}/websites`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: `${site.url}/audit`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: `${site.url}/process`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
	];
}
