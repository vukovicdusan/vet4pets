import React, { useEffect } from "react";
import styles from "./SmallNav.module.css";
import Center from "../center/Center";
import useNav from "@/hooks/useNav";

const SmallNav = (props) => {
  const [setTargetHandler, target] = useNav("Kalkulator kalorija");

  useEffect(() => {
    props.targetHandler(target);
  }, [target]);

  return (
    <Center>
      <nav className={styles.nav}>
        {props.navItems.map((item, index) => (
          <button
            className={`button ${styles.navBtn}`}
            key={index}
            onClick={(e) => setTargetHandler(e.target.textContent)}
          >
            {item}
          </button>
        ))}
      </nav>
    </Center>
  );
};

export default SmallNav;
