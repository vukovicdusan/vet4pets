import React from "react";
import styles from "./ChocolateCalculator.module.css";
import Title from "@/components/Title";
import Underline from "@/components/Underline";
import useInput from "@/hooks/useInput";
import useCalculator from "@/hooks/useCalculator";

const ChocolateCalculator = () => {
  const [inputValues, changeHandler] = useInput({
    weight: 0,
    chocolateAmount: 0,
    chocolateType: 0.0882,
  });
  const [, , calculateChocolate, toxicity] = useCalculator();

  const submitHandler = (e) => {
    e.preventDefault();
    calculateChocolate(inputValues);
  };

  return (
    <div className={styles.center}>
      <Title>
        <div className={styles.title}>
          <h2 className="section-title">Trovanje čokoladom</h2>
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
            <input
              type="text"
              name="chocolateAmount"
              id="chocolateAmount"
              autoCapitalize="none"
              autoCorrect="off"
              required
              title="UNESITE VALIDNU KOLIČINU"
              pattern="\d+"
              onChange={(e) => changeHandler(e)}
            />
            <label className={styles.borderTitle} htmlFor="chocolateAmount">
              Količina čokolade(g)
            </label>
          </div>
          <div className={styles.inputWrapper}>
            <select
              onChange={(e) => changeHandler(e)}
              id="chocolateType"
              name="chocolateType"
              defaultValue={0.00882}
            >
              <option value={"white"}>Bela</option>
              <option value={"milk"}>Mlečna</option>
              <option value={"darkSweet"}>Crna slatka</option>
              <option value={"dark60"}>Crna sa 60% kakaa</option>
              <option value={"dark72"}>Crna sa 72% kakaa</option>
              <option value={"dark86"}>Crna sa 86% kakaa</option>
              <option value={"pudding"}>Čokoladni puding</option>
              <option value={"cake"}>Čokoladna torta</option>
              <option value={"baking"}>Čokolada za kuvanje</option>
            </select>
            <label className={styles.borderTitle} htmlFor="chocolateType">
              Vrsta čokolade
            </label>
          </div>
          <div className="animation-container">
            <div
              className={`${styles.hiddenBox} ${
                toxicity.dose ? styles.box : null
              }`}
            >
              <div className={`${styles.stack} ${styles.resultStack}`}>
                <p>{toxicity ? toxicity.dose.toFixed(2) : null} mg/kg</p>
                <span className={styles.description}>
                  Methylxantines = Theobromine + Caffeine
                </span>
                <span
                  className={`${styles.green} ${
                    toxicity.dose > 15.01 ? styles.yellow : null
                  } ${toxicity.dose > 34.02 ? styles.red : null}`}
                >
                  {toxicity.prognosis}
                </span>
              </div>
            </div>
          </div>
          <button className="button">Izračunaj</button>
        </form>
        <div className={`${styles.infoStack} ${styles.stack}`}>
          <p>
            Uz pomoć našeg kalkulatora možete izračunati da li je vaš pas u
            opasnosti ukoliko je pojeo čokoladu i da li ima potrebe za brigu.
          </p>
          <p className="error">
            U slučaju bilo kakve nedoumice i sumnjivog ponašanja psa, uvek je
            najbolje konsultovati se sa veterinarom. Ovaj kalkulator ne bi
            trebao da bude zamena za stručnu medicinsku pomoć i savet.
          </p>
          <p>
            Čokolada sadrži teobromin koji je bezopasan za ljude, ali je veoma
            otrovan za pse. U čokoladi i sličnim proizvodima se nalazi i kofein.
            Kalkulator sabira dozu kofeina i teobromina i izračunava nivo
            toksičnosti.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            deserunt, repellat nesciunt incidunt sit reiciendis at odit itaque
            provident quod earum iure vel, minus enim voluptatem. Nesciunt
            voluptatibus aperiam voluptate officiis! Inventore voluptate nobis
            dolor, quas adipisci quam similique reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChocolateCalculator;
