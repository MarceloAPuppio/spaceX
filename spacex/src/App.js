import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/layout";
import Misiones from "./pages/Misiones";
import Context from "./context";
import { fetchAll } from "./fetch";

function App() {
  const [misiones, setMisiones] = useState(["1"]);
  const [fechaDesde, setFechaDesde] = useState(null);
  const [fechaHasta, setFechaHasta] = useState(null);
  const getData = async (desde, hasta) => {
    const Misiones = await fetchAll(desde, hasta);
    setMisiones(Misiones);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData(fechaDesde, fechaHasta);
  }, [fechaDesde, fechaHasta]);

  return (
    <div className="App">
      <Context.Provider
        value={[fechaDesde, setFechaDesde, fechaHasta, setFechaHasta, misiones]}
      >
        <Layout>
          <Misiones />
        </Layout>
      </Context.Provider>
    </div>
  );
}

export default App;
