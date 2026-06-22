import { generateMeta } from "../../../config/metadata";
import PageHero from "../components/sections/pageHero/PageHero";
import BookingCTA from "../components/sections/bookingCTA/BookingCTA";
import ContactForm from "../components/sections/contactForm/ContactForm";
import ContactUs from "../components/illustrations/ContactUs";

export const metadata = generateMeta({
	title: "Contact — Binswar",
	description:
		"Book a free consultation or send a message. We'll get back to you as soon as we can.",
	path: "/contact",
});

const pageHeroConfig = {
	eyebrow: "Contact",
	heading: "Let's talk about your site.",
	subheading:
		"Book a free consultation, or send a quick message if you'd rather start there. Either way, I'll get back to you within one business day.",
	align: "left",
	illustration: <ContactUs />,
};

const bookingConfig = {
	heading: "Book a free consultation",
	subheading:
		"30 minutes, no pressure. We'll talk through what your practice needs and whether we're a good fit.",
	classNames: "blockTint",
	steps: [
		{ number: 1, text: "Pick a time that works for you" },
		{
			number: 2,
			text: "We'll talk through your practice and what you're looking for",
		},
		{ number: 3, text: "You'll leave with a clear next step, no obligation" },
	],
	cta: {
		text: "Book a free consultation",
		href: "https://calendly.com/mazen-binswar/30min",
		variant: "primary",
		classNames: "booking_cta_track",
		external: true,
	},
	note: "Prefer to write instead? Send a message below.",
};

export default function ContactPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<BookingCTA bookingConfig={bookingConfig} />
			<ContactForm />
		</main>
	);
}
