import React, { useState } from "react";

const useCalculator = () => {
  const [calories, setCalories] = useState("");
  const [liquid, setLiquid] = useState("");
  const [toxicity, setToxicity] = useState({ dose: 0, prognosis: "" });
  const [size, setSize] = useState(0);

  const calculateCalories = (params) => {
    const bcsValues = {
      0: 1.2,
      1: 1.1,
      2: 1,
      3: 0.9,
      4: 0.8,
    };

    const bcsValue = bcsValues[params.bcs];

    let calorieFormula =
      70 *
      Math.pow(params.weight, 0.75) *
      params.signalment *
      params.activity *
      bcsValue;
    setCalories(calorieFormula);
  };

  const calculateChocolate = (input) => {
    const chocolateTypeValues = {
      white: { theobromine: 0.0082, caffeine: 0.3 },
      milk: { theobromine: 2.05, caffeine: 0.21 },
      darkSweet: { theobromine: 4.59, caffeine: 0.705 },
      dark60: { theobromine: 7.56, caffeine: 0.91 },
      dark72: { theobromine: 9.06, caffeine: 0.109 },
      dark86: { theobromine: 10.83, caffeine: 0.13 },
      pudding: { theobromine: 5.96, caffeine: 0.2 },
      cake: { theobromine: 4.24, caffeine: 0.6 },
      baking: { theobromine: 13.86, caffeine: 0.166 },
    };

    const { weight, chocolateAmount, chocolateType } = input;
    const chocolateTypeValue = chocolateTypeValues[chocolateType];
    const theobromine =
      (chocolateTypeValue.theobromine * chocolateAmount) / weight;
    const caffeine = (chocolateTypeValue.caffeine * chocolateAmount) / weight;
    const totalDose = caffeine + theobromine;

    let prognosis;

    switch (true) {
      case totalDose < 15.01:
        prognosis = "Vaš pas će najverovatnije biti u redu.";
        break;
      case totalDose > 15.01 && totalDose < 34.02:
        prognosis = "Vaš pas će možda imati dijareju i povraćanje.";
        break;
      case totalDose > 34.02 && totalDose < 45:
        prognosis =
          "Vaš pas može imati ubrzani rad srca(tahiaritmiju), dijareju i povraćanje. Potražite stručnu pomoć.";
        break;
      case totalDose > 45 && totalDose < 55.01:
        prognosis = "Vaš pas može dobiti konvulzije. Potražite stručnu pomoć.";
        break;
      case totalDose > 55.01:
        prognosis = "Vaš pas od ove doze može umreti. Potražite stručnu pomoć.";
        break;
      default:
        "";
    }

    setToxicity({ dose: totalDose, prognosis: prognosis });
  };

  const calculateLiquid = (input) => {
    const { weight, activity } = input;
    setLiquid(weight * activity);
  };

  const calculateSize = (input) => {
    //Adult weight = (Puppy weight / Puppy age in weeks) × 52
    const { age, weight } = input;
    const calculatedWeight = (weight / (age * 4)) * 52;
    let calculatedSize;
    switch (true) {
      case calculatedWeight < 5.4:
        calculatedSize = "mini";
        break;
      case calculatedWeight > 5.4 && calculatedWeight < 10:
        calculatedSize = "mali";
        break;
      case calculatedWeight > 10 && calculatedWeight < 25.9:
        calculatedSize = "srednji";
        break;
      case calculatedWeight > 25.9 && calculatedWeight < 44.9:
        calculatedSize = "veliki";
        break;
      case calculatedWeight > 44.9:
        calculatedSize = "džinovski";
        break;
      default:
        "";
    }
    setSize({ weight: calculatedWeight, size: calculatedSize });
  };

  return [
    calculateCalories,
    calories,
    calculateChocolate,
    toxicity,
    calculateLiquid,
    liquid,
    calculateSize,
    size,
  ];
};

export default useCalculator;
