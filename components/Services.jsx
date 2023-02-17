import React from "react"
import Region from "./layout/Region"
import Wrapper from "./layout/Wrapper"
import Underline from "./Underline"
import Image from "next/image"
import styles from "../styles/Services.module.css"
import dropper from "../public/img/dropper.png"
import animal from "../public/img/korgey.png"
import Title from "./Title"

const Services = () => {
	const services = [
		{
			title: "Vakcinacija",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
		{
			title: "Čipovanje i pasoši",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
		{
			title: "Klinički pregled",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
		{
			title: "Otoskopski pregled (uši)",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
		{
			title: "Rinoskopija (nos)",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
		{
			title: "Oftamologija (oči)",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
		{
			title: "Krvna slika i biohemija",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
		{
			title: "Mikroskopski pregled",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum earum ipsa corporis sint minima, quae incidunt exercitationem maxime! Velit?",
			img: dropper,
		},
	]

	return (
		<div className={styles.serviceBackground}>
			<div className={styles.shapedivider}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
				</svg>
			</div>
			<Region>
				<Wrapper>
					<div className={styles.serviceStack}>
						<div className={styles.switcher}>
							<Title>
								<div className={styles.title}>
									<h2>Koje usluge pružamo?</h2>
									<Underline
										position={"start"}
										color={"secondary"}
									></Underline>
								</div>
							</Title>
							<div className={styles.animalGrid}>
								<div className={styles.blob}>
									<div className={styles.shape} />
								</div>
								<Image
									src={animal}
									alt="pas"
									width={600}
									height={350}
								></Image>
							</div>
						</div>
						<div className={styles.servicesGrid}>
							{services.map((service, index) => (
								<div key={index} className={styles.serviceBox}>
									<div className={styles.innerBox}>
										<Image
											src={dropper}
											alt="icon"
											width={50}
											height={50}
										></Image>
										<div>
											<h5>{service.title}</h5>
											<Underline
												position={"start"}
												color={"secondary"}
												weight={"thin"}
											></Underline>
										</div>
										<p>{service.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</Wrapper>
			</Region>
		</div>
	)
}

export default Services
