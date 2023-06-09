import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import ChevronLeft from "../ChevronLeft";
import ChevronRight from "../ChevronRight";
import Wrapper from "../layout/Wrapper";
import Underline from "../Underline";
import Region from "../layout/Region";
import animal from "@/public/img/blue-cat.png";
import Title from "../Title";
import { testimonials } from "./testimonials-content";
import useReel from "@/hooks/useReel";
import AnimationContainer from "../animation-container/AnimationContainer";
import useLoading from "@/hooks/useLoading";

const Testimonials = () => {
  const [
    reelLinkHandler,
    reelIndex,
    leftButtonDisabled,
    rightButtonDisabled,
    slidesNum,
  ] = useReel();
  const [loadingHandler, isLoading] = useLoading();

  return (
    <div className={styles.testimonialsBackground}>
      <div className={styles.shapedivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <Region>
        <Wrapper>
          <div className={styles.switcher}>
            <Title>
              <div className={styles.title}>
                <h2 className="section-title">Šta kažu o nama?</h2>
                <Underline position={"start"} color={"secondary"}></Underline>
              </div>
            </Title>
            <AnimationContainer>
              <div className={styles.animalGrid}>
                <div className={styles.blob}>
                  <div className={styles.shape} />
                </div>
                <Image
                  src={animal}
                  alt="macka"
                  width={600}
                  height={350}
                  className={`faded ${!isLoading ? "fadeIn" : ""}`}
                  onLoad={loadingHandler}
                ></Image>
              </div>
            </AnimationContainer>
          </div>

          <div className={styles.reel}>
            <div className={styles.reelButtons}>
              <button
                onClick={() => reelLinkHandler("left")}
                className={styles.reelButton}
                disabled={leftButtonDisabled}
              >
                <ChevronLeft
                  svgFill={leftButtonDisabled && "#d0d2e7"}
                ></ChevronLeft>
              </button>
              <button
                onClick={() => reelLinkHandler("right")}
                className={styles.reelButton}
                disabled={rightButtonDisabled}
              >
                <ChevronRight
                  svgFill={rightButtonDisabled && "#d0d2e7"}
                ></ChevronRight>
              </button>
            </div>

            <div
              style={{
                transform: `translateX(${-100 * reelIndex}vw)`,
                inlineSize: `${(slidesNum + 1) * 100}vw`,
              }}
              className={styles.reelInside}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.reelItem}>
                  <div className={styles.reelItemContent}>
                    <h6>{testimonial.title}</h6>
                    <p>{testimonial.content}</p>
                    <p className="bold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </Region>
    </div>
  );
};

export default Testimonials;
