// import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/AboutMe.module.css"
import Region from "./layout/Region"
import Image from "next/image"
import about from "../public/img/about.jpg"
import Wrapper from "./layout/Wrapper"
import Underline from "./Underline"
import Title from "./Title"

const AboutMe = () => {
	return (
		<div className={styles.background}>
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
					<div className={styles.stack}>
						<Title>
							<div className={styles.title}>
								<h2>Ko smo mi?</h2>
								<Underline
									position={"start"}
									color={"secondary"}
								></Underline>
							</div>
						</Title>

						<div className={styles.switcher}>
							<div>
								<Image
									src={about}
									width={350}
									height={450}
									alt="sale"
								></Image>
							</div>
							<div className={styles.stack}>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Reiciendis, libero. Ullam
									error pariatur reiciendis incidunt,
									asperiores ducimus dolorum iusto
									voluptatibus tempora maxime sequi excepturi
									doloribus vel nemo quae odio labore.
								</p>
								<p>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Neque debitis ullam beatae
									vero quaerat molestiae enim eius veniam
									pariatur unde eveniet quidem suscipit
									voluptatibus aspernatur voluptatum saepe
									vitae quisquam, atque, maiores blanditiis
									tenetur culpa, eum repudiandae inventore?
									Quam, necessitatibus voluptatibus.
								</p>
								<p>
									Saša <br /> Kosijer
								</p>
							</div>
						</div>
					</div>
				</Wrapper>
			</Region>
		</div>
	)
}

export default AboutMe
