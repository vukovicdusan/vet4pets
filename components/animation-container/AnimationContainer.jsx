import React, { useState } from "react";
import styles from "./AnimationContainer.module.css";

const AnimationContainer = (props) => {
  let animationRef = React.useRef();
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    let config = {
      threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      });
    }, config);
    observer.observe(animationRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.animationContainer} ref={animationRef}>
      <div className={show ? `${styles.show}` : `${styles.hidden}`}>
        {props.children}
      </div>
    </div>
  );
};

export default AnimationContainer;
