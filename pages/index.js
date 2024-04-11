import Head from "next/head";
import Hero from "../components/hero/Hero.jsx";
import Services from "@/components/services/Services.jsx";
import Testimonials from "@/components/testimonials/Testimonials.jsx";
import AboutMe from "@/components/about/AboutMe.jsx";
import Contact from "@/components/contact/Contact.jsx";
import CalculatorsCta from "@/components/calculators-cta/CalculatorsCta.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>vet4Pets - Veterinarska ordinacija</title>
        <meta
          name="description"
          content="vet4Pets - Veterinarska ordinacija - Veterinar Beograd - Veterinar Železnik - Veterinar Čukarica"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vet4pets.rs/" key="canonical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <CalculatorsCta></CalculatorsCta>
      <Services></Services>
      <Testimonials></Testimonials>
      <AboutMe></AboutMe>
      <Contact shapedivider={true} title={true}></Contact>
    </>
  );
}
