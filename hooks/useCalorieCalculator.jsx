import React, { useState } from "react";

const useCalorieCalculator = () => {
  const [calories, setCalories] = useState("");

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
  console.log(calories);
  return [calculateCalories, calories];
};

export default useCalorieCalculator;
