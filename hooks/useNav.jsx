import React, { useState } from "react";

const useNav = (param) => {
  const [target, setTarget] = useState(param);
  const setTargetHandler = (e) => {
    setTarget(e);
  };
  return [setTargetHandler, target];
};

export default useNav;
