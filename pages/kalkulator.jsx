import React from "react";
import CalorieCalculator from "@/components/calculators/calorie-calculator/CalorieCalculator";
import Head from "next/head";
import ChocolateCalculator from "@/components/calculators/chocolate-calculator/ChocolateCalculator";

const kalkulator = () => {
  return (
    <>
      <Head>
        <title>vet4Pets - Veterinarska ordinacija</title>
        <meta name="description" content="vet4Pets - Kalkulatori" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CalorieCalculator></CalorieCalculator>
      <ChocolateCalculator></ChocolateCalculator>
    </>
  );
};

export default kalkulator;
