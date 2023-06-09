import React from "react";
import Head from "next/head";
import ChocolateCalculator from "@/components/calculators/chocolate-calculator/ChocolateCalculator";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";

const chocolateCalculator = () => {
  return (
    <>
      <Head>
        <title>vet4Pets - Veterinarska ordinacija</title>
        <meta
          name="description"
          content="vet4Pets - Kalkulatori za trovanje čokoladom"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Region>
        <Wrapper>
          <ChocolateCalculator></ChocolateCalculator>
        </Wrapper>
      </Region>
    </>
  );
};

export default chocolateCalculator;
