import React from "react";
import Underline from "../Underline";
import Title from "../Title";
import Wrapper from "../layout/Wrapper";
import Region from "../layout/Region";
import animal from "@/public/img/blue-cat.png";
import chocolate from "@/public/img/chocolate.png";
import petBowl from "@/public/img/pet-bowl.png";
import AnimationContainer from "../animation-container/AnimationContainer";
import styles from "./CalculatorsCta.module.css";
import Image from "next/image";
import Link from "next/link";
import useLoading from "@/hooks/useLoading";

const CalculatorsCta = () => {
  const [loadingHandler, isLoading] = useLoading();
  return (
    <div className={styles.calculatorsCtaBackground}>
      <div className={styles.shapedivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <Region>
        <Wrapper>
          <div className={styles.stack}>
            <div className={`${styles.switcher} ${styles.switcherRowReverse}`}>
              <div>
                <Title>
                  <div className={styles.title}>
                    <h2 className="section-title">
                      Isprobajte naše kalkulatore.
                    </h2>
                    <Underline
                      position={"start"}
                      color={"secondary"}
                    ></Underline>
                  </div>
                </Title>
              </div>
              <div>
                <AnimationContainer>
                  <div className={styles.animalGrid}>
                    <div className={styles.blob}>
                      <div className={styles.shape} />
                    </div>
                    <Image
                      src={animal}
                      alt="macka"
                      width={600}
                      height={350}
                      className={`faded ${!isLoading ? "fadeIn" : ""}`}
                      onLoad={loadingHandler}
                    ></Image>
                  </div>
                </AnimationContainer>
              </div>
            </div>
            <div className={styles.stack}>
              <div className={styles.switcher}>
                <div className={`${styles.stack} ${styles.innerStack}`}>
                  <p>
                    Kao i nama, psima je potrebna energija da bi funkcionisali
                    kako treba. Zbog toga, njihov dnevni kalorijski unos treba
                    da bude dovoljan da održi psa zdravim i u odgovarajućoj
                    fizičkoj i mentalnoj kondiciji. Energija u vidu kalorija je
                    tu da zadovolji osnovne potrebe tela u pogledu opšteg
                    funkcionisanja i fizičke aktivnosti. Izračunajte dnevne
                    potrebe vašeg psa. A tu je i kalkulator za obračunavanje
                    unosa tečnosti.
                  </p>

                  <Link
                    className={styles.linkBtn}
                    href={"./kalkulator-kalorija"}
                  >
                    <span></span>Kalkulator Kalorija Kod Pasa
                    <svg className={styles.icon}>
                      <use xlinkHref={"./img/sprite.svg#arrow-right"}></use>
                    </svg>
                  </Link>
                </div>
                <div>
                  <AnimationContainer>
                    <Image
                      src={petBowl}
                      alt="hrana za pse"
                      width={200}
                      height={200}
                      className={`faded ${!isLoading ? "fadeIn" : ""}`}
                      onLoad={loadingHandler}
                    ></Image>
                  </AnimationContainer>
                </div>
              </div>
              <div
                className={`${styles.switcher} ${styles.switcherRowReverse}`}
              >
                <div className={`${styles.stack} ${styles.innerStack}`}>
                  <p>
                    Naš kalkulator vam može pomoći da utvrdite da li je količina
                    čokolade koju je vaš ljubimac pojeo opasna za njega.
                    Čokolada je veoma otrovna za pse. Preciznije teobromin koji
                    čokolada sadrži. Psi ne bi trebali da jedu ni malo čokolade,
                    ali ako se to ipak dogodi da li ima mesta za paniku?
                    Saznajte pomoću našeg kalkulatora.
                  </p>
                  <Link
                    className={styles.linkBtn}
                    href={"./kalkulator-cokolada"}
                  >
                    <span></span> Kalkulator Trovanja Čokoladom Kod Pasa
                    <svg>
                      <use xlinkHref={"./img/sprite.svg#arrow-right"}></use>
                    </svg>
                  </Link>
                </div>
                <div>
                  <AnimationContainer>
                    <Image
                      src={chocolate}
                      alt="macka"
                      width={200}
                      height={200}
                      className={` ${styles.ctaImg} faded ${
                        !isLoading ? "fadeIn" : ""
                      }`}
                      onLoad={loadingHandler}
                    ></Image>
                  </AnimationContainer>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Region>
    </div>
  );
};

export default CalculatorsCta;
