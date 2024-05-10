import React from "react";
import Wrapper from "./Wrapper";
import * as styles from "../../styles/Footer.module.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <p className={styles.footerCenter}>
          {" "}
          Copyright © {year} vet4Pets | Website by{" "}
          <a
            href="https://www.dusanvukovic.com/"
            target="__blank"
            rel="nooopener"
          >
            Dušan Vuković{" "}
          </a>
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
