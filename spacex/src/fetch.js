const fetchAll = async (filters) => {
  if (!filters) {
    const URL = "https://api.spacexdata.com/v3/history";
    let data = await fetch(URL);
    let misiones = await data.json();
    return misiones;
  }
  const URL = `https://api.spacexdata.com/v3/history/?start=${filters.desde}&end=${filters.hasta}`;
  let data = await fetch(URL);
  let misiones = await data.json();
  console.log(URL);
  return misiones;
};

const getDate = () => {
  let fecha = new Date();
  let anio = fecha.getFullYear();
  let mes =
    fecha.getMonth() + 1 < 10
      ? (fecha.getMonth() + 1).toString().padStart(2, 0)
      : fecha.getMonth() + 1;
  let dia =
    fecha.getDate() < 10
      ? fecha.getDate().toString().padStart(2, 0)
      : fecha.getDate();
  return [anio, mes, dia];
};
// const fetchDate = async (start, end) => {};
export { fetchAll, getDate };
