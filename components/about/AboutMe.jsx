import React from "react";
import * as styles from "./AboutMe.module.css";
import Region from "../layout/Region";
import Image from "next/image";
import about from "../../public/img/sale.jpg";
import Wrapper from "../layout/Wrapper";
import Underline from "../Underline";
import Title from "../Title";
import useLoading from "@/hooks/useLoading";

const AboutMe = () => {
  const [loadingHandler, isLoading] = useLoading();
  return (
    <div className={styles.background}>
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
          <div className={styles.stack}>
            <Title>
              <div className={styles.title}>
                <h2>O nama?</h2>
                <Underline position={"start"} color={"secondary"}></Underline>
              </div>
            </Title>

            <div className={styles.switcher}>
              <div>
                <Image
                  src={about}
                  width={350}
                  height={450}
                  alt="Sale"
                  className={`faded ${!isLoading ? "fadeIn" : ""}`}
                  onLoad={loadingHandler}
                ></Image>
              </div>
              <div className={styles.stack}>
                <p>
                  Saša je diplomirao na fakultetu Veterinarske Medicine u
                  Beogradu 2007.god. Iste godine nastavlja profesionalno
                  usavrsavanje iz oblasti zdravstvene zastite kućnih ljubimaca.
                  Staž i profesionalni angažman započinje i odrađuje na Klinici
                  za bolesti kopitara, mesojeda i ptica, pri Veterinarskom
                  Fakultetu u Beogradu. Za potrebe klinike napisao je radove iz
                  oblasti Erlihioze pasa i FIP-a mačaka.
                </p>
                <p>
                  Profesionalno iskustvo nastavlja u drugim beogradskim
                  ambulantama. Vlasnik i direktor privatne veterinarske
                  ambulante od 2013 godine. Poseduje sertifikat iz ultrazvučne
                  dijagnostike. Oblasti interesovanja su mu porodiljstvo i
                  reprodukcija, ultrazvučna dijagnostika, interna veterinarska
                  medicina, dermatologija, hirurgija i anesteziologija. Član je
                  Udruženja veterinara Male Prakse.
                </p>
                <p>
                  Dr vet. med.
                  <br /> Saša Kosijer
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Region>
    </div>
  );
};

export default AboutMe;
