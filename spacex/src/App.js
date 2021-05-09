import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/layout";
import Misiones from "./pages/Misiones";
import Context from "./context";
import { fetchAll } from "./fetch";

function App() {
  const [misiones, setMisiones] = useState([]);
  const [fechaDesde, setFechaDesde] = useState("2008-09-28");
  const [fechaHasta, setFechaHasta] = useState(null);
  const getData = async (filters) => {
    const Misiones = await fetchAll(filters);
    setMisiones(Misiones);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData({ desde: fechaDesde, hasta: fechaHasta });
  }, [fechaDesde, fechaHasta]);

  console.log("render");
  return (
    <div className="App">
      <Context.Provider
        value={{
          fechaDesde,
          setFechaDesde,
          fechaHasta,
          setFechaHasta,
          misiones,
        }}
      >
        <Layout>
          <Misiones />
        </Layout>
      </Context.Provider>
    </div>
  );
}

export default App;
