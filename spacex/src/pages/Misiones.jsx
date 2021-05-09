import React, { useContext } from "react";
import InputDate from "../components/InputDate";
import Context from "../context";
import Mision from "../components/mision";

const Misiones = () => {
  const { misiones } = useContext(Context);
  return (
    <>
      <section>
        <h2>History</h2>
        <div className="dates-wrapper">
          <InputDate date="desde" />
          <InputDate date="hasta" />
        </div>
        <div className="misiones-wrapper">
          {misiones.length ? (
            misiones.map((mision, index) => (
              <Mision mision={mision} key={index} />
            ))
          ) : (
            <h1>No hay resultados para las fechas seleccionadas :(</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Misiones;
