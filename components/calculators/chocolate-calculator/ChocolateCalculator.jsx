import React from "react";
import styles from "./ChocolateCalculator.module.css";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";
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

  const inputHandler = (e) => {
    changeHandler(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    calculateChocolate(inputValues);
  };

  return (
    <Region>
      <Wrapper>
        <div className={styles.center}>
          <Title>
            <div className={styles.title}>
              <h2 className="section-title">
                Kalkulator za trovanje čokoladom
              </h2>
              <Underline
                // position={"center"}
                color={"secondary"}
              ></Underline>
            </div>
          </Title>
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
                onChange={inputHandler}
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
                onChange={inputHandler}
              />
              <label className={styles.borderTitle} htmlFor="chocolateAmount">
                Količina čokolade(g)
              </label>
            </div>
            <div className={styles.inputWrapper}>
              <select
                onChange={inputHandler}
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
                  toxicity ? styles.box : null
                }`}
              >
                <div className={`${styles.stack} ${styles.infoStack}`}>
                  <p>{toxicity ? toxicity.dose.toFixed(2) : null} mg/kg</p>
                  <span className={styles.description}>
                    Methylxantines = Theobromine + Caffeine
                  </span>
                  <span>{toxicity.prognosis}</span>
                </div>
              </div>
            </div>
            <button className="button">Izračunaj</button>
          </form>
        </div>
      </Wrapper>
    </Region>
  );
};

export default ChocolateCalculator;
