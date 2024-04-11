import Title from "@/components/Title";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";
import styles from "./LiquidCalculator.module.css";
import React from "react";
import Underline from "@/components/Underline";
import useInput from "@/hooks/useInput";
import useCalculator from "@/hooks/useCalculator";

const LiquidCalculator = () => {
  const [inputValues, changeHandler] = useInput({ weight: 0, activity: 55 });
  const [, , , , calculateLiquid, liquid] = useCalculator();

  const submitHandler = (e) => {
    e.preventDefault();
    calculateLiquid(inputValues);
  };

  return (
    <div className={styles.center}>
      <Title>
        <div className={styles.title}>
          <h1 className="section-title">Unos tečnosti kod pasa</h1>
          <Underline color={"secondary"}></Underline>
        </div>
      </Title>
      <div className={styles.switcher}>
        <form className={styles.stack} onSubmit={submitHandler}>
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

          <div className={styles.inputWrapper}>
            <select
              onChange={(e) => changeHandler(e)}
              id="activity"
              name="activity"
              defaultValue={1}
            >
              <option value={55}>Slabije aktivan</option>
              <option value={80}>Normalna aktivnost</option>
              <option value={110}>Veoma velika aktivnost</option>
            </select>
            <label className={styles.borderTitle} htmlFor="signalment">
              Nivo aktivnosti
            </label>
          </div>
          <div className="animation-container">
            <div
              className={`${styles.hiddenBox} ${liquid ? styles.box : null}`}
            >
              Vaš ljubimac treba da unosi oko:
              {liquid ? " " + liquid : null} ml dnevno
            </div>
          </div>
          <button className="button">Izračunaj</button>
        </form>
        <div className={styles.info}>
          <h2 className="h2-sized-h3">Potrebe Vašeg psa za vodom</h2>
          <p>
            Hidratacija je ključna za opšte zdravlje i blagostanje vašeg psa.
            Baš kao i ljudi, psi zahtevaju adekvatan unos vode kako bi podržali
            vitalne telesne funkcije i sprečili dehidrataciju. Naš kalkulator
            količine tečnosti pojednostavljuje proces određivanja potreba vašeg
            psa za hidratacijom, osiguravajući da ostanu srećni i zdravi.
          </p>
          <p>
            Voda je ključna za regulisanje telesne temperature, olakšavanje
            varenja, transport hranljivih materija i eliminaciju otpadnih
            produkata. Faktori poput veličine i nivoa aktivnosti mogu uticati na
            potrebe vašeg psa za hidratacijom. Važno je pratiti unos vode kako
            biste sprečili dehidrataciju, posebno tokom vrućeg vremena ili nakon
            fizičke aktivnosti.
          </p>
          <ul>
            <li>
              Uvek obezbedite pristup svežoj, čistoj vodi tokom celog dana.
            </li>
            <li>
              Pratite unos vode vašeg psa i redovno dopunjavajte njihovu posudu.
            </li>
            <li> Podstičite pijenje tokom i nakon vežbanja ili vreme igre.</li>
            <li>
              Razmislite o dodavanju vode u hranu vašeg psa, posebno ako
              konzumiraju suvu hranu.
            </li>
            <li>
              Budite pažljivi na znakove dehidratacije, poput prekomernog
              disanja, suvih desni i letargije, i potražite veterinara ako je
              potrebno.
            </li>
          </ul>
          <p>
            Iako naš kalkulator pruža koristan početni korak, svaki pas je
            drugačiji, a individualne okolnosti mogu zahtevati prilagođavanje
            hidratacije. Ako imate bilo kakve brige u vezi sa nivoima
            hidratacije vašeg psa ili ako imaju specifične zdravstvene probleme,
            konsultujte se sa veterinarom za personalizovani savet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiquidCalculator;
