import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import * as styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo-220.png";
import { useRouter } from "next/router";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [mounted, setMounted] = useState(false);

	let router = useRouter();

	useEffect(() => {
		let targetId = router.asPath.replace(/.*\#/, "");
		const elem = document.getElementById(targetId);
		setMounted(true);
		window.scrollTo({
			top: elem?.getBoundingClientRect().top,
			behavior: "smooth",
		});
	}, [mounted]);

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	const dropdownOpenHandler = () => {
		dropdownOpen === false ? setDropdownOpen(true) : setDropdownOpen(false);
	};

	const scrollHandler = () => {
		const currentScrollHeight = window.scrollY;
		setScrollHeight(currentScrollHeight);
	};

	return (
		<div>
			<header
				className={`${styles.header} ${
					scrollHeight > 0 ? styles.boxShadow : ""
				}`}
			>
				<Wrapper>
					<div className={styles.headerWrap}>
						<Link className={styles.headerLogo} href={"/"}>
							<Image
								src={logo}
								width={50}
								height={50}
								className={logo}
								alt={logo}
								priority
							></Image>
						</Link>
						<nav className={styles.desktopNav}>
							<ul className={styles.headerWrap}>
								<li>
									<Link href={"/"}>Početna</Link>
								</li>
								<li
									onClick={dropdownOpenHandler}
									className={`${styles.dropdown} ${
										dropdownOpen
											? `${styles.dropdownOpen}`
											: ""
									}`}
								>
									Kalkulatori
									<span>
										<svg className={styles.chevron}>
											<use
												xlinkHref={
													"./img/sprite.svg#triangle"
												}
											></use>
										</svg>
									</span>
									<ul className={styles.dropdownContent}>
										<li>
											<Link
												href={"./kalkulator-kalorija"}
											>
												Kalkulator kalorija
											</Link>
										</li>
										<li>
											<Link
												href={"./kalkulator-cokolada"}
											>
												Kalkulator za trovanje čokoladom
											</Link>
										</li>
										<li>
											<Link href={"./kalkulator-rast"}>
												Kalkulator veličine psa
											</Link>
										</li>
									</ul>
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
	);
};

export default Header;
