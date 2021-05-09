import React, { useContext } from "react";
import Context from "../context";

const InputDate = ({ date }) => {
  const [desde, desdeSetter, hasta, hastaSetter] = useContext(Context);
  console.log(desde, hasta);
  const handleChange = (e) => {
    if (date === "desde") {
      desdeSetter(e.target.value);
      return;
    }
    hastaSetter(e.target.value);
  };
  return (
    <>
      <input type="date" onChange={handleChange} />
    </>
  );
};

export default InputDate;
