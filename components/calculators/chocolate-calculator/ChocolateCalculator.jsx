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
          <h1 className="section-title">Trovanje čokoladom kod pasa</h1>
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
            Čokolada je ukusna poslastica za ljude, ali može biti otrovna za
            naše kućne ljubimce. Teobromin i kofein, koji su prisutni u
            čokoladi, mogu izazvati različite zdravstvene probleme kod pasa, od
            blage gastrointestinalne nelagodnosti do ozbiljne toksičnosti pa čak
            i smrti. Naš kalkulator trovanja čokoladom pomaže vam da procenite
            potencijalni rizik i ozbiljnost ingestije čokolade kod pasa.
          </p>
          <p>
            Ozbiljnost trovanja čokoladom zavisi od faktora poput vrste
            konzumirane čokolade, količine unete i veličine psa. Tamna čokolada
            i čokolada za kuvanje sadrže veće količine teobromina i kofeina, što
            ih čini toksičnijim od mlečne čokolade ili bele čokolade. Čak i male
            količine čokolade mogu biti opasne za pse, pa je važno brzo
            reagovati ako dođe do ingestije.
          </p>
          <p>
            Simptomi trovanja čokoladom kod pasa mogu uključivati povraćanje,
            proliv, povećanu žeđ i mokrenje, nemir, ubrzano disanje, ubrzan rad
            srca, tremor, napade i čak gubitak svesti.
          </p>
          <p className="error">
            U slučaju bilo kakve nedoumice i sumnjivog ponašanja psa, uvek je
            najbolje konsultovati se sa veterinarom. Ovaj kalkulator ne bi
            trebao da bude zamena za stručnu medicinsku pomoć i savet.
          </p>
          <p>
            Da biste sprečili trovanje čokoladom, držite sve čokoladne
            proizvode, uključujući kakao prah, zrna kakaa, čokoladu i pekarske
            proizvode, van domašaja vašeg psa. Edukujte članove porodice i goste
            o opasnostima hranjenja pasa čokoladom i budite pažljivi tokom
            praznika i posebnih prilika kada je konzumacija čokolade česta.
          </p>
          <p>
            Korišćenjem našeg kalkulatora trovanja čokoladom i ostajanjem budnih
            u vezi sa opasnostima od čokolade, možete zaštititi svog psa od ove
            česte opasnosti u domaćinstvu. Zapamtite, prevencija je ključna, ali
            ako dođe do incidenta, brza akcija i veterinarska intervencija su
            ključni za uspešan ishod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChocolateCalculator;
