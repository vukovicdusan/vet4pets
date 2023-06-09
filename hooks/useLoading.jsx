import React, { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingHandler = () => {
    setIsLoading(false);
  };
  return [loadingHandler, isLoading];
};

export default useLoading;
