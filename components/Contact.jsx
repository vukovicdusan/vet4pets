import React, { useState, useEffect } from "react"
import Image from "next/image"
import * as styles from "../styles/Contact.module.css"
import Wrapper from "./layout/Wrapper"
import Underline from "./Underline"
import Region from "./layout/Region"
import { sendContactForm } from "../lib/api"
import hamster from "@/public/img/hamster.png"
import Title from "./Title"
import Loader from "../components/Loader"

const Contact = () => {
	const [hasMounted, setHasMounted] = useState(false)
	const [contactFormData, setContactFormData] = useState({})
	const [contactFormProccess, setContactFormProccess] = useState({
		success: false,
		error: false,
		loading: false,
	})

	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) {
		return null
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault()
		setContactFormProccess((prev) => ({ ...prev, loading: true }))
		try {
			await sendContactForm(contactFormData)
			setContactFormProccess((prev) => ({
				...prev,
				success: true,
				loading: false,
			}))
		} catch (err) {
			console.log(err)
			setContactFormProccess((prev) => ({
				...prev,
				error: true,
				loading: false,
			}))
		}
	}

	const inputHandler = (e) => {
		e.target.name === "email"
			? setContactFormData({ ...contactFormData, email: e.target.value })
			: setContactFormData({
					...contactFormData,
					message: e.target.value,
			  })
	}

	return (
		<div id="contact" className={styles.contactBackground}>
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
					<Title>
						<div className={styles.title}>
							<h2 className="section-title">Pronadji nas.</h2>
							<Underline
								position={"start"}
								color={"secondary"}
							></Underline>
						</div>
					</Title>
					<div className={styles.switcher}>
						<div className={styles.light}>
							<div className={styles.animalGrid}>
								<div className={styles.blob}>
									<div className={styles.shape} />
								</div>
								<Image
									src={hamster}
									alt="hrcak"
									width={450}
									height={250}
								></Image>
							</div>
						</div>

						<div className={styles.contactStack}>
							{/* <div className={styles.center}> */}
							<div className={styles.contactInfo}>
								<ul className={styles.contactInfoStack}>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="#172189"
										>
											<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" />
										</svg>
										Tel:{" "}
										<a href="tel:064/117 84 43">
											064/117 84 43
										</a>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="#172189"
										>
											<path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
										</svg>
										Mail:{" "}
										<a href="mailto:amb.vet4pets@gmail.com">
											amb.vet4pets@gmail.com
										</a>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="#172189"
										>
											<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
										</svg>
										Adresa:&nbsp;
										<a
											href="https://goo.gl/maps/svr11GUbX67fyoUL7"
											target="blank"
										>
											Branka Cvetkovića br.6, Žarkovo
										</a>
									</li>
								</ul>
							</div>
							<form
								onSubmit={onSubmitHandler}
								className={styles.contactStack}
							>
								<h3>Javi se!</h3>
								{!contactFormProccess.success &&
								contactFormProccess.error ? (
									<p className={styles.error}>
										Došlo je do greške. Poruka nije poslata.
									</p>
								) : !contactFormProccess.success &&
								  !contactFormProccess.error ? (
									""
								) : (
									<p className={styles.success}>
										Hvala na poruci! Javljamo se!
									</p>
								)}
								<div className={styles.inputWrapper}>
									<input
										type="text"
										name="email"
										id="email"
										autoCapitalize="none"
										autoCorrect="off"
										required
										pattern="[^@]+@[^\.]+\..+"
										onChange={inputHandler}
									/>
									<label
										className={styles.borderTitle}
										htmlFor="email"
									>
										Tvoj Mail
									</label>
								</div>
								<div className={styles.inputWrapper}>
									<textarea
										name="message"
										id="message"
										type="text"
										rows="4"
										required
										autoCorrect="off"
										onChange={inputHandler}
									/>
									<label
										className={styles.borderTitle}
										htmlFor="message"
									>
										Poruka
									</label>
								</div>
								<div className={styles.buttonAndLoader}>
									<button className="button">Pošalji</button>
									{contactFormProccess.loading ? (
										<Loader></Loader>
									) : (
										""
									)}
								</div>
							</form>
						</div>
					</div>
					{/* </div> */}
				</Wrapper>
			</Region>
		</div>
	)
}

export default Contact
