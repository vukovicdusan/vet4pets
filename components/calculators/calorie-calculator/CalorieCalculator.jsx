import React, { useState, useRef } from "react";
import styles from "./CalorieCalculator.module.css";
import Region from "../../layout/Region";
import Wrapper from "../../layout/Wrapper";
import Image from "next/image";
import Title from "../../Title";
import Underline from "../../Underline";
import bcs from "@/public/img/bcs_chart_dog.jpg";
import useCalculator from "@/hooks/useCalculator";
import useInput from "@/hooks/useInput";
import useAccordion from "@/hooks/useAccordion";

const CalorieCalculator = () => {
  const accordionRef = useRef();
  const [calculateCalories, calories] = useCalculator();
  const [, accordionHandler] = useAccordion();
  const [inputValues, changeHandler] = useInput({
    weight: "",
    signalment: "1.6",
    activity: "1",
    bcs: "1",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    calculateCalories(inputValues);
  };

  return (
    <div className={styles.center}>
      <Title>
        <div className={styles.title}>
          <h1 className="section-title">Kalkulator kalorija za pse</h1>
          <Underline
            // position={"center"}
            color={"secondary"}
          ></Underline>
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
              id="signalment"
              name="signalment"
              defaultValue={1.6}
            >
              <option value={1.6}>Sterilisan</option>
              <option value={1.8}>Nesterilisan</option>
            </select>
            <label className={styles.borderTitle} htmlFor="signalment">
              Reproduktivni status
            </label>
          </div>
          <div className={styles.inputWrapper}>
            <select
              onChange={(e) => changeHandler(e)}
              id="activity"
              name="activity"
              defaultValue={1}
            >
              <option value={1}>Neaktivan</option>
              <option value={1.2}>Aktivan par puta nedeljno</option>
              <option value={1.4}>Aktivan svakodnevno</option>
              <option value={1.6}>Svakodnevna velika aktivnost</option>
            </select>
            <label className={styles.borderTitle} htmlFor="signalment">
              Nivo aktivnosti
            </label>
          </div>
          <div className={styles.rangeInput}>
            <label htmlFor="signalment">
              Body condition score{" "}
              <svg
                onClick={() => accordionHandler(accordionRef)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.8c-4.853 0-8.8 3.947-8.8 8.8s3.947 8.8 8.8 8.8 8.8-3.947 8.8-8.8-3.947-8.8-8.8-8.8zm0 15.05c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.432-3.468.572-.544 1.024-.975.962-1.821-.058-.805-.73-1.226-1.364-1.226-.709 0-1.538.527-1.538 2.013h-2.011c0-2.4 1.41-3.95 3.59-3.95 1.036 0 1.942.339 2.551.955.57.578.865 1.372.854 2.298-.018 1.383-.859 2.291-1.536 3.021z" />
              </svg>
            </label>
            <input
              className="mr-bs-1"
              type="range"
              onChange={(e) => changeHandler(e)}
              id="bcs"
              name="bcs"
              min="0"
              max="4"
              step="1"
              list="markers"
              defaultValue={0}
            />
            <datalist id="markers">
              <option
                className={styles.optionValues}
                value={1.2}
                label="Neuhranjen"
              >
                Neuhranjen
              </option>
              <option className={styles.optionValues} value={1.1}></option>
              <option className={styles.optionValues} value={1} label="Idealan">
                Idealan
              </option>
              <option className={styles.optionValues} value={0.9}></option>
              <option
                className={styles.optionValues}
                value={0.8}
                label="Gojazan"
              >
                Gojazan
              </option>
            </datalist>
          </div>
          <div
            ref={accordionRef}
            className={`${styles.accordionContent} mr-bs-4 `}
          >
            <Image
              src={bcs}
              width={650}
              height={400}
              alt="body condition score tabela"
            ></Image>
          </div>
          <div className="animation-container">
            <div
              className={`${styles.hiddenBox} ${calories ? styles.box : null}`}
            >
              {" "}
              Vaš ljubimac treba da unosi oko:
              {calories ? " " + Math.floor(calories) : null} kcal dnevno
            </div>
          </div>
          <button className="button">Izračunaj</button>
        </form>
        <div className={styles.info}>
          <h2 className="h2-sized-h3">Potrebe Vašeg psa</h2>
          <p>
            Održavanje zdrave težine ključno je za opšte blagostanje i
            dugovečnost vašeg psa. Baš kao i ljudi, psi zahtevaju uravnoteženu
            ishranu prilagođenu njihovim individualnim potrebama kako bi ostali
            zdravi i aktivni. Jedan od ključnih aspekata upravljanja ishranom
            vašeg psa je razumevanje njihovih potreba za kalorijama.
          </p>
          <p>
            Svaki pas je jedinstven, a faktori poput starosti, težine i nivoa
            aktivnosti utiču na njihove dnevne potrebe za kalorijama. Prekomerna
            ishrana može dovesti do povećanja težine i gojaznosti, dok
            nedovoljna ishrana može dovesti do neuhranjenosti i drugih
            zdravstvenih problema. Stoga je važno odrediti pravu količinu
            kalorija za vašeg krznenog prijatelja.
          </p>
          <p>
            Kada dobijete procenu kalorija, važno je odabrati visokokvalitetnu
            hranu za pse koja se poklapa s nutritivnim potrebama vašeg psa.
            Zapamtite, poslastice i ostaci hrane sa stola takođe treba da budu
            uključeni u ukupni unos kalorija kako bi se sprečilo prejedanje.
          </p>
          <p>
            Iako naš kalkulator pruža koristan početni korak, svaki pas je
            drugačiji, a individualne okolnosti mogu zahtevati prilagođavanje
            ishrane. Konsultacija sa vašim veterinarom je ključna za razvoj
            personalizovanog plana ishrane koji će osigurati da vaš pas ostane
            srećan, zdrav i pun energije.
          </p>
          <p>
            Posvetiti vreme određivanju potreba vašeg psa za kalorijama je
            proaktivni korak ka njegovom blagostanju. Sa našim kalkulatorom
            kalorija i savetima vašeg veterinara, možete obezbediti svom čupavom
            saputniku ishranu koja mu je potrebna da bi procvetao u svakoj fazi
            života.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
