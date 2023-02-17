import React, { useEffect, useRef } from "react"
import Region from "./layout/Region"
import Wrapper from "./layout/Wrapper"
import Image from "next/image"
import styles from "../styles/Hero.module.css"
import dog from "../public/img/akita.png"

const Hero = () => {
	let titleRef = useRef()
	let subTitleRef = useRef()
	let lineRef = useRef()
	let btnRef = useRef()

	useEffect(() => {
		animate()
	}, [])

	let currentIteration = 0
	let startValue = 300
	let changeInValue = -300
	let totalIterations = 90
	let easingValue
	function easeOutQuint(
		currentIteration,
		startValue,
		changeInValue,
		totalIterations
	) {
		return (
			changeInValue *
				(Math.pow(currentIteration / totalIterations - 1, 5) + 1) +
			startValue
		)
	}
	const animate = () => {
		easingValue = easeOutQuint(
			currentIteration,
			startValue,
			changeInValue,
			totalIterations
		)
		currentIteration++
		if (easingValue >= 0) {
			titleRef.current.style.transform = `translateY(${easingValue}px)`
			subTitleRef.current.style.transform = `translateY(${easingValue}px)`
			btnRef.current.style.transform = `translateY(${easingValue}px)`
			lineRef.current.style.transform = `translateX(${easingValue}px)`
			requestAnimationFrame(animate)
		}
	}

	return (
		<div className={styles.heroBackground}>
			<Region>
				<Wrapper>
					<div className={styles.heroSwitcher}>
						<div className={styles.heroStackLeft}>
							<div className={styles.animationContainer}>
								<div ref={lineRef}>
									<span></span>
									<p>Veterinarska Klinika</p>
								</div>
							</div>
							<div className={styles.animationContainer}>
								<h1 ref={titleRef}>
									Mi pazimo na vaše ljubimce!
								</h1>
							</div>
							<div className={styles.animationContainer}>
								<p
									ref={subTitleRef}
									className={styles.stackException}
								>
									Brinemo o zdravlju Vaših ljubimaca 24h
									dnevno. Kontaktirajte nas!
								</p>
							</div>
							<div className={styles.animationContainer}>
								<button ref={btnRef} className="button">
									Zakažite pregled
								</button>
							</div>
						</div>
						<div className={styles.heroStackRight}>
							<div className={styles.heroSvg}>
								<div className={styles.shape} />
							</div>
							<Image
								width={600}
								height={350}
								src={dog}
								alt="dog"
							></Image>
						</div>
					</div>
				</Wrapper>
			</Region>
		</div>
	)
}

export default Hero
