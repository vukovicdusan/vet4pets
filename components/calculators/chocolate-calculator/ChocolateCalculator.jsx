import React from "react";
import styles from "./ChocolateCalculator.module.css";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";
import Title from "@/components/Title";
import Underline from "@/components/Underline";

const ChocolateCalculator = () => {
  const submitHandler = () => {};
  const inputHandler = () => {};
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

            <div className="animation-container">
              {/* <div
                className={`${styles.hiddenBox} ${
                  calories ? styles.box : null
                }`}
              >
                {calories ? Math.floor(calories) : null} kcal
              </div> */}
            </div>
            <button className="button">Izračunaj</button>
          </form>
        </div>
      </Wrapper>
    </Region>
  );
};

export default ChocolateCalculator;
