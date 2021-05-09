import React, { useContext } from "react";
import InputDate from "../components/InputDate";
import Context from "../context";
import Mision from "../components/mision";

const Misiones = () => {
  const [_, __, ___, ____, Misiones] = useContext(Context);
  return (
    <>
      <section>
        <h2>History</h2>
        <div className="dates-wrapper">
          <InputDate date="desde" />
          <InputDate date="hasta" />
        </div>
        <div className="misiones-wrapper">
          {Misiones.map((mision, index) => (
            <Mision mision={mision} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Misiones;
