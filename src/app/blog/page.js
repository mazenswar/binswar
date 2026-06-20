import Link from "next/link";
import { getAllPosts } from "../../../lib/sanity/queries";
import { urlFor } from "../../../lib/sanity/client";
import PageHero from "../components/sections/pageHero/PageHero";
import StaggerGrid from "../components/ui/staggerGrid/StaggerGrid";
import { generateMeta } from "../../../config/metadata";
import "./blog.scss";

export const metadata = generateMeta({
	title: "Blog",
	description:
		"Practical guidance on websites, SEO, and HIPAA-aware design for therapists and private practices.",
	path: "/blog",
});

export const revalidate = 3600;

const pageHeroConfig = {
	heading: "Blog",
	subheading:
		"Notes on websites, SEO, and HIPAA-aware design for therapists and private practices.",
	align: "left",
};

export default async function BlogIndexPage() {
	const posts = await getAllPosts();

	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />

			<section className="block blog-grid" aria-labelledby="blog-grid-heading">
				<div className="block__content container">
					<h2 id="blog-grid-heading" className="sr-only">
						All posts
					</h2>

					{posts.length === 0 ? (
						<p className="blog-grid__empty">
							No posts published yet. Check back soon.
						</p>
					) : (
						<StaggerGrid
							as="ul"
							itemAs="li"
							className="blog-grid__grid"
							role="list"
							baseDelay={100}
							stagger={80}
						>
							{posts.map((post) => (
								<Link
									key={post._id}
									href={`/blog/${post.slug}`}
									className="blog-card"
								>
									<div className="blog-card__inner">
										{post.coverImage && (
											<div className="blog-card__image-wrap">
												<img
													src={urlFor(post.coverImage)
														.width(640)
														.height(400)
														.fit("crop")
														.url()}
													alt={post.coverImage.alt || ""}
													className="blog-card__image"
													loading="lazy"
												/>
											</div>
										)}
										{post.categories?.length > 0 && (
											<span className="blog-card__category">
												{post.categories[0].title}
											</span>
										)}
										<h3 className="blog-card__title">{post.title}</h3>
										{post.excerpt && (
											<p className="blog-card__excerpt">{post.excerpt}</p>
										)}
										<time
											className="blog-card__date"
											dateTime={post.publishedAt}
										>
											{new Date(post.publishedAt).toLocaleDateString("en-US", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</time>
									</div>
								</Link>
							))}
						</StaggerGrid>
					)}
				</div>
			</section>
		</main>
	);
}
