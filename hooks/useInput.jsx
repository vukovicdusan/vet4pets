import { useState } from "react";

const useInput = (init_value) => {
  const [inputValues, setInputValues] = useState(init_value);

  const changeHandler = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return [inputValues, changeHandler];
};

export default useInput;
