import SizeCalculator from "@/components/calculators/size-calculator/SizeCalculator";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";
import Head from "next/head";
import React from "react";

const dogSizeCalculator = () => {
  return (
    <>
      <Head>
        <title>vet4Pets - Kalkulator za odredjivanje rasta pasa</title>
        <meta
          name="description"
          content="vet4Pets - Kalkulator za odredjivanje rasta pasa - Veterinar Beograd - Veterinar Železnik - Veterinar Čukarica"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Region>
        <Wrapper>
          <SizeCalculator></SizeCalculator>
        </Wrapper>
      </Region>
    </>
  );
};

export default dogSizeCalculator;
