import { client } from "./client";

const postSummaryFields = `
	_id,
	title,
	"slug": slug.current,
	excerpt,
	coverImage,
	publishedAt,
	"categories": categories[]->{ title, "slug": slug.current },
	tags
`;

export async function getAllPosts() {
	return client.fetch(
		`*[_type == "post" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) {
			${postSummaryFields}
		}`
	);
}

export async function getAllPostSlugs() {
	return client.fetch(
		`*[_type == "post" && defined(slug.current)][].slug.current`
	);
}

export async function getPostBySlug(slug) {
	return client.fetch(
		`*[_type == "post" && slug.current == $slug][0] {
			${postSummaryFields},
			body,
			seoTitle,
			seoDescription,
			ogImage,
			noIndex,
			"author": author->{ name, "slug": slug.current, image, bio }
		}`,
		{ slug }
	);
}

export async function getPostsByCategory(categorySlug) {
	return client.fetch(
		`*[_type == "post" && defined(publishedAt) && publishedAt <= now() && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
			${postSummaryFields}
		}`,
		{ categorySlug }
	);
}

export async function getAllCategories() {
	return client.fetch(
		`*[_type == "category"] | order(title asc) {
			title,
			"slug": slug.current,
			description
		}`
	);
}
