import React, { useRef } from "react";
import Region from "../../components/layout/Region";
import Wrapper from "../../components/layout/Wrapper";
import Image from "next/image";
import styles from "./Hero.module.css";
import dog from "../../public/img/akita.png";
import { animationCaller } from "./heroHelpers";
import Link from "next/link";
import AnimationContainer from "../animation-container/AnimationContainer";

const Hero = () => {
  let titleRef = useRef();
  let subTitleRef = useRef();
  let lineRef = useRef();
  let btnRef = useRef();

  animationCaller(titleRef, subTitleRef, lineRef, btnRef);

  return (
    <div className={styles.heroBackground}>
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
          <div className={styles.heroSwitcher}>
            <div className={styles.heroStackLeft}>
              <div className={styles.animationContainer}>
                <div ref={lineRef}>
                  <span></span>
                  <p>Veterinarska Klinika Vet4Pets</p>
                </div>
              </div>
              <div className={styles.animationContainer}>
                <h1 ref={titleRef}>Mi pazimo na vaše ljubimce!</h1>
              </div>
              <div className={styles.animationContainer}>
                <p ref={subTitleRef} className={styles.stackException}>
                  Brinemo o zdravlju Vaših ljubimaca 24h dnevno. Kontaktirajte
                  nas!
                </p>
              </div>
              <div className={styles.animationContainer}>
                <button ref={btnRef} className="button">
                  <a className="link-exception" href="#contact">
                    Zakažite pregled
                  </a>
                </button>
              </div>
            </div>
            <AnimationContainer>
              <div className={styles.heroStackRight}>
                <div className={styles.heroSvg}>
                  <div className={styles.shape} />
                </div>
                <Image width={600} height={350} src={dog} alt="dog"></Image>
              </div>
            </AnimationContainer>
          </div>
        </Wrapper>
      </Region>
    </div>
  );
};

export default Hero;
