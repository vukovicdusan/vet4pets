import React from "react";
import Wrapper from "../Wrapper";
import * as styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo-220.png";

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
            </Link>
            <nav className={styles.desktopNav}>
              <ul className={styles.headerWrap}>
                <li>
                  <Link href={"/"}>Početna</Link>
                </li>
                <li className={styles.dropdown}>
                  Kalkulatori
                  <span>
                    <svg className={styles.chevron}>
                      <use xlinkHref={"./img/sprite.svg#triangle"}></use>
                    </svg>
                  </span>
                  <ul className={styles.dropdownContent}>
                    <li>
                      <Link href={"./kalkulator-kalorija"}>
                        Kalkulator Kalorija
                      </Link>
                    </li>
                    <li>
                      <Link href={"./kalkulator-cokolada"}>
                        Kalkulator trovanja čokoladom
                      </Link>
                    </li>
                    <li>
                      <Link href={"./kalkulator-rast"}>
                        Kalkulator veličine
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
