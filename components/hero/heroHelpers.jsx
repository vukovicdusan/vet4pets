import { useEffect } from "react";

let currentIteration = 0;
let startValue = 300;
let changeInValue = -300;
let totalIterations = 90;
let easingValue;

export const animationCaller = (titleRef, subTitleRef, lineRef, btnRef) => {
  useEffect(() => {
    const animate = () => {
      function easeOutQuint(
        currentIteration,
        startValue,
        changeInValue,
        totalIterations
      ) {
        return (
          changeInValue *
            (Math.pow(currentIteration / totalIterations - 1, 5) + 1) +
          startValue
        );
      }
      easingValue = easeOutQuint(
        currentIteration,
        startValue,
        changeInValue,
        totalIterations
      );
      currentIteration++;
      if (easingValue >= 0) {
        titleRef.current
          ? (titleRef.current.style.transform = `translateY(${easingValue}px)`)
          : null;
        subTitleRef.current
          ? (subTitleRef.current.style.transform = `translateY(${easingValue}px)`)
          : null;
        btnRef.current
          ? (btnRef.current.style.transform = `translateY(${easingValue}px)`)
          : null;
        lineRef.current
          ? (lineRef.current.style.transform = `translateX(${easingValue}px)`)
          : null;
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);
};
