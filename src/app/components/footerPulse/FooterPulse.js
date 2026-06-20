// components/footer/FooterPulse.js
import Link from "next/link";
import "./footerpulse.scss";

/* =========================
   FOOTER CONFIGURATION
   ========================= */

const footerConfig = {
	brand: {
		label: "Binswar",
		tagline: "Web design for therapists who want more than a template.",
	},
	navLinks: [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "Case Studies", href: "/case-studies" },
		{ label: "About", href: "/about" },
	],
	cta: { text: "Let's talk", href: "/contact" },
	copyrightName: "Binswar LLC",
};

/* =========================
   COMPONENT
   ========================= */

export default function FooterPulse() {
	const year = new Date().getFullYear();

	return (
		<footer className="pulse-footer" role="contentinfo">
			<div className="pulse-footer__inner container">
				<div className="pulse-footer__top">
					<div className="pulse-footer__brand">
						<p className="pulse-footer__brand-name">
							{footerConfig.brand.label}
						</p>
						{footerConfig.brand.tagline && (
							<p className="pulse-footer__tagline">
								{footerConfig.brand.tagline}
							</p>
						)}
					</div>

					<nav className="pulse-footer__nav" aria-label="Footer">
						<ul className="pulse-footer__nav-list" role="list">
							{footerConfig.navLinks.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className="pulse-footer__link">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{footerConfig.cta && (
						<div className="pulse-footer__cta-wrap">
							<Link href={footerConfig.cta.href} className="pulse-footer__cta">
								{footerConfig.cta.text}
								<svg
									className="pulse-footer__cta-arrow"
									viewBox="0 0 16 16"
									aria-hidden="true"
								>
									<path
										d="M3 8h10M9 4l4 4-4 4"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link>
						</div>
					)}
				</div>

				<div className="pulse-footer__bottom">
					<p className="pulse-footer__copy">
						© {year} {footerConfig.copyrightName}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
