import { urlFor } from "./client";

export const portableTextComponents = {
	types: {
		image: ({ value }) => (
			<img
				src={urlFor(value).width(1200).url()}
				alt={value.alt || ""}
				className="blog-post__inline-image"
				loading="lazy"
			/>
		),
	},
	marks: {
		link: ({ value, children }) => {
			const isExternal = value?.href?.startsWith("http");
			return (
				<a
					href={value.href}
					target={isExternal ? "_blank" : undefined}
					rel={isExternal ? "noopener noreferrer" : undefined}
					aria-label={
						isExternal ? `${children} (opens in a new tab)` : undefined
					}
				>
					{children}
				</a>
			);
		},
	},
};
