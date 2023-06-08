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
          <h2 className="section-title">Unos tečnosti</h2>
          <Underline color={"secondary"}></Underline>
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
          <div className={`${styles.hiddenBox} ${liquid ? styles.box : null}`}>
            Vaš ljubimac treba da unosi oko:
            {liquid ? " " + liquid : null} ml dnevno
          </div>
        </div>
        <button className="button">Izračunaj</button>
      </form>
    </div>
  );
};

export default LiquidCalculator;
