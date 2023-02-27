import React, { useState, useEffect, useRef } from "react"
import styles from "@/styles/Title.module.css"

const Title = (props) => {
	let animationRef = useRef()
	const [show, setShow] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShow(true)
					requestAnimationFrame(() => animate(entry.target))
					// animate(entry.target)
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
	const animate = (el) => {
		let easingValue = easeOutQuint(currentIteration, -500, 500, 120)
		currentIteration++
		if (easingValue <= 0) {
			el.style.transform = `translateX(${easingValue}px)`
			requestAnimationFrame(() => animate(el))
		}
	}

	let showClass = show ? styles.show : null

	return (
		<div className="animation-container">
			<div className={`${styles.hidden} ${showClass}`} ref={animationRef}>
				{props.children}
			</div>
		</div>
	)
}

export default Title
