import React from "react";
import CalorieCalculator from "@/components/calculators/calorie-calculator/CalorieCalculator";
import Head from "next/head";

const calorieCalculator = () => {
  return (
    <>
      <Head>
        <title>vet4Pets - Veterinarska ordinacija</title>
        <meta name="description" content="vet4Pets - Kalkulator za kalorije" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CalorieCalculator></CalorieCalculator>
    </>
  );
};

export default calorieCalculator;
