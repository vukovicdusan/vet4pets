import React from "react";
import Head from "next/head";
import ChocolateCalculator from "@/components/calculators/chocolate-calculator/ChocolateCalculator";

const calorieCalculator = () => {
  return (
    <>
      <Head>
        <title>vet4Pets - Veterinarska ordinacija</title>
        <meta
          name="description"
          content="vet4Pets - Kalkulatori za trovanje cokoladom"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <CalorieCalculator></CalorieCalculator> */}
      <ChocolateCalculator></ChocolateCalculator>
    </>
  );
};

export default calorieCalculator;
