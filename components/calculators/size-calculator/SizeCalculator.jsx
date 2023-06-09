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
          <h2 className="section-title">Koliko će porasti moj pas?</h2>
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
          <p>
            Uz ovaj kalkulator možete predvideti koliko će porasti vaš štenac,
            posebno ukoliko je mešanac kojeg ste usvojili sa ulice ili udomili.
            Može se reći da psi dostižu svoju punu veličinu već sa 12 meseci, a
            koliki će vaš ljubimac tada biti, otkriće vam naš kalkulator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SizeCalculator;
