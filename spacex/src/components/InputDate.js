import React, { useContext, useEffect } from "react";
import Context from "../context";
import { getDate } from "../fetch";

const InputDate = ({ date }) => {
  useEffect(() => {
    const [anio, mes, dia] = getDate();
    document.querySelectorAll('input[type="date"]')[0].value = `2008-09-28`;
    document.querySelectorAll(
      'input[type="date"]'
    )[1].value = `${anio}-${mes}-${dia}`;
    hastaSetter(`${anio}-${mes}-${dia}`);
  }, []);

  const {
    fechaDesde: desde,
    setFechaDesde: desdeSetter,
    fechaHasta: hasta,
    setFechaHasta: hastaSetter,
  } = useContext(Context);
  console.log(desde, hasta);
  const handleChange = (e) => {
    if (date === "desde") {
      desdeSetter(e.target.value);
      return;
    }
    date = new Date();
    hastaSetter(e.target.value);
  };
  return (
    <>
      <input type="date" onChange={handleChange} />
    </>
  );
};

export default InputDate;
