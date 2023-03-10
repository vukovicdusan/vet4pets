import Head from "next/head"
import Hero from "../components/Hero.jsx"
import Services from "@/components/Services.jsx"
import Testimonials from "@/components/Testimonials.jsx"
import AboutMe from "@/components/AboutMe.jsx"
import Contact from "@/components/Contact.jsx"

export default function Home() {
	return (
		<>
			<Head>
				<title>vet4Pets - Veterinarska ordinacija</title>
				<meta
					name="description"
					content="vet4Pets - Veterinarska ordinacija"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero></Hero>
			<Services></Services>
			<Testimonials></Testimonials>
			<AboutMe></AboutMe>
			<Contact></Contact>
		</>
	)
}
