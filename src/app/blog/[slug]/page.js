import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllPostSlugs } from "../../../../lib/sanity/queries";
import { urlFor } from "../../../../lib/sanity/client";
import { portableTextComponents } from "../../../../lib/sanity/portableTextComponents";
import FadeUp from "../../components/ui/fadeUp/FadeUp";
import { generateMeta } from "../../../../config/metadata";
import "./post.scss";

export const revalidate = 3600;

export async function generateStaticParams() {
	const slugs = await getAllPostSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	if (!post) return {};

	const title = post.seoTitle || post.title;
	const description = post.seoDescription || post.excerpt;
	const ogSource = post.ogImage || post.coverImage;

	return generateMeta({
		title,
		description,
		path: `/blog/${slug}`,
		image: ogSource
			? urlFor(ogSource).width(1200).height(630).url()
			: undefined,
		noIndex: post.noIndex,
	});
}

export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) notFound();

	return (
		<main id="main-content">
			<article className="block blog-post">
				<div className="block__content container blog-post__container">
					<FadeUp as="header" className="blog-post__header">
						{post.categories?.length > 0 && (
							<div className="blog-post__categories">
								{post.categories.map((c) => (
									<span key={c.slug} className="blog-post__category">
										{c.title}
									</span>
								))}
							</div>
						)}
						<h1 className="blog-post__title">{post.title}</h1>
						<div className="blog-post__meta">
							{post.author?.name && (
								<span className="blog-post__author">{post.author.name}</span>
							)}
							<time dateTime={post.publishedAt}>
								{new Date(post.publishedAt).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</time>
						</div>
					</FadeUp>

					{post.coverImage && (
						<FadeUp as="div" delay={80} className="blog-post__cover">
							<img
								src={urlFor(post.coverImage).width(1400).url()}
								alt={post.coverImage.alt || ""}
							/>
						</FadeUp>
					)}

					<FadeUp as="div" delay={120} className="prose blog-post__body">
						<PortableText
							value={post.body}
							components={portableTextComponents}
						/>
					</FadeUp>

					{post.tags?.length > 0 && (
						<div className="blog-post__tags">
							{post.tags.map((tag) => (
								<span key={tag} className="blog-post__tag">
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			</article>
		</main>
	);
}
