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
			<div className={styles.shapedivider}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						class="shape-fill"
					></path>
				</svg>
			</div>
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
