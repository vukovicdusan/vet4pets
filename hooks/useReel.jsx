import { testimonials } from "@/components/testimonials/testimonials-content";
import { useEffect, useState } from "react";

const useReel = () => {
  const [reelIndex, setReelIndex] = useState(0);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  let slidesNum = testimonials.length - 1;

  const reelLinkHandler = (direction) => {
    if (direction === "left") {
      setReelIndex(reelIndex !== 0 ? reelIndex - 1 : 0);
    }
    if (direction === "right") {
      setReelIndex(reelIndex !== slidesNum ? reelIndex + 1 : slidesNum);
    }
  };

  useEffect(() => {
    reelIndex > 0 ? setLeftButtonDisabled(false) : setLeftButtonDisabled(true);
    reelIndex < slidesNum
      ? setRightButtonDisabled(false)
      : setRightButtonDisabled(true);
  }, [reelIndex]);
  return [
    reelLinkHandler,
    reelIndex,
    leftButtonDisabled,
    rightButtonDisabled,
    slidesNum,
  ];
};

export default useReel;
