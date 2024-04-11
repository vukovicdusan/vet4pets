import React from "react";
import Head from "next/head";
import ChocolateCalculator from "@/components/calculators/chocolate-calculator/ChocolateCalculator";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";
import Contact from "@/components/contact/Contact";

const chocolateCalculator = () => {
  return (
    <>
      <Head>
        <title>vet4Pets - Trovanje čokoladom kod pasa </title>
        <meta
          name="description"
          content="vet4Pets - Veterinar Beograd - Veterinar Železnik - Veterinar Čukarica - Kalkulator za trovanje čokoladom kod pasa"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Region>
        <Wrapper>
          <ChocolateCalculator></ChocolateCalculator>
        </Wrapper>
        <Contact shapedivider={false} title={false}></Contact>
      </Region>
    </>
  );
};

export default chocolateCalculator;
