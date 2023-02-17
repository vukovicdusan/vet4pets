import React, { useState, useEffect } from "react"
import Image from "next/image"
import * as styles from "../styles/Contact.module.css"
import Wrapper from "./layout/Wrapper"
import Underline from "./Underline"
import Region from "./layout/Region"
import { sendContactForm } from "../lib/api"
import hamster from "@/public/img/hamster.png"
import Title from "./Title"
// import Loader from "../components/Loader"

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
							<h2 className="section-title">Kontakt</h2>
							<Underline
								position={"start"}
								color={"secondary"}
							></Underline>
							{/* {contactFormProccess.loading ? <Loader></Loader> : ""} */}
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
							{/* <ul className={styles.socials}>
								<li>
									<a href="https://www.facebook.com/milica.janevski.7">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
										</svg>
									</a>{" "}
								</li>
								<li>
									<a href="https://www.instagram.com/milicajanevski/?hl=sr">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
										</svg>
									</a>
								</li>
							</ul> */}
						</div>

						<div className={styles.contactStack}>
							{/* <div className={styles.center}> */}
							<div className={styles.contactInfo}>
								<ul className={styles.contactInfoStack}>
									<li>
										Tel:{" "}
										<a href="tel:064/117 84 43">
											064/117 84 43
										</a>
									</li>
									<li>
										Adresa:&nbsp;
										<a
											href="https://goo.gl/maps/svr11GUbX67fyoUL7"
											target="blank"
										>
											Branka Cvetkovića br.6, Žarkovo
										</a>
									</li>
									<li>
										Mail:{" "}
										<a href="mailto:amb.vet4pets@gmail.com">
											amb.vet4pets@gmail.com
										</a>
									</li>
								</ul>
							</div>
							<form
								onSubmit={onSubmitHandler}
								className={styles.contactStack}
							>
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
								<button className="button">Pošalji</button>
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
