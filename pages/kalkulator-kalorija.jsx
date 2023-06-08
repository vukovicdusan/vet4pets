import React, { useState } from "react";
import CalorieCalculator from "@/components/calculators/calorie-calculator/CalorieCalculator";
import Head from "next/head";
import LiquidCalculator from "@/components/calculators/liquid-calculator/LiquidCalculator";
import SmallNav from "@/components/small-nav/SmallNav";
import Region from "@/components/layout/Region";
import Wrapper from "@/components/layout/Wrapper";

const calorieCalculator = () => {
  const [navItem, setNavItem] = useState("Kalkulator kalorija");
  const targetHandler = (target) => {
    setNavItem(target);
  };

  return (
    <>
      <Head>
        <title>vet4Pets - Veterinarska ordinacija</title>
        <meta name="description" content="vet4Pets - Kalkulator za kalorije" />
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
      </Region>
    </>
  );
};

export default calorieCalculator;
