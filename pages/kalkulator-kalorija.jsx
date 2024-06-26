import React, { useState } from "react";
import CalorieCalculator from "@/components/calculators/calorie-calculator/CalorieCalculator";
import Head from "next/head";
import LiquidCalculator from "@/components/calculators/liquid-calculator/LiquidCalculator";
import SmallNav from "@/components/small-nav/SmallNav";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";
import Contact from "@/components/contact/Contact";

const calorieCalculator = () => {
  const [navItem, setNavItem] = useState("Kalkulator kalorija");
  const targetHandler = (target) => {
    setNavItem(target);
  };

  return (
    <>
      <Head>
        <title>vet4Pets - Kalkulator kalorija za pse</title>
        <meta
          name="description"
          content="vet4Pets - Kalkulator za kalorije - Veterinar Beograd - Veterinar Železnik - Veterinar Čukarica"
        />
        <link
          rel="canonical"
          href="https://vet4pets.rs/kalkulator-kalorija"
          key="canonical"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Region>
        <Wrapper>
          <SmallNav
            navItems={["Kalkulator kalorija", "Unos tečnosti"]}
            targetHandler={targetHandler}
          ></SmallNav>
          {navItem === "Kalkulator kalorija" ? (
            <CalorieCalculator></CalorieCalculator>
          ) : (
            <LiquidCalculator></LiquidCalculator>
          )}
        </Wrapper>
        <Contact shapedivider={false} title={false}></Contact>
      </Region>
    </>
  );
};

export default calorieCalculator;
