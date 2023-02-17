import React, { useEffect } from "react"
import Image from "next/image"
import styles from "../styles/Testimonials.module.css"
import { useState } from "react"
import ChevronLeft from "./ChevronLeft"
import ChevronRight from "./ChevronRight"
import Wrapper from "./layout/Wrapper"
import Underline from "./Underline"
import Region from "./layout/Region"
import animal from "../public/img/blue-cat.png"
import Title from "./Title"

const testimonials = [
	{
		name: "Milan Đorđević",
		title: "Lorem ipsum dolor sit amet",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corporis est alias perferendis et dicta nihil sapiente fuga aut neque!",
	},
	{
		name: "Jane Maričić",
		title: "Lorem ipsum dolor sit amet",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corporis est alias perferendis et dicta nihil sapiente fuga aut neque!",
	},
	{
		name: "Branislav Trifunović",
		title: "Lorem ipsum dolor sit amet",
		content:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corporis est alias perferendis et dicta nihil sapiente fuga aut neque!",
	},
]

const Testimonials = () => {
	const [reelIndex, setReelIndex] = useState(0)
	const [leftButtonDisabled, setLeftButtonDisabled] = useState(true)
	const [rightButtonDisabled, setRightButtonDisabled] = useState(false)

	let slidesNum = testimonials.length - 1
	useEffect(() => {
		reelIndex > 0
			? setLeftButtonDisabled(false)
			: setLeftButtonDisabled(true)
		reelIndex < slidesNum
			? setRightButtonDisabled(false)
			: setRightButtonDisabled(true)
	}, [reelIndex])

	const reelLinkHandler = (direction) => {
		if (direction === "left") {
			setReelIndex(reelIndex !== 0 ? reelIndex - 1 : 0)
		}
		if (direction === "right") {
			setReelIndex(reelIndex !== slidesNum ? reelIndex + 1 : slidesNum)
		}
	}

	return (
		<div className={styles.testimonialsBackground}>
			<div className={styles.shapedivider}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
				</svg>
			</div>
			<Region>
				<Wrapper>
					<div className={styles.switcher}>
						<Title>
							<div className={styles.title}>
								<h2 className="section-title">
									Šta kažu o nama?
								</h2>
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
								alt="macka"
								width={600}
								height={350}
							></Image>
						</div>
					</div>

					<div className={styles.reel}>
						<div className={styles.reelButtons}>
							<button
								onClick={() => reelLinkHandler("left")}
								className={styles.reelButton}
								disabled={leftButtonDisabled}
							>
								<ChevronLeft
									svgFill={leftButtonDisabled && "#d0d2e7"}
								></ChevronLeft>
							</button>
							<button
								onClick={() => reelLinkHandler("right")}
								className={styles.reelButton}
								disabled={rightButtonDisabled}
							>
								<ChevronRight
									svgFill={rightButtonDisabled && "#d0d2e7"}
								></ChevronRight>
							</button>
						</div>

						<div
							style={{
								transform: `translateX(${-100 * reelIndex}vw)`,
								inlineSize: `${(slidesNum + 1) * 100}vw`,
							}}
							className={styles.reelInside}
						>
							{testimonials.map((testimonial, index) => (
								<div key={index} className={styles.reelItem}>
									<div className={styles.reelItemContent}>
										<h6>{testimonial.title}</h6>
										<p>{testimonial.content}</p>
										<p className="bold">
											{testimonial.name}
										</p>
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

export default Testimonials
