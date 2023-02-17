import React, { useState, useEffect, useRef } from "react"
import styles from "@/styles/Title.module.css"

const Title = (props) => {
	let animationRef = useRef()
	const [show, setShow] = useState(false)
	// animationRef.current.style.transform = "translateX(-500px)"
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShow(true)
					animate()
				}
			})
		})
		observer.observe(animationRef.current)
	}, [])

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
	let currentIteration = 0
	const animate = () => {
		let easingValue = easeOutQuint(currentIteration, -500, 500, 120)
		currentIteration++
		if (easingValue <= 0) {
			animationRef.current.style.transform = `translateX(${easingValue}px)`
			requestAnimationFrame(animate)
		}
	}

	let showClass = show ? styles.show : null
	console.log(show)
	return (
		<div className="animation-container">
			<div className={`${styles.hidden} ${showClass}`} ref={animationRef}>
				{props.children}
			</div>
		</div>
	)
}

export default Title
