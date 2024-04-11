import Title from "@/components/Title";
import Underline from "@/components/Underline";
import useInput from "@/hooks/useInput";
import React from "react";
import styles from "./SizeCalculator.module.css";
import useCalculator from "@/hooks/useCalculator";

const SizeCalculator = () => {
  const [inputValues, changeHandler] = useInput({
    weight: 0,
    age: 0,
  });

  const [, , , , , , calculateSize, size] = useCalculator();

  const submitHandler = (e) => {
    e.preventDefault();
    calculateSize(inputValues);
  };

  console.log(inputValues);

  return (
    <div className={styles.center}>
      <Title>
        <div className={styles.title}>
          <h1 className="section-title">Koliko će porasti moj pas?</h1>
          <Underline color={"secondary"}></Underline>
        </div>
      </Title>
      <div className={styles.switcher}>
        <form className={styles.stack} onSubmit={submitHandler}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="age"
              id="age"
              autoCapitalize="none"
              autoCorrect="off"
              required
              title="UNESITE VALIDAN UZRAST"
              pattern="\d+"
              onChange={(e) => changeHandler(e)}
            />
            <label className={styles.borderTitle} htmlFor="age">
              Starost psa u mesecima
            </label>
          </div>
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
              onChange={(e) => changeHandler(e)}
            />
            <label className={styles.borderTitle} htmlFor="weight">
              Težina(kg)
            </label>
          </div>

          <div className="animation-container">
            <div className={`${styles.hiddenBox} ${size ? styles.box : null}`}>
              <div className={`${styles.stack} ${styles.resultStack}`}>
                <p>Vaš pas može dostići težinu od oko</p>
                <p className={styles.bold}>
                  {" "}
                  {size ? Math.floor(size.weight) : null} kg
                </p>
                <p>Može se reći da će biti {size.size} pas.</p>
              </div>
            </div>
          </div>
          <button className="button">Izračunaj</button>
        </form>
        <div className={`${styles.infoStack} ${styles.stack}`}>
          <h2 className="h2-sized-h3">Predviđanje Rasta Pasa</h2>
          <p>
            Prisustvovanje rastu vašeg malog psa je uzbudljivo putovanje
            ispunjeno iščekivanjem. Naš kalkulator veličine može vam pomoći da
            planirate buduće potrebe vašeg psa, pružajući vredne uvide u njihov
            potencijalni rast.
          </p>
          <p>
            Nekoliko faktora doprinosi konačnoj veličini psa, uključujući rasu,
            genetiku, ishranu i zdravlje. Iako genetika igra značajnu ulogu,
            faktori okoline poput ishrane i vežbanja takođe mogu uticati na
            obrasce rasta.
          </p>
          <p>
            Uz ovaj kalkulator možete predvideti koliko će porasti vaš štenac,
            posebno ukoliko je mešanac kojeg ste usvojili sa ulice ili udomili.
            Može se reći da psi dostižu svoju punu veličinu već sa 12 meseci, a
            koliki će vaš ljubimac tada biti, otkriće vam naš kalkulator.
            Dobićete projekciju očekivane odrasle veličine vašeg psa. Ova
            procena može vam pomoći da se pripremite za njihove potrebe, od
            izbora odgovarajuće veličine kaveza, kreveta, veličine ogrlice i
            povodca do planiranja vežbanja i veterinarske nege.
          </p>
          <p>
            Važno je imati na umu da su projekcije rasta samo procene i mogu
            varirati u zavisnosti od individualnih faktora. Iako naš kalkulator
            pruža korisne uvide, nije definitivan pokazatelj konačne veličine
            vašeg psa. Redovno praćenje rasta vašeg psa i konsultacija sa
            veterinarom mogu vam pomoći da osigurate da ostanu zdravi i srećni
            kako odrastaju.
          </p>
          <p>
            Iako naš kalkulator veličine pruža korisne smernice, važno je da se
            posavetujete sa veterinarom za personalizovane savete o rastu i
            razvoju vašeg psa. Vaš veterinar može pružiti uvide u specifične
            potrebe vašeg psa i ponuditi preporuke kako bi podržao njihovo
            ukupno zdravlje i sreću.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SizeCalculator;
