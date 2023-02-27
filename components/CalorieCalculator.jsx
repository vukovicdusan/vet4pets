import React, { useState, useRef } from "react"
import styles from "@/styles/CalorieCalculator.module.css"
import Region from "./layout/Region"
import Wrapper from "./layout/Wrapper"
import Image from "next/image"
import Title from "./Title"
import Underline from "./Underline"
import bcs from "@/public/img/bcs_chart_dog.jpg"

const CalorieCalculator = () => {
	const [params, setParams] = useState({
		weight: "",
		signalment: "1.6",
		activity: "1",
		bcs: "1",
	})
	const [accordionOpen, setAccordionOpen] = useState(false)
	const [calories, setCalories] = useState("")

	const calculateCalories = (e) => {
		e.preventDefault()
		let bcsValue
		switch (params.bcs) {
			case "0":
				{
					bcsValue = 1.2
				}
				break
			case "1":
				{
					bcsValue = 1.1
				}
				break
			case "2":
				{
					bcsValue = 1
				}
				break
			case "3":
				{
					bcsValue = 0.9
				}
				break
			case "4":
				{
					bcsValue = 0.8
				}
				break
		}

		let calorieFormula =
			70 *
			Math.pow(params.weight, 0.75) *
			params.signalment *
			params.activity *
			bcsValue
		setCalories(calorieFormula)
		console.log(
			70 * Math.pow(params.weight, 0.75),
			params.signalment,
			params.activity,
			bcsValue
		)
	}

	// console.log(70 * Math.pow(29, 0.75))
	const inputHandler = (e) => {
		switch (e.target.name) {
			case "weight":
				{
					setParams((prev) => ({ ...prev, weight: e.target.value }))
				}
				break
			case "signalment":
				{
					setParams((prev) => ({
						...prev,
						signalment: e.target.value,
					}))
				}
				break
			case "activity":
				{
					setParams((prev) => ({
						...prev,
						activity: e.target.value,
					}))
				}
				break
			case "bcs":
				{
					setParams((prev) => ({
						...prev,
						bcs: e.target.value,
					}))
				}
				break
			default:
				""
		}
	}
	//REFS
	const accordionRef = useRef()

	//ACCORDION
	const openImgAccordion = (e) => {
		e.preventDefault()
		!accordionOpen ? setAccordionOpen(true) : setAccordionOpen(false)

		if (accordionRef.current.style.maxHeight) {
			accordionRef.current.style.maxHeight = null
		} else {
			accordionRef.current.style.maxHeight =
				accordionRef.current.scrollHeight + "px"
		}
	}

	return (
		<Region>
			<Wrapper>
				<div className={styles.center}>
					<Title>
						<div className={styles.title}>
							<h2 className="section-title">
								Kalkulator Kalorija
							</h2>
							<Underline
								// position={"center"}
								color={"secondary"}
							></Underline>
						</div>
					</Title>
					<form className={styles.stack} onSubmit={calculateCalories}>
						<div className={styles.inputWrapper}>
							<input
								type="text"
								name="weight"
								id="weight"
								autoCapitalize="none"
								autoCorrect="off"
								required
								title="UNESITE VALIDNU KILAŽU"
								pattern="\d+"
								onChange={inputHandler}
							/>
							<label
								className={styles.borderTitle}
								htmlFor="weight"
							>
								Težina(kg)
							</label>
						</div>
						<div className={styles.inputWrapper}>
							<select
								onChange={inputHandler}
								id="signalment"
								name="signalment"
								defaultValue={1.6}
							>
								<option value={1.6}>Sterilisan</option>
								<option value={1.8}>Nesterilisan</option>
							</select>
							<label
								className={styles.borderTitle}
								htmlFor="signalment"
							>
								Reproduktivni status
							</label>
						</div>
						<div className={styles.inputWrapper}>
							<select
								onChange={inputHandler}
								id="activity"
								name="activity"
								defaultValue={1}
							>
								<option value={1}>Neaktivan</option>
								<option value={1.2}>
									Aktivan par puta nedeljno
								</option>
								<option value={1.4}>Aktivan svakodnevno</option>
								<option value={1.6}>
									Svakodnevna velika aktivnost
								</option>
							</select>
							<label
								className={styles.borderTitle}
								htmlFor="signalment"
							>
								Nivo aktivnosti
							</label>
						</div>
						<div className={styles.rangeInput}>
							<label htmlFor="signalment">
								Body condition score{" "}
								<svg
									onClick={openImgAccordion}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.8c-4.853 0-8.8 3.947-8.8 8.8s3.947 8.8 8.8 8.8 8.8-3.947 8.8-8.8-3.947-8.8-8.8-8.8zm0 15.05c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.432-3.468.572-.544 1.024-.975.962-1.821-.058-.805-.73-1.226-1.364-1.226-.709 0-1.538.527-1.538 2.013h-2.011c0-2.4 1.41-3.95 3.59-3.95 1.036 0 1.942.339 2.551.955.57.578.865 1.372.854 2.298-.018 1.383-.859 2.291-1.536 3.021z" />
								</svg>
							</label>
							<input
								className="mr-bs-1"
								type="range"
								onChange={inputHandler}
								id="bcs"
								name="bcs"
								min="0"
								max="4"
								step="1"
								list="markers"
								defaultValue={0}
							/>
							<datalist id="markers">
								<option
									className={styles.optionValues}
									value={1.2}
									label="Neuhranjen"
								>
									Neuhranjen
								</option>
								<option
									className={styles.optionValues}
									value={1.1}
								></option>
								<option
									className={styles.optionValues}
									value={1}
									label="Idealan"
								>
									Idealan
								</option>
								<option
									className={styles.optionValues}
									value={0.9}
								></option>
								<option
									className={styles.optionValues}
									value={0.8}
									label="Gojazan"
								>
									Gojazan
								</option>
							</datalist>
						</div>
						<div
							ref={accordionRef}
							className={`${styles.accordionContent} mr-bs-4 `}
						>
							<Image
								src={bcs}
								width={650}
								height={400}
								alt="body condition score tabela"
							></Image>
						</div>
						<div className="animation-container">
							<div
								className={`${styles.hiddenBox} ${
									calories ? styles.box : null
								}`}
							>
								{calories ? Math.floor(calories) : null} kcal
							</div>
						</div>
						<button className="button">Izračunaj</button>
					</form>
				</div>
			</Wrapper>
		</Region>
	)
}

export default CalorieCalculator
