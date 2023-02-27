import React from "react"
import Wrapper from "./Wrapper"
import * as styles from "../../styles/Header.module.css"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/img/logo-220.png"

const Header = () => {
	return (
		<div>
			<header className={styles.header}>
				<Wrapper>
					<div className={styles.headerWrap}>
						<Link className={styles.headerLogo} href={"/"}>
							<Image
								src={logo}
								width={50}
								height={50}
								className={logo}
								alt={logo}
							></Image>
							vet4Pets
						</Link>
						<nav className={styles.desktopNav}>
							<ul className={styles.headerWrap}>
								<li>
									<Link href={"/"}>Početna</Link>
								</li>
								<li>
									<Link href={"./kalkulator"}>
										Kalkulator Kalorija
									</Link>
								</li>
								<li>
									<a href="./#contact">Kontakt</a>
								</li>
							</ul>
						</nav>
					</div>
				</Wrapper>
			</header>
		</div>
	)
}

export default Header
